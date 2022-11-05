/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @typedef {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'index',
    'intro',
    {
      type: 'category',
      label: '使用指南',
      items: ['docs/principles', 'docs/css-framework', 'docs/naming', 'docs/accessibility'],
    },
    {
      type: 'category',
      label: 'Design Tokens',
      items: ['tokens/tokens', 'tokens/lds', 'tokens/category'],
    },
    {
      type: 'category',
      label: '元组件库',
      items: [
        'base/base',
        'base/li-accordion',
        'base/li-activity-timeline',
        'base/li-alert',
        'base/li-anchor',
        'base/li-avatar',
        'base/li-badge',
        'base/li-bread-crumbs',
        'base/li-button',
        'base/li-calendar',
        'base/li-caption',
        'base/li-card',
        'base/li-card-header',
        'base/li-carousel',
        'base/li-carousel-item',
        'base/li-checkbox',
        'base/li-choice',
        'base/li-choice-group',
        'base/li-collapsible',
        'base/li-combo-box',
        'base/li-cookie-consent',
        'base/li-data-grid',
        'base/li-date-picker',
        'base/li-dialog',
        'base/li-disclosure',
        'base/li-divider',
        'base/li-editable-table',
        'base/li-empty-state',
        'base/li-fieldset',
        'base/li-footer',
        'base/li-grid',
        'base/li-header',
        'base/li-heading',
        'base/li-hero-area',
        'base/li-icon',
        'base/li-input',
        'base/li-label',
        'base/li-layout',
        'base/li-link',
        'base/li-list',
        'base/li-list-item',
        'base/li-logo',
        'base/li-modal',
        'base/li-notification',
        'base/li-notification-drawer',
        'base/li-number-input',
        'base/li-pagination',
        'base/li-paragraph',
        'base/li-progress',
        'base/li-radio',
        'base/li-radio-group',
        'base/li-range-silder',
        'base/li-range-stepper',
        'base/li-select',
        'base/li-spacer',
        'base/li-spinner',
        'base/li-srollable',
        'base/li-stepper',
        'base/li-tab-group',
        'base/li-table',
        'base/li-textarea',
        'base/li-toggle',
        'base/li-tooltip',
        'base/li-tray',
        'base/li-tree',
        'base/li-upload',
        'base/li-visually-hidden'
      ],
    },
    {
      type: 'category',
      label: 'MIS组件库',
      items: ['mis/mis'],
    },
    {
      type: 'category',
      label: 'GIS组件库',
      items: ['gis/gis'],
    },
    {
      type: 'category',
      label: '图标',
      items: ['icons/icons'],
    },
    'lowcode',
    {
      type: 'category',
      label: '插件',
      items: ['plugin/plugin-chrome', 'plugin/plugin-vsc'],
    },
    'cli'
  ],

};

module.exports = sidebars;
