import{r as t,c as o,h as e,H as r,g as i}from"./p-8d227782.js";import{c as n}from"./p-fdf6920f.js";import{e as a}from"./p-821ec953.js";import{s}from"./p-f4233e37.js";function l(t){return t.split("-")[0]}function c(t,o,e){let{reference:r,floating:i}=t;const n=r.x+r.width/2-i.width/2,a=r.y+r.height/2-i.height/2,s=function(t){return["top","bottom"].includes(l(t))?"x":"y"}(o),c="y"===s?"height":"width",d=r[c]/2-i[c]/2,h="x"===s;let p;switch(l(o)){case"top":p={x:n,y:r.y-i.height};break;case"bottom":p={x:n,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:a};break;case"left":p={x:r.x-i.width,y:a};break;default:p={x:r.x,y:r.y}}switch(function(t){return t.split("-")[1]}(o)){case"start":p[s]-=d*(e&&h?-1:1);break;case"end":p[s]+=d*(e&&h?-1:1)}return p}function d(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function h(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function p(t){if(null==t)return window;if(!h(t)){const o=t.ownerDocument;return o&&o.defaultView||window}return t}function b(t){return p(t).getComputedStyle(t)}function u(t){return h(t)?"":t?(t.nodeName||"").toLowerCase():""}function f(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function v(t){return t instanceof p(t).HTMLElement}function x(t){return t instanceof p(t).Element}function g(t){return"undefined"!=typeof ShadowRoot&&(t instanceof p(t).ShadowRoot||t instanceof ShadowRoot)}function m(t){const{overflow:o,overflowX:e,overflowY:r}=b(t);return/auto|scroll|overlay|hidden/.test(o+r+e)}function w(t){return["table","td","th"].includes(u(t))}function k(t){const o=/firefox/i.test(f()),e=b(t);return"none"!==e.transform||"none"!==e.perspective||"paint"===e.contain||["transform","perspective"].includes(e.willChange)||o&&"filter"===e.willChange||o&&!!e.filter&&"none"!==e.filter}function y(){return!/^((?!chrome|android).)*safari/i.test(f())}const z=Math.min,C=Math.max,D=Math.round;function R(t,o,e){var r,i,n,a;void 0===o&&(o=!1),void 0===e&&(e=!1);const s=t.getBoundingClientRect();let l=1,c=1;o&&v(t)&&(l=t.offsetWidth>0&&D(s.width)/t.offsetWidth||1,c=t.offsetHeight>0&&D(s.height)/t.offsetHeight||1);const d=x(t)?p(t):window,h=!y()&&e,b=(s.left+(h&&null!=(r=null==(i=d.visualViewport)?void 0:i.offsetLeft)?r:0))/l,u=(s.top+(h&&null!=(n=null==(a=d.visualViewport)?void 0:a.offsetTop)?n:0))/c,f=s.width/l,g=s.height/c;return{width:f,height:g,top:u,right:b+f,bottom:u+g,left:b,x:b,y:u}}function T(t){return(o=t,(o instanceof p(o).Node?t.ownerDocument:t.document)||window.document).documentElement;var o}function j(t){return x(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function O(t){return R(T(t)).left+j(t).scrollLeft}function M(t,o,e){const r=v(o),i=T(o),n=R(t,r&&function(t){const o=R(t);return D(o.width)!==t.offsetWidth||D(o.height)!==t.offsetHeight}(o),"fixed"===e);let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if(r||!r&&"fixed"!==e)if(("body"!==u(o)||m(i))&&(a=j(o)),v(o)){const t=R(o,!0);s.x=t.x+o.clientLeft,s.y=t.y+o.clientTop}else i&&(s.x=O(i));return{x:n.left+a.scrollLeft-s.x,y:n.top+a.scrollTop-s.y,width:n.width,height:n.height}}function P(t){return"html"===u(t)?t:t.assignedSlot||t.parentNode||(g(t)?t.host:null)||T(t)}function A(t){return v(t)&&"fixed"!==b(t).position?t.offsetParent:null}function E(t){const o=p(t);let e=A(t);for(;e&&w(e)&&"static"===b(e).position;)e=A(e);return e&&("html"===u(e)||"body"===u(e)&&"static"===b(e).position&&!k(e))?o:e||function(t){let o=P(t);for(g(o)&&(o=o.host);v(o)&&!["html","body"].includes(u(o));){if(k(o))return o;{const t=o.parentNode;o=g(t)?t.host:t}}return null}(t)||o}function L(t){if(v(t))return{width:t.offsetWidth,height:t.offsetHeight};const o=R(t);return{width:o.width,height:o.height}}function S(t){const o=P(t);return["html","body","#document"].includes(u(o))?t.ownerDocument.body:v(o)&&m(o)?o:S(o)}function B(t,o){var e;void 0===o&&(o=[]);const r=S(t),i=r===(null==(e=t.ownerDocument)?void 0:e.body),n=p(r),a=i?[n].concat(n.visualViewport||[],m(r)?r:[]):r,s=o.concat(a);return i?s:s.concat(B(a))}function I(t,o,e){return"viewport"===o?d(function(t,o){const e=p(t),r=T(t),i=e.visualViewport;let n=r.clientWidth,a=r.clientHeight,s=0,l=0;if(i){n=i.width,a=i.height;const t=y();(t||!t&&"fixed"===o)&&(s=i.offsetLeft,l=i.offsetTop)}return{width:n,height:a,x:s,y:l}}(t,e)):x(o)?function(t,o){const e=R(t,!1,"fixed"===o),r=e.top+t.clientTop,i=e.left+t.clientLeft;return{top:r,left:i,x:i,y:r,right:i+t.clientWidth,bottom:r+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(o,e):d(function(t){var o;const e=T(t),r=j(t),i=null==(o=t.ownerDocument)?void 0:o.body,n=C(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),a=C(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0);let s=-r.scrollLeft+O(t);const l=-r.scrollTop;return"rtl"===b(i||e).direction&&(s+=C(e.clientWidth,i?i.clientWidth:0)-n),{width:n,height:a,x:s,y:l}}(T(t)))}function U(t){const o=B(t),e=["absolute","fixed"].includes(b(t).position)&&v(t)?E(t):t;return x(e)?o.filter((t=>x(t)&&function(t,o){const e=null==o.getRootNode?void 0:o.getRootNode();if(t.contains(o))return!0;if(e&&g(e)){let e=o;do{if(e&&t===e)return!0;e=e.parentNode||e.host}while(e)}return!1}(t,e)&&"body"!==u(t))):[]}const $={getClippingRect:function(t){let{element:o,boundary:e,rootBoundary:r,strategy:i}=t;const n=[..."clippingAncestors"===e?U(o):[].concat(e),r],a=n.reduce(((t,e)=>{const r=I(o,e,i);return t.top=C(r.top,t.top),t.right=z(r.right,t.right),t.bottom=z(r.bottom,t.bottom),t.left=C(r.left,t.left),t}),I(o,n[0],i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:o,offsetParent:e,strategy:r}=t;const i=v(e),n=T(e);if(e===n)return o;let a={scrollLeft:0,scrollTop:0};const s={x:0,y:0};if((i||!i&&"fixed"!==r)&&(("body"!==u(e)||m(n))&&(a=j(e)),v(e))){const t=R(e,!0);s.x=t.x+e.clientLeft,s.y=t.y+e.clientTop}return{...o,x:o.x-a.scrollLeft+s.x,y:o.y-a.scrollTop+s.y}},isElement:x,getDimensions:L,getOffsetParent:E,getDocumentElement:T,getElementRects:t=>{let{reference:o,floating:e,strategy:r}=t;return{reference:M(o,E(e),r),floating:{...L(e),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===b(t).direction};var K;!function(t){t.Close="Close",t.CloseSelect="CloseSelect",t.First="First",t.Last="Last",t.Next="Next",t.Open="Open",t.PageDown="PageDown",t.PageUp="PageUp",t.Previous="Previous",t.Select="Select",t.Type="Type"}(K||(K={}));const H=class{constructor(r){t(this,r),this.liChange=o(this,"li-change",7),this.liFocus=o(this,"li-focus",7),this.liBlur=o(this,"li-blur",7),this.liKeydown=o(this,"li-keydown",7),this.currentIndex=-1,this.hasFocus=!1,this.ignoreBlur=!1,this.options="",this.open=!1,this.queryString="",this.queryTimeout=null,this.comboboxId="combobox",this.helperText="",this.invalid=!1,this.selectOption=t=>{this.currentIndex=t,this.value=this.readOptions(this.el)[t].value,a(this,"liChange",{value:this.value})},this.handleFocus=()=>{a(this,"liFocus")},this.handleBlur=()=>{this.ignoreBlur?this.ignoreBlur=!1:(this.setOpen(!1),a(this,"liBlur"))},this.handleKeydown=t=>{const{key:o}=t,e=this.readOptions(this.el).length-1,r=this.getActionFromKey(t,this.open);switch(a(this,"liKeydown",t),r){case K.Last:case K.First:this.setOpen(!0);case K.Next:case K.PageDown:case K.PageUp:case K.Previous:return t.preventDefault(),this.handleOptionChange(this.jumpToIndex(this.currentIndex,e,r));case K.Close:return t.preventDefault(),this.setOpen(!1);case K.CloseSelect:return t.preventDefault(),this.selectOption(this.currentIndex);case K.Type:return this.buildQueryString(o);case K.Open:return t.preventDefault(),this.setOpen(!0)}},this.handleClick=()=>{this.setOpen(!this.open);const t=this.readOptions(this.el).findIndex((({value:t})=>t===this.value));t>-1&&setTimeout((()=>{this.bringIntoView(t)}))},this.readOptions=t=>Array.from(t.children).map((t=>{var o;return{label:null===(o=t.textContent)||void 0===o?void 0:o.trim(),value:t.getAttribute("value"),ItemElement:e("span",{innerHTML:t.outerHTML})}}))}valueChange(t){this.currentIndex=this.readOptions(this.el).findIndex((({})=>{}))}connectedCallback(){s({source:this.el,tag:"beta"}),this.currentIndex=this.readOptions(this.el).findIndex((({value:t})=>t===this.value))||-1}componentWillLoad(){}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}componentWillRender(){}componentShouldRender(){}componentDidRender(){var t,o,e;this.open&&(t=this.comboEl,o=this.listboxPadEl,e={placement:"bottom"},(async(t,o,e)=>{const{placement:r="bottom",strategy:i="absolute",middleware:n=[],platform:a}=e,s=await(null==a.isRTL?void 0:a.isRTL(o));let l=await a.getElementRects({reference:t,floating:o,strategy:i}),{x:d,y:h}=c(l,r,s),p=r,b={},u=0;for(let e=0;e<n.length;e++){const{name:f,fn:v}=n[e],{x,y:g,data:m,reset:w}=await v({x:d,y:h,initialPlacement:r,placement:p,strategy:i,middlewareData:b,rects:l,platform:a,elements:{reference:t,floating:o}});d=null!=x?x:d,h=null!=g?g:h,b={...b,[f]:{...b[f],...m}},w&&u<=50&&(u++,"object"==typeof w&&(w.placement&&(p=w.placement),w.rects&&(l=!0===w.rects?await a.getElementRects({reference:t,floating:o,strategy:i}):w.rects),({x:d,y:h}=c(l,p,s))),e=-1)}return{x:d,y:h,placement:p,strategy:i,middlewareData:b}})(t,o,{platform:$,...e})).then((({x:t,y:o})=>{Object.assign(this.listboxPadEl.style,{left:`${t}px`,top:`${o}px`})}))}disconnectedCallback(){}bringIntoView(t){const o=this.listboxEl.querySelectorAll("[role=option]");this.hasOverflow(this.listboxEl)&&this.keepInView(o[t],this.listboxEl),this.isInView(o[t])||o[t].scrollIntoView({behavior:"smooth",block:"nearest"})}buildQueryString(t){this.setOpen(!0);const o=this.getSearchString(t),e=this.getIndexByChar(this.readOptions(this.el).map((({label:t})=>t)),o,this.currentIndex+1);e>=0?this.handleOptionChange(e):(window.clearTimeout(this.queryTimeout),this.queryString="")}getSearchString(t){return"number"==typeof this.queryTimeout&&window.clearTimeout(this.queryTimeout),this.queryTimeout=window.setTimeout((()=>{this.queryString=""}),500),this.queryString+=t,this.queryString}handleOptionChange(t){this.currentIndex=t,this.bringIntoView(t)}handleOptionClick(t,o){t.stopPropagation(),this.handleOptionChange(o),this.selectOption(o),this.setOpen(!1)}hasOverflow(t){return t&&t.clientHeight<t.scrollHeight}getActionFromKey(t,o){const{key:e,altKey:r,ctrlKey:i,metaKey:n}=t;if(!o&&["ArrowDown","ArrowUp","Enter",""].includes(e))return K.Open;if("Home"===e)return K.First;if("End"===e)return K.Last;if(["Backspace","Clear"].includes(e)||1===e.length&&""!==e&&!r&&!i&&!n)return K.Type;if(o){if("ArrowUp"===e&&r)return K.CloseSelect;if("ArrowDown"===e&&!r)return K.Next;switch(e){case"ArrowUp":return K.Previous;case"PageUp":return K.PageUp;case"PageDown":return K.PageDown;case"Escape":return K.Close;case"Enter":case" ":return K.CloseSelect}}}getBasePartMap(){return n("select",this.open&&"open",this.disabled&&"disabled",this.readonly&&"readonly",this.transparent&&"transparent",this.invalid&&"invalid",this.currentIndex>-1&&"steal-focus",null!==this.value&&""!==this.value&&"animated")}getIndexByChar(t,o,e=0){const r=[...t.slice(e),...t.slice(0,e)],i=this.matchOptions(r,o)[0];if(i)return t.indexOf(i);if(o.split("").every((()=>{}))){const e=this.matchOptions(r,o[0]);return t.indexOf(e[0])}return-1}isInView(t){const o=t.getBoundingClientRect(),e=window.innerWidth||document.documentElement.clientWidth,r=window.innerHeight||document.documentElement.clientHeight;return o.top>=0&&o.left>=0&&o.bottom<=r&&o.right<=e}jumpToIndex(t,o,e){switch(e){case K.First:return 0;case K.Last:return o;case K.Previous:return Math.max(0,t-1);case K.Next:return Math.min(o,t+1);case K.PageUp:return Math.max(0,t-10);case K.PageDown:return Math.min(o,t+10);default:return t}}keepInView(t,o){const{offsetHeight:e,offsetTop:r}=t,{offsetHeight:i,scrollTop:n}=o,a=r<n;return r+e>n+i?o.scrollTop=r+e-i:a?o.scrollTop=r:void 0}matchOptions(t=[],o){return t.filter((t=>{t.toLowerCase().indexOf(o.toLowerCase())}))}setOpen(t){this.open!==t&&(this.disabled||(this.open=t,this.open||(this.comboEl.scrollIntoView({behavior:"smooth",block:"nearest"}),this.comboEl.focus(),this.currentIndex=-1)))}render(){const t=(this.readOptions(this.el).find((({value:t})=>t===this.value))||{}).ItemElement,o="helper-message",i={"aria-describedBy":o};return e(r,null,e("div",{part:this.getBasePartMap()},e("div",{part:"combobox-container"},e("label",{part:"label",id:`${this.comboboxId}-label`},this.label),e("div",Object.assign({ref:t=>this.comboEl=t,"aria-controls":`${this.comboboxId}-listbox`,"aria-expanded":this.open?"true":"false","aria-haspopup":"listbox","aria-labelledby":`${this.comboboxId}-label`,id:this.comboboxId,part:"combobox",role:"combobox",tabindex:"0",onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.handleClick,onKeyDown:this.handleKeydown},this.open?{"aria-activedescendant":(this.readOptions(this.el)[this.currentIndex]||{}).value}:{},this.helperText?i:{},this.invalid?{"aria-invalid":"true"}:{}),t),e("div",{part:"listbox-pad",ref:t=>this.listboxPadEl=t},e("div",{ref:t=>this.listboxEl=t,part:"listbox",role:"listbox",id:`${this.comboboxId}-listbox`,"aria-labelledby":`${this.comboboxId}-label`,tabindex:"-1"},this.readOptions(this.el).map((({value:t,ItemElement:o},r)=>e("div",Object.assign({role:"option",part:"option"+(r===this.currentIndex?"current":""),id:t,onClick:t=>{this.handleOptionClick(t,r)},onMouseDown:()=>{this.ignoreBlur=!0}},t===this.value?{"aria-selected":"true"}:{}),o,...t===this.value?e("li-icon-action-success",{size:16}):null))))),e("div",{part:"icon"},e(this.open?"li-icon-navigation-collapse-up":"li-icon-navigation-collapse-down",{decorative:!0}))),!!this.helperText&&e("div",{part:"meta",id:o,"aria-live":"polite","aria-relevant":"additions removals"},!!this.helperText&&e("div",{part:"helper-text"},this.helperText))))}get el(){return i(this)}static get watchers(){return{value:["valueChange"]}}};H.style=":host{--font-weight:var(--li-token-typography-font-weight-bold);--height:var(--li-token-spacing-unit-x12);--color:var(--li-token-color-text-and-icon-standard);--color-disabled:var(--li-token-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--li-token-color-ui-state-fill-hovered);--border:var(--li-token-spacing-unit-x025) solid\n    var(--li-token-color-ui-border-standard);--border-color-hover:var(--li-token-color-ui-border-hovered);--border-color-focus:var(--li-token-color-ui-border-hovered);--border-color-disabled:var(--li-token-color-ui-border-disabled);--border-invalid:var(--li-token-spacing-unit-x05) solid\n    var(--li-token-color-functional-danger-hovered);--box-shadow-focus:0 0 0 var(--li-token-line-weight-highlight)\n    var(--li-token-color-functional-focus);--spacing-x:var(--li-token-spacing-unit-x3);--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);--radius:var(--li-token-radius-standard);--transition-combobox:var(--transition);--font-size-combobox:var(--li-token-typography-font-size-body);--background-combobox:var(--li-token-color-ui-state-fill-standard);--spacing-combobox:var(--li-token-spacing-unit-x3)\n    var(--li-token-spacing-unit-x10) 0 calc(var(--spacing-x) - 1px);--transition-helper-text:var(--transition);--font-size-helper-text:var(--li-token-typography-font-size-small);--line-height-helper-text:var(--li-token-typography-line-spacing-standard);--color-helper-text:var(\n    --li-token-color-text-and-icon-functional-informational\n  );--color-helper-text-invalid:var(\n    --li-token-color-text-and-icon-functional-danger\n  );--spacing-y-meta:var(--li-token-spacing-unit-x1);--color-meta:var(--li-token-color-text-and-icon-standard);--height-icon:var(--li-token-spacing-unit-x6);--color-icon:var(--li-token-color-text-and-icon-standard);--color-icon-hover:var(--li-token-color-text-and-icon-standard);--color-icon-active:var(--li-token-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--li-token-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--li-token-typography-font-size-body);--font-weight-label:var(--li-token-typography-font-weight-medium);--font-size-label-focus:var(--li-token-typography-font-size-footnote);--font-weight-label-focus:var(--li-token-typography-font-weight-bold);--line-height-label-animated:var(--li-token-typography-font-size-small);--transform-label:translate(\n    var(--spacing-x),\n    calc((var(--li-token-spacing-unit-x12) - var(--font-size-label)) / 2)\n  );--transform-label-animated:translate(\n    var(--spacing-x),\n    var(--li-token-spacing-unit-x2)\n  );--background-listbox:var(--li-token-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),\n    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99;--outline-color-option:var(--li-token-color-functional-focus)}[part=combobox-container] *,[part=combobox-container] *::before,[part=combobox-container] *::after{-webkit-box-sizing:border-box;box-sizing:border-box}[part=combobox-container]{display:block;position:relative}[part=combobox]{width:100%;height:var(--height);margin:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:var(--transition-combobox);transition:var(--transition-combobox);font-family:inherit;font-size:var(--font-size-combobox);border-radius:var(--radius);border:var(--border);white-space:nowrap;text-overflow:ellipsis;-moz-appearance:none;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part~=select]:not([part~=disabled]) [part=combobox]:hover~[part=icon]{color:var(--color-icon-hover)}[part~=select]:not([part~=disabled]) [part=combobox]:active~[part=icon]{color:var(--color-icon-active)}[part~=select]:not([part~=disabled]):not([part~=invalid]) [part=combobox]:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~=select]:not([part~=disabled])[part~=invalid] [part=combobox]:hover{background-color:var(--background-hover)}[part~=select]:not([part~=disabled]):not([part~=invalid]) [part=combobox]:focus{border-color:var(--border-color-focus)}[part~=select]:not([part~=disabled]):not([part~=steal-focus]) [part=combobox]:focus{-webkit-box-shadow:var(--box-shadow-focus);box-shadow:var(--box-shadow-focus)}[part~=invalid] [part=combobox]{border:var(--border-invalid)}[part~=transparent] [part=combobox]{background-color:transparent}[part~=disabled] [part=combobox]{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part=helper-text]{font-weight:var(--font-weight);-webkit-transition:var(--transition-helper-text);transition:var(--transition-helper-text);padding-left:var(--spacing-x);font-size:var(--font-size-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text)}[part~=invalid] [part=helper-text]{color:var(--color-helper-text-invalid)}[part~=disabled] [part=helper-text]{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part=meta]{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part=icon]{top:50%;right:var(--spacing-x);position:absolute;-webkit-transform:translateY(-50%);transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);-webkit-transition:var(--transition-icon);transition:var(--transition-icon)}[part~=disabled] [part=icon]{color:var(--color-disabled)}[part=label]{top:0;left:0;color:var(--color-label);display:-ms-flexbox;display:flex;z-index:var(--z-index-label);position:absolute;-webkit-transition:var(--transition-label);transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);-webkit-transform:var(--transform-label);transform:var(--transform-label);font-weight:var(--font-weight-label)}[part~=animated] [part=label]{-webkit-transform:var(--transform-label-animated);transform:var(--transform-label-animated);font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--line-height-label-animated)}[part~=disabled] [part=label]{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part=listbox]{overflow-y:auto;position:relative;max-height:var(--max-height-listbox)}[part=listbox-pad]{background:var(--background-listbox);-webkit-box-shadow:var(--box-shadow-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--li-token-line-weight-highlight);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~=open] [part=listbox-pad]{display:block}[part~=transparent] [part=listbox]{background-color:transparent}[part~=option]{color:var(--color)}[part~=option]:hover{background-color:var(--background-hover)}[part~=option][part~=current]{outline:3px solid var(--outline-color-option);outline-offset:-3px}[part~=option][aria-selected=true]{padding-right:30px;position:relative}[part~=option][aria-selected=true] scale-icon-action-success{position:absolute;right:16px;top:12px}[part~=option] scale-dropdown-select-item::part(base){padding:12px}";export{H as li_dropdown_select}