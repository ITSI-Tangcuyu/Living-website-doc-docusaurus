import{r as t,h as i,H as s,g as n}from"./p-8d227782.js";const l=class{constructor(i){t(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return i(s,null,i("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&i("title",null,this.accessibilityTitle),i("g",{fill:"currentColor"===this.fill?this.color:this.fill},this.selected?i("g",null,i("path",{d:"M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11A11 11 0 0011 0zm5.53 8.295L9.665 15.16 5.47 10.965a.75.75 0 111.06-1.06l3.135 3.135 5.805-5.805a.755.755 0 011.06 0 .745.745 0 010 1.06z","fill-rule":"evenodd"})):i("g",null,i("path",{d:"M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zm0 20.5c-5.239 0-9.5-4.262-9.5-9.5 0-5.239 4.261-9.5 9.5-9.5 5.238 0 9.5 4.261 9.5 9.5 0 5.238-4.262 9.5-9.5 9.5z"}),i("path",{d:"M15.47 7.236l-5.804 5.803L6.53 9.903a.75.75 0 10-1.06 1.06l4.197 4.198 6.864-6.864a.75.75 0 10-1.061-1.061z"})))))}get hostElement(){return n(this)}};l.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{l as li_icon_alert_success}