import{r as i,h as t,H as s,g as l}from"./p-8d227782.js";const n=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(s,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{d:"M21.25 19.5a.75.75 0 010 1.5H8.045l1.05-1.5zM3.355 17.15l3.14 2.205L3 20.995l.35-3.84zM15.46 1.29v.02a1.915 1.915 0 011.57 3L7.355 18.125l-3.14-2.2 9.67-13.815a1.92 1.92 0 011.575-.82z","fill-rule":"evenodd"}:{d:"M21.25 19.5c.4 0 .75.35.75.75s-.35.75-.75.75H8.05l1.05-1.5zm-17.9-2.35l3.15 2.2L3 21zM13.9 2.1c.55-.8 1.8-1.05 2.65-.45l.136.1c.783.625.932 1.745.364 2.55l-9.7 13.8-3.15-2.2z","fill-rule":"evenodd"})))))}get hostElement(){return l(this)}};n.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{n as li_icon_action_edit}