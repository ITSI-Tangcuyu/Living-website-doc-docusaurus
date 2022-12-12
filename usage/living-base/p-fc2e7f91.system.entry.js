System.register(["./p-95475f0a.system.js","./p-8df5e58b.system.js"],(function(t){"use strict";var o,a,r,e,i;return{setters:[function(t){o=t.r;a=t.h;r=t.H;e=t.g},function(t){i=t.c}],execute:function(){var n="li-table{--radius:var(--li-token-radius-standard) var(--li-token-radius-standard) 0 0;--background:var(--li-token-color-ui-state-fill-standard);--color:var(--li-token-color-text-and-icon-standard);--color-hover:var(--li-token-color-text-and-icon-primary-hovered);--color-active:var(--li-token-color-text-and-icon-primary-pressed);--font-size:var(--li-token-typography-font-size-small);--font-weight:var(--li-token-typography-font-weight-bold);--spacing-tbody-td:var(--li-token-spacing-unit-x4) var(--li-token-spacing-unit-x2);--border-bottom-tbody-td:var(--li-token-spacing-unit-x025) solid var(--li-token-color-ui-faint);--background-tbody:var(--li-token-color-ui-state-fill-standard);--background-tbody-tr-hover:var(--li-token-color-ui-state-fill-hovered);--background-tfoot:var(--li-token-color-ui-state-fill-standard);--border-bottom-tfoot-td:var(--li-token-spacing-unit-x025) solid var(--li-token-color-ui-extra-strong);--spacing-th-sortable:0 var(--li-token-spacing-unit-x2) 0 0;--background-th-sortable-hover:var(--li-token-color-ui-subtle);--background-th-sortable-active:var(--li-token-color-ui-faint);--box-shadow-th-sortable-focus:inset 0 0 0 var(--li-token-spacing-unit-x05) var(--li-token-color-functional-focus);--background-tr-striped:var(--li-token-color-ui-subtle);--padding:var(--li-token-spacing-unit-x0) var(--li-token-spacing-unit-x2)}.table{display:block;overflow:auto;border-radius:var(--radius);background:var(--background);color:var(--color)}.table table{width:100%;white-space:nowrap;border-spacing:0;border-collapse:collapse}.table th{padding:var(--padding);text-align:left;line-height:32px;color:var(--color);font-size:var(--font-size);background:var(--li-token-color-background-surface-subtle)}.table td{padding:var(--padding)}.table tbody tr td{padding:8px}.table tbody td{border-bottom:var(--border-bottom-tbody-td)}.table thead tr th:last-of-type,.table tbody tr td:last-of-type,.table tfoot tr td:last-of-type{padding-right:12px}.table tfoot{background:var(--background-tfoot)}.table tbody{background:var(--background-tbody)}.table tfoot tr td{padding:8px;font-weight:var(--font-weight);border-bottom:var(--border-bottom-tfoot-td)}.table .li-sort-indicator svg{display:none}.table tbody tr:hover{background:var(--background-tbody-tr-hover)}.table th:focus{outline:none}.table--size-default tbody tr td{padding:var(--spacing-tbody-td)}.table--sortable th{cursor:pointer;padding:var(--spacing-th-sortable)}.table--sortable th:hover{padding:var(--spacing-th-sortable);background:var(--background-th-sortable-hover)}.table--sortable th:active{background:var(--background-th-sortable-active)}.table--sortable th:focus{-webkit-box-shadow:var(--box-shadow-th-sortable-focus);box-shadow:var(--box-shadow-th-sortable-focus);border-radius:var(--radius)}.table--sortable th .li-sort-indicator svg{display:block}.table--sortable th[aria-disabled]{padding:var(--padding);pointer-events:none}.table--sortable th:not([aria-sort]){padding:var(--padding)}.table--sortable th[aria-sort=none]{padding:var(--padding)}.table--sortable th[aria-sort=ascending] .li-sort-indicator polygon:first-of-type{fill:var(--color)}.table--sortable th:hover .li-sort-indicator polygon:first-of-type{fill:var(--color-hover)}.table--sortable th:hover[aria-sort=ascending] .li-sort-indicator polygon:first-of-type{fill:var(--color-hover)}.table--sortable th:active[aria-sort=ascending] .li-sort-indicator polygon:first-of-type{fill:var(--color-active)}.table--sortable th[aria-sort=ascending] .li-sort-indicator polygon{fill:transparent}.table--sortable th:hover[aria-sort=ascending] .li-sort-indicator polygon{fill:transparent}.table--sortable th:active[aria-sort=ascending] .li-sort-indicator polygon{fill:transparent}.table--sortable th[aria-sort=descending] .li-sort-indicator polygon:first-of-type{fill:transparent}.table--sortable th:hover[aria-sort=descending] .li-sort-indicator polygon:first-of-type{fill:transparent}.table--sortable th:active[aria-sort=descending] .li-sort-indicator polygon:first-of-type{fill:transparent}.table--sortable th[aria-sort=descending] .li-sort-indicator polygon{fill:var(--color)}.table--sortable th:hover[aria-sort=descending] .li-sort-indicator polygon{fill:var(--color-hover)}.table--sortable th:active[aria-sort=descending] .li-sort-indicator polygon{fill:var(--color-active)}.table--sortable th .li-sort-indicator{width:16px;height:16px;margin:0 0 0 4px;display:inline-block;position:relative}.table--sortable th .li-sort-indicator>svg{top:4px;left:0;width:16px;height:16px;position:absolute}.table--sortable th .li-sort-indicator polygon{fill:transparent}.table--sortable th[aria-sort=none]:hover{padding:0 8px 0 0}.table--sortable th[aria-sort=none] .li-sort-indicator{display:none}.table--sortable th:not([aria-sort]):hover{padding:0 8px 0 0}.table--sortable th:not([aria-sort]) .li-sort-indicator{display:none}.table--sortable th:hover .li-sort-indicator{display:inline-block}.table--striped table tr:nth-child(even){background:var(--background-tr-striped)}";var l=t("li_table",function(){function t(t){o(this,t);this.slots={};this.showSort=false;this.size="default";this.striped=false}t.prototype.connectedCallback=function(){};t.prototype.componentWillLoad=function(){this.el.querySelectorAll("th").forEach((function(t){t.insertAdjacentHTML("afterbegin",'<span class="li-sort-indicator" aria-hidden="true">\n          <svg viewBox="0 0 16 16">\n            <polygon transform="translate(8.242641, 10.242641) rotate(45.000000) translate(-8.242641, -10.242641) " points="5.24264069 7.24264069 11.2426407 7.24264069 5.24264069 13.2426407"/></polygon>\n            <polygon transform="translate(8.242641, 6.242641) scale(1, -1) rotate(45.000000) translate(-8.242641, -6.242641) " points="5.24264069 3.24264069 11.2426407 3.24264069 5.24264069 9.24264069"/>\n          </svg>\n        </span>\n        ')}))};t.prototype.componentDidLoad=function(){};t.prototype.componentWillUpdate=function(){};t.prototype.componentDidUpdate=function(){};t.prototype.componentWillRender=function(){};t.prototype.componentShouldRender=function(){};t.prototype.componentDidRender=function(){};t.prototype.disconnectedCallback=function(){};t.prototype.getCssClassMap=function(){return i("table",this.size&&"table--size-".concat(this.size),this.showSort&&"table--sortable",this.striped&&"table--striped")};t.prototype.render=function(){return a(r,{class:this.getCssClassMap()},this.styles&&a("style",null,this.styles),a("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return e(this)},enumerable:false,configurable:true});return t}());l.style=n}}}));