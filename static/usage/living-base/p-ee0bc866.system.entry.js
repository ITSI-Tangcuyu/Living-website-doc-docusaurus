System.register(["./p-95475f0a.system.js","./p-8df5e58b.system.js"],(function(t){"use strict";var i,e,n,r;return{setters:[function(t){i=t.r;e=t.h;n=t.H},function(t){r=t.c}],execute:function(){var o=":host{--width:100%;--height:100%;--spacing:var(--li-token-spacing-unit-x3);--color:var(--li-token-color-ui-faint);--border-width:var(--li-token-spacing-unit-x025);--min-height-vertical:var(--li-token-spacing-unit-x6);width:var(--width);height:var(--height)}.divider{padding:var(--spacing)}.divider--vertical{display:-ms-inline-flexbox;display:inline-flex;height:inherit}.divider__horizontal{margin:0;border:0;border-top:var(--border-width) solid var(--color)}.divider__vertical{display:-ms-inline-flexbox;display:inline-flex;height:inherit;min-height:var(--min-height-vertical);border-left:var(--border-width) solid var(--color)}";var a=t("li_divider",function(){function t(t){i(this,t);this.vertical=false}t.prototype.connectedCallback=function(){};t.prototype.componentWillLoad=function(){};t.prototype.componentDidLoad=function(){};t.prototype.componentWillUpdate=function(){};t.prototype.componentDidUpdate=function(){};t.prototype.componentWillRender=function(){};t.prototype.componentShouldRender=function(){};t.prototype.componentDidRender=function(){};t.prototype.disconnectedCallback=function(){};t.prototype.getCssClassMap=function(){return r("divider",this.vertical&&"divider--vertical")};t.prototype.render=function(){return e(n,null,this.styles&&e("style",null,this.styles),e("div",{class:this.getCssClassMap(),"aria-hidden":"true",part:r("base",this.vertical&&"vertical")},!this.vertical?e("hr",{class:"divider__horizontal",part:"rule-horizontal"}):e("span",{class:"divider__vertical",part:"rule-vertical"})))};return t}());a.style=o}}}));