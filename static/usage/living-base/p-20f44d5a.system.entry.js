System.register(["./p-0de9bb69.system.js"],(function(e){"use strict";var t,l,s;return{setters:[function(e){t=e.r;l=e.h;s=e.H}],execute:function(){var i=":host{display:block}:host li{padding:0;margin:0}:host .label{margin-right:0.625rem;cursor:pointer}:host .label.selected{border-bottom:3px solid #0a7bc7}:host .panel{position:absolute;left:0}";var n=e("li_tab",function(){function e(e){var l=this;t(this,e);this.selected=false;this.onTabClick=function(){l.selected=true}}e.prototype.render=function(){return l(s,null,l("li",null,l("div",{class:{label:true,selected:this.selected},onClick:this.onTabClick},l("slot",{name:"label"},this.label)),this.selected&&l("div",{class:"panel"},l("slot",null))))};return e}());n.style=i}}}));