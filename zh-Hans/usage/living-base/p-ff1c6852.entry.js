import{r as i,h as t,H as l,g as n}from"./p-8d227782.js";const s=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return t(l,null,t("svg",Object.assign({class:"li-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:"currentColor"===this.fill?this.color:this.fill},t("g",null,t("path",this.selected?{d:"M8 12l1.08 1.055-4.825 5.155a1.085 1.085 0 101.535 1.535l5.15-4.805L12 16l-5.185 4.84a2.57 2.57 0 01-1.765.695 2.595 2.595 0 01-1.21-.315l-2.135 2.135-1.06-1.06 2.135-2.11a2.575 2.575 0 01.38-3zm4.915-8L20 11.085l-5.745 5.73-7.07-7.07zm.635 5.39l-1.08 1.08 1.06 1.06 1.08-1.08zm3.968-7.765a4 4 0 013.807 1.05 4 4 0 01-1.66 6.68l-5-5a4 4 0 012.853-2.73z","fill-rule":"evenodd"}:{d:"M18.5 1.5a4.002 4.002 0 012.825 6.83A3.987 3.987 0 0118.5 9.5h-.105l1.59 1.59-5.73 5.73-1.52-1.52-5.925 5.54a2.569 2.569 0 01-1.765.695c-.42 0-.83-.115-1.21-.315L1.7 23.355l-1.06-1.06 2.135-2.135c-.505-.95-.39-2.15.385-2.975l5.545-5.92-1.52-1.52 5.73-5.735 1.59 1.59a3.97 3.97 0 011.165-2.93A3.998 3.998 0 0118.5 1.5zM9.765 12.325L4.26 18.21c-.4.43-.39 1.095.025 1.51a1.074 1.074 0 001.505.025l5.89-5.505zm3.15-6.19l-3.61 3.61 4.95 4.95 3.61-3.61zm.635 2.195l2.12 2.12-1.06 1.06-.53-.53-1.06 1.065-1.065-1.065 1.065-1.06-.535-.53z","fill-rule":"evenodd"})))))}get hostElement(){return n(this)}};s.style="li-icon{--display:inline-flex;--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);display:var(--display)}li-icon path{-webkit-transition:var(--transition);transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){li-icon svg,.li-icon{color:white;stroke:white}}";export{s as li_icon_content_interview}