import{r as e,c as i,h as t,H as o}from"./p-f27c1a9d.js";const s=class{constructor(t){e(this,t),this.liChange=i(this,"liChange",7),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.hideLabel=!1,this.onClick=e=>{e.preventDefault(),this.disabled||(this.indeterminate?(this.indeterminate=!1,this.checked=!0):this.checked=!this.checked,this.liChange.emit({checked:this.checked,value:this.value}))}}render(){return t(o,Object.assign({},{checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled},{onClick:this.onClick}),t("span",{class:{"checkbox-inner":!0}},t("svg",{viewBox:"0 0 512 512"},this.checked&&!this.indeterminate?t("path",{d:"M456 94q5 5 5 11 0 4-2 8L237 439q-4 8-8.5 8.5t-5.5.5q-7 0-12-5L60 276q-5-5-5-10l.5-3.5L61 254l25-25q6-6 12-6t11 6l96 96q5 5 12 5l4.5-.5 8.5-8.5L405 72q4-7 8.5-7.5t5.5-.5q6 0 11 4z"}):this.indeterminate&&t("rect",{transform:"translate(128, 128)",width:"50%",height:"50%"})),t("input",{type:"checkbox",name:this.name,checked:this.checked,value:this.value})," ",t("slot",null)))}};s.style='@charset "UTF-8";:host{--li-checkbox-height:0.875rem;--li-checkbox-width:0.875rem;display:inline-block;font-size:var(--li-font-size);height:var(--li-checkbox-height);cursor:pointer}:host .checkbox-inner{position:relative;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host .checkbox-inner svg{height:var(--li-checkbox-height);width:var(--li-checkbox-width);fill:var(--li-border-focus-color);background-color:#fff;border:1px solid var(--li-border-color);border-radius:calc(var(--li-border-radius) / 2)}:host .checkbox-inner .label{margin-left:0.375rem;line-height:1}:host .checkbox-inner input{-webkit-appearance:none;-moz-appearance:none;appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit;margin:0}:host(:not([disabled])[checked]) .checkbox-inner,:host(:not([disabled])[indeterminate]) .checkbox-inner,:host(:not([disabled]):hover) .checkbox-inner{border-color:var(--li-border-focus-color)}:host([disabled]){color:var(--li-color-disabled);cursor:not-allowed}:host([disabled]) svg,:host([disabled]) .checkbox-inner{color:var(--li-background-disabled);fill:var(--li-background-disabled)}';export{s as li_checkbox}