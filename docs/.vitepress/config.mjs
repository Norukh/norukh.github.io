import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Nico Fehr | Portfolio',
  description: "Nico Fehr's portfolio and projects",
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],

    ['meta', { name: 'author', content: 'Nico Fehr' }],
    ['meta', { name: 'keywords', content: 'Nico Fehr, Portfolio, Projects' }],
    
    ['meta', { property: 'og:title', content: 'Nico Fehr | Portfolio' }],
    ['meta', { property: 'og:description', content: "Nico Fehr's portfolio and projects" }],
    ['meta', { property: 'og:image', content: '/logo.png' }],
    ['meta', { property: 'og:url', content: 'https://nicofehr.dev' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Nico Fehr | Portfolio' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    
    ['meta', { charset: 'utf-8' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    siteTitle: false,
    logo:  {
      light: '/logo.png',
      dark: '/logo-dark.png',
    },
    logoLink: '/',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Norukh' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/nico-fehr/' },
      { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/4618781/norukh' },
      { icon: 'gitlab', link: 'https://gitlab.ost.ch/nico.fehr' },
    ],

    notFound: {
      code: 'Oh no!',
      title: 'Page not found',
      description: 'Page not found',
    },

    footer: {
      message: 'Made with ❤️',
      copyright: `Copyright © ${new Date().getFullYear()} Nico Fehr`
    }
  }
})
