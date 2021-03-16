module.exports = {
    // base: '/',
    title: "雲端教具室",
    description: "線上企管培訓教學活動應用平台",
    dest: "dist",
    port: 7171,
    theme: "reco",
    themeConfig: {
        type: 'index',
        noFoundPageByTencent: false,
        authorAvatar: '/img/head.jpg',
    },
    // themeConfig: {
    //     themePicker: false,
    //     authorAvatar: '/img/head2.jpg',
    //     nav: [{
    //         text: "主頁",
    //         link: "/",
    //         icon: "reco-home"
    //     },
    //     // {
    //     //     text: "沃草在行動",
    //     //     icon: "reco-other",
    //     //     location: 2,
    //     //     items: [
    //     //         {
    //     //             text: "沃草 x 進擊",
    //     //             link: "/action/execute/",
    //     //         },
    //     //         {
    //     //             text: "沃草 x 應用",
    //     //             link: "/action/application/",
    //     //         },
    //     //     ]
    //     // },
    //     // {
    //     //     text: "沃草寫筆記",
    //     //     icon: "reco-suggestion",
    //     //     location: 3,
    //     //     items: [
    //     //         {
    //     //             text: "JavaScript",
    //     //             link: "/notes/javaScript/",
    //     //         },
    //     //         {
    //     //             text: "Html+CSS",
    //     //             link: "/notes/htmlCss/",
    //     //         },
    //     //     ]
    //     // },
    //     // {
    //     //     text: "雲端教具室",
    //     //     link: "/cloud/",
    //     //     icon: "reco-document",
    //     //     // items: [
    //     //     //     {
    //     //     //         text: "初次使用",
    //     //     //         link: "/cloud/system/",
    //     //     //     },
    //     //     //     {
    //     //     //         text: "默契報數",
    //     //     //         link: "/cloud/syncNumber/",
    //     //     //     },
    //     //     // ]
    //     // },

    //     // {
    //     //     text: "時間軸",
    //     //     link: "/timeLine/",
    //     //     icon: "reco-date"
    //     // },
    //     // {
    //     //     text: "About",
    //     //     link: "/views/about/aboutMe",
    //     //     icon: "reco-account"
    //     // },
    //         // {
    //         //     text: "連結",
    //         //     icon: "reco-message",
    //         //     items: [{
    //         //         text: "GitHub",
    //         //         link: "https://github.com/faraway520",
    //         //         icon: "reco-github"
    //         //     },]
    //         // }
    //     ],
    //     type: "blog",
    //     huawei: false,
    //     blogConfig: {
    //         category: {
    //             location: 2,
    //             text: "沃草在行動",
    //         },
    //         // tag: {
    //         //     location: 4,
    //         //     text: "標籤雲"
    //         // },
    //     },
    //     // friendLink: [
    //     //     {
    //     //         title: 'vuepress-theme-reco',
    //     //         desc: 'A simple and beautiful vuepress Blog & Doc theme.',
    //     //         logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
    //     //         link: 'https://vuepress-theme-reco.recoluan.com'
    //     //     },
    //     //     {
    //     //         title: '午后南杂',
    //     //         desc: 'Enjoy when you can, and endure when you must.',
    //     //         email: 'recoluan@qq.com',
    //     //         link: 'https://www.recoluan.com'
    //     //     },
    //     //     // ...
    //     // ],
    //     logo: "/img/logo.png",
    //     search: true,
    //     searchMaxSuggestions: 10,
    //     subSidebar: "auto",
    //     lastUpdated: "Last Updated",
    //     author: "輕聲歌唱",
    //     // "record": "xxxx",
    //     startYear: "2019",
    //     locales: {
    //         '/': {
    //             recoLocales: {
    //                 homeBlog: {
    //                     article: "文章",
    //                     tag: "標籤雲",
    //                     category: "沃草在行動", // 默认 分类
    //                     // friendLink: "連結"
    //                 },
    //                 pagation: {
    //                     prev: '上一頁',
    //                     next: '下一頁',
    //                     go: '前往',
    //                     jump: '跳轉至'
    //                 }
    //             }
    //         }
    //     },
    //     valineConfig: {
    //         appId: 'QEn8gFOdK5BnyKMHWXyIui2J-MdYXbMMI',// your appId
    //         appKey: 'n3hxWm0UbVwl6wEDVJ2QOxhu', // your appKey
    //         showComment: false,
    //     },
    //     noFoundPageByTencent: false,
    // },
    markdown: {
        lineNumbers: true
    },
    // component: ['Comments/AccessNumber'],
    // plugins: [
    //     [
    //         '@vuepress/google-analytics',
    //         {
    //             'ga': 'UA-155226051-1'
    //         }
    //     ],
    //     ['@vuepress-reco/kan-ban-niang',
    //         {
    //             theme: ["blackCat"],
    //             clean: true,
    //         }
    //     ],
    //     ["vuepress-plugin-auto-sidebar",
    //         {
    //             collapseList: [
    //                 "/cloud/"
    //             ],
    //             sort: "desc",
    //             titleMap: {
    //                 javaScript: "沃草寫筆記",
    //                 htmlCss: "沃草寫筆記",
    //                 about: "關於我",
    //                 execute: "沃草 x 進擊",
    //                 application: "沃草 x 應用",
    //                 cloud: "雲端教具室"
    //             },
    //         }
    //     ],
    //     // [
    //     //     "@vuepress-yard/vuepress-plugin-window",
    //     //     {
    //     //         title: '全站消息',
    //     //         contentInfo: {
    //     //             title: "加入 LINE 好友",
    //     //             imgUrl: 'https://qr-official.line.me/sid/M/974uvkig.png',
    //     //             needImg: false,
    //     //             content: '可收到最新動態通知唷',
    //     //             contentStyle: {
    //     //                 textAlign: 'center',
    //     //                 marginTop: "5px",
    //     //                 width: "230",
    //     //                 padding: "0"
    //     //             }
    //     //         },
    //     //         // delayMount: 20000,
    //     //         closeOnce: true,
    //     //         windowStyle: {
    //     //             right: '15px',
    //     //             top: '70px',
    //     //             width: '260px',
    //     //         },
    //     //         bottomInfo: {
    //     //             btnText: '點擊加入',
    //     //             linkTo: 'https://lin.ee/jmSr4XB'
    //     //         }
    //     //     }
    //     // ],
    // ],
    locales: {
        '/': {
            lang: 'zh-TW',
        }
    },

}