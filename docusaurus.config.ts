import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SEDManager',
  tagline: 'Manage your self-encrypting drives',
  favicon: 'img/logo.ico',

  url: 'https://petiaccja.github.io',
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
          label: 'Background',
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
          href: 'https://github.com/petiaccja/sed-manager-rs/releases',
          label: 'Install',
          position: 'left',
        },
        {
          href: 'https://github.com/petiaccja/sed-manager-pba/releases',
          label: 'PBA',
          position: 'left',
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
      copyright: `Copyright © ${new Date().getFullYear()} Péter Kardos`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
