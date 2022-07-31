module.exports = {
  "title": "Y",
  "description": "Y",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "直达",
        "icon": "reco-eye",
        items: [
          { text: '博客', link: 'http://dcool.top' },
          { text: '短链接', link: 'http://i.dcool.top' },
          { text: 'wss', link: 'http://wss.dcool.top' },
          { text: '上传', link: 'http://img.dcool.top' },
        ]
      },
      {
        "text": "笔记",
        "icon": "reco-blog",
        "link": "/docs/Note/Docker/2",
      },
      {
        "text": "文档",
        "icon": "reco-document",
        items: [
          { text: 'HTML', link: '/docs/HTML/1' },
          { text: 'Docker', link: '/docs/Docker/2' },
        ]
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "GitHub",
        "icon": "reco-github",
        "link": "https://github.com/Ysail",
      }
    ],
    "sidebar": {
      "/docs/": [
        {
          title: 'Docker',   // 必要的
          path: '/docs/Note/Docker/2',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在 **加入该属性当前栏目可点击
          //collapsable: false, // 可选的, 默认值是 true ==>是否可展开：false：一直开着，true：可展开
          //sidebarDepth: 1,    // 可选的, 默认值是 1
          children: ["/docs/Note/Docker/2"]
      },
      {
          title: 'web',   // 必要的
          path: '/docs/Note/web/web',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在 **加入该属性当前栏目可点击
          //collapsable: false, // 可选的, 默认值是 true ==>是否可展开：false：一直开着，true：可展开
          //sidebarDepth: 2,    // 可选的, 默认值是 1
          children: [
            "/docs/Note/web/web",
          ]
      },
      {
          title: 'HTML',   // 必要的
          path: '**',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在 **加入该属性当前栏目可点击
          //collapsable: false, // 可选的, 默认值是 true ==>是否可展开：false：一直开着，true：可展开
          //sidebarDepth: 3,    // 可选的, 默认值是 1
          children: [
            "/docs/Note/HTML/1",
          ]
      }
      ],
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 3,
        "text": "分类"
      },
    },
    "logo": "/tx.jpg",
    "search": true,
    "searchMaxSuggestions": 10,
    "subSidebar": 'auto',
    "lastUpdated": "Last Updated",
    "author": "",
    "authorAvatar": "/tx.jpg",
    "noFoundPageByTencent": false
  },
  "markdown": {
    "lineNumbers": true
  }
}