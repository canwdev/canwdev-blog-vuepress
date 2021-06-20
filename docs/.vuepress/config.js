const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  theme: 'vdoing', // 使用npm包主题
  // theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: 'Canwdev\'s Blog',
      description: '记录学习过程'
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'Notes · Offline Notes',
    //   description: 'Explore everything about the world'
    // }
  },
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
}
