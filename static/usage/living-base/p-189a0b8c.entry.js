import{r as e,h as t,H as i,g as r}from"./p-8d227782.js";import{c as n}from"./p-fdf6920f.js";const o=class{constructor(t){e(this,t),this.hasNestedChild=!1,this.isNested=!1,this.marker=!0,this.ordered=!1,this.handleSlotChange=({target:e})=>{this.hasNestedChild=e.assignedNodes().length>0,this.isNested=this.isNestedCheck()},this.isNestedCheck=()=>null!=this.el.closest('li-list[slot="nested"]')}connectedCallback(){this.el.hasAttribute("role")||this.el.setAttribute("role","listitem")}componentWillLoad(){this.isNested=this.isNestedCheck()}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}componentWillRender(){}componentShouldRender(){}componentDidRender(){}disconnectedCallback(){}getCssClassMap(){return n("list-item",this.isNested&&"list-item--nested","list-item--"+(this.ordered?"ordered":"unordered"),!this.marker&&"list-item--no-marker")}render(){return t(i,null,this.styles&&t("style",null,this.styles),t("div",{class:this.getCssClassMap(),"data-index":this.index,part:n("base",this.ordered?"ordered":"unordered",this.isNested&&"nested",!this.marker&&"no-marker")},t("slot",null),t("div",{class:"list-item--nested-list",part:"nested-list",hidden:!this.hasNestedChild},t("slot",{name:"nested",onSlotchange:this.handleSlotChange}))))}get el(){return r(this)}};o.style=':host(li-list-item){--display:block;--font-size:var(--li-token-typography-font-size-body);--line-height:var(--li-token-typography-line-spacing-standard);--spacing-left:calc(0.25ch + var(--li-token-spacing-unit-x4));--font-size-marker-ordered:var(--li-token-typography-font-size-body);--font-weight-marker-ordered:var(--li-token-typography-font-weight-bold);--font-size-marker-ordered-nested:var(--li-token-typography-font-size-small);--line-height-marker-ordered-nested:var(--li-token-typography-line-spacing-standard);--spacing-top-marker-ordered-nested:calc(var(--li-token-spacing-unit-x4) - var(--li-token-spacing-unit-x3));--spacing-right-no-marker:var(--li-token-spacing-unit-x2);display:var(--display)}.list-item{position:relative;font-size:var(--font-size);line-height:var(--line-height);padding-left:var(--spacing-left)}.list-item:before{content:"";position:absolute;top:0;left:0}.list-item--unordered:before{top:0.5em;border:var(--li-token-spacing-unit-x025) solid currentColor;display:block;-webkit-transform:li(0.66);transform:li(0.66);background:currentColor;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:50%;width:var(--li-token-spacing-unit-x2);height:var(--li-token-spacing-unit-x2)}.list-item--nested.list-item--unordered:before{border:var(--li-token-spacing-unit-x025) solid currentColor;background:transparent}.list-item--ordered:before{content:attr(data-index) ".";font-size:var(--font-size-marker-ordered);font-weight:var(--font-weight-marker-ordered)}.list-item--nested.list-item--ordered:before{font-size:var(--font-size-marker-ordered-nested);line-height:var(--line-height-marker-ordered-nested);padding-top:var(--spacing-top-marker-ordered-nested)}.list-item--no-marker{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0}.list-item--no-marker:before{display:none}.list-item--no-marker>::slotted(*){margin-right:var(--spacing-right-no-marker)}';export{o as li_list_item}