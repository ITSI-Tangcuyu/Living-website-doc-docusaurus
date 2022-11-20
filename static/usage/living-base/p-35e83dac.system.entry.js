var __awaiter=this&&this.__awaiter||function(t,e,n,r){function a(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function o(t){try{c(r.next(t))}catch(t){i(t)}}function s(t){try{c(r["throw"](t))}catch(t){i(t)}}function c(t){t.done?n(t.value):a(t.value).then(o,s)}c((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return c([t,e])}}function c(o){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=e.call(t,n)}catch(t){o=[6,t];a=0}finally{r=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-95475f0a.system.js"],(function(t){"use strict";var e,n,r,a;return{setters:[function(t){e=t.r;n=t.h;r=t.H;a=t.g}],execute:function(){var i=":host{display:inline-block;width:-webkit-fill-available;overflow:hidden;text-align:initial}";var o=t("li_marquee",function(){function t(t){e(this,t);this.player=null;this.loopCount=0;this.rafId=null;this.behavior="scroll";this.direction="up";this.loop=-1;this.scrollAmount=6;this.scrollDelay=85}t.prototype.propsChanged=function(){this.destroy();this.loopCount=0;this.start()};t.prototype.componentDidLoad=function(){this.start()};t.prototype.disconnectedCallback=function(){this.destroy()};t.prototype.start=function(){return __awaiter(this,void 0,void 0,(function(){var t;var e=this;return __generator(this,(function(n){if(((t=this.player)===null||t===void 0?void 0:t.playState)==="paused"){this.player.play()}if(this.rafId||this.player){return[2]}this.rafId=requestAnimationFrame((function(){e.rafId=null;e.continue()}));return[2]}))}))};t.prototype.stop=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){(t=this.player)===null||t===void 0?void 0:t.pause();return[2]}))}))};t.prototype.destroy=function(){if(this.rafId){cancelAnimationFrame(this.rafId);this.rafId=null;return}if(this.player){var t=this.player;this.player=null;t.cancel()}};t.prototype.getGetMetrics=function(){this.mover.style.width="-webkit-max-content";var t=getComputedStyle(this.mover);var e=getComputedStyle(this.el);this.mover.style.width="";return{contentWidth:parseFloat(t.width),contentHeight:parseFloat(t.height),marqueeWidth:parseFloat(e.width),marqueeHeight:parseFloat(e.height)}};t.prototype.getAnimationParameters=function(){var t=this.getGetMetrics();var e=t.marqueeWidth+t.contentWidth;var n=t.marqueeHeight+t.contentHeight;var r=t.marqueeWidth-t.contentWidth;var a=t.marqueeHeight-t.contentHeight;var i={transformBegin:"",transformEnd:"",distance:0};switch(this.behavior){case"scroll":default:switch(this.direction){case"right":i.transformBegin="translateX(-".concat(t.contentWidth,"px)");i.transformEnd="translateX(".concat(t.marqueeWidth,"px)");i.distance=e;break;case"up":i.transformBegin="translateY(".concat(t.marqueeHeight,"px)");i.transformEnd="translateY(-".concat(t.contentHeight,"px)");i.distance=n;break;case"down":i.transformBegin="translateY(-".concat(t.contentHeight,"px)");i.transformEnd="translateY(".concat(t.marqueeHeight,"px)");i.distance=n;break;case"left":default:i.transformBegin="translateX(".concat(t.marqueeWidth,"px)");i.transformEnd="translateX(-100%)";i.distance=e;break}break;case"alternate":switch(this.direction){case"right":i.transformBegin="translateX(0)";i.transformEnd="translateX(".concat(r,"px)");i.distance=r;break;case"up":i.transformBegin="translateY(".concat(a,"px)");i.transformEnd="translateY(0)";i.distance=a;break;case"down":i.transformBegin="translateY(0)";i.transformEnd="translateY(".concat(a,"px)");i.distance=a;break;case"left":default:i.transformBegin="translateX(".concat(r,"px)");i.transformEnd="translateX(0)";i.distance=r;break}if(this.loopCount%2){var o=i.transformBegin;i.transformBegin=i.transformEnd;i.transformEnd=o}break;case"slide":switch(this.direction){case"right":i.transformBegin="translateX(-".concat(t.contentWidth,"px)");i.transformEnd="translateX(".concat(r,"px)");i.distance=t.marqueeWidth;break;case"up":i.transformBegin="translateY(".concat(t.marqueeHeight,"px)");i.transformEnd="translateY(0)";i.distance=t.marqueeHeight;break;case"down":i.transformBegin="translateY(-".concat(t.contentHeight,"px)");i.transformEnd="translateY(".concat(a,"px)");i.distance=t.marqueeHeight;break;case"left":default:i.transformBegin="translateX(".concat(t.marqueeWidth,"px)");i.transformEnd="translateX(0)";i.distance=t.marqueeWidth;break}break}return i};t.prototype.shouldContinue=function(){var t=this.loop;if(t<=0&&this.behavior==="slide"){t=1}if(t<=0){return true}return this.loopCount<t};t.prototype.continue=function(){var t=this;if(!this.shouldContinue()){this.player=null;this.el.dispatchEvent(new CustomEvent("finish"));return}var e=this.getAnimationParameters();var n=this.mover.animate([{transform:e.transformBegin},{transform:e.transformEnd}],{duration:e.distance*this.scrollDelay/this.scrollAmount,fill:"forwards"});this.player=n;var r=function(){if(n!==t.player){return}++t.loopCount;t.continue()};n.removeEventListener("finish",r);n.addEventListener("finish",r)};t.prototype.render=function(){var t=this;return n(r,null,n("div",{ref:function(e){return t.mover=e}},n("slot",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{behavior:["propsChanged"],direction:["propsChanged"],loop:["propsChanged"],scrollAmount:["propsChanged"],scrollDelay:["propsChanged"]}},enumerable:false,configurable:true});return t}());o.style=i}}}));