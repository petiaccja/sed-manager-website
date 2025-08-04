import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SEDManager',
  tagline: 'Set up your self-encrypting drives',
  favicon: 'img/logo.ico',

  url: 'https://sedmanager.app',
  baseUrl: '/',
  organizationName: 'petiaccja',
  projectName: 'sed-manager-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        pages: {
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        }
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'SEDManager',
      logo: {
        alt: 'SEDManager Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'introToSEDs',
          position: 'left',
          label: 'Overview',
        },
        {
          type: 'docSidebar',
          sidebarId: 'usingSEDManager',
          position: 'left',
          label: 'Usage',
        },
        {
          to: 'screenshots',
          position: 'left',
          label: 'Screenshots',
        },
        {
          to: 'pricing',
          position: 'left',
          label: 'Pricing',
        },
        {
          to: 'downloads',
          position: 'left',
          label: 'Downloads',
        },
        {
          href: 'https://github.com/petiaccja/sed-manager-rs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Feedback',
              to: 'https://github.com/petiaccja/sed-manager-rs/issues',
            },
            {
              label: 'Ask a question',
              to: 'https://github.com/petiaccja/sed-manager-rs/discussions',
            },
          ],
        },
        {
          title: 'Source code',
          items: [
            {
              label: 'Application',
              to: 'https://github.com/petiaccja/sed-manager-rs',
            },
            {
              label: 'PBA',
              to: 'https://github.com/petiaccja/sed-manager-pba',
            },
            {
              label: 'Website',
              to: 'https://github.com/petiaccja/sed-manager-website',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'License agreement',
              to: 'https://github.com/petiaccja/sed-manager-rs/blob/master/LICENSE.md',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Péter Kardos <span style="opacity:0.67;">| Built with Docusaurus<span>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
