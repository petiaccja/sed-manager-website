import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const sidebars: SidebarsConfig = {
  introToSEDs: [
    'background/seds',
    'background/tcg_specs',
  ],
  usingSEDManager: [
    'usage/introduction',
    {
      type: 'category',
      label: 'Configuring devices',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'usage/configuration/take_ownership',
        'usage/configuration/activate_locking',
        'usage/configuration/edit_ranges',
        'usage/configuration/edit_users',
        'usage/configuration/edit_permissions',
        'usage/configuration/shadow_mbr',
        'usage/configuration/revert',
      ],
    },
    'usage/troubleshooting',
  ]
};

export default sidebars;
