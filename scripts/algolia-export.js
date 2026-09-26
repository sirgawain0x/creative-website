#!/usr/bin/env node
/**
 * Algolia Search Export Script
 *
 * Generates a JSON file for manual upload to Algolia when the no-code crawler
 * isn't working. Compatible with Docusaurus DocSearch format.
 *
 * Usage: node scripts/algolia-export.js
 * Output: algolia-records.json
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://creativeplatform.xyz';
const OUTPUT_FILE = path.join(__dirname, '..', 'algolia-records.json');

// Static pages metadata (React components - not in markdown)
const STATIC_PAGES = [
  {
    path: '/',
    title: 'Creative - The Stage is YOURS',
    content: 'The Web3 platform for creators, fans and brands. Creative TV, Creative Finance, blockchain platform, independent creators, DeFi, P2E incentives.',
    type: 'page',
  },
  {
    path: '/creators',
    title: 'Creators - Own Your Craft, Own Your IP',
    content: 'At Creative TV, you keep 100% of your revenue and total control over your intellectual property. Stop Being a Product. Start Being a Platform. Onchain tools to turn your art into an ecosystem.',
    type: 'page',
  },
  {
    path: '/fans',
    title: 'Fans - From Viewer to Investor',
    content: 'The Creative platform blurs the line between audience and owner. Support the artists you love while utilizing institutional-grade tools to grow your onchain portfolio. Don\'t Just Watch the Future. Own a Piece of It.',
    type: 'page',
  },
  {
    path: '/brands',
    title: 'Brands - Authentic Connection at Scale',
    content: 'Move past ads and into alliances. Partner with the world\'s most innovative onchain creators in a transparent, decentralized environment. Advertise Differently. Collaborate Deeply.',
    type: 'page',
  },
  {
    path: '/how-it-works',
    title: 'How it Works',
    content: 'Learn how Creative platform works for creators, fans and brands. Web3 platform, blockchain, DeFi, creator economy.',
    type: 'page',
  },
];

/**
 * Parse frontmatter and content from markdown file
 */
function parseMarkdown(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);

  let frontmatter = {};
  let body = content;

  if (match) {
    const [, frontmatterStr, bodyStr] = match;
    body = bodyStr;
    frontmatterStr.split('\n').forEach((line) => {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 0) {
        const key = line.slice(0, colonIndex).trim();
        let value = line.slice(colonIndex + 1).trim();
        if (value.startsWith('[') && value.endsWith(']')) {
          value = value.slice(1, -1).split(',').map((s) => s.trim());
        } else if (value.startsWith('"') && value.endsWith('"')) {
          value = value.slice(1, -1);
        } else if (value.startsWith("'") && value.endsWith("'")) {
          value = value.slice(1, -1);
        }
        frontmatter[key] = value;
      }
    });
  }

  return { frontmatter, body };
}

/**
 * Strip markdown and HTML formatting for plain text content
 */
function stripMarkdown(text) {
  return text
    .replace(/<[^>]+>/g, '') // HTML tags
    .replace(/!\[.*?\]\(.*?\)/g, '') // images
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // links
    .replace(/\*\*([^*]+)\*\*/g, '$1') // bold
    .replace(/\*([^*]+)\*/g, '$1') // italic
    .replace(/`([^`]+)`/g, '$1') // code
    .replace(/^#+\s*/gm, '') // headings
    .replace(/^\s*[-*+]\s+/gm, '') // list items
    .replace(/^\s*\d+\.\s+/gm, '') // numbered lists
    .replace(/\|.*\|/g, '') // table rows
    .replace(/<!--[\s\S]*?-->/g, '') // HTML comments
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract headings and content blocks from markdown body
 */
function extractSections(body) {
  const sections = [];
  const lines = body.split('\n');
  const headingRegex = /^(#{1,6})\s+(.+)$/;

  let currentHeadings = { lvl0: '', lvl1: '', lvl2: '', lvl3: '', lvl4: '', lvl5: '' };
  let currentContent = [];

  const flushContent = () => {
    const content = stripMarkdown(currentContent.join('\n'));
    if (content.length > 0) {
      sections.push({
        ...currentHeadings,
        content,
      });
    }
    currentContent = [];
  };

  for (const line of lines) {
    const headingMatch = line.match(headingRegex);
    if (headingMatch) {
      flushContent();
      const [, hashes, title] = headingMatch;
      const level = hashes.length;
      const cleanTitle = stripMarkdown(title);

      currentHeadings[`lvl${level - 1}`] = cleanTitle;
      for (let i = level; i < 6; i++) {
        currentHeadings[`lvl${i}`] = '';
      }
    } else if (line.trim() && !line.startsWith('---')) {
      currentContent.push(line);
    }
  }
  flushContent();

  return sections;
}

/**
 * Convert doc path to Docusaurus URL
 * @param {string} filePath - Full path to markdown file
 * @param {string} basePath - Base directory (e.g. community, creativetv)
 * @param {string} routeBasePath - Docusaurus route (e.g. community, creativetv)
 * @param {object} frontmatter - Parsed frontmatter
 */
function docPathToUrl(filePath, basePath, routeBasePath, frontmatter = {}) {
  const relativePath = path.relative(basePath, filePath);
  const dir = path.dirname(relativePath);
  const basename = path.basename(relativePath, '.md');

  if (basename === 'index') {
    const urlPath = dir === '.' ? `/${routeBasePath}` : `/${routeBasePath}/${dir}`;
    return urlPath.replace(/\\/g, '/');
  }

  const slug = frontmatter.slug || frontmatter.id || basename;
  const urlPath = dir === '.' ? `/${routeBasePath}/${slug}` : `/${routeBasePath}/${dir}/${slug}`;
  return urlPath.replace(/\\/g, '/').replace(/\/\//g, '/');
}

/**
 * Convert blog path to Docusaurus URL
 */
function blogPathToUrl(filePath, frontmatter = {}) {
  const dir = path.dirname(filePath);
  const basename = path.basename(filePath, '.md');
  const dirBasename = path.basename(dir);

  const slug =
    frontmatter.slug ||
    (basename === 'index' ? dirBasename.replace(/^\d{4}-\d{2}-\d{2}-/, '') : basename.replace(/^\d{4}-\d{2}-\d{2}-/, ''));
  return `/blog/${slug}`;
}

/**
 * Generate unique objectID for Algolia
 */
function generateObjectId(url, index = 0) {
  return index === 0 ? url : `${url}#${index}`;
}

