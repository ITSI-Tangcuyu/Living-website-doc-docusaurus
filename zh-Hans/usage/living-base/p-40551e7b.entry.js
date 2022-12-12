import{r as t,c as o,h as n,H as i,g as a}from"./p-8d227782.js";import{c as e}from"./p-fdf6920f.js";let l=0;const r=class{constructor(n){t(this,n),this.liExpand=o(this,"liExpand",7),this.headingLevel=2,this.iconLocation="left",this.handleClick=()=>{this.expanded=!this.expanded,this.liExpand.emit({expanded:this.expanded})}}componentWillLoad(){const t=l++;this.headingId="collapsable-heading-"+t,this.panelId="collapsable-panel-"+t}getCssClassMap(){return e("collapsible",this.expanded&&"collapsible--expanded")}render(){return n(i,null,this.styles&&n("style",null,this.styles),n("div",{class:this.getCssClassMap(),part:e("base",this.expanded&&"expended")},n("h2",{"aria-level":this.headingLevel,class:"collapsible__heading",part:"heading"},n("button",{id:this.headingId,class:"collapsible__button",part:"button",onClick:this.handleClick,"aria-expanded":this.expanded?"true":"false","aria-controls":this.panelId},"left"===this.iconLocation?n("li-icon-navigation-collapse-down",{size:16,decorative:!0,class:"collapsible__icon",part:e("icon",this.expanded&&"expanded")}):null,n("span",{ref:t=>this.headingElement=t,class:"collapsible__button-text",part:"button-text"},n("slot",{name:"heading"})),"right"===this.iconLocation?n("li-icon-navigation-collapse-down",{size:16,decorative:!0,class:"collapsible__icon collapsible__icon-right",part:e("icon",this.expanded&&"expanded")}):null)),n("div",{id:this.panelId,role:"region","aria-labelledby":this.headingId,hidden:!this.expanded,class:"collapsible__content",part:"content"},n("slot",null))))}get hostElement(){return a(this)}};r.style=':host{--spacing-y:var(--li-token-spacing-unit-x4);--font-size-button:var(--li-token-typography-font-size-callout);--font-weight-button:var(--li-token-typography-font-weight-extra-bold);--line-height-button:var(--li-token-typography-line-spacing-standard);--border-width-button:var(--li-token-spacing-unit-x05);--radius-button:var(--li-token-radius-small);--spacing-left-button:var(--li-token-spacing-unit-x1);--spacing-left-button-text:var(--li-token-spacing-unit-x2);--color-button-hover:var(--li-token-color-text-and-icon-primary-hovered);--color-button-active:var(--li-token-color-text-and-icon-primary-pressed);--background-button-hover:var(--li-token-color-ui-state-fill-hovered);--border-color-button-focus:var(--li-token-color-functional-focus);--spacing-top-icon:calc(var(--li-token-spacing-unit-x1) + 1px);--spacing-right-content:var(--li-token-spacing-unit-x12);--spacing-left-content:var(--li-token-spacing-unit-x8);--spacing-top-content:var(--li-token-spacing-unit-x4);--spacing-bottom-content:var(--li-token-spacing-unit-x6)}.collapsible{position:relative;margin:var(--spacing-y) 0}.collapsible--expanded:before{top:0;left:0;right:0;width:100%;border:var(--li-token-spacing-unit-x025) solid transparent;content:"";display:block;position:absolute;pointer-events:none;bottom:calc(-1 * var(--spacing-y))}.collapsible__heading{margin:0}.collapsible__button{color:currentColor;width:100%;display:-ms-flexbox;display:flex;text-align:left;-ms-flex-align:start;align-items:flex-start;padding-top:0;border-color:transparent;border-style:solid;padding-right:0;padding-bottom:0;background-color:transparent;font-size:var(--font-size-button);font-weight:var(--font-weight-button);line-height:var(--line-height-button);border-width:var(--border-width-button);border-radius:var(--radius-button);padding-left:var(--spacing-left-button);font-family:inherit;word-spacing:inherit;letter-spacing:inherit}.collapsible__button-text{margin-left:var(--spacing-left-button-text)}.collapsible__button:hover{cursor:pointer;color:var(--color-button-hover);background-color:var(--background-button-hover)}.collapsible__button:active{color:var(--color-button-active);background-color:transparent}.collapsible__button:focus{outline:none;border-color:var(--border-color-button-focus)}.collapsible__icon{-webkit-transform:rotate(0.75turn);transform:rotate(0.75turn);-ms-flex-negative:0;flex-shrink:0;margin-top:var(--spacing-top-icon)}.collapsible__icon-right{margin-left:auto}.collapsible__button[aria-expanded=true] .collapsible__icon{-webkit-transform:none;transform:none}.collapsible__content{padding-right:var(--spacing-right-content);padding-left:var(--spacing-left-content);margin-top:var(--spacing-top-content);margin-bottom:var(--spacing-bottom-content)}';export{r as li_collapsible}