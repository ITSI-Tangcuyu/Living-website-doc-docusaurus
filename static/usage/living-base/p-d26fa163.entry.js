import{r as t,h as a,H as s,g as n}from"./p-f27c1a9d.js";import{c as e}from"./p-fdf6920f.js";let l=0;const o=class{constructor(a){t(this,a),this.generatedId=l++,this.size="large"}connectedCallback(){}componentWillLoad(){}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}componentWillRender(){}componentShouldRender(){}componentDidRender(){}disconnectedCallback(){}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){return e("tab-panel","small"===this.size&&("basePart"===t?"":"tab-panel--")+"small")}render(){return a(s,{role:"tabpanel",id:`li-tab-panel-${this.generatedId}`},this.styles&&a("style",null,this.styles),a("div",{class:this.getCssClassMap(),part:this.getBasePartMap()},a("slot",null)))}get el(){return n(this)}};o.style=":host{--spacing-top:var(--li-token-spacing-unit-x6);--spacing-top-small:var(--li-token-spacing-unit-x4)}.tab-panel{margin-top:var(--spacing-top)}.tab-panel--small{margin-top:var(--spacing-top-small)}";export{o as li_tab_panel}