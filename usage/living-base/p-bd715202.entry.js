import{r as s,h as t}from"./p-8d227782.js";const i=class{constructor(t){s(this,t),this.visible=!1,this.placement="top",this.arrow=!1,this.trigger="manual"}async show(s){this.popup.show(s)}async close(){this.popup.close()}render(){return t("li-popup",{ref:s=>this.popup=s,target:this.target,placement:this.placement,arrow:this.arrow,visible:this.visible,trigger:this.trigger},t("slot",{name:"header"}),t("slot",null),t("slot",{name:"footer"}))}};i.style=":host{display:block}";export{i as li_popover}