var __extends=this&&this.__extends||function(){var e=function(t,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r))e[r]=t[r]};return e(t,r)};return function(t,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,t,r,n){function a(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{o(n.next(e))}catch(e){i(e)}}function s(e){try{o(n["throw"](e))}catch(e){i(e)}}function o(e){e.done?r(e.value):a(e.value).then(l,s)}o((n=n.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(e){return function(t){return o([e,t])}}function o(l){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,a=t.length,i;n<a;n++){if(i||!(n in t)){if(!i)i=Array.prototype.slice.call(t,0,n);i[n]=t[n]}}return e.concat(i||Array.prototype.slice.call(t))};System.register([],(function(e,t){"use strict";return{execute:function(){var r=this;var n=e("N","living-base");var a;var i;var l=false;var s=false;var o=typeof window!=="undefined"?window:{};var f=o.document||{head:{}};var u={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,t,r,n){return e.addEventListener(t,r,n)},rel:function(e,t,r,n){return e.removeEventListener(t,r,n)},ce:function(e,t){return new CustomEvent(e,t)}};var $=e("p",(function(e){return Promise.resolve(e)}));var c=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replaceSync==="function"}catch(e){}return false}();var v=function(e,t,r,n){if(r){r.map((function(r){var n=r[0],a=r[1],i=r[2];var l=d(e,n);var s=p(t,i);var o=h(n);u.ael(l,a,s,o);(t.$rmListeners$=t.$rmListeners$||[]).push((function(){return u.rel(l,a,s,o)}))}))}};var p=function(e,t){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[t](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,r])}}}catch(e){ke(e)}}};var d=function(e,t){if(t&4)return f;if(t&8)return o;return e};var h=function(e){return(e&2)!==0};var m="{visibility:hidden}.hydrated{visibility:inherit}";var y="http://www.w3.org/1999/xlink";var g=function(e,t){if(t===void 0){t=""}{return function(){return}}};var b=function(e,t){{return function(){return}}};var w=new WeakMap;var _=function(e,t,r){var n=xe.get(e);if(c&&r){n=n||new CSSStyleSheet;if(typeof n==="string"){n=t}else{n.replaceSync(t)}}else{n=t}xe.set(e,n)};var S=function(e,t,r,n){var a=R(t);var i=xe.get(a);e=e.nodeType===11?e:f;if(i){if(typeof i==="string"){e=e.head||e;var l=w.get(e);var s=void 0;if(!l){w.set(e,l=new Set)}if(!l.has(a)){{{s=f.createElement("style");s.innerHTML=i}e.insertBefore(s,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArray(__spreadArray([],e.adoptedStyleSheets,true),[i],false)}}return a};var k=function(e){var t=e.$cmpMeta$;var r=e.$hostElement$;var n=t.$flags$;var a=g("attachStyles",t.$tagName$);var i=S(r.shadowRoot?r.shadowRoot:r.getRootNode(),t);if(n&10){r["s-sc"]=i;r.classList.add(i+"-h")}a()};var R=function(e,t){return"sc-"+e.$tagName$};var N={};var x="http://www.w3.org/2000/svg";var L="http://www.w3.org/1999/xhtml";var j=function(e){return e!=null};var E=function(e){e=typeof e;return e==="object"||e==="function"};var C=e("h",(function(e,t){var r=[];for(var n=2;n<arguments.length;n++){r[n-2]=arguments[n]}var a=null;var i=null;var l=false;var s=false;var o=[];var f=function(t){for(var r=0;r<t.length;r++){a=t[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!E(a)){a=String(a)}if(l&&s){o[o.length-1].$text$+=a}else{o.push(l?P(null,a):a)}s=l}}};f(r);if(t){if(t.key){i=t.key}{var u=t.className||t.class;if(u){t.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(t===null?{}:t,o,I)}var $=P(e,null);$.$attrs$=t;if(o.length>0){$.$children$=o}{$.$key$=i}return $}));var P=function(e,t){var r={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};{r.$attrs$=null}{r.$key$=null}return r};var O=e("H",{});var A=function(e){return e&&e.$tag$===O};var I={forEach:function(e,t){return e.map(M).forEach(t)},map:function(e,t){return e.map(M).map(t).map(T)}};var M=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var T=function(e){if(typeof e.vtag==="function"){var t=Object.assign({},e.vattrs);if(e.vkey){t.key=e.vkey}if(e.vname){t.name=e.vname}return C.apply(void 0,__spreadArray([e.vtag,t],e.vchildren||[],false))}var r=P(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var z=function(e,t,r,n,a,i){if(r!==n){var l=Se(e,t);var s=t.toLowerCase();if(t==="class"){var f=e.classList;var $=q(r);var c=q(n);f.remove.apply(f,$.filter((function(e){return e&&!c.includes(e)})));f.add.apply(f,c.filter((function(e){return e&&!$.includes(e)})))}else if(t==="style"){{for(var v in r){if(!n||n[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in n){if(!r||n[v]!==r[v]){if(v.includes("-")){e.style.setProperty(v,n[v])}else{e.style[v]=n[v]}}}}else if(t==="key");else if(t==="ref"){if(n){n(e)}}else if(!l&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"){t=t.slice(3)}else if(Se(o,s)){t=s.slice(2)}else{t=s[2]+t.slice(3)}if(r){u.rel(e,t,r,false)}if(n){u.ael(e,t,n,false)}}else{var p=E(n);if((l||p&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(t==="list"){l=false}else if(r==null||e[t]!=d){e[t]=d}}else{e[t]=n}}catch(e){}}var h=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){t=s;h=true}}if(n==null||n===false){if(n!==false||e.getAttribute(t)===""){if(h){e.removeAttributeNS(y,t)}else{e.removeAttribute(t)}}}else if((!l||i&4||a)&&!p){n=n===true?"":n;if(h){e.setAttributeNS(y,t,n)}else{e.setAttribute(t,n)}}}}};var U=/\s/;var q=function(e){return!e?[]:e.split(U)};var B=function(e,t,r,n){var a=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$;var i=e&&e.$attrs$||N;var l=t.$attrs$||N;{for(n in i){if(!(n in l)){z(a,n,i[n],undefined,r,t.$flags$)}}}for(n in l){z(a,n,i[n],l[n],r,t.$flags$)}};var W=function(e,t,r,n){var i=t.$children$[r];var s=0;var o;var u;if(i.$text$!==null){o=i.$elm$=f.createTextNode(i.$text$)}else{if(!l){l=i.$tag$==="svg"}o=i.$elm$=f.createElementNS(l?x:L,i.$tag$);if(l&&i.$tag$==="foreignObject"){l=false}{B(null,i,l)}if(j(a)&&o["s-si"]!==a){o.classList.add(o["s-si"]=a)}if(i.$children$){for(s=0;s<i.$children$.length;++s){u=W(e,i,s);if(u){o.appendChild(u)}}}{if(i.$tag$==="svg"){l=false}else if(o.tagName==="foreignObject"){l=true}}}return o};var H=function(e,t,r,n,a,l){var s=e;var o;if(s.shadowRoot&&s.tagName===i){s=s.shadowRoot}for(;a<=l;++a){if(n[a]){o=W(null,r,a);if(o){n[a].$elm$=o;s.insertBefore(o,t)}}}};var V=function(e,t,r,n,a){for(;t<=r;++t){if(n=e[t]){a=n.$elm$;J(n);a.remove()}}};var D=function(e,t,r,n){var a=0;var i=0;var l=0;var s=0;var o=t.length-1;var f=t[0];var u=t[o];var $=n.length-1;var c=n[0];var v=n[$];var p;var d;while(a<=o&&i<=$){if(f==null){f=t[++a]}else if(u==null){u=t[--o]}else if(c==null){c=n[++i]}else if(v==null){v=n[--$]}else if(F(f,c)){G(f,c);f=t[++a];c=n[++i]}else if(F(u,v)){G(u,v);u=t[--o];v=n[--$]}else if(F(f,v)){G(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=t[++a];v=n[--$]}else if(F(u,c)){G(u,c);e.insertBefore(u.$elm$,f.$elm$);u=t[--o];c=n[++i]}else{l=-1;{for(s=a;s<=o;++s){if(t[s]&&t[s].$key$!==null&&t[s].$key$===c.$key$){l=s;break}}}if(l>=0){d=t[l];if(d.$tag$!==c.$tag$){p=W(t&&t[i],r,l)}else{G(d,c);t[l]=undefined;p=d.$elm$}c=n[++i]}else{p=W(t&&t[i],r,i);c=n[++i]}if(p){{f.$elm$.parentNode.insertBefore(p,f.$elm$)}}}}if(a>o){H(e,n[$+1]==null?null:n[$+1].$elm$,r,n,i,$)}else if(i>$){V(t,a,o)}};var F=function(e,t){if(e.$tag$===t.$tag$){{return e.$key$===t.$key$}}return false};var G=function(e,t){var r=t.$elm$=e.$elm$;var n=e.$children$;var a=t.$children$;var i=t.$tag$;var s=t.$text$;if(s===null){{l=i==="svg"?true:i==="foreignObject"?false:l}{if(i==="slot");else{B(e,t,l)}}if(n!==null&&a!==null){D(r,n,t,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}H(r,null,t,a,0,a.length-1)}else if(n!==null){V(n,0,n.length-1)}if(l&&i==="svg"){l=false}}else if(e.$text$!==s){r.data=s}};var J=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(J)}};var K=function(e,t){var r=e.$hostElement$;var n=e.$cmpMeta$;var l=e.$vnode$||P(null,null);var s=A(t)?t:C(null,null,t);i=r.tagName;if(n.$attrsToReflect$){s.$attrs$=s.$attrs$||{};n.$attrsToReflect$.map((function(e){var t=e[0],n=e[1];return s.$attrs$[n]=r[t]}))}s.$tag$=null;s.$flags$|=4;e.$vnode$=s;s.$elm$=l.$elm$=r.shadowRoot||r;{a=r["s-sc"]}G(l,s)};var Q=e("g",(function(e){return be(e).$hostElement$}));var X=e("c",(function(e,t,r){var n=Q(e);return{emit:function(e){return Y(n,t,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var Y=function(e,t,r){var n=u.ce(t,r);e.dispatchEvent(n);return n};var Z=function(e,t){if(t&&!e.$onRenderResolve$&&t["s-p"]){t["s-p"].push(new Promise((function(t){return e.$onRenderResolve$=t})))}};var ee=function(e,t){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}Z(e,e.$ancestorComponent$);var r=function(){return te(e,t)};return Ae(r)};var te=function(e,t){var r=g("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;if(t){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var t=e[0],r=e[1];return le(n,t,r)}));e.$queuedListeners$=null}}{a=le(n,"componentWillLoad")}}else{{a=le(n,"componentWillUpdate")}}{a=se(a,(function(){return le(n,"componentWillRender")}))}r();return se(a,(function(){return re(e,n,t)}))};var re=function(e,t,n){return __awaiter(r,void 0,void 0,(function(){var r,a,i,l,s,o;return __generator(this,(function(f){r=e.$hostElement$;a=g("update",e.$cmpMeta$.$tagName$);i=r["s-rc"];if(n){k(e)}l=g("render",e.$cmpMeta$.$tagName$);{ne(e,t)}if(i){i.map((function(e){return e()}));r["s-rc"]=undefined}l();a();{s=r["s-p"];o=function(){return ae(e)};if(s.length===0){o()}else{Promise.all(s).then(o);e.$flags$|=4;s.length=0}}return[2]}))}))};var ne=function(e,t,r){try{t=t.render();{e.$flags$&=~16}{e.$flags$|=2}{{{K(e,t)}}}}catch(t){ke(t,e.$hostElement$)}return null};var ae=function(e){var t=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var n=g("postUpdate",t);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{le(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{oe(r)}{le(a,"componentDidLoad")}n();{e.$onReadyResolve$(r);if(!i){ie()}}}else{{le(a,"componentDidUpdate")}n()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Oe((function(){return ee(e,false)}))}e.$flags$&=~(4|512)}};var ie=function(e){{oe(f.documentElement)}Oe((function(){return Y(o,"appload",{detail:{namespace:n}})}))};var le=function(e,t,r){if(e&&e[t]){try{return e[t](r)}catch(e){ke(e)}}return undefined};var se=function(e,t){return e&&e.then?e.then(t):t()};var oe=function(e){return e.classList.add("hydrated")};var fe=function(e,t){if(e!=null&&!E(e)){if(t&4){return e==="false"?false:e===""||!!e}if(t&2){return parseFloat(e)}if(t&1){return String(e)}return e}return e};var ue=function(e,t){return be(e).$instanceValues$.get(t)};var $e=function(e,t,r,n){var a=be(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(t);var s=a.$flags$;var o=a.$lazyInstance$;r=fe(r,n.$members$[t][0]);var f=Number.isNaN(l)&&Number.isNaN(r);var u=r!==l&&!f;if((!(s&8)||l===undefined)&&u){a.$instanceValues$.set(t,r);if(o){if(n.$watchers$&&s&128){var $=n.$watchers$[t];if($){$.map((function(e){try{o[e](r,l,t)}catch(e){ke(e,i)}}))}}if((s&(2|16))===2){ee(a,false)}}}};var ce=function(e,t,r){if(t.$members$){if(e.watchers){t.$watchers$=e.watchers}var n=Object.entries(t.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,n,{get:function(){return ue(this,n)},set:function(e){$e(this,n,e,t)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,n,{value:function(){var e=[];for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}var r=be(this);return r.$onInstancePromise$.then((function(){var t;return(t=r.$lazyInstance$)[n].apply(t,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,t,r){var n=this;u.jmp((function(){var t=i.get(e);if(n.hasOwnProperty(t)){r=n[t];delete n[t]}else if(a.hasOwnProperty(t)&&typeof n[t]==="number"&&n[t]==r){return}n[t]=r===null&&typeof n[t]==="boolean"?false:r}))};e.observedAttributes=n.filter((function(e){var t=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],n=e[1];var a=n[1]||r;i.set(a,r);if(n[0]&512){t.$attrsToReflect$.push([r,a])}return a}))}}return e};var ve=function(e,t,n,a,i){return __awaiter(r,void 0,void 0,(function(){var e,r,a,l,s,o,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((t.$flags$&32)===0))return[3,3];t.$flags$|=32;i=Ne(n);if(!i.then)return[3,2];e=b();return[4,i];case 1:i=u.sent();e();u.label=2;case 2:if(!i.isProxied){{n.$watchers$=i.watchers}ce(i,n,2);i.isProxied=true}r=g("createInstance",n.$tagName$);{t.$flags$|=8}try{new i(t)}catch(e){ke(e)}{t.$flags$&=~8}{t.$flags$|=128}r();pe(t.$lazyInstance$);if(i.style){a=i.style;l=R(n);if(!xe.has(l)){s=g("registerStyles",n.$tagName$);_(l,a,!!(n.$flags$&1));s()}}u.label=3;case 3:o=t.$ancestorComponent$;f=function(){return ee(t,true)};if(o&&o["s-rc"]){o["s-rc"].push(f)}else{f()}return[2]}}))}))};var pe=function(e){{le(e,"connectedCallback")}};var de=function(e){if((u.$flags$&1)===0){var t=be(e);var r=t.$cmpMeta$;var n=g("connectedCallback",r.$tagName$);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){Z(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(t){var r=t[0],n=t[1][0];if(n&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{ve(e,t,r)}}else{v(e,t,r.$listeners$);pe(t.$lazyInstance$)}n()}};var he=function(e){if((u.$flags$&1)===0){var t=be(e);var r=t.$lazyInstance$;{if(t.$rmListeners$){t.$rmListeners$.map((function(e){return e()}));t.$rmListeners$=undefined}}{le(r,"disconnectedCallback")}}};var me=e("b",(function(e,t){if(t===void 0){t={}}var r=g();var n=[];var a=t.exclude||[];var i=o.customElements;var l=f.head;var s=l.querySelector("meta[charset]");var $=f.createElement("style");var c=[];var v;var p=true;Object.assign(u,t);u.$resourcesUrl$=new URL(t.resourcesUrl||"./",f.baseURI).href;e.map((function(e){e[1].map((function(t){var r={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{r.$members$=t[2]}{r.$listeners$=t[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var l=r.$tagName$;var s=function(e){__extends(t,e);function t(t){var n=e.call(this,t)||this;t=n;_e(t,r);if(r.$flags$&1){{{t.attachShadow({mode:"open"})}}}return n}t.prototype.connectedCallback=function(){var e=this;if(v){clearTimeout(v);v=null}if(p){c.push(this)}else{u.jmp((function(){return de(e)}))}};t.prototype.disconnectedCallback=function(){var e=this;u.jmp((function(){return he(e)}))};t.prototype.componentOnReady=function(){return be(this).$onReadyPromise$};return t}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){n.push(l);i.define(l,ce(s,r,1))}}))}));{$.innerHTML=n+m;$.setAttribute("data-styles","");l.insertBefore($,s?s.nextSibling:l.firstChild)}p=false;if(c.length){c.map((function(e){return e.connectedCallback()}))}else{{u.jmp((function(){return v=setTimeout(ie,30)}))}}r()}));var ye=e("F",(function(e,t){return t}));var ge=new WeakMap;var be=function(e){return ge.get(e)};var we=e("r",(function(e,t){return ge.set(t.$lazyInstance$=e,t)}));var _e=function(e,t){var r={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}v(e,r,t.$listeners$);return ge.set(e,r)};var Se=function(e,t){return t in e};var ke=function(e,t){return(0,console.error)(e,t)};var Re=new Map;var Ne=function(e,r,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=Re.get(i);if(l){return l[a]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return t.import("./".concat(i,".entry.js").concat("")).then((function(e){{Re.set(i,e)}return e[a]}),ke)};var xe=new Map;var Le=[];var je=[];var Ee=function(e,t){return function(r){e.push(r);if(!s){s=true;if(t&&u.$flags$&4){Oe(Pe)}else{u.raf(Pe)}}}};var Ce=function(e){for(var t=0;t<e.length;t++){try{e[t](performance.now())}catch(e){ke(e)}}e.length=0};var Pe=function(){Ce(Le);{Ce(je);if(s=Le.length>0){u.raf(Pe)}}};var Oe=function(e){return $().then(e)};var Ae=Ee(je,true)}}}));