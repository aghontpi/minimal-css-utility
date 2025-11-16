export default {
  title: 'Minimal CSS',
  description: 'A SCSS theme documentation site.',
  base: "/minimal-css-utility/",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/getting-started/introduction' },
      { text: 'Github', link: 'https://github.com/aghontpi/minimal-css-utility/' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/getting-started/introduction' },
          { text: 'Breakpoints', link: '/getting-started/breakpoints' },
          { text: 'CSS Reset', link: '/getting-started/reset' }
        ]
      },
      {
        text: 'Layout',
        items: [
          { text: 'Grid', link: '/layout/grid' },
        ]
      },
      {
        text: 'Utilities',
        items: [
          { text: 'Spacing', link: '/utilities/spacing' },
          { text: 'Display', link: '/utilities/display' },
          { text: 'Flexbox', link: '/utilities/flexbox' },
          { text: 'Sizing', link: '/utilities/sizing' },
          { text: 'Typography', link: '/utilities/typography' },
        ]
      }
    ],
    search: {
      provider: 'local'
    }
  }
}
