import{r as i,h as t,H as n,g as s}from"./p-8d227782.js";const r=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(n,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{"fill-rule":"evenodd",d:"M21 1v19a3 3 0 01-3 3H6a3 3 0 01-3-3V7.5L9.5 1H21zm-6.5 8h-5A2.5 2.5 0 007 11.5v5A2.5 2.5 0 009.5 19h5a2.5 2.5 0 002.5-2.5v-5A2.5 2.5 0 0014.5 9zm-1 1.5a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3a2 2 0 012-2h3z"}:{d:"M21 1v19c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3V7.5L9.5 1zm-1.5 1.5h-9.4L4.5 8.1V20c0 .85.65 1.5 1.5 1.5h12c.85 0 1.5-.65 1.5-1.5zm-5 6.5c1.4 0 2.5 1.1 2.5 2.5v5c0 1.4-1.1 2.5-2.5 2.5h-5C8.1 19 7 17.9 7 16.5v-5C7 10.1 8.1 9 9.5 9zm0 1.5h-5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-5c0-.55-.45-1-1-1z","fill-rule":"evenodd"})))))}get hostElement(){return s(this)}};r.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{r as li_icon_content_sim_card}