export default {
  title: 'Minimal CSS',
  description: 'A SCSS theme documentation site.',
  base: '/minimal-css-utility/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started/introduction' },
      {
        text: 'Github',
        link: 'https://github.com/aghontpi/minimal-css-utility/',
      },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Breakpoints', link: '/getting-started/breakpoints' },
          { text: 'CSS Reset', link: '/getting-started/reset' },
        ],
      },
      {
        text: 'Layout',
        items: [{ text: 'Grid', link: '/layout/grid' }],
      },
      {
        text: 'Utilities',
        items: [
          { text: 'Borders', link: '/utilities/borders' },
          { text: 'Display', link: '/utilities/display' },
          { text: 'Flexbox', link: '/utilities/flexbox' },
          { text: 'Interactivity', link: '/utilities/interactivity' },
          { text: 'Overflow', link: '/utilities/overflow' },
          { text: 'Positioning', link: '/utilities/positioning' },
          { text: 'Shadows', link: '/utilities/shadows' },
          { text: 'Sizing', link: '/utilities/sizing' },
          { text: 'Spacing', link: '/utilities/spacing' },
          { text: 'Typography', link: '/utilities/typography' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
  },
};
