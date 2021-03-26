const path = require("path")
const {sidebarHelper, genSidebar} = require('./utils')
const isProd = process.env.NODE_ENV === 'production'

const config = {
  base: '/',  // 生产环境文件路径
  head: [
    ['link', { rel: 'icon', href: `/favicon.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
  ],
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '离线笔记 · OfflineNotes',
      description: '记录学习过程'
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'Notes · Offline Notes',
    //   description: 'Explore everything about the world'
    // }
  },
  themeConfig: {
    // search: false,
    logo: '/favicon.png',
    repo: 'https://github.com/canwdev/notes-vuepress',
    editLinks: true,
    repoLabel: '源码',
    docsDir: 'docs',
    editLinkText: '查看本页源码',
    lastUpdated: '更新时间',
    // 搜索出的结果无法跳转到锚点，所以禁用
    // algolia: {
    //   apiKey: 'f2c6d2052ea4e5586376137462ef75a0',
    //   indexName: 'canwdev'
    // },
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        nav: [
          {text: '🎓 学习', link: '/notes/'},
          {text: '📓 手册', link: '/manual/'},
          {text: '🖋️ 博客', link: '/blog/'},
        ],
      },
      // '/en/': {
      //   selectText: 'Languages',
      //   label: 'English',
      //   nav: [
      //     {text: 'Blog', link: '###'},
      //   ],
      // }
    },

    sidebar: {
      '/blog/': [
        {
          title: '博客',
          sidebarDepth: 2,
          children: sidebarHelper.getChildren('/blog/')
        }
      ],
      '/notes/': [
        // ['', 'Index'],
        {
          title: '学习笔记',
          sidebarDepth: 2,
          children: sidebarHelper.getChildren('/notes/')
        },
        {
          title: 'JavaScript 高程笔记',
          sidebarDepth: 2,
          children: sidebarHelper.getChildren('/notes/pro-js-for-web-dev-note/')
        }
      ],
      '/manual/': [
        {
          title: '手册',
          sidebarDepth: 2,
          children: sidebarHelper.getChildren('/manual/')
        }
      ],

      // fallback
      '/': [
        ['', '首页'],
      ]
    }


  },
  plugins: {
    '@vuepress/last-updated': {
      // https://www.wkii.net/Tech/use-vuepress-push-blog.html
      transformer: (timestamp) => {
        return (new Date(timestamp)).toUTCString()
      }
    },
    '@vuepress/medium-zoom': {
      options: {
        scrollOffset: 200
      }
    },
    '@vuepress/search': {
      searchMaxSuggestions: 100
    },
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用！",
        buttonText: "刷新"
      }
    },
    'sitemap': {
      hostname: 'https://canwdev.github.io'
    },
    // 'vuepress-plugin-mathjax': {}
  },
  markdown: {
    lineNumbers: false
  }
}

if (isProd) {
  config.plugins['@vuepress/google-analytics'] = {
    'ga': 'UA-168127864-1'
  }
}

module.exports = config
