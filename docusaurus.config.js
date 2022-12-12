// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path');
const prismic = require('@prismicio/client');
const fetch = require('node-fetch');

/** @typedef {import('@docusaurus/types').Config} */
const config = {
  title: 'Living Design System',
  tagline: '基于Web Component、具备应急行业特征的WEB开发体系和工具集',
  url: 'https://lds.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'lds.github.io', // Usually your repo name.
  organizationName: 'ITSI', // Usually your GitHub org/user name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      }
    },
  },
  plugins: ['docusaurus-plugin-sass', ['@docusaurus/plugin-ideal-image', {
    quality: 70,
    max: 1030, // 最大缩放图片尺寸。
    min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
    steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
    disableInDev: false,
  },], [
      'docusaurus-plugin-module-alias',
      {
        alias: {
          'styled-components': path.resolve(__dirname, './node_modules/styled-components'),
          react: path.resolve(__dirname, './node_modules/react'),
          'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
          '@components': path.resolve(__dirname, './src/components'),
        },
      },
    ]],
  presets: [
    [
      'classic',
      /** @typedef {import('@docusaurus/preset-classic').Options} */
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
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @typedef {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Living Design System',
        logo: {
          alt: 'LDS Logo',
          src: 'img/lds.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: '技术文档',
          },
          { to: '/blog', label: 'MIS组件', position: 'left' },
          { to: '/blog', label: 'GIS组件', position: 'left' },
          {
            href: 'http://localhost:5000/admin',
            label: '低代码平台',
            target: '_blank',
            rel: null
          },
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速入门',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ITSI-Tangcuyu/Living-website-doc-docusaurus.git',
              },
            ],
          },
        ],
        copyright: `Copyright © ${ new Date().getFullYear() } itsi.com.cn Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      lds: {
        code: 'lds',
      },
    }),
};

module.exports = config;
