import{r as i,h as t,H as s,g as n}from"./p-8d227782.js";const l=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(s,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{"fill-rule":"evenodd",d:"M21.385 19.615l-4.92-4.915a8 8 0 10-1.765 1.765l4.915 4.92c.49.487 1.28.487 1.77 0a1.26 1.26 0 000-1.77zM13 10.75H7a.75.75 0 110-1.5h6a.75.75 0 110 1.5z"}:{"fill-rule":"evenodd",d:"M10 2c4.42 0 8 3.58 8 8 0 1.76-.575 3.38-1.535 4.695l4.92 4.92c.485.49.485 1.28.005 1.77a1.245 1.245 0 01-.885.365c-.32 0-.64-.12-.885-.365l-4.92-4.92A7.961 7.961 0 0110 18c-4.42 0-8-3.58-8-8s3.58-8 8-8zm0 1.5A6.506 6.506 0 003.5 10c0 3.585 2.915 6.5 6.5 6.5s6.5-2.915 6.5-6.5-2.915-6.5-6.5-6.5zm3 5.75a.749.749 0 110 1.5H7a.749.749 0 110-1.5z"})))))}get hostElement(){return n(this)}};l.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{l as li_icon_action_zoom_out}