/**
 * Create Algolia record
 */
function createRecord({ objectID, url, content, lvl0, lvl1, lvl2, lvl3, lvl4, lvl5, type }) {
  const record = {
    objectID,
    url: `${BASE_URL}${url}`,
    content,
    lvl0: lvl0 || 'Documentation',
    lvl1: lvl1 || '',
    lvl2: lvl2 || '',
    lvl3: lvl3 || '',
    lvl4: lvl4 || '',
    lvl5: lvl5 || '',
    type: type || 'doc',
  };
  return record;
}

/**
 * Process a markdown file and return Algolia records
 */
function processDocFile(filePath, basePath, routeBasePath, type = 'doc') {
  const { frontmatter, body } = parseMarkdown(filePath);
  const title = frontmatter.title || path.basename(filePath, '.md');

  const url =
    type === 'blog'
      ? blogPathToUrl(filePath, frontmatter)
      : docPathToUrl(filePath, basePath, routeBasePath, frontmatter);

  const sections = extractSections(body);

  if (sections.length === 0) {
    const content = stripMarkdown(body);
    if (content) {
      return [
        createRecord({
          objectID: url,
          url,
          content,
          lvl0: title,
          type,
        }),
      ];
    }
  }

  return sections.map((section, index) =>
    createRecord({
      objectID: generateObjectId(url, index),
      url,
      content: section.content,
      lvl0: section.lvl0 || title,
      lvl1: section.lvl1,
      lvl2: section.lvl2,
      lvl3: section.lvl3,
      lvl4: section.lvl4,
      lvl5: section.lvl5,
      type,
    })
  );
}

/**
 * Recursively find all markdown files
 */
function findMarkdownFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      findMarkdownFiles(fullPath, files);
    } else if (entry.name.endsWith('.md') && entry.name !== 'README.md') {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Main export function
 */
function exportAlgoliaRecords() {
  const projectRoot = path.join(__dirname, '..');
  const records = [];

  // Process Community docs
  const communityPath = path.join(projectRoot, 'community');
  findMarkdownFiles(communityPath).forEach((filePath) => {
    records.push(...processDocFile(filePath, communityPath, 'community', 'doc'));
  });

  // Process Creative TV docs
  const creativetvPath = path.join(projectRoot, 'creativetv');
  findMarkdownFiles(creativetvPath).forEach((filePath) => {
    records.push(...processDocFile(filePath, creativetvPath, 'creativetv', 'doc'));
  });

  // Process Creative Finance docs
  const creativebankPath = path.join(projectRoot, 'creativebank');
  findMarkdownFiles(creativebankPath).forEach((filePath) => {
    records.push(...processDocFile(filePath, creativebankPath, 'finance', 'doc'));
  });

  // Process Blog posts
  const blogPath = path.join(projectRoot, 'blog');
  findMarkdownFiles(blogPath).forEach((filePath) => {
    records.push(...processDocFile(filePath, blogPath, 'blog'));
  });

  // Add static pages
  STATIC_PAGES.forEach((page) => {
    records.push(
      createRecord({
        objectID: page.path || '/',
        url: page.path || '/',
        content: page.content,
        lvl0: page.title,
        type: page.type,
      })
    );
  });

  // Filter out records with empty content
  const filteredRecords = records.filter((r) => r.content && r.content.length > 0);

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(filteredRecords, null, 2), 'utf-8');
  console.log(`✅ Exported ${filteredRecords.length} records to ${OUTPUT_FILE}`);
  console.log('\nTo upload to Algolia:');
  console.log('1. Go to https://dashboard.algolia.com');
  console.log('2. Select your app (L057IAF2ES) and index (creative)');
  console.log('3. Navigate to "Search" > "Index" > "Import"');
  console.log('4. Upload algolia-records.json');
  console.log('\nOr use the Algolia API/CLI for programmatic upload.');
}

exportAlgoliaRecords();
