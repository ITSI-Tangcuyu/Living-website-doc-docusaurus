import{r as e,c as a,h as r,H as t}from"./p-8d227782.js";const i=class{constructor(r){e(this,r),this.liChange=a(this,"liChange",7),this.angle=!1,this.fixed=!1,this.toggle=()=>{this.fixed||(null!==this.headerIcon&&(this.angle=!this.angle),this.liChange.emit(this.angle))}}connectedCallback(){this.fixed&&(this.angle=!0)}render(){return r(t,null,r("div",{class:{"panel-header":!0,"panel-none-border":!this.angle},"data-fixed":this.fixed},r("div",{class:"panel-header-flex",onClick:this.toggle},r("div",{class:"header-arrow-root",ref:e=>this.headerIcon=e},r("div",{class:"header-arrow-icon"},r("span",{class:{right:!this.angle,down:this.angle}}))),r("div",{class:"header-title"},r("slot",{name:"header"}))),r("div",{class:"panel-header-extra"},r("slot",{name:"extra"}))),r("div",{class:{"panel-content":!0,"panel-hidden":!this.angle}},r("slot",null)))}};i.style=":host{--background-header:#f7f7f7;--height-header:2.75rem;--conent-padding:1rem 1rem;display:block;border:1px solid #c1c1c1;border-radius:var(--li-border-radius)}.panel-header{height:var(--height-header);background:var(--background-header);border-bottom:1px solid #dcdee2;padding-right:0.625rem;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.panel-header.panel-none-border{border-bottom:none}.panel-header .panel-header-flex{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;width:100%;cursor:pointer}.panel-header .panel-header-flex .header-arrow-root{display:inline-block;width:var(--height-header);height:var(--height-header)}.panel-header .panel-header-flex .header-title{-ms-flex:1;flex:1}.panel-header[data-fixed] .panel-header-flex{cursor:default}.panel-header[data-fixed] .panel-header-extra,.panel-header[data-fixed] .header-arrow-root{display:none}.panel-header[data-fixed] .header-title{padding-left:16px}.header-arrow-root>.header-arrow-icon{width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.header-arrow-root>.header-arrow-icon span{border:solid black;border-width:0 1px 1px 0;display:inline-block;padding:4px;-webkit-transition:-webkit-transform 0.4s ease-out 0s;transition:-webkit-transform 0.4s ease-out 0s;transition:transform 0.4s ease-out 0s;transition:transform 0.4s ease-out 0s, -webkit-transform 0.4s ease-out 0s}.header-arrow-root>.header-arrow-icon span.down{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.header-arrow-root>.header-arrow-icon span.right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.panel-content{height:auto;visibility:visible;-webkit-transition:all 0.4s linear;transition:all 0.4s linear;padding:var(--conent-padding);opacity:1}.panel-content.panel-hidden{--conent-padding:0 0;opacity:0;min-height:0;height:0;width:0;overflow:hidden;visibility:hidden}.panel-content ::slotted{display:contents}";export{i as li_panel}