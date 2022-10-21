import React from 'react';

const Cards = () => {
  return wcs.map((item, idx) => {
    return (
      <div key={idx} className='col col--6'>
        <div className='col-demo'>
          <div
            className='card margin--sm'
            style={{
              backgroundColor: 'white',
              boxShadow:
                '0 4px 8px 0 rgba(0,0,0,0.1)',
            }}>
            <div>
              <a href={'/docs/base/' + item.title}>
                <div className='card__header' style={{ padding: '1rem' }}>
                  <h2>{item.title}</h2>
                </div>
              </a>
              <div className='card__body' style={{ padding: '1rem', color: 'gray' }}>
                <p>{item.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

const wcs = [
  {
    title: 'li-accordion',
    subtitle: 'li-accordion手风琴元组件允许用户切换内容部分的显示',
  },
  {
    title: 'li-activity-timeline',
    subtitle:
      'li-activity-timeline活动时间线元组件显示用户即将进行的、当前的和过去的每个活动',
  },
  {
    title: 'li-alert',
    subtitle:
      'li-alert警报元组件传递的信息状态属于整个系统环境，出现时不需要用户主动操作',
  },
  {
    title: 'li-anchor',
    subtitle: 'li-anchor锚点元组件用于标记超文本链接的开始或/和结束',
  },
  {
    title: 'li-avatar',
    subtitle: 'li-avatar元组件用于以图形方式表示用户或对象',
  },
  {
    title: 'li-badge',
    subtitle: 'li-badge元组件用于通知用户物体的状态或已经采取的行动',
  },
  {
    title: 'li-bread-crumbs',
    subtitle:
      'li-bread-crumbs元组件由按层级顺序帮助用户在web应用中找到自己的位置。',
  },
  {
    title: 'li-button',
    subtitle:
      'li-button元组件用于界面操作。它们默认为具有灰色边框的深色文本的外观。',
  },
  {
    title: 'li-calendar',
    subtitle: 'li-calender元组件在日、周、月或类别视图中显示信息。',
  },
  {
    title: 'li-caption',
    subtitle: 'li-caption标题元组件用作插图、表单元素或类似内容的简要说明。',
  },
  {
    title: 'li-card',
    subtitle: 'li-card卡片元组件是相关性紧密的一组信息的容器',
  },
  {
    title: 'li-card-header',
    subtitle: 'li-card-header卡片头元组件用于表示卡片中头部信息',
  },
  {
    title: 'li-carousel',
    subtitle: 'li-carousel旋转木马元组件用于多条特色内容占据一部分主要界面',
  },
  {
    title: 'li-carousel-item',
    subtitle: 'li-carousel-item旋转木马条目元组件代表一条特色信息',
  },
  {
    title: 'li-checkbox',
    subtitle:
      'li-checkbox复选框元组件用于让用户从有限数量的选项中选择一个或多个选项',
  },
  {
    title: 'li-choice',
    subtitle:
      'li-choice选择按钮元组件允许从一组预定义选项中选择单个或多个选项。',
  },
  {
    title: 'li-choice-group',
    subtitle: 'li-choice-group选项组元组件允许用户使用“组上的值”设置选定的选项',
  },
  {
    title: 'li-collapsible',
    subtitle:
      'li-collapsible可折叠元组件包含一个标题，点击时显示的任何其他内容。',
  },
  {
    title: 'li-combo-box',
    subtitle:
      'li-combo-box元组件为用户提供自动完成或只读的输入字段，并附带选项列表框。',
  },
  {
    title: 'li-cookie-consent',
    subtitle:
      'li-cookie-consent通知用户Cookie的使用情况，用户第一次访问应用时，会显示此横幅',
  },
  {
    title: 'li-data-grid',
    subtitle:
      'li-data-grid日期选择器是用于捕获单个日期、日期范围或日期和时间的文本输入',
  },
  {
    title: 'li-date-picker',
    subtitle:
      'li-date-picker日期选择器是用于捕获单个日期、日期范围或日期和时间的文本输入',
  },
  {
    title: 'li-dialog',
    subtitle: 'li-dialog对话框是覆盖在主窗口或其他对话框窗口上的窗口。',
  },
  {
    title: 'li-disclosure',
    subtitle:
      'li-disclosure揭露组件是详细信息和摘要控件的实现，用于切换额外内容的可见性。',
  },
  {
    title: 'li-divider',
    subtitle:
      'li-divider用于表示段落级元素之间的主题分隔。界面上它们看起来像水平的线条。',
  },
  {
    title: 'li-editable-table',
    subtitle:
      'li-editable-table可编辑表用于增强具有可编辑功能的表格编辑数据的能力',
  },
  {
    title: 'li-empty-state',
    subtitle: 'li-empty-state元组件用于表示另一个组件没有要显示的项或数据',
  },
  {
    title: 'li-fieldset',
    subtitle: 'li-fieldset字段集元组件用于将多个相关表单组件和标签组合在一起',
  },
  {
    title: 'li-footer',
    subtitle:
      'li-footer页脚组件用作所有视图的全局页脚。包含版权数据和相关文档的链接。',
  },
  {
    title: 'li-grid',
    subtitle: 'li-grid网格组件使用基于Flexbox的布局系统为其他组件提供布局结构',
  },
  {
    title: 'li-header',
    subtitle:
      'li-header标题用于显示Logo、主导航和实用程序菜单。它总是在界面顶部可见。',
  },
  {
    title: 'li-heading',
    subtitle: 'li-heading标题元组件用作界面中页面每个主要部分的标题。',
  },
  {
    title: 'li-hero-area',
    subtitle:
      'li-hero-area英雄区域通常是用户看到的第一件事，是吸引用户注意力的好地方。',
  },
  {
    title: 'li-icon',
    subtitle:
      'li-icon图标组件允许您自定义图标的大小和颜色。在文本标签不适合的地方提供额外的含义',
  },
  {
    title: 'li-input',
    subtitle:
      'li-input输入组件用于用户在预期输入较短时提供文本输入，支持多种文本格式，包括数字。',
  },
  {
    title: 'li-label',
    subtitle:
      'li-label标签用于为界面中的项目创建文本标签。最常用于其他表单组件内部。',
  },
  {
    title: 'li-layout',
    subtitle:
      'li-layout布局组件虽然在用户界面本身中不可见，但为其他组件提供了布局结构。',
  },
  {
    title: 'li-link',
    subtitle:
      'li-link链接元组件在内容段落中用于创建从一个页面到另一个页面的路径',
  },
  {
    title: 'li-list',
    subtitle:
      'li-list列表元组件用于显示名称/值对，如术语和定义。特别适用于词汇表。',
  },
  {
    title: 'li-list-item',
    subtitle:
      'li-list-item列表项是列表中使用的组件。有关具体用法示例，请参见列表组件。',
  },
  {
    title: 'li-logo',
    subtitle:
      'li-logo徽标是页眉和页脚组件内部使用的组件，提供了自定义语言和外观以及主题的选项',
  },
  {
    title: 'li-modal',
    subtitle: 'li-modal模态元组件用于显示临时阻止与应用程序主视图交互的内容。',
  },
  {
    title: 'li-notification',
    subtitle: 'li-notification通知元组件用作右上角的反馈和确认机制。',
  },
  {
    title: 'li-notification-drawer',
    subtitle:
      'li-notification-drawer通知抽屉通知用户最近的通知消息，可显示多达20条通知消息。',
  },
  {
    title: 'li-number-input',
    subtitle: 'li-number-input数字输入允许用户使用加号和减号按钮指定数值',
  },
  {
    title: 'li-pagination',
    subtitle:
      'li-pagination分页组件可以方便地为用户显示页码列表，以便他们可以浏览大型数据集',
  },
  {
    title: 'li-paragraph',
    subtitle: 'li-paragraph段落元组件是通过空行与相邻块分隔的文本块。',
  },
  {
    title: 'li-progress',
    subtitle: 'li-progress进度组件用于指示任何正在进行且对时间敏感的过程',
  },
  {
    title: 'li-radio',
    subtitle:
      'li-radio单选按钮是图形界面元素，允许用户仅选择一组预定义的互斥选项中的一个',
  },
  {
    title: 'li-radio-group',
    subtitle: 'li-radio-group单选按钮组使用“组上的值”设置选定选项。',
  },
  {
    title: 'li-range-silder',
    subtitle:
      'li-range-silder范围滑块允许用户在不小于给定值，且不大于另一个给定值范围中指定数值',
  },
  {
    title: 'li-range-stepper',
    subtitle:
      'li-range-stepper范围步进器是一个组件，可用于逐步通过一系列值范围',
  },
  {
    title: 'li-select',
    subtitle:
      'li-select选择允许用户从选项菜单中选择一个选项。有6个或更多选项时，请使用select',
  },
  {
    title: 'li-spacer',
    subtitle: 'li-spacer间隔组件用于在相邻的两个组件之间提供额外的空白',
  },
  {
    title: 'li-spinner',
    subtitle:
      'li-spinner等待元组件用于指示用户正在处理某个操作，基于HTML和CSS构建',
  },
  {
    title: 'li-srollable',
    subtitle: 'li-srollable滚动元组件用作一系列要水平滚动的元素的容器',
  },
  {
    title: 'li-stepper',
    subtitle:
      'li-stepper逐步操作元组件通过将内容划分为逻辑步骤来创建类似向导的工作流',
  },
  {
    title: 'li-tab-group',
    subtitle:
      'li-tab-group选项卡组，允许在单个窗口中包含多个面板，使用选项卡作为导航元素。',
  },
  {
    title: 'li-table',
    subtitle:
      'li-table是一个轻量级的，提供了粘性标题、支持窄视口宽度和表格样式等功能的表格组件',
  },
  {
    title: 'li-textarea',
    subtitle:
      'li-textarea元组件是当预期用户输入较长时使用，允许用户在多行上写入文本的控件。',
  },
  {
    title: 'li-toggle',
    subtitle:
      'li-toggle开关元组件是图形界面开关，使用户可以控制可以打开或关闭的功能或选项',
  },
  {
    title: 'li-tooltip',
    subtitle: 'li-tooltip提示框组件提供简要说明用户界面元素的功能。',
  },
  {
    title: 'li-tray',
    subtitle:
      'li-tray托盘组件用于显示小视口上的附加信息，通常显示在布局组件的粘性侧栏中',
  },
  {
    title: 'li-tree',
    subtitle: 'li-tree树状组件用于显示树形结构数据的功能强大的组件',
  },
  {
    title: 'li-upload',
    subtitle: 'li-upload上传组件用于允许用户将一个或多个文件上传到服务器上',
  },
  {
    title: 'li-visually-hidden',
    subtitle:
      'li-visually-hidden在一个元素需要用于可访问性辅助技术，但在其他情况下隐藏时使用。',
  },
];

export default Cards;
