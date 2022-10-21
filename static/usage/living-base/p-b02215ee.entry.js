import{r as o,c as t,h as r,H as e,g as i}from"./p-f27c1a9d.js";import{c as n}from"./p-fdf6920f.js";import{e as a}from"./p-821ec953.js";let l=0;const d=class{constructor(r){o(this,r),this.liChange=t(this,"li-change",7),this.checked=!1,this.disabled=!1,this.invalid=!1,this.value="",this.handleCheckedChange=o=>{this.checked=o.target.checked,this.checked&&this.unCheckSibliings(),a(this,"liChange",{value:null!==this.value?this.value:this.value.toString()})}}connectedCallback(){}componentWillLoad(){null==this.inputId&&(this.inputId="input-"+l++)}componentDidLoad(){}componentWillUpdate(){}componentDidUpdate(){}componentWillRender(){}componentShouldRender(){}componentDidRender(){}disconnectedCallback(){}handleLableClick(o){o.preventDefault()}getCssClassMap(){return n("radio-button",this.checked&&"radio-button--checked",this.disabled&&"radio-button--disabled",this.invalid&&"radio-button--status-error")}getSiblingRadios(){return Array.from(document.querySelectorAll(`scale-radio-button[name="${this.name}"]`)).filter((o=>o.inputId!==this.inputId))}unCheckSibliings(){this.getSiblingRadios()}render(){const o=this.invalid?{"aria-invalid":!0}:{},t=`helper-message-${l}`,i={"aria-describedBy":t};return r(e,null,r("div",{class:this.getCssClassMap()},r("input",Object.assign({type:"radio",name:this.name,id:this.inputId,onChange:this.handleCheckedChange,value:this.value,checked:this.checked,disabled:this.disabled},o,this.helperText?i:{})),r("label",{htmlFor:this.inputId,onClick:this.handleLableClick},this.label),!!this.helperText&&r("div",{class:"radio-button__meta",id:t,"aria-live":"polite","aria-relevant":"additions removals"},r("div",{class:"radio-button__helper-text"},this.helperText))))}get el(){return i(this)}};d.style="li-radio-button{--color-disabled:var(--li-token-color-text-and-icon-disabled);--background-disabled:var(--li-token-color-ui-disabled);--color-error:var(--li-token-color-text-and-icon-functional-danger);--transition:all var(--li-token-motion-duration-transition)\n    var(--li-token-motion-easing-standard);--color-primary:var(--li-token-color-text-and-icon-primary-standard);--color-primary-hover:var(--li-token-color-text-and-icon-standard);--color-primary-active:var(--li-token-color-text-and-icon-standard);--color-focus:var(--li-token-color-functional-focus);--color-text:var(--li-token-color-text-and-icon-standard);--transition-helper-text:var(--transition);--font-size-helper-text:var(--li-token-typography-font-size-small);--font-weight-helper-text:var(--li-token-typography-font-weight-bold);--line-height-helper-text:var(--li-token-typography-line-spacing-standard);--color-helper-text:var(\n    --li-token-color-text-and-icon-functional-informational\n  );--spacing-left-helper-text:var(--li-token-spacing-unit-x6);--spacing-top-helper-text:var(--li-token-spacing-unit-x1);--transition-label:var(--transition);--font-weight-label:var(--li-token-typography-font-weight-medium);--color-label:var(--color-text);--width-control:var(--li-token-spacing-unit-x4);--height-control:var(--li-token-spacing-unit-x4);--transition-control:var(--transition);--spacing-control:0 var(--li-token-spacing-unit-x2) 0 0;--background-color-control:var(--li-token-color-ui-base);--border-control:var(--li-token-spacing-unit-x025) solid\n    var(--li-token-color-ui-border-standard);--border-control-checked:calc(0.5 * var(--li-token-spacing-unit-x3)) solid\n    var(--li-token-color-primary-standard);--border-control-checked-active:calc(0.5 * var(--li-token-spacing-unit-x3))\n    solid var(--li-token-color-primary-pressed, #cb0068);--border-control-checked-disabled:calc(0.5 * var(--li-token-spacing-unit-x3))\n    solid var(--li-token-color-ui-border-disabled);--background-control-checked-disabled:none;--border-control-active:var(--li-token-spacing-unit-x2) solid\n    var(--li-token-color-primary-pressed);--border-control-disabled:var(--li-token-spacing-unit-x025) solid\n    var(--li-token-color-ui-border-disabled);--border-control-error:var(--li-token-spacing-unit-x05) solid\n    var(--li-token-color-functional-danger-standard);--box-shadow-control-focus:0 0 0 var(--li-token-spacing-unit-x05)\n    var(--color-focus)}.radio-button{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;cursor:pointer;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.radio-button .radio-button__meta{width:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.radio-button .radio-button__helper-text{-webkit-transition:var(--transition-helper-text);transition:var(--transition-helper-text);font-size:var(--font-size-helper-text);font-weight:var(--font-weight-helper-text);line-height:var(--line-height-helper-text);color:var(--color-helper-text);margin-top:var(--spacing-top-helper-text);padding-left:var(--spacing-left-helper-text)}.radio-button--status-error .radio-button__helper-text{color:var(--color-error)}.radio-button label{color:var(--color-label);-webkit-transition:var(--transition-label);transition:var(--transition-label);font-weight:var(--font-weight-label);cursor:pointer}.radio-button input{width:var(--width-control);height:var(--height-control);-webkit-transition:var(--transition-control);transition:var(--transition-control);border-radius:50%;-webkit-appearance:none;background-color:var(--li-token-color-ui-state-fill-standard);border:var(--border-control);margin:var(--spacing-control);cursor:pointer}.radio-button input:focus{outline:none;-webkit-box-shadow:var(--box-shadow-control-focus);box-shadow:var(--box-shadow-control-focus)}.radio-button:hover input:not(:checked):not([disabled]){-webkit-box-shadow:none;box-shadow:none;border-color:var(--li-token-color-ui-border-hovered);background-color:var(--li-token-color-ui-state-fill-hovered)}.radio-button:hover input:not(:checked):not([disabled])~label{color:var(--color-primary-hover)}.radio-button:active input:not(:checked):not([disabled]){border-color:var(--li-token-color-ui-border-pressed);background-color:var(--li-token-color-ui-state-fill-pressed)}.radio-button input:not(:checked):not([disabled]):active~label{color:var(--color-primary-active)}.radio-button input:disabled{border:var(--border-control-disabled)}.radio-button input:disabled~label{color:var(--color-disabled)}.radio-button.radio-button--status-error input{border:var(--border-control-error)}.radio-button.radio-button--status-error:hover input:not(:checked):not([disabled]){border-color:var(--li-token-color-functional-danger-hovered)}.radio-button.radio-button--status-error:active input:not(:checked):not([disabled]){border-color:var(--li-token-color-functional-danger-pressed)}.radio-button input:checked{border:var(--border-control-checked)}.radio-button input:checked:active{border:var(--border-control-checked-active)}.radio-button input:checked:disabled{background:var(--background-control-checked-disabled);border:var(--border-control-checked-disabled)}.radio-button input:checked:disabled~label{color:var(--color-disabled)}.radio-button--disabled label,.radio-button--disabled .radio-button__label,.radio-button--disabled input,.radio-button--disabled .radio-button__helper-text{cursor:not-allowed;border-color:var(--color-disabled);color:var(--color-disabled);background:var(--li-token-color-ui-state-fill-standard)}";export{d as li_radio}