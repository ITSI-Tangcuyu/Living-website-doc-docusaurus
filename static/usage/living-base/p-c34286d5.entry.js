import{r as i,h as t,H as n,g as s}from"./p-8d227782.js";const l=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(n,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{"fill-rule":"evenodd",d:"M7.745 14l3 4.57a1.5 1.5 0 002.5 0l3-4.57H23.5v5a3 3 0 01-3 3h-17a3 3 0 01-3-3v-5h7.245zM19 17h-2v2h2v-2zM12 .5c.69 0 1.25.56 1.25 1.25V11h3.17L12 17.75 7.58 11h3.17V1.75c0-.69.56-1.25 1.25-1.25z"}:{"fill-rule":"evenodd",d:"M7.755 14l.98 1.5H2V19c0 .825.675 1.5 1.5 1.5h17c.825 0 1.5-.675 1.5-1.5v-3.5h-6.735l.98-1.5H23.5v5c0 1.655-1.345 3-3 3h-17c-1.655 0-3-1.345-3-3v-5h7.255zM19 17v2h-2v-2h2zM12 1c.415 0 .75.335.75.75V11h3.67L12 17.75 7.58 11h3.67V1.75c0-.415.335-.75.75-.75z"})))))}get hostElement(){return s(this)}};l.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{l as li_icon_action_install}