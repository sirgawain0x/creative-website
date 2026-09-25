// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Creative',
  tagline: 'The Stage is YOURS',
  url: 'https://creativeplatform.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  favicon: 'img/creative-icon-header.ico',
  organizationName: 'g2entgroup', // Usually your GitHub org/user name.
  projectName: 'creative-website', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'creativetv',
          routeBasePath: 'creativetv',
          sidebarPath: require.resolve('./sidebarsCreativetv.js'),
          editUrl: 'https://github.com/g2entgroup/creative-website/',
          sidebarCollapsible: true,
        },
        blog: {

        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**', '/markdown-page', '/search'],
          filename: 'sitemap.xml',
          createSitemapItems: async ({siteConfig, routes, defaultCreateSitemapItems}) => {
            const items = await defaultCreateSitemapItems({siteConfig, routes});
            const highPriority = ['/', '/creators', '/fans', '/brands', '/how-it-works'];
            const mediumPriority = ['/community/intro', '/creativetv/intro', '/finance/intro', '/sitemap'];

            return items.map((item) => {
              const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';

              if (highPriority.includes(path)) {
                return {...item, priority: 1.0};
              }
              if (mediumPriority.includes(path)) {
                return {...item, priority: 0.8};
              }
              if (path.startsWith('/community/legal')) {
                return {...item, priority: 0.6, changefreq: 'monthly'};
              }
              return item;
            });
          },
        },
        gtag: {
          trackingID: 'G-JYLMMFQ9L0',
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'creativebank',
        path: 'creativebank',
        routeBasePath: 'finance',
        sidebarPath: require.resolve('./sidebarsCreativebank.js'),
        editUrl: 'https://github.com/g2entgroup/creative-website/',
        sidebarCollapsible: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        editUrl: 'https://github.com/g2entgroup/creative-website/',
        sidebarCollapsible: true,
      },
    ],
    function reorderNavbarPlugin() {
      return {
        name: 'reorder-navbar',
        getClientModules() {
          return [require.resolve('./src/client-modules/reorderNavbar.js')];
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      image: 'img/mocs/CREATIVE_products.png',
      algolia: {
        // The application ID provided by Algolia
        appId: 'L057IAF2ES',
  
        // Public API key: it is safe to commit it
        apiKey: '2b26fab9cd7ce56b126b883282923890',
  
        indexName: 'creative',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.xyz|domain\\.xyz',
  
        // Optional: Algolia search parameters
        searchParameters: {},
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Creative Platform for creators, fans and brands.<strong><a target="_blank" rel="noopener noreferrer" href="https://tv.creativeplatform.xyz"> Launch Creative TV</a></strong>',
        backgroundColor: '#2B1A20',
        textColor: '#52F761',
        isCloseable: true,
      },
      navbar: {
        title: 'CREATIVE',
        logo: {
          alt: 'Creative Logo',
          src: 'img/Creative_logo-200.svg',
        },
        items: [
          {
            to: '/creators',
            label: 'Creators',
            position: 'left',
          },
          {
            to: '/fans',
            label: 'Fans',
            position: 'left',
          },
          {
            to: '/brands',
            label: 'Brands',
            position: 'left',
          },
          {
            to: '/how-it-works',
            label: 'How it Works',
            position: 'left',
          },
          {
            href: 'https://news.creativeplatform.xyz/subscribe',
            label: 'News',
            position: 'right',
          },
          {
            href: 'https://open.spotify.com/show/4zAsBnJwZKquxvI7oPqRam?si=3bcceebea4614195',
            label: 'Podcast',
            position: 'right',
          },
          {
            type: 'dropdown',
            label: 'Creative Products',
            position: 'right',
            items: [
              {
                href: "https://tv.creativeplatform.xyz",
                label: "TV",
              },
              {
                href: "https://finance.creativeplatform.xyz",
                label: "Finance",
              },
              {
                href: "https://air.creativeplatform.xyz",
                label: "Mixtape",
              },
              {
                href: "https://create.creativeplatform.xyz",
                label: "Pixels",
              },
              {
                href: "https://beatme.creativeplatform.xyz",
                label: "Beat Me",
              },
              {
                href: "https://books.creativeplatform.xyz",
                label: "Books",
              },
              // {
              //   href: "https://app.creativeplatform.xyz",
              //   label: "Terminal",
              // }
            ],
          },
          {
            type: 'dropdown',
            label: 'Docs',
            position: 'right',
            items: [
              {
                label: 'Community Docs',
                to: '/community/intro',
              },
              {
                label: 'Whitepaper',
                to: '/community/resources/whitepaper',
              },
              {
                label: 'Terms & Conditions',
                to: '/community/legal/terms-conditions',
              },
            ],
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Community Docs',
                to: '/community/intro',
              },
              {
                label: 'Creative TV Docs',
                to: '/creativetv/intro',
              },
              {
                label: 'Creative Finance Docs',
                to: '/finance/intro',
              },
              {
                label: 'Whitepaper',
                to: '/community/resources/whitepaper',
              },
              {
                label: 'Blog',
                href: 'https://blog.creativeplatform.xyz',
              },
              {
                label: 'Sitemap',
                to: '/sitemap',
              },
              {
                href: 'https://github.com/creativeplatform',
                label: 'GitHub',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Farcaster',
                href: 'https://farcaster.xyz/thecreative.eth',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/creativecrtv',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/servers/creative-779364937503604777',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+PaiZoO2ojAAyOGRh',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms & Conditions',
                to: '/community/legal/terms-conditions',
              },
              {
                label: 'Privacy Policy',
                to: '/community/legal/privacy-policy',
              },
              {
                label: 'SMS Opt-In',
                to: '/sms',
              },
              {
                label: 'Cookie Policy',
                to: '/community/legal/cookie-policy',
              },
              {
                label: 'AML & KYC Policy',
                to: '/community/legal/aml-kyc',
              },
            ],
          },
        ],
        logo: {
          alt: "Creative logo",
          src: "img/Creative_logo-200.svg",
          width: 60,
          height: 51,
        },
        copyright: `Community &amp; governance by Creative Organization DAO LLC · Software by Creative Platform, Inc.<br />Copyright © ${new Date().getFullYear()} Creative Organization DAO LLC and Creative Platform, Inc.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
    },
};

module.exports = config;
