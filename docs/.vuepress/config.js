const { description } = require('../../package')

module.exports = {
  title: 'Emy',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    search: false,
    repo: "farmanp/emyLandingPage",
    repoLabel:"Github",
    editLinks: false,
    docsDir: "docs",
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: "Home", 
        link: "/"
      },
      {
        text: "App",
        link: "/guide/",
      },
      {
        text: "Research",
        link: "/config/"
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
