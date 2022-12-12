import{r as t,h as i,H as o,g as r}from"./p-8d227782.js";import{c as e}from"./p-43ff7a46.js";const s=class{constructor(i){t(this,i),this.subscriptions=[],this.visible=!1,this.placement="top",this.arrow=!1,this.trigger="manual",this.setPosition=()=>{if(null!==this.opener){const t=this.opener.getBoundingClientRect(),i=this.el.getBoundingClientRect(),o=getComputedStyle(this.el),r=i.height+Number.parseFloat(o.marginTop)+Number.parseFloat(o.marginBottom),e=i.width+Number.parseFloat(o.marginLeft)+Number.parseFloat(o.marginRight),s=(r-t.height)/2,a=(e-t.width)/2,l=(t,i)=>"boolean"==typeof i?function(t,i=!0){return`calc(${i?1:-1} * var(--li-arrow-size) * ${Math.SQRT1_2} + ${t}px)`}(t,i):`${t}px`;let n="0",b="0";switch(this.placement){case"left":b=l(t.top-s),n=l(t.left-e,!1);break;case"right":b=l(t.top-s),n=l(t.left+t.width,!0);break;case"top":b=l(t.top-r,!1),n=l(t.left-a);break;case"bottom":b=l(t.top+t.height,!0),n=l(t.left-a)}this.el.style.top=b,this.el.style.left=n}},this.onVisible=()=>{["hover","click","focus"].includes(this.trigger)&&(this.setPosition(),this.visible=!this.visible)}}triggerChanged(){this.updateTrigger()}connectedCallback(){"string"==typeof this.target&&this.target.length>0?this.opener=document.querySelector(this.target):this.target instanceof Node&&(this.opener=this.target),this.updateTrigger()}disconnectedCallback(){this.subscriptions.forEach((t=>t()))}async show(t){this.opener=t,this.setPosition(),this.visible=!0}async close(){this.visible=!1}subscribe(t,i){var o;return null===(o=this.opener)||void 0===o||o.addEventListener(t,i),()=>{var o;null===(o=this.opener)||void 0===o||o.removeEventListener(t,i)}}updateTrigger(){switch(this.subscriptions.forEach((t=>t())),this.trigger){case"hover":this.subscriptions=[this.subscribe("mouseover",this.onVisible),this.subscribe("mouseout",this.onVisible)];break;case"click":this.subscriptions=[this.subscribe("click",this.onVisible)];break;case"focus":this.subscriptions=[this.subscribe("focus",this.onVisible),this.subscribe("blur",this.onVisible)]}}render(){const t=null!==this.el.querySelector('[slot="header"]'),r=null!==this.el.querySelector('[slot="footer"]'),s=e("popup",{[`placement-${this.placement}`]:"string"==typeof this.placement,arrow:this.arrow,visible:this.visible});return i(o,{class:s},i("header",{style:{display:t?"block":"none"}},i("slot",{name:"header"})),i("div",{class:"body"},i("slot",null)),i("footer",{style:{display:r?"block":"none"}},i("slot",{name:"footer"})))}get el(){return r(this)}static get watchers(){return{trigger:["triggerChanged"]}}};s.style=':host{display:inline-block;position:absolute;border:1px solid #bfbfbf;border-radius:var(--li-border-radius);background-color:#fff;opacity:0;visibility:hidden;z-index:-1}:host::before{display:none}:host(.li-popup-visible){-webkit-transition:opacity 0.5s;transition:opacity 0.5s;opacity:1;visibility:visible;z-index:100}:host(.li-popup-arrow)::before{display:block}:host(.li-popup-placement-top){top:calc(var(--li-popup-top) - var(--li-arrow-size) * 1.414 / 2)}:host(.li-popup-placement-top)::before{content:"";position:absolute;width:var(--li-arrow-size, 10px);height:var(--li-arrow-size, 10px);border-top:1px solid #bfbfbf;border-left:1px solid #bfbfbf;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);background-color:#fff;z-index:0;left:calc(50% - var(--li-arrow-size) / 2);bottom:calc(-1 * var(--li-arrow-size) / 2 - 1px)}:host(.li-popup-placement-left){left:calc(var(--li-popup-left) - var(--li-arrow-size) * 1.414 / 2)}:host(.li-popup-placement-left)::before{content:"";position:absolute;width:var(--li-arrow-size, 10px);height:var(--li-arrow-size, 10px);border-top:1px solid #bfbfbf;border-left:1px solid #bfbfbf;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(135deg);transform:rotate(135deg);background-color:#fff;z-index:0;top:calc(50% - var(--li-arrow-size) / 2);right:calc(-1 * var(--li-arrow-size) / 2 - 1px)}:host(.li-popup-placement-right){left:calc(var(--li-popup-left) + var(--li-arrow-size) * 1.414 / 2)}:host(.li-popup-placement-right)::before{content:"";position:absolute;width:var(--li-arrow-size, 10px);height:var(--li-arrow-size, 10px);border-top:1px solid #bfbfbf;border-left:1px solid #bfbfbf;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);background-color:#fff;z-index:0;top:calc(50% - var(--li-arrow-size) / 2);left:calc(-1 * var(--li-arrow-size) / 2 - 1px)}:host(.li-popup-placement-bottom){top:calc(var(--li-popup-top) + var(--li-arrow-size) * 1.414 / 2)}:host(.li-popup-placement-bottom)::before{content:"";position:absolute;width:var(--li-arrow-size, 10px);height:var(--li-arrow-size, 10px);border-top:1px solid #bfbfbf;border-left:1px solid #bfbfbf;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate(45deg);transform:rotate(45deg);background-color:#fff;z-index:0;left:calc(50% - var(--li-arrow-size) / 2);top:calc(-1 * var(--li-arrow-size) / 2 - 1px)}';export{s as li_popup}