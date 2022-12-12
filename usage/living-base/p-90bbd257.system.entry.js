System.register(["./p-95475f0a.system.js","./p-8df5e58b.system.js"],(function(t){"use strict";var e,r,n,a,o;return{setters:[function(t){e=t.r;r=t.h;n=t.H;a=t.g},function(t){o=t.c}],execute:function(){var i=":host{--tab-height:var(--li-token-spacing-unit-x10);--tab-spacing:var(--li-token-spacing-unit-x6);--tab-radius:var(--li-token-radius-small);--tab-border-size:var(--li-token-line-weight-highlight);--tab-border-size-selected:var(--li-token-line-weight-bold);--tab-border-color:var(--li-token-color-ui-subtle)}";var l="ArrowLeft";var s="ArrowRight";var u="Home";var c="End";var p=t("li_tab_nav",function(){function t(t){e(this,t);this.size="small"}t.prototype.sizeChange=function(){this.propagateSizeToTabs()};t.prototype.connectedCallback=function(){if(!this.el.hasAttribute("role")){this.el.setAttribute("role","tablist")}};t.prototype.componentWillLoad=function(){};t.prototype.componentDidLoad=function(){};t.prototype.componentWillUpdate=function(){};t.prototype.componentDidUpdate=function(){};t.prototype.componentWillRender=function(){};t.prototype.componentShouldRender=function(){};t.prototype.componentDidRender=function(){var t=this;Promise.all([customElements.whenDefined("li-tab-header"),customElements.whenDefined("li-tab-panel")]).then((function(){t.linkPanels();t.propagateSizeToTabs()}))};t.prototype.disconnectedCallback=function(){};t.prototype.handleClick=function(t){var e=t.target;if(e.getAttribute("role")!=="tab"){return}this.selectTab(e)};t.prototype.handleKeydown=function(t){var e=t.target;var r;if(e.getAttribute("role")!=="tab"){return}if(t.altKey){return}switch(t.key){case l:r=this.getPreviousTab();break;case s:r=this.getNextTab();break;case u:r=this.getFirstTab();break;case c:r=this.getLastTab();break;default:return}t.preventDefault();this.selectTab(r)};t.prototype.findPanelForTab=function(t){var e=t.getAttribute("aria-controls");return this.el.querySelector("#".concat(e))};t.prototype.getAllTabs=function(){return Array.from(this.el.querySelectorAll("li-tab-header"))};t.prototype.getAllEnabledTabs=function(){return Array.from(this.el.querySelectorAll("li-tab-header:not([disabled])"))};t.prototype.getAllPanels=function(){return Array.from(this.el.querySelectorAll("li-tab-panel"))};t.prototype.getBasePartMap=function(){return this.getCssOrBasePartMap("basePart")};t.prototype.getCssClassMap=function(){return this.getCssOrBasePartMap("css")};t.prototype.getCssOrBasePartMap=function(t){var e="tab-nav";var r=t==="basePart"?"":"".concat(e,"--");return o(e,this.size==="small"&&"".concat(r,"small"))};t.prototype.getFirstTab=function(){var t=this.getAllEnabledTabs();return t[0]};t.prototype.getLastTab=function(){var t=this.getAllEnabledTabs();return t[t.length-1]};t.prototype.getNextTab=function(){var t=this.getAllEnabledTabs();var e=t.findIndex((function(t){return t.selected}))+1;return t[e%t.length]};t.prototype.getPreviousTab=function(){var t=this.getAllEnabledTabs();var e=t.findIndex((function(t){return t.selected}))-1;return t[(e+t.length)%t.length]};t.prototype.linkPanels=function(){var t=this.getAllEnabledTabs();var e=t.find((function(t){return t.selected}))||t[0];t.forEach((function(t){var e=t.nextElementSibling;t.setAttribute("aria-controls",e===null||e===void 0?void 0:e.id);e===null||e===void 0?void 0:e.setAttribute("aria-labelledby",t.id)}));this.selectTab(e)};t.prototype.propagateSizeToTabs=function(){var t=this.size==="small"?"setAttribute":"removeAttribute";var e=this.getAllTabs();var r=this.getAllPanels();e.forEach((function(e){return e[t]("size","small")}));r.forEach((function(e){return e[t]("size","small")}))};t.prototype.reset=function(){var t=this.getAllEnabledTabs();var e=this.getAllPanels();t.forEach((function(t){return t.selected=false}));e.forEach((function(t){return t.hidden=true}))};t.prototype.selectTab=function(t){var e=this.findPanelForTab(t);this.reset();e.hidden=false;t.selected=true};t.prototype.render=function(){return r(n,null,this.styles&&r("style",null,this.styles),r("div",{part:this.getBasePartMap(),class:this.getCssClassMap()},r("slot",{name:"tab"}),r("slot",{name:"panel"})))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{size:["sizeChange"]}},enumerable:false,configurable:true});return t}());p.style=i}}}));