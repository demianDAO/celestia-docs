// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Pull in .env file
require('dotenv').config();

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');
const docs = require('./sidebars');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '建设模块化区块链.',
  tagline: '',
  url: 'https://celestia.wiki',
  baseUrl: process.env.BASE_URL,
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'celestiaorg', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  scripts: [
    {
      src: 'https://plausible.celestia.org/js/plausible.js',
      defer: true,
      'data-domain': 'docs.celestia.org'
    },
    {
      src: 'https://www.chatbase.co/embed.min.js',
      id: 'oeduJpy4UAtpDuOQcCuVM',
      defer: true
    }
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous'
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/celestiaorg/docs/tree/main/',
          routeBasePath: '/',
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],
  plugins: [
    ['drawio', {}],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/nodes/environment',
            from: '/developers/environment'
          },
          {
            to: '/nodes/celestia-app',
            from: '/developers/celestia-app'
          },
          {
            to: '/nodes/instantiate-testnet',
            from: '/developers/instantiate-testnet'
          },
          {
            to: '/nodes/celestia-app-commands',
            from: '/developers/celestia-app-commands'
          },
          {
            to: '/nodes/celestia-node',
            from: '/developers/celestia-node'
          },
          {
            to: '/nodes/celestia-node-metrics',
            from: '/developers/celestia-node-metrics'
          }
        ]
      }
    ]
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr']
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/celestia-doc.png',
      metadata: [
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@celestiaorg' },
        { name: 'twitter:title', content: 'Celestia Docs' },
        {
          name: 'twitter:description',
          content:
            'The developer documentation site for getting started building on the Celestia Network.'
        }
      ],
      algolia: {
        appId: '2KRXIFZ5YL',
        apiKey: '00d6c432aa0b7c20c92283ec9bec23c4',
        indexName: 'celestia',
        contextualSearch: true,
        debug: false
      },
      injectHtmlTags: {
        headTags: [],
        bodyTags: [
          {
            tagName: 'script',
            innerHTML: `
              window.chatbaseConfig = {
                chatbotId: "oeduJpy4UAtpDuOQcCuVM",
              }
            `
          }
        ]
      },
      navbar: {
        logo: {
          alt: 'Celestia wiki文档',
          src: 'img/celestia-docs.svg',
          srcDark: 'img/celestia-docs-dark.svg'
        },
        items: [
          {
            to: '/concepts/how-celestia-works/introduction',
            position: 'left',
            label: '概念'
          },
          {
            to: '/nodes/overview',
            position: 'left',
            label: '运行节点'
          },
          {
            to: '/developers/overview',
            position: 'left',
            label: '开发者'
          },
          {
            to: '/community/overview',
            position: 'left',
            label: '社区'
          },
          {
            href: 'https://github.com/demianDAO/celestia-docs',
            label: 'GitHub',
            position: 'right'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '运行一个节点',
                to: '/nodes/overview'
              },
              {
                label: '开发者',
                to: '/developers/overview'
              },
              {
                label: '社区',
                to: '/community/overview'
              }
            ]
          },
          {
            title: '社区',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/je7UVpDuDu'
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/CelestiaOrg'
              },
              {
                label: 'Forum',
                href: 'https://forum.celestia.org/'
              }
            ]
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/demianDAO/celestia-docs'
              },
              {
                label: 'Website',
                href: 'https://celestia.wiki/'
              },
              {
                label: 'Network upgrades channel',
                href: 'https://t.me/+smSFIA7XXLU4MjJh/'
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Celestia Org Built with Docusaurus - kkdemian.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity']
      }
    })
};

module.exports = config;
