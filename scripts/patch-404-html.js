/**
 * Render (and similar static hosts) serve /404.html with HTTP 200 when requested
 * directly. Keep the fallback file but discourage indexing.
 */
const fs = require('fs');
const path = require('path');

const build404 = path.join(__dirname, '..', 'build', '404.html');
const robotsMeta = '<meta name="robots" content="noindex, nofollow" />';

if (!fs.existsSync(build404)) {
  console.warn('patch-404-html: build/404.html not found, skipping');
  process.exit(0);
}

let html = fs.readFileSync(build404, 'utf8');
if (!html.includes('name="robots"')) {
  html = html.replace(/<head>/i, `<head>\n    ${robotsMeta}`);
  fs.writeFileSync(build404, html);
  console.log('patch-404-html: added noindex to build/404.html');
}
