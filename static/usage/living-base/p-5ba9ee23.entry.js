import{r as i,h as t,H as s,g as n}from"./p-8d227782.js";const l=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(s,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{"fill-rule":"evenodd",d:"M2 15.5l3.44 2.25L2 20v-4.5zm19.25 1a1.25 1.25 0 110 2.5h-13a1.25 1.25 0 110-2.5zM2 9.5l3.44 2.25L2 14V9.5zm19.25 1a1.25 1.25 0 110 2.5h-13a1.25 1.25 0 010-2.5zM2 3.5l3.44 2.25L2 8V3.5zm19.25 1a1.25 1.25 0 110 2.5h-13a1.25 1.25 0 110-2.5z"}:{"fill-rule":"evenodd",d:"M2 15.5l3.45 2.25L2 20v-4.5zM21.25 17c.4 0 .75.35.75.75s-.35.75-.75.75H7.5V17zM2 9.5l3.45 2.25L2 14V9.5zM21.25 11c.4 0 .75.35.75.75s-.35.75-.75.75H7.5V11zM2 3.5l3.45 2.25L2 8V3.5zM21.25 5c.4 0 .75.35.75.75s-.35.75-.75.75H7.5V5z"})))))}get hostElement(){return n(this)}};l.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{l as li_icon_action_changelog}