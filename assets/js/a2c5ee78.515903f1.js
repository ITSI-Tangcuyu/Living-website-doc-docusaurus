"use strict";(self.webpackChunkliving_design_docs_docusaurus=self.webpackChunkliving_design_docs_docusaurus||[]).push([[5750],{2199:(e,t,n)=>{n.d(t,{Z:()=>i});var l=n(7294);const a="container_i2VL",o="icon_f3Zy",r="title_iMEn",i=e=>{let{children:t,background:n="--ifm-color-info-lightest",emoji:i="\ud83d\udca1"}=e;return l.createElement("div",{className:a},l.createElement("span",{className:o},i),l.createElement("span",{className:r},t),l.createElement("style",null,"\n        span > :global(p) {\n          margin-top: 0;\n        }\n      "))}},9964:(e,t,n)=>{n.d(t,{Z:()=>L});var l=n(7294),a=n(9524);n(9979);let o,r;!function(e){e.JavaScript="javascript",e.Angular="angular",e.React="react",e.Vue="vue"}(o||(o={})),function(e){e.iOS="ios",e.MD="md"}(r||(r={}));var i=n(7083),c=(n(8500),n(7462)),s=n(1048),d=n(3609),u=n(6010);const m="tabNav_gxPI",p="tabList_nZAZ",g="tabItem_VZd9",h="tabNavItem_t9Ol",v="tabNavItemLeft_qnms",b="tabNavButton__N7i";function f(e){const{lazy:t,block:n,defaultValue:a,values:o,groupId:r,className:i}=e,[s,f]=(0,l.useState)(!1),[C,k]=(0,l.useState)(!1),E=(0,l.createRef)(),y=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=o??y.map((e=>{let{props:{value:t,label:n,icon:l,attributes:a}}=e;return{value:t,label:n,attributes:a,icon:l}})),N=(0,d.l)(w,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===a?a:a??y.find((e=>e.props.default))?.props.value??y[0]?.props.value;if(null!==_&&!w.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const[x,I]=(0,l.useState)(_),A=[],L=e=>{const t=e.currentTarget,n=A.indexOf(t),l=w[n].value;l!==x&&I(l)},T=e=>{let t=null;switch(e.key){case"ArrowRight":{const n=A.indexOf(e.currentTarget)+1;t=A[n]||A[0];break}case"ArrowLeft":{const n=A.indexOf(e.currentTarget)-1;t=A[n]||A[A.length-1];break}}t?.focus()};(0,l.useEffect)((()=>{f(E.current?.scrollLeft>40),k(E.current?.scrollWidth>E.current?.offsetWidth)}),[]);const Z=void 0===w.find((e=>e.value===x)),S=e=>Z?e===w[0].value:e===x;return l.createElement("div",{className:(0,u.Z)("tabs-container",p)},l.createElement("div",{className:(0,u.Z)("tabs-nav",m)},l.createElement("ul",{ref:E,role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},i),onScroll:()=>{f(E.current?.scrollLeft>40),k(E.current?.scrollWidth>E.current?.offsetWidth)}},s&&l.createElement("div",{className:(0,u.Z)("tabs__nav-item",h,v)},l.createElement("button",{className:(0,u.Z)("tabs__nav-button",b),onClick:()=>{E.current.scrollTo({left:E.current.scrollLeft-150,behavior:"smooth"})}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},l.createElement("polyline",{points:"328 112 184 256 328 400",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48px"})))),w.map((e=>{let{value:t,label:n,attributes:a}=e;const o=S(t);return l.createElement("li",(0,c.Z)({role:"tab",tabIndex:o?0:-1,"aria-selected":o,key:t,ref:e=>A.push(e),onKeyDown:T,onFocus:L,onClick:L},a,{className:(0,u.Z)("tabs__item",g,a?.className,{"tabs__item--active":o})}),n??t)})),C&&l.createElement("div",{className:(0,u.Z)("tabs__nav-item",h)},l.createElement("button",{className:(0,u.Z)("tabs__nav-button",b),onClick:()=>{E.current.scrollTo({left:E.current.scrollLeft+150,behavior:"smooth"})}},l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 512 512"},l.createElement("polyline",{points:"184 112 328 256 184 400",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"48px"})))))),t?(0,l.cloneElement)(y.filter((e=>S(e.props.value)))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,l.cloneElement)(e,{key:t,className:`${e.props.className} ${S(e.props.value)?"":"hidden"}`})))))}function C(e){const t=(0,s.Z)();return l.createElement(f,(0,c.Z)({key:String(t)},e))}var k=n(425);const E=()=>l.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{d:"M3.75 8.625L0.75 6L3.75 3.375",stroke:"#EB4700",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8.25 8.625L11.25 6L8.25 3.375",stroke:"#EB4700",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})),y=()=>l.createElement("svg",{width:"12",height:"8",viewBox:"0 0 12 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.78201 5.84221V7.56845C7.05944 7.71231 7.38757 7.82017 7.76639 7.8921C8.1452 7.96403 8.54444 8 8.96417 8C9.37323 8 9.7618 7.96045 10.1299 7.88131C10.4981 7.80221 10.8209 7.67183 11.0983 7.49021C11.3758 7.30862 11.5954 7.07124 11.7572 6.77814C11.9191 6.48503 12 6.12272 12 5.69117C12 5.37828 11.9538 5.10407 11.8613 4.86852C11.7688 4.63297 11.6354 4.42348 11.4611 4.24007C11.2869 4.05666 11.0779 3.8921 10.8342 3.74645C10.5906 3.60079 10.3158 3.46324 10.0099 3.33379C9.78583 3.24028 9.58486 3.14948 9.40701 3.06138C9.22916 2.97324 9.078 2.88335 8.9535 2.79166C8.829 2.69993 8.73297 2.60283 8.6654 2.50035C8.59783 2.39783 8.56401 2.28186 8.56401 2.15238C8.56401 2.03372 8.59425 1.92672 8.65473 1.83141C8.71521 1.7361 8.80057 1.65431 8.91082 1.58597C9.0211 1.51766 9.15624 1.46459 9.3163 1.42683C9.47639 1.38907 9.6542 1.37021 9.84985 1.37021C9.99211 1.37021 10.1424 1.381 10.3007 1.40255C10.459 1.42414 10.6181 1.45741 10.7782 1.50234C10.9383 1.54731 11.0939 1.60397 11.2451 1.67228C11.3962 1.74062 11.5358 1.81972 11.6639 1.90966V0.29669C11.4042 0.196 11.1206 0.121379 10.8129 0.0728276C10.5052 0.0242758 10.1522 0 9.75382 0C9.34831 0 8.96417 0.0440687 8.60138 0.132172C8.23858 0.220276 7.91935 0.357828 7.64366 0.544828C7.368 0.731862 7.15016 0.970103 6.9901 1.25962C6.83005 1.5491 6.75 1.89524 6.75 2.29803C6.75 2.81231 6.89673 3.25107 7.19018 3.61431C7.4836 3.97752 7.9291 4.285 8.52668 4.53676C8.76143 4.63386 8.98019 4.72914 9.18293 4.82266C9.38567 4.91617 9.56086 5.01328 9.70844 5.11397C9.85606 5.21465 9.97255 5.32434 10.0579 5.44303C10.1433 5.56169 10.186 5.69655 10.186 5.84762C10.186 5.9591 10.1593 6.06248 10.1059 6.15779C10.0526 6.2531 9.97166 6.33579 9.86318 6.40593C9.75471 6.47607 9.61953 6.5309 9.4577 6.57045C9.29584 6.61003 9.10647 6.62979 8.88948 6.62979C8.51956 6.62979 8.15322 6.56417 7.79039 6.4329C7.42759 6.30165 7.09145 6.10476 6.78201 5.84221ZM3.91295 1.58903H6.10227V0.172414H0V1.58903H2.17861V7.89655H3.91295V1.58903Z",fill:"#3178C6"})),w=()=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 512 512"},l.createElement("polygon",{fill:"#33475A",points:"256 144.03 200.51 47.92 121.08 47.92 256 281.61 390.92 47.92 311.49 47.92 256 144.03"}),l.createElement("polygon",{fill:"#3FB27F",points:"409.4 47.92 256 313.61 102.6 47.92 15.74 47.92 256 464.08 496.26 47.92 409.4 47.92"})),N=()=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:"12",width:"12"},l.createElement("path",{d:"M20.414,2H5V30H27V8.586ZM7,28V4H19v6h6V28Z",fill:"#3178C6"})),_=()=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",height:"12",width:"12"},l.createElement("polygon",{points:"5.902 27.201 3.656 2 28.344 2 26.095 27.197 15.985 30 5.902 27.201",fill:"#1572b6"}),l.createElement("polygon",{points:"16 27.858 24.17 25.593 26.092 4.061 16 4.061 16 27.858",fill:"#33a9dc"}),l.createElement("polygon",{points:"16 13.191 20.09 13.191 20.372 10.026 16 10.026 16 6.935 16.011 6.935 23.75 6.935 23.676 7.764 22.917 16.282 16 16.282 16 13.191",fill:"#fff"}),l.createElement("polygon",{points:"16.019 21.218 16.005 21.222 12.563 20.292 12.343 17.827 10.67 17.827 9.24 17.827 9.673 22.68 16.004 24.438 16.019 24.434 16.019 21.218",fill:"#ebebeb"}),l.createElement("polygon",{points:"19.827 16.151 19.455 20.29 16.008 21.22 16.008 24.436 22.344 22.68 22.391 22.158 22.928 16.151 19.827 16.151",fill:"#fff"}),l.createElement("polygon",{points:"16.011 6.935 16.011 8.855 16.011 10.018 16.011 10.026 8.555 10.026 8.555 10.026 8.545 10.026 8.483 9.331 8.342 7.764 8.268 6.935 16.011 6.935",fill:"#ebebeb"}),l.createElement("polygon",{points:"16 13.191 16 15.111 16 16.274 16 16.282 12.611 16.282 12.611 16.282 12.601 16.282 12.539 15.587 12.399 14.02 12.325 13.191 16 13.191",fill:"#ebebeb"})),x=()=>l.createElement("div",{className:"icon__dots"},l.createElement("svg",{viewBox:"0 0 64 64"},l.createElement("circle",{transform:"translate(32,32)",r:"6"})),l.createElement("svg",{viewBox:"0 0 64 64"},l.createElement("circle",{transform:"translate(32,32)",r:"6"})),l.createElement("svg",{viewBox:"0 0 64 64"},l.createElement("circle",{transform:"translate(32,32)",r:"6"}))),I=e=>{let{isSelected:t,handleClick:n,title:a,label:o}=e;return l.createElement("button",{type:"button",title:a,className:"playground__control-button "+(t?"playground__control-button--selected":""),onClick:n,"data-text":o},o)},A=e=>{let{language:t,usageTarget:n,setUsageTarget:a}=e;const r=o[t];return l.createElement(I,{isSelected:n===r,handleClick:()=>{a(r)},title:`Show ${t} code`,label:t})};function L(e){let{code:t,title:c,description:s,src:d,size:u="small",devicePreview:m,includeIonContent:p=!0}=e;if(!t||0===Object.keys(t).length)return void console.warn("No code usage examples provided for this Playground example.");const g=(0,l.useRef)(null),h=(0,l.useRef)(null),v=(0,l.useRef)(null),b=(0,l.useRef)(null),f=T[u]||u,[L,S]=(0,l.useState)(o.Angular),[M,D]=(0,l.useState)(r.iOS),[j,V]=(0,l.useState)({}),[B,R]=(0,l.useState)(!1),[O,q]=(0,l.useState)(!1),W=async()=>{if(v&&v.current&&b&&b.current){await Promise.all([Z(v.current),Z(b.current)]);const e={darkMode:false};v.current&&b.current&&(v.current.contentWindow.postMessage(e),b.current.contentWindow.postMessage(e))}},$=(e,t)=>{"ios"===t?v.current=e:b.current=e,v&&b&&v.current&&b.current&&W()};(0,l.useEffect)((()=>{W()}),[false]),(0,l.useEffect)((()=>{(async()=>{await Promise.all([Z(v.current),Z(b.current)]),q(!0)})()}),[B]),(0,l.useEffect)((()=>{n.e(3790).then(n.bind(n,3790)).then((e=>e.defineCustomElement()))})),(0,l.useEffect)((()=>{const e=new IntersectionObserver((t=>{t[0].isIntersecting&&!B&&(R(!0),e.disconnect())}),{threshold:0});e.observe(g.current)}));const F=M===r.iOS,X=M===r.MD,P=(0,a.Z)(`${d}?ionic:mode=${r.iOS}`),H=(0,a.Z)(`${d}?ionic:mode=${r.MD}`);const G=void 0!==t[L]?.files;function z(e,t){let n=t;return n=n.replace(/[^a-zA-Z0-9]/g,"_"),`playground_${e}_${n}`}function U(e){switch(e.slice(e.lastIndexOf(".")+1)){case"ts":case"tsx":return l.createElement(y,null);case"html":return l.createElement(E,null);case"vue":return l.createElement(w,null);case"css":return l.createElement(_,null);default:return l.createElement(N,null)}}(0,l.useEffect)((()=>{const e={};Object.keys(t).forEach((n=>{if("function"==typeof t[n])e[n]=t[n]({});else if("object"==typeof t[n]){const l={};for(const e of Object.keys(t[n].files))l[`${e}`]=t[n].files[e]({});e[n]=l}})),V(e)}),[]);const J=(0,l.useMemo)((()=>Object.keys(o).sort()),[]);return l.createElement("div",{className:"playground",ref:g},l.createElement("div",{className:"playground__container"},l.createElement("div",{className:"playground__control-toolbar"},l.createElement("div",{className:"playground__control-group"},J.map((e=>l.createElement(A,{key:`code-block-${e}`,language:e,usageTarget:L,setUsageTarget:S})))),l.createElement("div",{className:"playground__control-group"},l.createElement(I,{isSelected:F,handleClick:()=>D(r.iOS),title:"iOS mode",label:"iOS"}),l.createElement(I,{isSelected:X,handleClick:()=>D(r.MD),title:"MD mode",label:"MD"})),l.createElement("div",{className:"playground__control-group playground__control-group--end"},l.createElement(i.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:G?"For multi-file examples, use the copy buttons on the code blocks":"Copy source code"},l.createElement("button",{className:"playground__icon-button playground__icon-button--primary "+(G?"playground__icon-button--disabled":""),"aria-disabled":G,onClick:function(){if(G)return;h.current.querySelector("button").click()}},l.createElement("svg",{"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},l.createElement("path",{d:"M2.06667 9V9C1.47756 9 1 8.52244 1 7.93333V3C1 1.89543 1.89543 1 3 1H7.93333C8.52244 1 9 1.47756 9 2.06667V2.06667",stroke:"#73849A"}),l.createElement("rect",{x:"3",y:"3",width:"8",height:"8",rx:"1.5",stroke:"#73849A"})))),l.createElement(i.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:"Reset demo"},l.createElement("button",{className:"playground__icon-button",onClick:function(){v.current&&v.current.contentWindow.location.reload(),b.current&&b.current.contentWindow.location.reload()}},l.createElement("svg",{"aria-hidden":"true",width:"10",height:"12",viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.22215 2.96247C3.0444 2.42025 4.01109 2.13084 5 2.13084C5.63538 2.13084 6.08146 2.15202 6.39321 2.18615C6.68142 2.2177 6.92148 2.26571 7.08584 2.36392C7.17445 2.41686 7.31584 2.52988 7.35221 2.73039C7.38869 2.93151 7.29402 3.07964 7.24155 3.14415C7.18678 3.21149 7.126 3.25445 7.09468 3.275C7.07632 3.28704 7.06001 3.29656 7.04754 3.30345C7.0412 3.30696 7.03557 3.30995 7.03082 3.3124C7.02933 3.31317 7.02792 3.31389 7.0266 3.31456C7.0258 3.31496 7.02503 3.31535 7.02429 3.31572C7.02331 3.31621 7.02238 3.31667 7.0215 3.3171L7.02023 3.31773C7.01994 3.31787 7.01905 3.31831 6.81818 2.91589L7.01905 3.31831C6.79385 3.42779 6.52136 3.33637 6.41043 3.11412C6.40662 3.1065 6.40305 3.09881 6.39972 3.09108C6.36829 3.08669 6.33284 3.08224 6.29298 3.07787C6.02849 3.04892 5.61974 3.02804 5 3.02804C4.1909 3.02804 3.39996 3.26482 2.72721 3.70846C2.05447 4.15209 1.53013 4.78264 1.22049 5.52038C0.910864 6.25812 0.82985 7.0699 0.987699 7.85307C1.14555 8.63625 1.53517 9.35564 2.10729 9.92028C2.67942 10.4849 3.40835 10.8694 4.2019 11.0252C4.99546 11.181 5.81801 11.1011 6.56552 10.7955C7.31304 10.4899 7.95195 9.97241 8.40147 9.30847C8.85098 8.64452 9.09091 7.86394 9.09091 7.06542C9.09091 6.81767 9.29442 6.61682 9.54545 6.61682C9.79649 6.61682 10 6.81767 10 7.06542C10 8.04139 9.70675 8.99544 9.15735 9.80692C8.60794 10.6184 7.82705 11.2509 6.91342 11.6244C5.99979 11.9979 4.99445 12.0956 4.02455 11.9052C3.05464 11.7148 2.16373 11.2448 1.46447 10.5547C0.765206 9.86458 0.289002 8.98532 0.0960758 8.02811C-0.0968502 7.07089 0.00216639 6.07871 0.380605 5.17704C0.759043 4.27536 1.3999 3.50469 2.22215 2.96247Z",fill:"#73849A"}),l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.67859 0.131391C4.8561 -0.0437971 5.1439 -0.0437971 5.32141 0.131391L7.59414 2.37438C7.77165 2.54957 7.77165 2.83361 7.59414 3.00879L5.32141 5.25178C5.1439 5.42697 4.8561 5.42697 4.67859 5.25178C4.50108 5.0766 4.50108 4.79256 4.67859 4.61737L6.6299 2.69159L4.67859 0.765805C4.50108 0.590616 4.50108 0.30658 4.67859 0.131391Z",fill:"#73849A"})))),l.createElement(i.ZP,{theme:"playground",arrow:!1,placement:"bottom",content:"Report an issue"},l.createElement("a",{className:"playground__icon-button",href:"https://github.com/Tangcuyu/living-base/issues","aria-label":"Report an issue",target:"_blank",rel:"noreferrer"},l.createElement("svg",{"aria-hidden":"true",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},l.createElement("path",{d:"M6 0C2.68661 0 0 2.75625 0 6.15268C0 8.87143 1.71964 11.175 4.10357 11.9893C4.14107 11.9973 4.17321 12 4.20536 12C4.42768 12 4.51339 11.8366 4.51339 11.6946C4.51339 11.5473 4.50804 11.1616 4.50536 10.6473C4.28036 10.6982 4.07946 10.7196 3.9 10.7196C2.74554 10.7196 2.48304 9.82232 2.48304 9.82232C2.20982 9.1125 1.81607 8.92232 1.81607 8.92232C1.29375 8.55536 1.81339 8.54464 1.85357 8.54464H1.85625C2.45893 8.59821 2.775 9.18214 2.775 9.18214C3.075 9.70714 3.47679 9.85446 3.83571 9.85446C4.11696 9.85446 4.37143 9.76339 4.52143 9.69375C4.575 9.29732 4.73036 9.02679 4.90179 8.87143C3.57054 8.71607 2.16964 8.18839 2.16964 5.83125C2.16964 5.15893 2.40268 4.60982 2.78571 4.18125C2.72411 4.02589 2.51786 3.39911 2.84464 2.55268C2.84464 2.55268 2.8875 2.53929 2.97857 2.53929C3.19554 2.53929 3.68571 2.62232 4.49464 3.18482C4.97411 3.04821 5.48571 2.98125 5.99732 2.97857C6.50625 2.98125 7.02054 3.04821 7.5 3.18482C8.30893 2.62232 8.79911 2.53929 9.01607 2.53929C9.10714 2.53929 9.15 2.55268 9.15 2.55268C9.47679 3.39911 9.27054 4.02589 9.20893 4.18125C9.59196 4.6125 9.825 5.16161 9.825 5.83125C9.825 8.19375 8.42143 8.71339 7.08482 8.86607C7.29911 9.05625 7.49196 9.43125 7.49196 10.0045C7.49196 10.8268 7.48393 11.4911 7.48393 11.692C7.48393 11.8366 7.56696 12 7.78929 12C7.82143 12 7.85893 11.9973 7.89643 11.9893C10.283 11.175 12 8.86875 12 6.15268C12 2.75625 9.31339 0 6 0Z",fill:"#73849A"})))))),B?[l.createElement("div",{className:"playground__preview",key:f.toString()},!O&&l.createElement("div",{className:"playground__loading"},l.createElement(x,null)),m?[l.createElement("div",{className:F?"frame-visible":"frame-hidden"},l.createElement("device-preview",{mode:"ios"},l.createElement("iframe",{height:f,ref:e=>$(e,"ios"),srcDoc:P}))),l.createElement("div",{className:X?"frame-visible":"frame-hidden"},l.createElement("device-preview",{mode:"md"},l.createElement("iframe",{height:f,ref:e=>$(e,"md"),srcDoc:H})))]:[l.createElement("iframe",{height:f,className:F?"":"frame-hidden",ref:e=>$(e,"ios"),src:P,key:P}),l.createElement("iframe",{height:f,className:X?"":"frame-hidden",ref:e=>$(e,"md"),src:H,key:H})])]:[]),l.createElement("div",{ref:h,className:"playground__code-block"},function(){if(t[L])return G?null==j[L]?null:l.createElement(C,{className:"playground__tabs"},Object.keys(j[L]).map((e=>l.createElement(k.Z,{className:"playground__tab-item",value:e,label:e,key:e,icon:U(e)},l.createElement("div",{id:z(L,e)},j[L][e]))))):j[L]}()))}const T={xsmall:"100px",small:"200px",medium:"400px",large:"600px",xlarge:"800px"},Z=e=>S(e)?Promise.resolve():new Promise((t=>{e&&e.contentWindow.addEventListener("demoReady",(()=>{t()}))})),S=e=>!!e&&!0===e.contentWindow.demoReady},9893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>w,frontMatter:()=>b,metadata:()=>C,toc:()=>E});var l=n(7462),a=(n(7294),n(4137)),o=n(9964);const r={toc:[]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<li-accordli-group>\n  <li-accordli value="javascript">\n    <li-item\n      slot="header"\n      color="light">\n      <li-label>First Accordli</li-label>\n    </li-item>\n    <div\n      class="li-padding"\n      slot="content">\n      First Content\n    </div>\n  </li-accordli>\n  <li-accordli value="second">\n    <li-item\n      slot="header"\n      color="light">\n      <li-label>Second Accordli</li-label>\n    </li-item>\n    <div\n      class="li-padding"\n      slot="content">\n      Second Content\n    </div>\n  </li-accordli>\n  <li-accordli value="third">\n    <li-item\n      slot="header"\n      color="light">\n      <li-label>Third Accordli</li-label>\n    </li-item>\n    <div\n      class="li-padding"\n      slot="content">\n      Third Content\n    </div>\n  </li-accordli>\n</li-accordli-group>\n')))}i.isMDXComponent=!0;const c={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport {\n  IonAccordion,\n  IonAccordionGroup,\n  IonItem,\n  IonLabel,\n} from '@ionic/react';\nfunction Example() {\n  return (\n    <IonAccordionGroup>\n      <IonAccordion value='first'>\n        <IonItem\n          slot='header'\n          color='light'>\n          <IonLabel>First Accordion</IonLabel>\n        </IonItem>\n        <div\n          className='ion-padding'\n          slot='content'>\n          First Content\n        </div>\n      </IonAccordion>\n      <IonAccordion value='second'>\n        <IonItem\n          slot='header'\n          color='light'>\n          <IonLabel>Second Accordion</IonLabel>\n        </IonItem>\n        <div\n          className='ion-padding'\n          slot='content'>\n          Second Content\n        </div>\n      </IonAccordion>\n      <IonAccordion value='third'>\n        <IonItem\n          slot='header'\n          color='light'>\n          <IonLabel>Third Accordion</IonLabel>\n        </IonItem>\n        <div\n          className='ion-padding'\n          slot='content'>\n          Third Content\n        </div>\n      </IonAccordion>\n    </IonAccordionGroup>\n  );\n}\nexport default Example;\n")))}s.isMDXComponent=!0;const d={toc:[]};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <ion-accordion-group>\n    <ion-accordion value="first">\n      <ion-item\n        slot="header"\n        color="light">\n        <ion-label>First Accordion</ion-label>\n      </ion-item>\n      <div\n        class="ion-padding"\n        slot="content">\n        First Content\n      </div>\n    </ion-accordion>\n    <ion-accordion value="second">\n      <ion-item\n        slot="header"\n        color="light">\n        <ion-label>Second Accordion</ion-label>\n      </ion-item>\n      <div\n        class="ion-padding"\n        slot="content">\n        Second Content\n      </div>\n    </ion-accordion>\n    <ion-accordion value="third">\n      <ion-item\n        slot="header"\n        color="light">\n        <ion-label>Third Accordion</ion-label>\n      </ion-item>\n      <div\n        class="ion-padding"\n        slot="content">\n        Third Content\n      </div>\n    </ion-accordion>\n  </ion-accordion-group>\n</template>\n\n<script lang="ts">\n  import {\n    IonAccordion,\n    IonAccordionGroup,\n    IonItem,\n    IonLabel,\n  } from \'@ionic/vue\';\n  import { defineComponent } from \'vue\';\n\n  export default defineComponent({\n    components: {\n      IonAccordion,\n      IonAccordionGroup,\n      IonItem,\n      IonLabel,\n    },\n  });\n<\/script>\n')))}u.isMDXComponent=!0;const m={toc:[]};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ion-accordion-group>\n  <ion-accordion value="angular">\n    <ion-item\n      slot="header"\n      color="light">\n      <ion-label>First Accordion</ion-label>\n    </ion-item>\n    <div\n      class="ion-padding"\n      slot="content">\n      First Content\n    </div>\n  </ion-accordion>\n  <ion-accordion value="second">\n    <ion-item\n      slot="header"\n      color="light">\n      <ion-label>Second Accordion</ion-label>\n    </ion-item>\n    <div\n      class="ion-padding"\n      slot="content">\n      Second Content\n    </div>\n  </ion-accordion>\n  <ion-accordion value="third">\n    <ion-item\n      slot="header"\n      color="light">\n      <ion-label>Third Accordion</ion-label>\n    </ion-item>\n    <div\n      class="ion-padding"\n      slot="content">\n      Third Content\n    </div>\n  </ion-accordion>\n</ion-accordion-group>\n')))}p.isMDXComponent=!0;const g={toc:[]};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{code:{javascript:i,react:s,vue:u,angular:p},src:"usage/marquee/basic/demo.html",size:"210px",mdxType:"Playground"}))}h.isMDXComponent=!0;var v=n(2199);const b={title:"li-marquee\u7ec4\u4ef6",description:"\u5728Tokens\u57fa\u7840\u4e0a\u7684\u5143\u7ec4\u4ef6\u662f\u7ec4\u6210\u5176\u4ed6\u4e1a\u52a1\u7ec4\u4ef6\u7684\u57fa\u7840\u7ec4\u4ef6"},f="li-marquee \u5143\u7ec4\u4ef6",C={unversionedId:"base/li-marquee",id:"base/li-marquee",title:"li-marquee\u7ec4\u4ef6",description:"\u5728Tokens\u57fa\u7840\u4e0a\u7684\u5143\u7ec4\u4ef6\u662f\u7ec4\u6210\u5176\u4ed6\u4e1a\u52a1\u7ec4\u4ef6\u7684\u57fa\u7840\u7ec4\u4ef6",source:"@site/docs/base/li-marquee.mdx",sourceDirName:"base",slug:"/base/li-marquee",permalink:"/docs/base/li-marquee",draft:!1,editUrl:"https://github.com/ITSI-Tangcuyu/Living-website-doc-docusaurus.git/docs/base/li-marquee.mdx",tags:[],version:"current",frontMatter:{title:"li-marquee\u7ec4\u4ef6",description:"\u5728Tokens\u57fa\u7840\u4e0a\u7684\u5143\u7ec4\u4ef6\u662f\u7ec4\u6210\u5176\u4ed6\u4e1a\u52a1\u7ec4\u4ef6\u7684\u57fa\u7840\u7ec4\u4ef6"}},k={},E=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u57fa\u672c\u793a\u4f8b",id:"\u57fa\u672c\u793a\u4f8b",level:3},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",level:3},{value:"\u7ec4\u4ef6\u4e8b\u4ef6",id:"\u7ec4\u4ef6\u4e8b\u4ef6",level:3},{value:"\u63d2\u69fd",id:"\u63d2\u69fd",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"\u53ef\u8bbf\u95ee\u6027\u8bf4\u660e",id:"\u53ef\u8bbf\u95ee\u6027\u8bf4\u660e",level:3}],y={toc:E};function w(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"li-marquee-\u5143\u7ec4\u4ef6"},"li-marquee \u5143\u7ec4\u4ef6"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("h3",{id:"\u57fa\u672c\u793a\u4f8b"},"\u57fa\u672c\u793a\u4f8b"),(0,a.kt)(h,{mdxType:"Basic"}),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7279\u6027"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u7ec4\u4ef6\u4e8b\u4ef6"},"\u7ec4\u4ef6\u4e8b\u4ef6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u4e8b\u4ef6\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u63d2\u69fd"},"\u63d2\u69fd"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u63d2\u69fd\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u672c\u8282\u4e3a\u8bbe\u8ba1\u4eba\u5458\u548c\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u4e86\u5173\u4e8e\u5728\u4e0d\u540c\u4e0a\u4e0b\u6587\u4e2d\u4f7f\u7528\u6b64\u7ec4\u4ef6\u7684\u6307\u5bfc\u539f\u5219"),(0,a.kt)(v.Z,{emoji:"\u2764\ufe0f",mdxType:"Callout"},"\u5efa\u8bae\u4f7f\u7528\u573a\u666f",(0,a.kt)("br",null),"\u5f53\u5728\u4e00\u4e2a\u9875\u9762\u4e0a\u663e\u793a\u591a\u4e2a\u90e8\u5206\u65f6\uff0cli-accordion \u901a\u5e38\u7528\u4e8e\u51cf\u5c11\u6eda\u52a8\u7684\u9700\u8981"),(0,a.kt)(v.Z,{type:"error",emoji:"\ufe0f\ud83d\udeab",mdxType:"Callout"},"\u907f\u514d\u4f7f\u7528\u573a\u666f",(0,a.kt)("br",null),"\u4e0d\u9002\u5408\u5728\u5bfc\u822a\u73af\u5883\u4e0b\u4f7f\u7528"),(0,a.kt)("h3",{id:"\u53ef\u8bbf\u95ee\u6027\u8bf4\u660e"},"\u53ef\u8bbf\u95ee\u6027\u8bf4\u660e"),(0,a.kt)("p",null,"\u8be5\u7ec4\u4ef6\u5df2\u7ecf\u901a\u8fc7 LDS \u7684\u53ef\u8bbf\u95ee\u6027\u89c4\u5219\u9a8c\u8bc1\uff0c\u7b26\u5408 WCAG 2.1 AA \u53ef\u8bbf\u95ee\u6027\u6307\u5357"),(0,a.kt)(v.Z,{type:"warning",emoji:"\u2705",mdxType:"Callout"},"\u8be5\u7ec4\u4ef6\u5df2\u7ecf\u901a\u8fc7LDS\u7684\u53ef\u8bbf\u95ee\u6027\u89c4\u5219\u9a8c\u8bc1\uff0c\u7b26\u5408WCAG 2.1 AA\u53ef\u8bbf\u95ee\u6027\u6307\u5357"),(0,a.kt)(v.Z,{type:"warning",emoji:"\u274e",mdxType:"Callout"},"\u8be5\u7ec4\u4ef6\u8fd8\u672a\u901a\u8fc7LDS\u7684\u53ef\u8bbf\u95ee\u6027\u89c4\u5219\u9a8c\u8bc1\uff0c\u9700\u8981\u8fdb\u4e00\u6b65\u5b9a\u5236\u5f00\u53d1\uff0c\u624d\u80fd\u7b26\u5408WCAG 2.1 AA\u53ef\u8bbf\u95ee\u6027\u6307\u5357"))}w.isMDXComponent=!0}}]);