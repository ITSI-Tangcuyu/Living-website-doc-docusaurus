System.register(["./p-95475f0a.system.js","./p-477d2290.system.js"],(function(e){"use strict";var t,i,s,n;return{setters:[function(e){t=e.r;i=e.h;s=e.H},function(e){n=e.c}],execute:function(){var o=":host{display:none;position:fixed;top:0;right:0;bottom:0;left:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.6);outline:none;pointer-events:all;overflow:auto;margin:0}:host(.li-dialog-visible){display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:1000}:host(.li-dialog-visible) .inner-popup{top:20%;min-width:20rem;min-height:6rem;max-height:94%;max-width:90%;-webkit-box-shadow:0 0 0 0.0625rem rgba(0, 0, 0, 0.42), 0 1.25rem 5rem 0 rgba(0, 0, 0, 0.3);box-shadow:0 0 0 0.0625rem rgba(0, 0, 0, 0.42), 0 1.25rem 5rem 0 rgba(0, 0, 0, 0.3)}";var r=e("li_dialog",function(){function e(e){t(this,e);this.visible=false}e.prototype.render=function(){var e=n("dialog",{visible:this.visible});var t={width:typeof this.width==="number"?"".concat(this.width,"px"):this.width,height:typeof this.height==="number"?"".concat(this.height,"px"):this.height};return i(s,{class:e},i("li-popup",{class:"inner-popup",trigger:"manual",visible:this.visible,style:t},i("slot",{name:"header"}),i("slot",null),i("slot",{name:"footer"})))};return e}());r.style=o}}}));