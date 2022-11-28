System.register(["./p-95475f0a.system.js","./p-1411d998.system.js"],(function(t){"use strict";var a,r,e,i,o,n;return{setters:[function(t){a=t.r;r=t.c;e=t.h;i=t.H;o=t.g},function(t){n=t.e}],execute:function(){var s=":host{--stars-color:var(--li-token-color-text-and-icon-primary-standard);--stars-hover-color:var(--li-token-color-text-and-icon-primary-hovered);--stars-active-color:var(--li-token-color-text-and-icon-primary-pressed);--stars-inactive-color:transparent;--stars-placeholder-color:var(--li-token-color-text-and-icon-standard);--stars-placeholder-revert-color:var(--li-token-color-ui-regular);--stars-disabled-color:var(--li-token-color-text-and-icon-disabled);--stars-spacing:var(--li-token-spacing-unit-x05);--stars-transition:color 0.1s;--stars-size:24px;--font-weight-medium:var(--li-token-typography-font-weight-medium);--font-size-small:var(--li-token-typography-font-size-small);--infotext-color:var(--li-token-color-text-and-icon-additional)}:host([star-size=small]){--stars-size:16px;font-size:var(--font-size-small)}[part=container]{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;position:relative}[part=range-slider]{position:absolute;border:0;margin:0;left:calc(-1 * var(--stars-size));bottom:0;z-index:2;width:calc(100% + var(--stars-size) * 2);opacity:0;height:var(--stars-size)}@media (hover: hover){[part=range-slider]{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}}input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;border:0;height:var(--stars-size);width:var(--stars-size);border-radius:50%;background:#ffffff;cursor:pointer;margin-left:0px;margin-top:0}[part=content]{display:-ms-flexbox;display:flex}[part=wrapper]{display:-ms-inline-flexbox;display:inline-flex;border-radius:var(--li-token-spacing-unit-x1);margin-left:calc(-1 * var(--stars-spacing))}[part=wrapper]:hover [part=star] [part=selected-star]{opacity:1}[part=star]>*{pointer-events:none}[part=label]{margin-bottom:var(--li-token-spacing-unit-x2);white-space:nowrap}[part=infotext]{margin-left:var(--li-token-spacing-unit-x2);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-weight:var(--font-weight-medium);color:var(--infotext-color);white-space:nowrap}[part=star]{--decimal-width:100%;display:-ms-inline-flexbox;display:inline-flex;position:relative;color:var(--stars-color);cursor:pointer;padding:0 var(--stars-spacing)}[part=placeholder-star]{display:-ms-inline-flexbox;display:inline-flex;color:var(--stars-placeholder-color);-webkit-transition:var(--stars-transition);transition:var(--stars-transition)}[part=selected-star]{color:var(--stars-inactive-color);margin-left:0px;position:relative;-webkit-transition:var(--stars-transition);transition:var(--stars-transition)}.icon-clip{overflow:hidden;position:absolute;width:var(--decimal-width);height:100%}[part=star][data-half]{--decimal-width:calc(50% - var(--stars-spacing))}[part=star][data-selected]{--stars-placeholder-color:transparent}[part=star][data-half]{--stars-placeholder-color:currentColor}[part=star][data-selected] [part=selected-star]{color:var(--stars-color)}@media (hover: hover){[part=wrapper]:hover{--stars-color:var(--stars-hover-color);--stars-placeholder-color:transparent}[part=wrapper]:hover [part=star]{--decimal-width:100%}[part=wrapper]:hover [part=star][data-half]{--stars-placeholder-color:transparent}[part=wrapper]:hover [part=selected-star]{color:var(--stars-color)}[part=star]:hover~[part=star] [part=selected-star]{color:var(--stars-inactive-color)}[part=star]:hover~[part=star] [part=placeholder-star]{--stars-placeholder-color:var(--li-token-color-text-and-icon-standard)}}[part=wrapper]:active{--stars-color:var(--stars-active-color)}:host(:focus-within) [part=wrapper],[part=wrapper]:focus{-webkit-box-shadow:0 0 0 var(--li-token-spacing-unit-x05) var(--li-token-color-functional-focus);box-shadow:0 0 0 var(--li-token-spacing-unit-x05) var(--li-token-color-functional-focus);outline:none}:host(.readonly) [part=wrapper]{--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.disabled) [part=label],:host(.disabled) [part=infotext]{color:var(--stars-disabled-color)}:host(.disabled) [part=wrapper]{--stars-color:var(--stars-disabled-color);--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.hideLabel) [part=label]{visibility:hidden;height:0;margin-bottom:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part=star] [part=placeholder-star]{color:var(--li-token-color-text-and-icon-inverted-standard)}[part=star][data-selected] [part=placeholder-star]{color:var(--stars-inactive-color)}[part=star]:hover~[part=star] [part=placeholder-star]{color:var(--li-token-color-text-and-icon-inverted-standard)}[part=wrapper]:hover [part=placeholder-star]{color:var(--stars-inactive-color)}}";var l={small:16,large:24};var c=0;var p=t("li_rating_stars",function(){function t(t){var e=this;a(this,t);this.liChange=r(this,"li-change",7);this.ratingStarId="li-rating-star-".concat(c++);this.disabled=false;this.hideLabel=false;this.label="评级";this.max=5;this.rating=0;this.readonly=false;this.size="large";this.ariaLabelTranslation="评为$max星级中的$rating星级";this.handleInput=function(t){var a=t.composedPath()[0];var r=Number(a.value);switch(true){case r<0:a.value="0";break;case r>e.max:a.value=e.max.toString();break}e.rating=Number(a.value);n(e,"liChange",{value:e.rating})};this.handleStarClick=function(t){var a=t.composedPath()[0];var r=Number(a.dataset.value);var i=e.el.shadowRoot.querySelector("input");i.focus();if(r===1&&e.rating===1){e.rating=0}else{e.rating=r}n(e,"liChange",{value:e.rating})}}t.prototype.connectedCallback=function(){};t.prototype.componentWillLoad=function(){};t.prototype.componentDidLoad=function(){};t.prototype.componentWillUpdate=function(){};t.prototype.componentDidUpdate=function(){};t.prototype.componentWillRender=function(){this.rating=Math.round(this.rating)};t.prototype.componentShouldRender=function(){};t.prototype.componentDidRender=function(){};t.prototype.disconnectedCallback=function(){};t.prototype.getRatingText=function(){var t=this.ariaLabelTranslation.replace(/\$rating/g,"".concat(this.rating)).replace(/\$max/g,"".concat(this.max));return t};t.prototype.renderStar=function(t,a,r){if(a===void 0){a=false}var i=l[this.size];var o=r%1===0;var n=Math.ceil(r)===t;return e("div",{part:"star","data-value":t,"data-selected":a,"data-half":n&&!o,onMouseUp:this.handleStarClick,style:{zIndex:t===1?"5":"auto"}},e("li-icon-action-favorite",{size:i,part:"placeholder-star"}),e("div",{class:"icon-clip"},e("li-icon-action-favorite",{size:i,selected:true,part:"selected-star"})))};t.prototype.renderRating=function(){var t=[];var a=Math.ceil(this.rating);var r=this.max;for(var e=1;e<=r;e++){var i=a>=e;t.push(this.renderStar(e,i,this.rating))}return t};t.prototype.render=function(){return e(i,{class:{hidelabel:this.hideLabel,disabled:this.disabled,readonly:this.readonly}},e("div",{part:"container"},e("label",{htmlFor:this.ratingStarId,part:"label",id:"".concat(this.ratingStarId,"-label")},this.label),e("div",{part:"content"},e("div",{part:"wrapper","aria-valuetext":this.getRatingText(),"aira-orientation":"horizontal","aria-describedby":this.infoText?"".concat(this.ratingStarId,"-infotext"):false},e("input",{type:this.readonly?"number":"range",disabled:this.disabled,readonly:this.readonly,part:"range-slider",id:this.ratingStarId,min:0,max:this.max+1,value:this.rating,step:"1","aria-labelledby":"".concat(this.ratingStarId,"-label"),"aria-readonly":this.readonly?"true":false,"aria-valuemax":this.max,"aria-valuenow":this.rating,"aria-valuetext":this.getRatingText(),onInput:this.readonly?undefined:this.handleInput}),this.renderRating()),this.infoText&&e("div",{part:"infotext",id:"".concat(this.ratingStarId,"-infotext")},this.infoText))))};Object.defineProperty(t.prototype,"el",{get:function(){return o(this)},enumerable:false,configurable:true});return t}());p.style=s}}}));