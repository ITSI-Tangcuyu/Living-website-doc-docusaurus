import{r,c as s,h as e,H as o,g as t}from"./p-8d227782.js";const i=class{constructor(o){r(this,o),this.liClose=s(this,"liClose",7),this.background=!1,this.type="default",this.closable=!1,this.clickCloseHandle=()=>{this.liClose.emit()},this.iconRender=()=>{let r="";switch(this.type){case"default":r="gray";break;case"primary":r="blue";break;case"success":r="green";break;case"warning":r="red"}return e("div",{class:"message-icon",style:{color:r}},"o")}}render(){return e(o,{class:{[this.type]:this.background}},this.iconRender(),e("div",{class:{"message-content":!0,"message-close":this.closable}},e("slot",null)),this.closable?e("div",{class:"message-button",onClick:this.clickCloseHandle},"×"):"")}get el(){return t(this)}};i.style=":host{--background:#fff;--color:#000;--border-width:1px;--border-style:solid;--li-border-color:transparent;display:inline-block;pointer-events:all;padding:8px 16px;border-radius:4px;-webkit-box-shadow:0 1px 6px rgba(0, 0, 0, 0.2);box-shadow:0 1px 6px rgba(0, 0, 0, 0.2);position:relative;border:var(--border-width) var(--border-style) var(--li-border-color);background-color:var(--background);color:var(--color);-webkit-transition:height 0.3s ease-in-out;transition:height 0.3s ease-in-out}:host>div{display:inline-block;text-align:center;vertical-align:middle}:host .message-icon{width:16px;height:16px;line-height:16px;margin-right:0.25rem}:host .message-content{text-align:left}:host .message-close{padding-right:2rem}:host .message-button{width:22px;height:22px;cursor:pointer}:host(.default){--background:#fff;--color:#000;--background:#fff}:host(.primary){--li-border-color:#0a7bc7;--color:#0a7bc7;--background:rgba(10, 123, 199, 0.1)}:host(.success){--li-border-color:#0ebd75;--color:#0ebd75;--background:rgba(40, 94, 71, 0.1)}:host(.warning){--li-border-color:#e84504;--color:#e84504;--background:rgba(232, 69, 4, 0.1)}";export{i as li_message}