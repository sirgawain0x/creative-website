/**
 * Legacy /docs URL redirects → /community/* (post-migration, Jan 2026).
 *
 * Mapping is derived from git history (commit before 68be303) and current
 * community content: each former docs/*.md slug maps 1:1 except
 * security/audits and security/bounties (removed as docs in 8a73102) map to
 * /community/security/risks; static HTML at /community/security/audits|bounties
 * remains for bookmarks only.
 */

const DOC_VERSIONS = [
  '1.0.2',
  '1.0.3',
  '1.0.4',
  '1.0.5',
  '1.0.6',
  '1.0.7',
  '1.0.8',
  '1.0.9',
];

/** Former doc slugs removed from community docs; no Docusaurus route to target. */
const LEGACY_DOCS_REDIRECT_TO_RISKS = [
  '/security/audits',
  '/security/bounties',
];

/**
 * For each /community/* doc route, return legacy /docs URLs that should redirect here.
 * @param {string} existingPath
 * @returns {string[] | undefined}
 */
function createLegacyDocsRedirects(existingPath) {
  if (!existingPath.startsWith('/community/')) {
    return undefined;
  }

  const suffix = existingPath.slice('/community'.length) || '/intro';
  const legacy = [`/docs${suffix}`, `/docs/next${suffix}`];
  for (const version of DOC_VERSIONS) {
    legacy.push(`/docs/${version}${suffix}`);
  }
  return legacy;
}

/**
 * Explicit redirects for static-only community paths and bare /docs roots.
 * @returns {import('@docusaurus/plugin-client-redirects').RedirectRule[]}
 */
function staticLegacyDocsRedirects() {
  const rules = [
    {from: '/docs', to: '/community/intro'},
    {from: '/docs/next', to: '/community/intro'},
    ...DOC_VERSIONS.map((version) => ({
      from: `/docs/${version}`,
      to: '/community/intro',
    })),
  ];

  for (const suffix of LEGACY_DOCS_REDIRECT_TO_RISKS) {
    rules.push(
      {from: `/docs${suffix}`, to: '/community/security/risks'},
      {from: `/docs/next${suffix}`, to: '/community/security/risks'},
      ...DOC_VERSIONS.map((version) => ({
        from: `/docs/${version}${suffix}`,
        to: '/community/security/risks',
      })),
    );
  }

  return rules;
}

module.exports = {
  DOC_VERSIONS,
  LEGACY_DOCS_REDIRECT_TO_RISKS,
  createLegacyDocsRedirects,
  staticLegacyDocsRedirects,
};
