System.register(["./p-0de9bb69.system.js"],(function(t){"use strict";var e,i,n;return{setters:[function(t){e=t.r;i=t.h;n=t.H}],execute:function(){var s=":host{display:block;font-size:var(--li-font-size)}:host>ul{margin:0 !important}:host ul{list-style-type:none;margin:0 0 0 0.75rem;padding:0;position:relative}:host ul.expanded{display:block}:host ul.collapsed{display:none}";var l=t("li_tree",function(){function t(t){e(this,t);this.listData=[];this.height=60;this.bufferSize=5;this.mode="default";this.showLine=false;this.checkStrictly=false}t.prototype.render=function(){return i(n,null,i("div",null,this.listData.map((function(t){return i("div",null,i("li-tree-node",{text:t.name},t.name))}))))};return t}());l.style=s}}}));