import{r as i,h as t,H as s,g as n}from"./p-8d227782.js";const a=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(s,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{"fill-rule":"evenodd",d:"M21.5 3.5H16v-3H8v3H2.5a.75.75 0 000 1.5h1.79l.845 15.62a2.25 2.25 0 002.245 2.13h9.24a2.25 2.25 0 002.245-2.13L19.71 5h1.79a.75.75 0 100-1.5zm-12.25 15a.75.75 0 11-1.5 0v-10a.75.75 0 111.5 0v10zm3.5 0a.75.75 0 11-1.5 0v-10a.75.75 0 111.5 0v10zm1.75-15h-5V2h5v1.5zm1.75 15a.75.75 0 11-1.5 0v-10a.75.75 0 011.5 0v10z"}:{d:"M16 .5v3h5.5c.4 0 .75.35.75.75S21.9 5 21.5 5h-1.05l-.8 15.65c-.1 1.6-1.4 2.85-3 2.85H7.4c-1.6 0-2.9-1.25-3-2.85L3.55 5H2.5c-.4 0-.75-.35-.75-.75s.35-.75.75-.75H8v-3zM18.95 5H5.05l.85 15.6c.05.8.7 1.4 1.5 1.4h9.2c.8 0 1.45-.6 1.5-1.4zM12 7.75c.4 0 .75.35.75.75v10c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-10c0-.4.35-.75.75-.75zm3.5 0c.4 0 .75.35.75.75v10c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-10c0-.4.35-.75.75-.75zm-7 0c.4 0 .75.35.75.75v10c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-10c0-.4.35-.75.75-.75zm6-5.75h-5v1.5h5z","fill-rule":"evenodd"})))))}get hostElement(){return n(this)}};a.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{a as li_icon_action_remove}