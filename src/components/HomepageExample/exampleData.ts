export interface ExampleItem {
  title: string;
  description: string;
  imgdesc: string;
  demoLink: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  image: string;
  label: string;
  scrollableRef?: string;
  center?: boolean;
  scrollable?: boolean;
  relative?: boolean;
  scrollHeight?: number;
  key?: number;
}

const Examples: ExampleItem[] = [
  {
    title: 'MIS组件',
    description: '管理信息可视化展示',
    image: '/img/sitemonitoring.png',
    imgdesc: '雨情、水情、风情站点监控',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    label: '雨情、水情、风情站点监控',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: 'MIS组件',
    description: '管理信息可视化展示',
    image: '/img/personnelsafety.png',
    imgdesc: '船舶、海上人员、高危区、度假区、重点区域人员转移情况',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    label: '人员避险转移',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: 'MIS组件',
    description: '管理信息可视化展示',
    image: '/img/potentialrisks.png',
    imgdesc: '防洪工程、地质隐患点、城市内涝点等隐患点排查情况',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    label: '隐患排查',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: 'MIS组件',
    description: '管理信息可视化展示',
    image: '/img/emergencyrescue.png',
    imgdesc: '各行政区救援物资、救援队伍准备情况',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    label: '应急救援准备',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: 'MIS组件',
    description: '管理信息可视化展示',
    image: '/img/currenttyphoon.png',
    imgdesc: '当前台风中心位置、移动方向、风速、中心气压等情况',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    label: '当前台风',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: 'MIS组件',
    description: '管理信息可视化展示',
    image: '/img/analyze.png',
    imgdesc: '漫滩淹没、城市内涝等灾情风险评估和研判分析',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    label: '研判分析',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: '综合展示',
    description: '城市生命线',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/browsers.svg').default,
    image: '/img/IMG_9723.GIF',
    imgdesc: '消防、桥梁、排水、电梯',
    label: '佛山智慧城市',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
  {
    title: '综合展示',
    description: '消防安全',
    image: '/img/IMG_9724.GIF',
    imgdesc: '轨道交通、森林防火、高危企业',
    demoLink: '/docs/mis/',
    Svg: require('@site/static/img/frameworks.svg').default,
    label: '佛山智慧城市',
    scrollableRef: '',
    center: true,
    scrollable: true,
    relative: true,
    scrollHeight: 305,
  },
];

export default Examples;
