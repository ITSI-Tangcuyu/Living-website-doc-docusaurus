System.register(["./p-0de9bb69.system.js","./p-8df5e58b.system.js"],(function(o){"use strict";var t,r,a,e;return{setters:[function(o){t=o.r;r=o.h;a=o.H},function(o){e=o.c}],execute:function(){var i=":host{--background:var(--li-token-color-background-surface);--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);--radius:var(--li-token-radius-large);--box-shadow:var(--li-token-shadow-raised-standard);--box-shadow-hover:var(--li-token-shadow-raised-hover);--box-shadow-focus:0 0 0 var(--li-token-line-weight-highlight)\n    var(--li-token-color-functional-focus);--box-shadow-active:var(--li-token-shadow-raised-pressed);--spacing-body:var(--li-token-spacing-unit-x6);--spacing-body-slotted:0;--spacing-body-slotted-interactive:0}.card-border{border:1px solid transparent}.card{width:100%;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);-webkit-transition:var(--transition);transition:var(--transition);border-radius:var(--radius);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}.card__body{padding:var(--spacing-body)}.card__body ::slotted(*){margin:var(--spacing-body-slotted)}.card--interactive{color:inherit;cursor:pointer;display:block;outline:none;text-decoration:none}.card--interactive:hover{-webkit-box-shadow:var(--box-shadow-hover);box-shadow:var(--box-shadow-hover)}.card--interactive:focus{-webkit-box-shadow:var(--li-token-shadow-raised-hover), var(--box-shadow-focus);box-shadow:var(--li-token-shadow-raised-hover), var(--box-shadow-focus)}.card--interactive:active{border:none;-webkit-box-shadow:var(--box-shadow-active);box-shadow:var(--box-shadow-active)}.card--interactive .card__body ::slotted(*){margin:var(--spacing-body-slotted-interactive)}";var n=o("li_card",function(){function o(o){t(this,o);this.to="";this.label="";this.target="";this.rel=""}o.prototype.connectedCallback=function(){};o.prototype.componentWillLoad=function(){};o.prototype.componentDidLoad=function(){};o.prototype.componentWillUpdate=function(){};o.prototype.componentDidUpdate=function(){};o.prototype.componentWillRender=function(){};o.prototype.componentShouldRender=function(){};o.prototype.componentDidRender=function(){};o.prototype.disconnectedCallback=function(){};o.prototype.getCssClassMap=function(){return e("card",!!this.to&&"card--interactive")};o.prototype.render=function(){var o;var t=!!this.to?"a":"div";return r(a,null,this.styles&&r("style",null,this.styles),r("div",{class:"card-border",part:"border"},r(t,Object.assign({class:this.getCssClassMap(),part:e("base",!!this.to&&"interactive")},!this.to?{role:"group"}:{},!!this.to?{href:this.to}:{},!!this.target?{target:this.target}:{},!!this.rel?{rel:this.rel}:{},!!this.label?(o={},o["aria-label"]=this.label,o):{}),r("div",null,r("slot",null)))))};return o}());n.style=i}}}));