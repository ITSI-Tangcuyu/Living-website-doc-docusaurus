System.register(["./p-95475f0a.system.js","./p-8df5e58b.system.js","./p-06c2412e.system.js"],(function(e){"use strict";var t,r,i,n,o,s;return{setters:[function(e){t=e.r;r=e.h;i=e.H;n=e.g},function(e){o=e.c},function(e){s=e.s}],execute:function(){var a=".carousel{width:400px;height:300px;position:relative}.carousel__container{width:100%;height:100%;margin:0;display:-ms-flexbox;display:flex;padding:0;overflow:hidden;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center}.carousel__slide{height:100%;position:relative;min-width:100%;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}.carousel__arrow{top:50%;color:#fff;width:24px;border:none;cursor:pointer;height:24px;display:-ms-flexbox;display:flex;outline:none;z-index:99;position:absolute;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:rgba(31, 45, 61, 0.11);-ms-flex-align:center;align-items:center;border-radius:50%;-ms-flex-pack:center;justify-content:center}.carousel__arrow--left{left:12px}.carousel__arrow--right{right:12px}.carousel__indicators{left:50%;bottom:12px;margin:0;display:-ms-inline-flexbox;display:inline-flex;padding:0;z-index:2;position:absolute;-webkit-transform:translateX(-50%);transform:translateX(-50%);list-style:none}.carousel__indicator{width:30px;border:none;cursor:pointer;height:4px;margin:0 6px;display:block;opacity:0.5;outline:none;padding:0;background:#fff;-webkit-transition:0.3s;transition:0.3s}.carousel__indicator--active{opacity:1}.carousel--vertical .carousel__container{-ms-flex-direction:column;flex-direction:column}.carousel--vertical .carousel__arrow{display:none}.carousel--vertical .carousel__indicators{top:50%;left:unset;right:12px;bottom:0;display:-ms-flexbox;display:flex;-webkit-transform:translateY(-50%);transform:translateY(-50%);-ms-flex-direction:column;flex-direction:column}.carousel--vertical .carousel__indicator{width:4px;height:30px;margin:6px 0}";var l=e("li_carousel",function(){function e(e){var r=this;t(this,e);this.slidesArray=[];this.value=0;this.vertical=false;this.handleSlideChange=function(e){var t=r.value;if(e==="prev"){t===0?r.value=-100*(r.slidesArray.length-1):r.value=t+100}if(e==="next"){t===-100*(r.slidesArray.length-1)?r.value=0:r.value=t-100}};this.setActiveCssClass=function(e){if(Math.abs(r.value)/100===e){return"carousel__inidcator-active"}return""};this.setActiveSlide=function(e){r.value=-100*e};this.setTransformValue=function(){if(!!r.vertical){return"translateY".concat(r.value,"%")}return"translateX".concat(r.value,"%")}}e.prototype.connectedCallback=function(){s({source:this.el,type:"warn"})};e.prototype.componentWillLoad=function(){if(this.slidesArray.length===0){var e=this.el.children;for(var t=0;t<e.length;t++){if(e[t].slot===""){for(var r=0;r<e[t].children.length;r++){var i=e[t].children[r];this.slidesArray.push(i)}}}}};e.prototype.componentDidLoad=function(){};e.prototype.componentWillUpdate=function(){};e.prototype.componentDidUpdate=function(){};e.prototype.componentWillRender=function(){};e.prototype.componentShouldRender=function(){};e.prototype.componentDidRender=function(){};e.prototype.disconnectedCallback=function(){};e.prototype.getCssClassMap=function(){return o("carousel",this.vertical&&"carousel--vertical")};e.prototype.render=function(){var e=this;return r(i,null,this.styles&&r("style",null,this.styles)," ",r("div",{class:this.getCssClassMap()},r("div",{class:"carousel__container"},r("div",{class:"carousel__arrow carousel__arrow--left",onClick:function(){return e.handleSlideChange("prev")}},r("slot",{name:"arrow-left"})),this.slidesArray.map((function(t){r("div",{class:"carousel__slide",style:{transform:e.setTransformValue()}},r("div",{innerHTML:t.outerHTML}))})),r("div",{class:"carousel__arrow carousel__arrow--right",onClick:function(){return e.handleSlideChange("next")}},r("slot",{name:"arrow-right"}))),r("ul",{class:"carousel__indicators"},Array.from(Array(this.slidesArray.length).keys()).map((function(t){r("li",{key:t,class:"carousel__indicator ".concat(e.setActiveCssClass(t)),onClick:function(){return e.setActiveSlide(t)}})})))))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());l.style=a}}}));