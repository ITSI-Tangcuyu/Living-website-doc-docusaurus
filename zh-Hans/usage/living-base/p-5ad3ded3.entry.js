import{r as t,h as e,H as s,g as i}from"./p-8d227782.js";import{c as n}from"./p-fdf6920f.js";const l=class{constructor(e){t(this,e),this.isNested=!1,this.ordered=!1}orderedChange(t){this.propagatePropsToChildren(t)}connectedCallback(){this.isNested=null!=this.el.closest("li-list-item"),this.isNested?this.el.setAttribute("slot","nested"):this.el.removeAttribute("slot")}componentWillLoad(){}componentDidLoad(){this.propagatePropsToChildren(this.ordered)}componentWillUpdate(){}componentDidUpdate(){}componentWillRender(){}componentShouldRender(){}componentDidRender(){}disconnectedCallback(){}propagatePropsToChildren(t){Array.from(this.el.children).filter((t=>t.matches("li-list-item"))).forEach(((e,s)=>{e.ordered=t,e.index=s+1}))}getCssClassMap(){return n("list",this.ordered&&"list--type-ordered",this.isNested&&"list--nested")}render(){const t=this.ordered?"ol":"ul";return e(s,null,this.styles&&e("style",null,this.styles),e(t,{class:this.getCssClassMap(),part:n("base",this.ordered&&"list--type-ordered",this.isNested&&"list--nested")},e("slot",null)))}get el(){return i(this)}static get watchers(){return{ordered:["orderedChange"]}}};l.style=":host{--spacing-left:0;--spacing-left-nested:var(--li-token-spacing-unit-x2)}.list{padding-left:var(--spacing-left)}.list--nested{margin-top:0;margin-bottom:0;padding-left:var(--spacing-left-nested)}";export{l as li_list}