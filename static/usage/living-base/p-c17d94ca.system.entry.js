var __awaiter=this&&this.__awaiter||function(e,t,a,o){function i(e){return e instanceof a?e:new a((function(t){t(e)}))}return new(a||(a=Promise))((function(a,r){function n(e){try{s(o.next(e))}catch(e){r(e)}}function d(e){try{s(o["throw"](e))}catch(e){r(e)}}function s(e){e.done?a(e.value):i(e.value).then(n,d)}s((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var a={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},o,i,r,n;return n={next:d(0),throw:d(1),return:d(2)},typeof Symbol==="function"&&(n[Symbol.iterator]=function(){return this}),n;function d(e){return function(t){return s([e,t])}}function s(n){if(o)throw new TypeError("Generator is already executing.");while(a)try{if(o=1,i&&(r=n[0]&2?i["return"]:n[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,n[1])).done)return r;if(i=0,r)n=[n[0]&2,r.value];switch(n[0]){case 0:case 1:r=n;break;case 4:a.label++;return{value:n[1],done:false};case 5:a.label++;i=n[1];n=[0];continue;case 7:n=a.ops.pop();a.trys.pop();continue;default:if(!(r=a.trys,r=r.length>0&&r[r.length-1])&&(n[0]===6||n[0]===2)){a=0;continue}if(n[0]===3&&(!r||n[1]>r[0]&&n[1]<r[3])){a.label=n[1];break}if(n[0]===6&&a.label<r[1]){a.label=r[1];r=n;break}if(r&&a.label<r[2]){a.label=r[2];a.ops.push(n);break}if(r[2])a.ops.pop();a.trys.pop();continue}n=t.call(e,a)}catch(e){n=[6,e];i=0}finally{o=r=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:true}}};System.register(["./p-0de9bb69.system.js"],(function(e){"use strict";var t,a,o,i,r;return{setters:[function(e){t=e.h;a=e.r;o=e.c;i=e.H;r=e.g}],execute:function(){var n=/^(\d{4})-(\d{2})-(\d{2})$/;var d;(function(e){e[e["Sunday"]=0]="Sunday";e[e["Monday"]=1]="Monday";e[e["Tuesday"]=2]="Tuesday";e[e["Wednesday"]=3]="Wednesday";e[e["Thursday"]=4]="Thursday";e[e["Friday"]=5]="Friday";e[e["Saturday"]=6]="Saturday"})(d||(d={}));function s(e,t,a){var o=parseInt(a,10);var i=parseInt(t,10);var r=parseInt(e,10);var n=Number.isInteger(r)&&Number.isInteger(i)&&Number.isInteger(o)&&i>0&&i<=12&&o>0&&o<=31&&r>0;if(n){return new Date(r,i-1,o)}}function l(e){if(!e){return}var t=e.match(n);if(t){return s(t[1],t[2],t[3])}}function u(e){if(!e){return""}var t=e.getDate().toString(10);var a=(e.getMonth()+1).toString(10);var o=e.getFullYear().toString(10);if(e.getDate()<10){t="0".concat(t)}if(e.getMonth()<9){a="0".concat(a)}return"".concat(o,"-").concat(a,"-").concat(t)}function c(e,t){if(e==null||t==null){return false}return h(e,t)&&e.getDate()===t.getDate()}function h(e,t){if(e==null||t==null){return false}return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()}function p(e,t){var a=new Date(e);a.setDate(a.getDate()+t);return a}function f(e,t){if(t===void 0){t=d.Monday}var a=new Date(e);var o=a.getDay();var i=(o<t?7:0)+o-t;a.setDate(a.getDate()-i);return a}function b(e,t){if(t===void 0){t=d.Monday}var a=new Date(e);var o=a.getDay();var i=(o<t?-7:0)+6-(o-t);a.setDate(a.getDate()+i);return a}function v(e){return new Date(e.getFullYear(),e.getMonth(),1)}function m(e){return new Date(e.getFullYear(),e.getMonth()+1,0)}function y(e,t){var a=new Date(e);a.setMonth(t);return a}function g(e,t){var a=new Date(e);a.setFullYear(t);return a}function x(e,t,a){return _(e,t,a)===e}function _(e,t,a){var o=e.getTime();if(t&&t instanceof Date&&o<t.getTime()){return t}if(a&&a instanceof Date&&o>a.getTime()){return a}return e}function w(e,t){var a=[];var o=e;while(!c(o,t)){a.push(o);o=p(o,1)}a.push(o);return a}function D(e,t){if(t===void 0){t=d.Monday}var a=f(v(e),t);var o=b(m(e),t);return w(a,o)}function k(){return Math.random().toString(16).slice(-4)}function F(e){return"".concat(e,"-").concat(k()).concat(k(),"-").concat(k(),"-").concat(k(),"-").concat(k(),"-").concat(k()).concat(k()).concat(k())}var M=function(e){var a=e.onClick,o=e.dateFormatter,i=e.localization,r=e.name,n=e.formattedValue,d=e.valueAsDate,s=e.value,l=e.identifier,u=e.disabled,c=e.required,h=e.role,p=e.buttonRef,f=e.inputRef,b=e.onInput,v=e.onBlur,m=e.onFocus;return t("div",{class:"duet-date__input-wrapper"},t("input",{class:"duet-date__input",value:n,placeholder:i.placeholder,id:l,disabled:u,role:h,required:c?true:undefined,"aria-autocomplete":"none",onInput:b,onFocus:m,onBlur:v,autoComplete:"off",ref:f}),t("input",{type:"hidden",name:r,value:s}),t("button",{class:"duet-date__toggle",onClick:a,disabled:u,ref:p,type:"button"},t("span",{class:"duet-date__toggle-icon"},t("svg",{"aria-hidden":"true",height:"24",viewBox:"0 0 21 21",width:"24",xmlns:"http://www.w3.org/2000/svg"},t("g",{fill:"none","fill-rule":"evenodd",transform:"translate(2 2)"},t("path",{d:"m2.5.5h12c1.1045695 0 2 .8954305 2 2v12c0 1.1045695-.8954305 2-2 2h-12c-1.1045695 0-2-.8954305-2-2v-12c0-1.1045695.8954305-2 2-2z",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"m.5 4.5h16",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),t("g",{fill:"currentColor"},t("circle",{cx:"8.5",cy:"8.5",r:"1"}),t("circle",{cx:"4.5",cy:"8.5",r:"1"}),t("circle",{cx:"12.5",cy:"8.5",r:"1"}),t("circle",{cx:"8.5",cy:"12.5",r:"1"}),t("circle",{cx:"4.5",cy:"12.5",r:"1"}),t("circle",{cx:"12.5",cy:"12.5",r:"1"}))))),t("span",{class:"duet-date__vhidden"},i.buttonLabel,d&&t("span",null,", ",i.selectedDateMessage," ",o.format(d)))))};var z=function(e){var a=e.focusedDay,o=e.today,i=e.day,r=e.onDaySelect,n=e.onKeyboardNavigation,d=e.focusedDayRef,s=e.disabled,l=e.inRange,u=e.isSelected,p=e.dateFormatter;var f=c(i,o);var b=h(i,a);var v=c(i,a);var m=!l;function y(e){r(e,i)}return t("button",{class:{"duet-date__day":true,"is-outside":m,"is-today":f,"is-month":b,"is-disabled":s},tabIndex:v?0:-1,onClick:y,onKeyDown:n,"aria-disabled":s?"true":undefined,disabled:m,type:"button","aria-pressed":u?"true":"false",ref:function(e){if(v&&e&&d){d(e)}}},t("span",{"aria-hidden":"true"},i.getDate()),t("span",{class:"duet-date__vhidden"},p.format(i)))};function S(e,t){var a=[];for(var o=0;o<e.length;o+=t){a.push(e.slice(o,o+t))}return a}function T(e,t,a){return e.map((function(o,i){var r=(i+t)%e.length;return a(e[r])}))}var Y=function(e){var a=e.selectedDate,o=e.focusedDate,i=e.labelledById,r=e.localization,n=e.firstDayOfWeek,d=e.min,s=e.max,l=e.dateFormatter,u=e.isDateDisabled,h=e.onDateSelect,p=e.onKeyboardNavigation,f=e.focusedDayRef;var b=new Date;var v=D(o,n);return t("table",{class:"duet-date__table","aria-labelledby":i},t("thead",null,t("tr",null,T(r.dayNames,n,(function(e){return t("th",{class:"duet-date__table-header",scope:"col"},t("span",{"aria-hidden":"true"},e.substr(0,2)),t("span",{class:"duet-date__vhidden"},e))})))),t("tbody",null,S(v,7).map((function(e){return t("tr",{class:"duet-date__row"},e.map((function(e){return t("td",{class:"duet-date__cell"},t(z,{day:e,today:b,focusedDay:o,isSelected:c(e,a),disabled:u(e),inRange:x(e,d,s),onDaySelect:h,dateFormatter:l,onKeyboardNavigation:p,focusedDayRef:f}))})))}))))};var C={buttonLabel:"Choose date",placeholder:"YYYY-MM-DD",selectedDateMessage:"Selected date is",prevMonthLabel:"Previous month",nextMonthLabel:"Next month",monthSelectLabel:"Month",yearSelectLabel:"Year",closeLabel:"Close window",calendarHeading:"Choose a date",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],locale:"en-GB"};var I={parse:l,format:u};var N='.duet-date *,.duet-date *::before,.duet-date *::after{-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;width:auto}.duet-date{-webkit-box-sizing:border-box;box-sizing:border-box;color:var(--duet-color-text);display:block;font-family:var(--duet-font);margin:0;position:relative;text-align:left;width:100%}.duet-date__input{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:var(--duet-color-surface);border:1px solid var(--duet-color-border, var(--duet-color-text));border-radius:var(--duet-radius);color:var(--duet-color-text);float:none;font-family:var(--duet-font);font-size:100%;line-height:normal;padding:14px 60px 14px 14px;width:100%}.duet-date__input:focus{border-color:var(--duet-color-primary);-webkit-box-shadow:0 0 0 1px var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary);outline:0}.duet-date__input::-webkit-input-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-moz-placeholder{color:var(--duet-color-placeholder);opacity:1}.duet-date__input:-ms-input-placeholder{color:var(--duet-color-placeholder)}.duet-date__input-wrapper{position:relative;width:100%}.duet-date__toggle{-moz-appearance:none;-webkit-appearance:none;-webkit-user-select:none;-ms-flex-align:center;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:0;border-bottom-right-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);-webkit-box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);box-shadow:inset 1px 0 0 rgba(0, 0, 0, 0.1);color:var(--duet-color-text);cursor:pointer;display:-ms-flexbox;display:flex;height:calc(100% - 2px);-ms-flex-pack:center;justify-content:center;padding:0;position:absolute;right:1px;top:1px;-moz-user-select:none;-ms-user-select:none;user-select:none;width:48px;z-index:2}.duet-date__toggle:focus{-webkit-box-shadow:0 0 0 2px var(--duet-color-primary);box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__toggle-icon{display:-ms-flexbox;display:flex;-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.duet-date__dialog{display:-ms-flexbox;display:flex;left:0;min-width:320px;opacity:0;position:absolute;top:100%;-webkit-transform:scale(0.96) translateZ(0) translateY(-20px);transform:scale(0.96) translateZ(0) translateY(-20px);-webkit-transform-origin:top right;transform-origin:top right;-webkit-transition:opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;transition:opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease;transition:transform 300ms ease, opacity 300ms ease, visibility 300ms ease, -webkit-transform 300ms ease;visibility:hidden;width:100%;will-change:transform, opacity, visibility;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog{background:var(--duet-color-overlay);bottom:0;position:fixed;right:0;top:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transform-origin:bottom center;transform-origin:bottom center}}.duet-date__dialog.is-left{left:auto;right:0;width:auto}.duet-date__dialog.is-active{opacity:1;-webkit-transform:scale(1.0001) translateZ(0) translateY(0);transform:scale(1.0001) translateZ(0) translateY(0);visibility:visible}.duet-date__dialog-content{background:var(--duet-color-surface);border:1px solid rgba(0, 0, 0, 0.1);border-radius:var(--duet-radius);-webkit-box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);box-shadow:0 4px 10px 0 rgba(0, 0, 0, 0.1);margin-left:auto;margin-top:8px;max-width:310px;min-width:290px;padding:16px 16px 20px;position:relative;-webkit-transform:none;transform:none;width:100%;z-index:var(--duet-z-index)}@media (max-width: 35.9375em){.duet-date__dialog-content{border:0;border-radius:0;border-top-left-radius:var(--duet-radius);border-top-right-radius:var(--duet-radius);bottom:0;left:0;margin:0;max-width:none;min-height:26em;opacity:0;padding:0 8% 20px;position:absolute;-webkit-transform:translateZ(0) translateY(100%);transform:translateZ(0) translateY(100%);-webkit-transition:opacity 400ms ease, visibility 400ms ease, -webkit-transform 400ms ease;transition:opacity 400ms ease, visibility 400ms ease, -webkit-transform 400ms ease;transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease;transition:transform 400ms ease, opacity 400ms ease, visibility 400ms ease, -webkit-transform 400ms ease;visibility:hidden;will-change:transform, opacity, visibility}.is-active .duet-date__dialog-content{opacity:1;-webkit-transform:translateZ(0) translateY(0);transform:translateZ(0) translateY(0);visibility:visible}}.duet-date__table{border-collapse:collapse;border-spacing:0;color:var(--duet-color-text);font-size:1rem;font-weight:var(--duet-font-normal);line-height:1.25;text-align:center;width:100%}.duet-date__table-header{font-size:0.75rem;font-weight:var(--duet-font-bold);letter-spacing:1px;line-height:1.25;padding-bottom:8px;text-decoration:none;text-transform:uppercase}.duet-date__cell{text-align:center}.duet-date__day{-moz-appearance:none;-webkit-appearance:none;appearance:none;background:transparent;border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:inline-block;font-family:var(--duet-font);font-size:0.875rem;font-variant-numeric:tabular-nums;font-weight:var(--duet-font-normal);height:36px;line-height:1.25;padding:0 0 1px;position:relative;text-align:center;vertical-align:middle;width:36px;z-index:1}.duet-date__day.is-today{-webkit-box-shadow:0 0 0 1px var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary);position:relative;z-index:200}.duet-date__day:hover::before,.duet-date__day.is-today::before{background:var(--duet-color-primary);border-radius:50%;bottom:0;content:"";left:0;opacity:0.06;position:absolute;right:0;top:0}.duet-date__day[aria-pressed=true],.duet-date__day:focus{background:var(--duet-color-primary);-webkit-box-shadow:none;box-shadow:none;color:var(--duet-color-text-active);outline:0}.duet-date__day:active{background:var(--duet-color-primary);-webkit-box-shadow:0 0 5px var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);color:var(--duet-color-text-active);z-index:200}.duet-date__day:focus{-webkit-box-shadow:0 0 5px var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);z-index:200}.duet-date__day:not(.is-month){-webkit-box-shadow:none;box-shadow:none}.duet-date__day:not(.is-month),.duet-date__day[aria-disabled=true]{background:transparent;color:var(--duet-color-text);cursor:default;opacity:0.5}.duet-date__day[aria-disabled=true].is-today{-webkit-box-shadow:0 0 0 1px var(--duet-color-primary);box-shadow:0 0 0 1px var(--duet-color-primary)}.duet-date__day[aria-disabled=true].is-today:focus{-webkit-box-shadow:0 0 5px var(--duet-color-primary);box-shadow:0 0 5px var(--duet-color-primary);background:var(--duet-color-primary);color:var(--duet-color-text-active)}.duet-date__day[aria-disabled=true]:not(.is-today)::before{display:none}.duet-date__day.is-outside{background:var(--duet-color-button);-webkit-box-shadow:none;box-shadow:none;color:var(--duet-color-text);cursor:default;opacity:0.6;pointer-events:none}.duet-date__day.is-outside::before{display:none}.duet-date__header{-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:16px;width:100%}.duet-date__nav{white-space:nowrap}.duet-date__prev,.duet-date__next{-moz-appearance:none;-webkit-appearance:none;-ms-flex-align:center;align-items:center;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;height:32px;-ms-flex-pack:center;justify-content:center;margin-left:8px;padding:0;-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;width:32px}@media (max-width: 35.9375em){.duet-date__prev,.duet-date__next{height:40px;width:40px}}.duet-date__prev:focus,.duet-date__next:focus{-webkit-box-shadow:0 0 0 2px var(--duet-color-primary);box-shadow:0 0 0 2px var(--duet-color-primary);outline:0}.duet-date__prev:active:focus,.duet-date__next:active:focus{-webkit-box-shadow:none;box-shadow:none}.duet-date__prev:disabled,.duet-date__next:disabled{cursor:default;opacity:0.5}.duet-date__prev svg,.duet-date__next svg{margin:0 auto}.duet-date__select{display:-ms-inline-flexbox;display:inline-flex;margin-top:4px;position:relative}.duet-date__select span{margin-right:4px}.duet-date__select select{cursor:pointer;font-size:1rem;height:100%;left:0;opacity:0;position:absolute;top:0;width:100%;z-index:2}.duet-date__select select:focus+.duet-date__select-label{-webkit-box-shadow:0 0 0 2px var(--duet-color-primary);box-shadow:0 0 0 2px var(--duet-color-primary)}.duet-date__select-label{-ms-flex-align:center;align-items:center;border-radius:var(--duet-radius);color:var(--duet-color-text);display:-ms-flexbox;display:flex;font-size:1.25rem;font-weight:var(--duet-font-bold);line-height:1.25;padding:0 4px 0 8px;pointer-events:none;position:relative;width:100%;z-index:1}.duet-date__select-label svg{width:16px;height:16px}.duet-date__mobile{-ms-flex-align:center;align-items:center;border-bottom:1px solid rgba(0, 0, 0, 0.12);display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;margin-left:-10%;overflow:hidden;padding:12px 20px;position:relative;text-overflow:ellipsis;white-space:nowrap;width:120%}@media (min-width: 36em){.duet-date__mobile{border:0;margin:0;overflow:visible;padding:0;position:absolute;right:-8px;top:-8px;width:auto}}.duet-date__mobile-heading{display:inline-block;font-weight:var(--duet-font-bold);max-width:84%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 36em){.duet-date__mobile-heading{display:none}}.duet-date__close{-webkit-appearance:none;-ms-flex-align:center;align-items:center;-moz-appearance:none;appearance:none;background:var(--duet-color-button);border:0;border-radius:50%;color:var(--duet-color-text);cursor:pointer;display:-ms-flexbox;display:flex;height:24px;-ms-flex-pack:center;justify-content:center;padding:0;width:24px}@media (min-width: 36em){.duet-date__close{opacity:0}}.duet-date__close:focus{-webkit-box-shadow:0 0 0 2px var(--duet-color-primary);box-shadow:0 0 0 2px var(--duet-color-primary);outline:none}@media (min-width: 36em){.duet-date__close:focus{opacity:1}}.duet-date__close svg{margin:0 auto}.duet-date__vhidden{border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;overflow:hidden;padding:0;position:absolute;top:0;width:1px}';function L(e,t){var a=[];for(var o=e;o<=t;o++){a.push(o)}return a}var O={TAB:9,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40};function P(e,t){var a=e.value;var o=e.selectionStart;var i=a.slice(0,o);var r=a.slice(o,a.length);var n=i.replace(t,"");var d=r.replace(t,"");var s=n+d;var l=n.length;e.value=s;e.selectionStart=e.selectionEnd=l;return s}var A=/[^0-9\.\/\-]+/g;var B=300;var E=e("duet_date_picker",function(){function e(e){var t=this;a(this,e);this.duetChange=o(this,"duetChange",7);this.duetBlur=o(this,"duetBlur",7);this.duetFocus=o(this,"duetFocus",7);this.duetOpen=o(this,"duetOpen",7);this.duetClose=o(this,"duetClose",7);this.monthSelectId=F("DuetDateMonth");this.yearSelectId=F("DuetDateYear");this.dialogLabelId=F("DuetDateLabel");this.initialTouchX=null;this.initialTouchY=null;this.activeFocus=false;this.focusedDay=new Date;this.open=false;this.name="date";this.identifier="";this.disabled=false;this.direction="right";this.required=false;this.value="";this.min="";this.max="";this.firstDayOfWeek=d.Monday;this.localization=C;this.dateAdapter=I;this.isDateDisabled=function(){return false};this.enableActiveFocus=function(){t.activeFocus=true};this.disableActiveFocus=function(){t.activeFocus=false};this.toggleOpen=function(e){e.preventDefault();t.open?t.hide(false):t.show()};this.handleEscKey=function(e){if(e.keyCode===O.ESC){t.hide()}};this.handleBlur=function(e){e.stopPropagation();t.duetBlur.emit({component:"duet-date-picker"})};this.handleFocus=function(e){e.stopPropagation();t.duetFocus.emit({component:"duet-date-picker"})};this.handleTouchStart=function(e){var a=e.changedTouches[0];t.initialTouchX=a.pageX;t.initialTouchY=a.pageY};this.handleTouchMove=function(e){e.preventDefault()};this.handleTouchEnd=function(e){var a=e.changedTouches[0];var o=a.pageX-t.initialTouchX;var i=a.pageY-t.initialTouchY;var r=70;var n=Math.abs(o)>=r&&Math.abs(i)<=r;var d=Math.abs(i)>=r&&Math.abs(o)<=r&&i>0;if(n){t.addMonths(o<0?1:-1)}else if(d){t.hide(false);e.preventDefault()}t.initialTouchY=null;t.initialTouchX=null};this.handleNextMonthClick=function(e){e.preventDefault();t.addMonths(1)};this.handlePreviousMonthClick=function(e){e.preventDefault();t.addMonths(-1)};this.handleFirstFocusableKeydown=function(e){if(e.keyCode===O.TAB&&e.shiftKey){t.focusedDayNode.focus();e.preventDefault()}};this.handleKeyboardNavigation=function(e){if(e.keyCode===O.TAB&&!e.shiftKey){e.preventDefault();t.firstFocusableElement.focus();return}var a=true;switch(e.keyCode){case O.RIGHT:t.addDays(1);break;case O.LEFT:t.addDays(-1);break;case O.DOWN:t.addDays(7);break;case O.UP:t.addDays(-7);break;case O.PAGE_UP:if(e.shiftKey){t.addYears(-1)}else{t.addMonths(-1)}break;case O.PAGE_DOWN:if(e.shiftKey){t.addYears(1)}else{t.addMonths(1)}break;case O.HOME:t.startOfWeek();break;case O.END:t.endOfWeek();break;default:a=false}if(a){e.preventDefault();t.enableActiveFocus()}};this.handleDaySelect=function(e,a){var o=x(a,l(t.min),l(t.max));var i=!t.isDateDisabled(a);if(o&&i){t.setValue(a);t.hide()}else{t.setFocusedDay(a)}};this.handleMonthSelect=function(e){t.setMonth(parseInt(e.target.value,10))};this.handleYearSelect=function(e){t.setYear(parseInt(e.target.value,10))};this.handleInputChange=function(){var e=t.datePickerInput;P(e,A);var a=t.dateAdapter.parse(e.value,s);if(a||e.value===""){t.setValue(a)}};this.processFocusedDayNode=function(e){t.focusedDayNode=e;if(t.activeFocus&&t.open){setTimeout((function(){return e.focus()}),0)}}}e.prototype.connectedCallback=function(){this.createDateFormatters()};e.prototype.createDateFormatters=function(){this.dateFormatShort=new Intl.DateTimeFormat(this.localization.locale,{day:"numeric",month:"long"});this.dateFormatLong=new Intl.DateTimeFormat(this.localization.locale,{day:"numeric",month:"long",year:"numeric"})};e.prototype.handleDocumentClick=function(e){var t=this;if(!this.open){return}var a=e.composedPath().every((function(e){return e!==t.dialogWrapperNode&&e!==t.datePickerButton}));if(a){this.hide(false)}};e.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.datePickerInput.focus()]}))}))};e.prototype.show=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(t){this.open=true;this.duetOpen.emit({component:"duet-date-picker"});this.setFocusedDay(l(this.value)||new Date);clearTimeout(this.focusTimeoutId);this.focusTimeoutId=setTimeout((function(){return e.monthSelectNode.focus()}),B);return[2]}))}))};e.prototype.hide=function(e){if(e===void 0){e=true}return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(a){this.open=false;this.duetClose.emit({component:"duet-date-picker"});clearTimeout(this.focusTimeoutId);if(e){setTimeout((function(){return t.datePickerButton.focus()}),B+200)}return[2]}))}))};e.prototype.addDays=function(e){this.setFocusedDay(p(this.focusedDay,e))};e.prototype.addMonths=function(e){this.setMonth(this.focusedDay.getMonth()+e)};e.prototype.addYears=function(e){this.setYear(this.focusedDay.getFullYear()+e)};e.prototype.startOfWeek=function(){this.setFocusedDay(f(this.focusedDay,this.firstDayOfWeek))};e.prototype.endOfWeek=function(){this.setFocusedDay(b(this.focusedDay,this.firstDayOfWeek))};e.prototype.setMonth=function(e){var t=y(v(this.focusedDay),e);var a=m(t);var o=y(this.focusedDay,e);this.setFocusedDay(_(o,t,a))};e.prototype.setYear=function(e){var t=g(v(this.focusedDay),e);var a=m(t);var o=g(this.focusedDay,e);this.setFocusedDay(_(o,t,a))};e.prototype.setFocusedDay=function(e){this.focusedDay=_(e,l(this.min),l(this.max))};e.prototype.setValue=function(e){this.value=u(e);this.duetChange.emit({component:"duet-date-picker",value:this.value,valueAsDate:e})};e.prototype.render=function(){var e=this;var a=l(this.value);var o=a&&this.dateAdapter.format(a);var r=(a||this.focusedDay).getFullYear();var n=this.focusedDay.getMonth();var d=this.focusedDay.getFullYear();var s=l(this.min);var u=l(this.max);var c=s!=null&&s.getMonth()===n&&s.getFullYear()===d;var h=u!=null&&u.getMonth()===n&&u.getFullYear()===d;var p=s?s.getFullYear():r-10;var f=u?u.getFullYear():r+10;return t(i,null,t("div",{class:"duet-date"},t(M,{dateFormatter:this.dateFormatLong,value:this.value,valueAsDate:a,formattedValue:o,onInput:this.handleInputChange,onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.toggleOpen,name:this.name,disabled:this.disabled,role:this.role,required:this.required,identifier:this.identifier,localization:this.localization,buttonRef:function(t){return e.datePickerButton=t},inputRef:function(t){return e.datePickerInput=t}}),t("div",{class:{"duet-date__dialog":true,"is-left":this.direction==="left","is-active":this.open},role:"dialog","aria-modal":"true","aria-hidden":this.open?"false":"true","aria-labelledby":this.dialogLabelId,onTouchMove:this.handleTouchMove,onTouchStart:this.handleTouchStart,onTouchEnd:this.handleTouchEnd},t("div",{class:"duet-date__dialog-content",onKeyDown:this.handleEscKey,ref:function(t){return e.dialogWrapperNode=t}},t("div",{class:"duet-date__mobile",onFocusin:this.disableActiveFocus},t("label",{class:"duet-date__mobile-heading"},this.localization.calendarHeading),t("button",{class:"duet-date__close",ref:function(t){return e.firstFocusableElement=t},onKeyDown:this.handleFirstFocusableKeydown,onClick:function(){return e.hide()},type:"button"},t("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"})),t("span",{class:"duet-date__vhidden"},this.localization.closeLabel))),t("div",{class:"duet-date__header",onFocusin:this.disableActiveFocus},t("div",null,t("h2",{id:this.dialogLabelId,class:"duet-date__vhidden","aria-live":"polite","aria-atomic":"true"},this.localization.monthNames[n]," ",this.focusedDay.getFullYear()),t("label",{htmlFor:this.monthSelectId,class:"duet-date__vhidden"},this.localization.monthSelectLabel),t("div",{class:"duet-date__select"},t("select",{id:this.monthSelectId,class:"duet-date__select--month",ref:function(t){return e.monthSelectNode=t},onChange:this.handleMonthSelect},this.localization.monthNames.map((function(e,a){return t("option",{key:e,value:a,selected:a===n,disabled:!x(new Date(d,a,1),s?v(s):null,u?m(u):null)},e)}))),t("div",{class:"duet-date__select-label","aria-hidden":"true"},t("span",null,this.localization.monthNamesShort[n]),t("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},t("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"})))),t("label",{htmlFor:this.yearSelectId,class:"duet-date__vhidden"},this.localization.yearSelectLabel),t("div",{class:"duet-date__select"},t("select",{id:this.yearSelectId,class:"duet-date__select--year",onChange:this.handleYearSelect},L(p,f).map((function(e){return t("option",{key:e,selected:e===d},e)}))),t("div",{class:"duet-date__select-label","aria-hidden":"true"},t("span",null,this.focusedDay.getFullYear()),t("svg",{fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},t("path",{d:"M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"}))))),t("div",{class:"duet-date__nav"},t("button",{class:"duet-date__prev",onClick:this.handlePreviousMonthClick,disabled:c,type:"button"},t("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},t("path",{d:"M14.71 15.88L10.83 12l3.88-3.88c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.71 11.3c-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0 .38-.39.39-1.03 0-1.42z"})),t("span",{class:"duet-date__vhidden"},this.localization.prevMonthLabel)),t("button",{class:"duet-date__next",onClick:this.handleNextMonthClick,disabled:h,type:"button"},t("svg",{"aria-hidden":"true",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",width:"21",height:"21",viewBox:"0 0 24 24"},t("path",{d:"M9.29 15.88L13.17 12 9.29 8.12c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"})),t("span",{class:"duet-date__vhidden"},this.localization.nextMonthLabel)))),t(Y,{dateFormatter:this.dateFormatShort,selectedDate:a,focusedDate:this.focusedDay,onDateSelect:this.handleDaySelect,onKeyboardNavigation:this.handleKeyboardNavigation,labelledById:this.dialogLabelId,localization:this.localization,firstDayOfWeek:this.firstDayOfWeek,focusedDayRef:this.processFocusedDayNode,min:s,max:u,isDateDisabled:this.isDateDisabled})))))};Object.defineProperty(e.prototype,"element",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{localization:["createDateFormatters"]}},enumerable:false,configurable:true});return e}());E.style=N}}}));