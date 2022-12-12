/*! For license information please see 576.dc2e736e.js.LICENSE.txt */
"use strict";(self.webpackChunkliving_design_docs_docusaurus=self.webpackChunkliving_design_docs_docusaurus||[]).push([[576],{576:(e,t,s)=>{s.r(t),s.d(t,{scopeCss:()=>B});const r="-shadowcsshost",c="-shadowcssslotted",o="-shadowcsscontext",n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",l=new RegExp("("+r+n,"gim"),i=new RegExp("("+o+n,"gim"),a=new RegExp("("+c+n,"gim"),p=r+"-no-combinator",h=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,_=/:host-context/gim,f=/\/\*\s*[\s\S]*?\*\//g,$=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,x=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,b=/(^.*?[^\\])??((:+)(.*)|$)/,S="%BLOCK%",W=(e,t)=>{const s=k(e);let r=0;return s.escapedString.replace(x,((...e)=>{const c=e[2];let o="",n=e[4],l="";n&&n.startsWith("{"+S)&&(o=s.blocks[r++],n=n.substring(S.length+1),l="{");const i=t({selector:c,content:o});return`${e[1]}${i.selector}${e[3]}${l}${i.content}${n}`}))},k=e=>{const t=e.split(w),s=[],r=[];let c=0,o=[];for(let n=0;n<t.length;n++){const e=t[n];"}"===e&&c--,c>0?o.push(e):(o.length>0&&(r.push(o.join("")),s.push(S),o=[]),s.push(e)),"{"===e&&c++}o.length>0&&(r.push(o.join("")),s.push(S));return{escapedString:s.join(""),blocks:r}},O=(e,t,s)=>e.replace(t,((...e)=>{if(e[2]){const t=e[2].split(","),r=[];for(let c=0;c<t.length;c++){const o=t[c].trim();if(!o)break;r.push(s(p,o,e[3]))}return r.join(",")}return p+e[3]})),j=(e,t,s)=>e+t.replace(r,"")+s,E=(e,t,s)=>t.indexOf(r)>-1?j(e,t,s):e+t+s+", "+t+" "+e+s,R=(e,t)=>{const s=(e=>(e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")))(t);return!s.test(e)},C=(e,t)=>e.replace(b,((e,s="",r,c="",o="")=>s+t+c+o)),T=(e,t,s)=>{const r="."+(t=t.replace(/\[is=([^\]]*)\]/g,((e,...t)=>t[0]))),c=e=>{let c=e.trim();if(!c)return"";if(e.indexOf(p)>-1)c=((e,t,s)=>{if(g.lastIndex=0,g.test(e)){const t=`.${s}`;return e.replace(h,((e,s)=>C(s,t))).replace(g,t+" ")}return t+" "+e})(e,t,s);else{const t=e.replace(g,"");t.length>0&&(c=C(t,r))}return c},o=(e=>{const t=[];let s=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,((e,r)=>{const c=`__ph-${s}__`;return t.push(r),s++,c}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,((e,r,c)=>{const o=`__ph-${s}__`;return t.push(c),s++,r+o})),placeholders:t}})(e);let n,l="",i=0;const a=/( |>|\+|~(?!=))\s*/g;let u=!((e=o.content).indexOf(p)>-1);for(;null!==(n=a.exec(e));){const t=n[1],s=e.slice(i,n.index).trim();u=u||s.indexOf(p)>-1;l+=`${u?c(s):s} ${t} `,i=a.lastIndex}const d=e.substring(i);return u=u||d.indexOf(p)>-1,l+=u?c(d):d,m=o.placeholders,l.replace(/__ph-(\d+)__/g,((e,t)=>m[+t]));var m},v=(e,t,s,r,c)=>W(e,(e=>{let c=e.selector,o=e.content;"@"!==e.selector[0]?c=((e,t,s,r)=>e.split(",").map((e=>r&&e.indexOf("."+r)>-1?e.trim():R(e,t)?T(e,t,s).trim():e.trim())).join(", "))(e.selector,t,s,r):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=v(e.content,t,s,r));return{selector:c.replace(/\s{2,}/g," ").trim(),content:o}})),L=(e,t,s,n,h)=>{const g=((e,t)=>{const s="."+t+" > ",r=[];return e=e.replace(a,((...e)=>{if(e[2]){const t=e[2].trim(),c=e[3],o=s+t+c;let n="";for(let s=e[4]-1;s>=0;s--){const t=e[5][s];if("}"===t||","===t)break;n=t+n}const l=n+o,i=`${n.trimRight()}${o.trim()}`;if(l.trim()!==i.trim()){const e=`${i}, ${l}`;r.push({orgSelector:l,updatedSelector:e})}return o}return p+e[3]})),{selectors:r,cssText:e}})(e=(e=>O(e,i,E))(e=(e=>O(e,l,j))(e=e.replace(_,o).replace(d,r).replace(m,c))),n);return e=(e=>u.reduce(((e,t)=>e.replace(t," ")),e))(e=g.cssText),t&&(e=v(e,t,s,n)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,`.${s}`)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:g.selectors}},B=(e,t,s)=>{const r=t+"-h",c=t+"-s",o=e.match($)||[];e=(e=>e.replace(f,""))(e);const n=[];if(s){const t=e=>{const t=`/*!@___${n.length}___*/`,s=`/*!@${e.selector}*/`;return n.push({placeholder:t,comment:s}),e.selector=t+e.selector,e};e=W(e,(e=>"@"!==e.selector[0]?t(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=W(e.content,t),e):e))}const l=L(e,t,r,c);return e=[l.cssText,...o].join("\n"),s&&n.forEach((({placeholder:t,comment:s})=>{e=e.replace(t,s)})),l.slottedSelectors.forEach((t=>{e=e.replace(t.orgSelector,t.updatedSelector)})),e}}}]);