import{r as t,h as i,H as s}from"./p-f27c1a9d.js";const e=class{constructor(i){t(this,i),this.required=!1,this.onClick=()=>{var t;"string"==typeof this.for&&this.for.trim().length>0&&(null===(t=document.querySelector(`#${this.for}`))||void 0===t||t.focus())}}render(){return i(s,{onClick:this.onClick},i("label",{htmlFor:this.for},i("slot",null)))}};e.style=':host{font-size:var(--li-font-size);display:inline-block}:host([required])::after{content:"*";color:#f00;font-size:1.25rem;font-weight:700;vertical-align:middle;line-height:0}';export{e as li_label}