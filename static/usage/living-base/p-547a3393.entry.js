import{r,h as s,H as o,g as e}from"./p-8d227782.js";const t=class{constructor(s){r(this,s),this.isDragging=!1,this.value=0,this.disabled=!1,this.showInput=!1,this.eventHandler=r=>{if(this.disabled)return;const s=this.el.getBoundingClientRect(),o=r.clientX-s.left;switch(r.type){case"mousedown":this.isDragging=!0,this.update(o),this.refreshSlider(this.value);break;case"mouseup":this.isDragging=!1;break;case"mousemove":this.isDragging&&(this.update(o),this.refreshSlider(this.value));break;case"mouseleave":this.isDragging=!1}},this.update=r=>{let s=r;s<=0&&(s=0);const o=this.showInput?this.container.clientWidth:this.el.offsetWidth;s>o&&(s=o),this.value=Math.round(s/o*100)},this.refreshSlider=r=>{const s=r/100*(this.showInput?this.container.clientWidth:this.el.offsetWidth);null!==this.thumb&&(this.thumb.style.left=s-this.thumb.offsetWidth/2+"px"),null!==this.progressActive&&(this.progressActive.style.width=`${s}px`)},this.changeProgress=()=>{this.inputValue.value>100?(this.value=100,this.inputValue.value=100):this.value=Number(this.inputValue.value),this.refreshSlider(this.value)}}componentDidLoad(){this.refreshSlider(this.value)}render(){return s(o,null,s("div",{class:{container:!0,"container-disabled":this.disabled},onMouseMove:this.eventHandler,onMouseDown:this.eventHandler,onMouseUp:this.eventHandler,onMouseLeave:this.eventHandler,ref:r=>this.container=r},s("div",{class:"progress-container"},s("div",{ref:r=>this.progressActive=r,class:"progress-active"})),s("div",{ref:r=>this.thumb=r,class:"thumb"})),this.showInput?s("li-input",{class:"container-input",ref:r=>this.inputValue=r,onInput:this.changeProgress}):"")}get el(){return e(this)}};t.style='@charset "UTF-8";:host{display:block;--background:var(--li-color-primary);--progress-background:#89919a;--progress-height:6px;--border-width:2px;--border-style:solid;--li-border-color:#89919a;--background-hover:#00cdfe;--thumb-background:#fff;display:-ms-flexbox;display:flex}.container{width:100%;padding:10px 0;height:40px;position:relative;cursor:pointer;-ms-flex:1;flex:1}.progress-container{position:relative;width:100%;top:18px;height:var(--progress-height);background:var(--progress-background);border-radius:var(--progress-height)}.progress-container .progress-active{position:absolute;width:0;border-radius:var(--progress-height);height:var(--progress-height);background:var(--background)}.thumb{position:absolute;width:30px;height:30px;left:-15px;top:15px;border-radius:100%;border:var(--border-width) var(--border-style) var(--li-border-color);-webkit-box-sizing:border-box;box-sizing:border-box}.thumb:hover{--li-border-color:#00cdfe;background:-webkit-gradient(linear, left top, left bottom, from(var(--background-hover)), to(var(--background-hover)));background:linear-gradient(var(--background-hover), var(--background-hover));cursor:-webkit-grab;cursor:grab}.thumb:active{--border-style:dashed;--li-border-color:#00cdfe;cursor:-webkit-grab;cursor:grab}.container-input{margin-top:12px;margin-left:20px}.container-disabled{--progress-background:#eaecef;--li-border-color:#eaecef;cursor:not-allowed}.container-disabled .progress-container,.container-disabled .progress-active{background:var(--progress-background)}.container-disabled .thumb,.container-disabled .thumb:hover,.container-disabled .thumb:active{--border-style:solid;border:var(--border-width) var(--border-style) var(--li-border-color);background:var(--thumb-background);cursor:not-allowed}';export{t as li_slider}