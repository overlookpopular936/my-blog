import { defineConfig } from "vitepress";
import AutoNav from 'vite-plugin-vitepress-auto-nav'
import { groupIconMdPlugin } from 'vitepress-plugin-group-icons'
import { DefaultTheme } from "vitepress";
import { version } from '../../package.json'
import UnoCSS from "unocss/vite";
import Components from "unplugin-vue-components/dist/vite";
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'

const frontEnd: DefaultTheme.NavItemWithLink[] = [
  {
    text: '前端基础',
    link: '/frontend/',
  },
  {
    text: 'JavaScript',
    link: '/frontend/javascript/',
  },
  {
    text: 'CSS',
    link: '/frontend/css/',
  },
  {
    text: 'Vue',
    link: '/frontend/vue/',
  }
]

const networkDevice: DefaultTheme.NavItemWithLink[] = [
  {
    text: '网络设备',
    link: '/network/device/',
  },
  {
    text: '网线制作',
    link: '/network/device/cable',
  },
  {
    text: '路由器配置',
    link: '/network/device/router/',
  },
  {
    text: '交换机配置',
    link: '/network/device/switch/',
  }
]

const networkSoftware: DefaultTheme.NavItemWithLink[] = [
  {
    text: '网络软配置',
    link: '/network/software/',
  },
  {
    text: 'linux基础',
    link: '/network/software/linux',
  },
  {
    text: 'smb服务配置',
    link: '/network/software/smb',
  },
  {
    text: 'DDNS与内网穿透',
    link: '/network/software/ddns',
  },
  {
    text: 'DDNS实战-部署RTS服务端',
    link: '/network/software/rts',
  }
]

const networkConfig: DefaultTheme.NavItemWithLink[] = [...networkDevice, ...networkSoftware]

const algorithm: DefaultTheme.NavItemWithLink[] = [
  {
    text: '数据结构与算法',
    link: '/algorithm/',
  },
  {
    text: 'kadane算法',
    link: '/algorithm/kadane/',
  }
]

const advancedMathematics: DefaultTheme.NavItemWithLink[] = [
  {
    text: '高级数学',
    link: '/math/advanced/',
  },
  {
    text: '不定积分',
    link: '/math/advanced/indefinite-integral/',
  },
  {
    text: '定积分',
    link: '/math/advanced/integral/',
  },
  {
    text: '微分方程',
    link: '/math/advanced/differential-equation/',
  },
  {
    text: '无穷级数',
    link: '/math/advanced/infinite-series/',
  },
]

const math: DefaultTheme.NavItemWithLink[] = [...advancedMathematics]

const nav: DefaultTheme.NavItem[] = [
  {
    text: '前端',
    items: [
      {
        text: '前端',
        items: frontEnd,
      }
    ]
  },
  {
    text: '算法',
    items: [
      {
        text: '算法',
        items: algorithm,
      }
    ]
  },
  {
    text: '网络',
    items: [
      {
        text: '网络',
        items: networkConfig,
      }
    ]
  },
  {
    text: '数学',
    items: [
      {
        text: '数学',
        items: math,
      }
    ]
  },
  {
    text: `v${version}`,
    link: '/'
  }
]


export default defineConfig({
    title: "lrhhz's Blog",
    description: "个人技术文档",
    lang: "zh-CN",
    srcDir: "src",
    outDir: "dist",
    base: "/my-blog/",
    lastUpdated: true,
    cleanUrls: true,

    markdown: {
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      config(md) {
        md.use(groupIconMdPlugin)
      },
      image: {
        lazyLoading: true,
      },
      math: true,
    },

    vite: {
      plugins: [
        UnoCSS(),
        Components({
          dirs: [
            '.vitepress/theme/components',
          ],
          include: [
            /\.vue$/,
            /\.vue\?vue/,
            /\.md$/,
          ],
        }),
        groupIconVitePlugin({
          customIcon: {
            postcss: 'vscode-icons:file-type-postcss',
          },
        }),
      ]
    },

    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404',
    },

    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config

      nav: nav,

      search: {
        provider: 'local',
        options: {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档'
            },
            modal: {
              noResultsText: '无法找到相关结果',
              resetButtonTitle: '清除查询条件',
              footer: {
                selectText: '选择',
                navigateText: '切换'
              }
            }
          }
        },
      },

      socialLinks: [
          { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
});
