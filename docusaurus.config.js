// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Living Design System',
  tagline: '统一化的人员交互方式、设计模式、开发原则和开发工具集',
  url: 'https://www.itsi.com.cn',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ITSI', // Usually your GitHub org/user name.
  projectName: 'Living Design System', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ITSI-Tangcuyu/Living-website-doc-docusaurus.git',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/ITSI-Tangcuyu/Living-website-doc-docusaurus.git',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Living Design System',
        logo: {
          alt: 'My Site Logo',
          src: 'img/lds-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: '技术文档',
          },
          {to: '/blog', label: 'MIS组件', position: 'left'},
          {to: '/blog', label: 'GIS组件', position: 'left'},
          {to: '/blog', label: '低代码平台', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            label: '社区',
            position: 'right',
            items: [
              {
                href: 'https://ionicframework.com/community',
                label: 'Community Hub',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://forum.ionicframework.com/',
                label: 'Forum',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://www.meetup.com/topics/ionic-framework/',
                label: 'Meetups',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://blog.ionicframework.com/',
                label: 'Blog',
                target: '_blank',
                rel: null,
              },
            ],
            className: 'navbar__link--community',
          },
          {
            label: '技术支持',
            position: 'right',
            items: [
              {
                href: 'https://ionicframework.com/support',
                label: 'Help Center',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://ionic.zendesk.com/',
                label: 'Customer Support',
                target: '_blank',
                rel: null,
              },
              {
                href: 'https://ionicframework.com/advisory',
                label: 'Enterprise Advisory',
                target: '_blank',
                rel: null,
              },
            ],
            className: 'navbar__link--support',
          },
          {
            href: 'https://github.com/ITSI-Tangcuyu/Living-website-doc-docusaurus.git',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ITSI-Tangcuyu/Living-website-doc-docusaurus.git',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} itsi.com.cn Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
