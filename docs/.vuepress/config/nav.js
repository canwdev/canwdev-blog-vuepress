// nav
module.exports = [
  { text: '🖋️ 博客', link: '/' },
  {
    text: '离线笔记',
    link: '/notes/',
    items: [
      { text: '🎓 笔记', link: '/notes/' },
      { text: '📓 手册', link: '/manual/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
