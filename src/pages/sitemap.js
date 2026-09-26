import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {Container} from 'react-bootstrap';

const SITE_SECTIONS = [
  {
    title: 'Main',
    links: [
      {label: 'Home', to: '/'},
      {label: 'Creators', to: '/creators'},
      {label: 'Fans', to: '/fans'},
      {label: 'Brands', to: '/brands'},
      {label: 'How it Works', to: '/how-it-works'},
      {label: 'SMS Opt-In', to: '/sms'},
    ],
  },
  {
    title: 'Documentation',
    links: [
      {label: 'Community Docs', to: '/community/intro'},
      {label: 'Creative TV Docs', to: '/creativetv/intro'},
      {label: 'Creative Finance Docs', to: '/finance/intro'},
      {label: 'Whitepaper', to: '/community/resources/whitepaper'},
      {label: 'Roadmap', to: '/community/roadmap'},
    ],
  },
  {
    title: 'Legal',
    links: [
      {label: 'Terms & Conditions', to: '/community/legal/terms-conditions'},
      {label: 'Privacy Policy', to: '/community/legal/privacy-policy'},
      {label: 'Cookie Policy', to: '/community/legal/cookie-policy'},
      {label: 'AML & KYC Policy', to: '/community/legal/aml-kyc'},
      {label: 'Money Services', to: '/community/legal/money-services'},
    ],
  },
  {
    title: 'Community',
    links: [
      {label: 'DAO Community', to: '/community/dao/community'},
      {label: 'DAO Guidelines', to: '/community/dao/guidelines'},
      {label: 'Contributing', to: '/community/contributing/editing-documentation'},
      {label: 'Security', to: '/community/security/risks'},
      {label: 'Blog', href: 'https://blog.creativeplatform.xyz'},
    ],
  },
  {
    title: 'Products',
    links: [
      {label: 'Creative TV', href: 'https://tv.creativeplatform.xyz'},
      {label: 'Finance', href: 'https://finance.creativeplatform.xyz'},
      {label: 'Mixtape', href: 'https://air.creativeplatform.xyz'},
      {label: 'Pixels', href: 'https://create.creativeplatform.xyz'},
      {label: 'Beat Me', href: 'https://beatme.creativeplatform.xyz'},
      {label: 'Books', href: 'https://books.creativeplatform.xyz'},
    ],
  },
];

function SitemapLink({link}) {
  if (link.href) {
    return (
      <li>
        <a href={link.href} target="_blank" rel="noopener noreferrer">
          {link.label}
        </a>
      </li>
    );
  }

  return (
    <li>
      <Link to={link.to}>{link.label}</Link>
    </li>
  );
}

export default function SitemapPage() {
  return (
    <Layout
      title="Sitemap"
      description="Browse all pages on the Creative Platform website.">
      <Container className="margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1>Sitemap</h1>
          <p>
            A complete index of pages on{' '}
            <a href="https://creativeplatform.xyz">creativeplatform.xyz</a>. Search engines
            can also use our{' '}
            <a href="/sitemap.xml">XML sitemap</a>.
          </p>
        </header>

        <div className="row">
          {SITE_SECTIONS.map((section) => (
            <section key={section.title} className="col col--6 margin-bottom--lg">
              <h2>{section.title}</h2>
              <ul>
                {section.links.map((link) => (
                  <SitemapLink key={link.label} link={link} />
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </Layout>
  );
}
