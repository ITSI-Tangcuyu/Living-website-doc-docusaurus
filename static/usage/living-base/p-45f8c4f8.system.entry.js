System.register(["./p-0de9bb69.system.js","./p-8df5e58b.system.js"],(function(e){"use strict";var t,o,a,i,n;return{setters:[function(e){t=e.r;o=e.h;a=e.H;i=e.g},function(e){n=e.c}],execute:function(){var r=':host{--opacity-chevron:1;--border-bottom-color:var(--li-token-color-ui-faint);--border-left-color-third-nesting:var(--li-token-color-ui-strong);--color-active:var(--li-token-color-text-and-icon-primary-pressed);--color-hover:var(--li-token-color-text-and-icon-primary-hovered);--color-primary:var(--li-token-color-text-and-icon-primary-hovered);--background-color-before-active:var(--color-primary);--font-weight-bold:var(--li-token-typography-font-weight-bold);--box-shadow-focus:inset 0 0 0 var(--li-token-line-weight-highlight)\n    var(--li-token-color-functional-focus)}.sidebar-nav-collapsible{margin:0;border-bottom-color:var(--border-bottom-color);border-bottom-style:solid;border-bottom-width:0}.sidebar-nav-collapsible--condensed{border-bottom-width:1px}.sidebar-nav-collapsible__wrapper{border-bottom-color:var(--border-bottom-color);border-bottom-style:solid;border-bottom-width:1px}.sidebar-nav-collapsible--condensed .sidebar-nav-collapsible__wrapper{border-bottom-width:0}.sidebar-nav-collapsible__button{color:currentColor;width:100%;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:left;-ms-flex-align:center;align-items:center;padding-top:1rem;padding-right:calc(0.5 * var(--spacing-indent));padding-bottom:1rem;padding-left:var(--spacing-indent);-ms-flex-pack:justify;justify-content:space-between;text-decoration:none;font-family:inherit;border-radius:var(--li-token-radius-small)}.sidebar-nav-collapsible__button:hover{color:var(--color-hover)}.sidebar-nav-collapsible__button:active{color:var(--color-active)}.sidebar-nav-collapsible__button:focus{outline:none;-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}.sidebar-nav-collapsible--active .sidebar-nav-collapsible__button{position:relative;color:var(--color-primary)}.sidebar-nav-collapsible--active .sidebar-nav-collapsible__button::before{content:"";display:block;position:absolute;top:0;left:var(--left-current-border, 0);width:0;height:100%;background-color:var(--color-primary);border-left:2px solid transparent}:host([nesting-level="1"]) .sidebar-nav-collapsible__button,.sidebar-nav-collapsible--bold .sidebar-nav-collapsible__button{font-weight:var(--font-weight-bold)}:host([nesting-level="2"]) .sidebar-nav-collapsible__button{padding-left:calc(var(--spacing-indent) + 0.75rem)}.sidebar-nav-collapsible__icon{-webkit-transition:opacity 150ms;transition:opacity 150ms}[aria-expanded=true] .sidebar-nav-collapsible__icon{-webkit-transform:rotate(0.5turn);transform:rotate(0.5turn)}@media (hover: hover){[aria-expanded=false] .sidebar-nav-collapsible__icon{opacity:var(--opacity-chevron, 1)}.sidebar-nav-collapsible__button:hover .sidebar-nav-collapsible__icon{opacity:1}.sidebar-nav-collapsible__button:focus .sidebar-nav-collapsible__icon{opacity:1}}.sidebar-nav-collapsible__list{list-style:none;padding-left:0;margin-top:0;margin-bottom:0;border-bottom-width:1px;}.sidebar-nav-collapsible--condensed .sidebar-nav-collapsible__list{margin-top:1em;margin-left:var(--spacing-indent);margin-bottom:2em}';var l=e("li_sidebar_nav_collapsible",function(){function e(e){var o=this;t(this,e);this.active=false;this.bold=false;this.condensed=false;this.href="#";this.tag="li";this.handleClick=function(e){e.preventDefault();o.expanded=!o.expanded};this.handleKeydown=function(e){if(e.metaKey||e.ctrlKey||e.shiftKey){return}if(e.defaultPrevented){return}if(e.code==="Space"){o.expanded=!o.expanded}}}e.prototype.nestingLevelChanged=function(e){if(e===1){this.bold=true}};e.prototype.connectedCallback=function(){};e.prototype.componentWillLoad=function(){};e.prototype.componentDidLoad=function(){};e.prototype.componentWillUpdate=function(){};e.prototype.componentDidUpdate=function(){};e.prototype.componentWillRender=function(){};e.prototype.componentShouldRender=function(){};e.prototype.componentDidRender=function(){};e.prototype.disconnectedCallback=function(){};e.prototype.getBasePartMap=function(){return this.getCssOrBasePartMap("basePart")};e.prototype.getCssClassMap=function(){return this.getCssOrBasePartMap("css")};e.prototype.getCssOrBasePartMap=function(e){var t="li-nav-collapsible";var o=e==="basePart"?"":"".concat(t,"--");return n(t,this.condensed&&"".concat(o,"condensed"),this.active&&"".concat(o,"active"))};e.prototype.render=function(){var e=typeof this.tag;return o(a,null,this.styles&&o("style",null,this.styles),o(e,{part:this.getBasePartMap(),class:this.getCssClassMap(),role:"listitem"},o("div",{class:"sidebar-nav-collapsible__wrapper",part:"wrapper"},o("a",{href:this.href,class:"sidebar-nav-collapsible__button",onClick:this.handleClick,onKeyDown:this.handleKeydown,role:"button","aria-expended":this.expanded?"true":"false",part:n("button",this.active&&"button-active")},this.label,o("li-icon-navigation-collapse-down",{class:"sidebar-nav-collapsible__icon",selected:this.bold,size:16,part:"icon"}))),o("ul",{hidden:!this.expanded,class:"sidebar-nav-collapsible__list",part:"list"},o("slot",null))))};Object.defineProperty(e.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{nestingLevel:["nestingLevelChanged"]}},enumerable:false,configurable:true});return e}());l.style=r}}}));