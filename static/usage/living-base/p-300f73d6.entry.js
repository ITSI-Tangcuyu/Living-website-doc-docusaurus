import{r as e,h as i,H as t}from"./p-f27c1a9d.js";import{c as o}from"./p-1af7e5e1.js";const s=class{constructor(i){e(this,i),this.visible=!1}render(){const e=o("dialog",{visible:this.visible});return i(t,{class:e},i("li-popup",{class:"inner-popup",trigger:"manual",visible:this.visible,style:{width:"number"==typeof this.width?`${this.width}px`:this.width,height:"number"==typeof this.height?`${this.height}px`:this.height}},i("slot",{name:"header"}),i("slot",null),i("slot",{name:"footer"})))}};s.style=":host{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.6);outline:none;pointer-events:all;overflow:auto;margin:0}:host(.li-dialog-visible){display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1000}:host(.li-dialog-visible) .inner-popup{top:20%;min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;-webkit-box-shadow:0 0 0 0.0625rem rgba(0, 0, 0, 0.42), 0 1.25rem 5rem 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 0 0.0625rem rgba(0, 0, 0, 0.42), 0 1.25rem 5rem 0 rgba(0, 0, 0, 0.3)}";export{s as li_dialog}