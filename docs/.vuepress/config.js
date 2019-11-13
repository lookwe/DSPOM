module.exports = {
    // base : "https://api.surgemobi.com/",
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', {rel: 'icon', href: `/favicon.png`}]
    ],
    //国际化配置
    locales: {
        // 每个语言对象的键(key)，是语言的访问路径。
        // 然而，一种特例是将 '/' 作为默认语言的访问路径。
        '/': {
            lang: 'en-US', // 这个值会被设置在 <html> 的 lang 属性上
            title: 'DSP User Manual',
            description: 'Next Ads, MaadTech'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'DSP 用户操作手册',
            description: '用户操作手册'
        }
    },
    themeConfig: {
        sidebarDepth: 2,
        displayAllHeaders: true, // 默认值：false
        //searchMaxSuggestions: 10,//调整默认搜索框显示的搜索结果数量：
        //lastUpdated: 'Last Updated', //最后更新时间 string | boolean
        markdown: {
            // markdown-it-anchor 的选项
            anchor: {permalink: false},
            // markdown-it-toc 的选项
            toc: {includeLevel: [1, 2]},
            config: md => {
                // 使用更多的 markdown-it 插件!
                md.use(require('markdown-it-xxx'))
            }
        },
        locales: {
            '/': {
                // text for the language dropdown
                selectText: 'Languages',
                // label for this locale in the language dropdown
                label: 'English',
                nav: [
                    {text: 'Home', link: '/'},
                    {text: 'Personal User', link: '/en/UsersManual/account/Creating Users'},
                    {text: 'Admin', link: '/en/admin/PendingApproval'},
                ],
                sidebar: {
                    // 打开UsersManual主页链接时生成下面这个菜单
                    '/en/UsersManual/': [
                        //多级菜单形式
                        {
                            // 菜单名
                            title: 'Personal User',
                            // 子菜单
                            children: [
                                // ['','']=>[路径,标题]
                                // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                                // 不以 '/' 结尾的就是指向.md文件
                                ['/en/UsersManual/account/Creating Users', 'New user'],
                                ['/en/UsersManual/Dashboard/Dashboard', 'Dashboard'],
                                ['/en/UsersManual/bidder/Campaigns', 'Campaigns'],
                                ['/en/UsersManual/bidder/Creative', 'Creative'],
                                ['/en/UsersManual/bidder/CreativeLibrary', 'Document Favorites'],
                                ['/en/UsersManual/billing/Billing', 'Billing'],
                                ['/en/UsersManual/billing/Invoice', 'Invoice'],
                                ['/en/UsersManual/billing/TransactionHistory', 'TransactionHistory'],
                                ['/en/UsersManual/reports/Reports', 'Reports'],
                                ['/en/UsersManual/reports/Alert', 'Activity Intelligent Monitoring'],
                            ]
                        },
                    ],
                    '/en/admin/':[
                        // 打开Admin主页链接时生成下面这个菜单
                        {
                            // 菜单名
                            title: 'ADMIN',
                            // 子菜单
                            children: [
                                // ['','']=>[路径,标题]
                                // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                                // 不以 '/' 结尾的就是指向.md文件
                                ['/en/admin/PendingApproval', 'PendingApproval'],
                                ['/en/admin/GeneralReport', 'General Report'],
                                ['/en/admin/ManageUsers', 'Manage Users'],
                                ['/en/admin/ManageTransactions', 'Manage Transactions'],
                                ['/en/admin/SiteSettings', 'Settings'],
                                ['/en/admin/EditStyle', 'Style Settings'],
                            ]
                        },
                    ]
                }
            },
            '/zh/': {
                // 语言下拉菜单的展示文本
                selectText: '选择语言',
                // 该语言在下拉菜单中的 label 标签
                label: '简体中文',
                nav: [
                    {text: '主页', link: '/zh/'},
                    {text: '个人用户', link: '/zh/UsersManual/Dashboard/Dashboard'},
                    {text: '管理员', link: '/zh/admin/PendingApproval'},
                ],
                sidebar: {
                    '/zh/UsersManual/': [
                        //多级菜单形式
                        {
                            // 菜单名
                            title: '个人用户',
                            // 子菜单
                            children: [
                                // ['','']=>[路径,标题]
                                // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                                // 不以 '/' 结尾的就是指向.md文件
                                ['/zh/UsersManual/account/Creating Users', '新建用户'],
                                ['/zh/UsersManual/Dashboard/Dashboard', '仪表盘'],
                                ['/zh/UsersManual/bidder/Campaigns', '广告活动'],
                                ['/zh/UsersManual/bidder/Creative', '广告系列'],
                                // ['/zh/UsersManual/bidder/FilterList', '过滤列表管理器'],
                                ['/zh/UsersManual/bidder/CreativeLibrary', '文件收藏夹'],
                                ['/zh/UsersManual/billing/Billing', '账务'],
                                ['/zh/UsersManual/billing/Invoice', '发票'],
                                ['/zh/UsersManual/billing/TransactionHistory', '历史交易纪录'],
                                ['/zh/UsersManual/reports/Reports', '报表'],
                                ['/zh/UsersManual/reports/Alert', '活动智能监控'],
                            ]
                        },

                    ],
                    '/zh/admin/': [
                        // 打开Admin主页链接时生成下面这个菜单
                        {
                            // 菜单名
                            title: '管理员',
                            // 子菜单
                            children: [
                                // ['','']=>[路径,标题]
                                // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                                // 不以 '/' 结尾的就是指向.md文件
                                ['/zh/admin/PendingApproval', '待审核'],
                                ['/zh/admin/GeneralReport', '总报表'],
                                ['/zh/admin/ManageUsers', '管理用户'],
                                ['/zh/admin/ManageTransactions', '管理交易'],
                                ['/zh/admin/SiteSettings', '设置'],
                                ['/zh/admin/EditStyle', '主题设置'],
                            ]
                        },
                    ],
                }
            }
        }
    },
}
