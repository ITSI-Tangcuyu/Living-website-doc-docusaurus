const e="living-base";let t,n,l=!1,s=!1;const o="undefined"!=typeof window?window:{},i=o.document||{head:{}},c={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),u=(e,t,n)=>{n&&n.map((([n,l,s])=>{const o=d(e,n),i=f(t,s),r=p(n);c.ael(o,l,i,r),(t.o=t.o||[]).push((()=>c.rel(o,l,i,r)))}))},f=(e,t)=>n=>{try{256&e.t?e.i[t](n):(e.u=e.u||[]).push([t,n])}catch(e){le(e)}},d=(e,t)=>4&t?i:8&t?o:e,p=e=>0!=(2&e),h="http://www.w3.org/1999/xlink",m=new WeakMap,y=e=>"sc-"+e.p,b={},$=e=>"object"==(e=typeof e)||"function"===e,w=(e,t,...n)=>{let l=null,s=null,o=!1,i=!1;const c=[],r=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?r(l):null!=l&&"boolean"!=typeof l&&((o="function"!=typeof e&&!$(l))&&(l+=""),o&&i?c[c.length-1].h+=l:c.push(o?g(null,l):l),i=o)};if(r(n),t){t.key&&(s=t.key);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,c,j);const a=g(e,null);return a.m=t,c.length>0&&(a.$=c),a.g=s,a},g=(e,t)=>({t:0,v:e,h:t,j:null,$:null,m:null,g:null}),v={},j={forEach:(e,t)=>e.map(k).forEach(t),map:(e,t)=>e.map(k).map(t).map(S)},k=e=>({vattrs:e.m,vchildren:e.$,vkey:e.g,vname:e.k,vtag:e.v,vtext:e.h}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),w(e.vtag,t,...e.vchildren||[])}const t=g(e.vtag,e.vtext);return t.m=e.vattrs,t.$=e.vchildren,t.g=e.vkey,t.k=e.vname,t},O=(e,t,n,l,s,i)=>{if(n!==l){let r=ne(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=M(n),o=M(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const o=$(l);if((r||o&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{const s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}let c=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,c=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(c?e.removeAttributeNS(h,t):e.removeAttribute(t)):(!r||4&i||s)&&!o&&(l=!0===l?"":l,c?e.setAttributeNS(h,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):ne(o,a)?a.slice(2):a[2]+t.slice(3),n&&c.rel(e,t,n,!1),l&&c.ael(e,t,l,!1)}},C=/\s/,M=e=>e?e.split(C):[],x=(e,t,n,l)=>{const s=11===t.j.nodeType&&t.j.host?t.j.host:t.j,o=e&&e.m||b,i=t.m||b;for(l in o)l in i||O(s,l,o[l],void 0,n,t.t);for(l in i)O(s,l,o[l],i[l],n,t.t)},P=(e,n,s)=>{const o=n.$[s];let c,r,a=0;if(null!==o.h)c=o.j=i.createTextNode(o.h);else{if(l||(l="svg"===o.v),c=o.j=i.createElementNS(l?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",o.v),l&&"foreignObject"===o.v&&(l=!1),x(null,o,l),null!=t&&c["s-si"]!==t&&c.classList.add(c["s-si"]=t),o.$)for(a=0;a<o.$.length;++a)r=P(e,o,a),r&&c.appendChild(r);"svg"===o.v?l=!1:"foreignObject"===c.tagName&&(l=!0)}return c},W=(e,t,l,s,o,i)=>{let c,r=e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);o<=i;++o)s[o]&&(c=P(null,l,o),c&&(s[o].j=c,r.insertBefore(c,t)))},E=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.j,R(l),s.remove())},L=(e,t)=>e.v===t.v&&e.g===t.g,N=(e,t)=>{const n=t.j=e.j,s=e.$,o=t.$,i=t.v,c=t.h;null===c?(l="svg"===i||"foreignObject"!==i&&l,"slot"===i||x(e,t,l),null!==s&&null!==o?((e,t,n,l)=>{let s,o,i=0,c=0,r=0,a=0,u=t.length-1,f=t[0],d=t[u],p=l.length-1,h=l[0],m=l[p];for(;i<=u&&c<=p;)if(null==f)f=t[++i];else if(null==d)d=t[--u];else if(null==h)h=l[++c];else if(null==m)m=l[--p];else if(L(f,h))N(f,h),f=t[++i],h=l[++c];else if(L(d,m))N(d,m),d=t[--u],m=l[--p];else if(L(f,m))N(f,m),e.insertBefore(f.j,d.j.nextSibling),f=t[++i],m=l[--p];else if(L(d,h))N(d,h),e.insertBefore(d.j,f.j),d=t[--u],h=l[++c];else{for(r=-1,a=i;a<=u;++a)if(t[a]&&null!==t[a].g&&t[a].g===h.g){r=a;break}r>=0?(o=t[r],o.v!==h.v?s=P(t&&t[c],n,r):(N(o,h),t[r]=void 0,s=o.j),h=l[++c]):(s=P(t&&t[c],n,c),h=l[++c]),s&&f.j.parentNode.insertBefore(s,f.j)}i>u?W(e,null==l[p+1]?null:l[p+1].j,n,l,c,p):c>p&&E(t,i,u)})(n,s,t,o):null!==o?(null!==e.h&&(n.textContent=""),W(n,null,t,o,0,o.length-1)):null!==s&&E(s,0,s.length-1),l&&"svg"===i&&(l=!1)):e.h!==c&&(n.data=c)},R=e=>{e.m&&e.m.ref&&e.m.ref(null),e.$&&e.$.map(R)},U=e=>Z(e).S,D=(e,t,n)=>{const l=U(e);return{emit:e=>F(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},F=(e,t,n)=>{const l=c.ce(t,n);return e.dispatchEvent(l),l},T=(e,t)=>{t&&!e.O&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.O=t)))},A=(e,t)=>{if(e.t|=16,!(4&e.t))return T(e,e.C),pe((()=>H(e,t)));e.t|=512},H=(e,t)=>{const n=e.i;let l;return t?(e.t|=256,e.u&&(e.u.map((([e,t])=>B(n,e,t))),e.u=null),l=B(n,"componentWillLoad")):l=B(n,"componentWillUpdate"),l=G(l,(()=>B(n,"componentWillRender"))),G(l,(()=>q(e,n,t)))},q=async(e,t,n)=>{const l=e.S,s=l["s-rc"];n&&(e=>{const t=e.M,n=e.S,l=t.t,s=((e,t)=>{let n=y(t);const l=ie.get(n);if(e=11===e.nodeType?e:i,l)if("string"==typeof l){let t,s=m.get(e=e.head||e);s||m.set(e,s=new Set),s.has(n)||(t=i.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);V(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>_(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},V=(e,l)=>{try{l=l.render(),e.t&=-17,e.t|=2,((e,l)=>{const s=e.S,o=e.M,i=e.P||g(null,null),c=(e=>e&&e.v===v)(l)?l:w(null,null,l);n=s.tagName,o.W&&(c.m=c.m||{},o.W.map((([e,t])=>c.m[t]=s[e]))),c.v=null,c.t|=4,e.P=c,c.j=i.j=s.shadowRoot||s,t=s["s-sc"],N(i,c)})(e,l)}catch(t){le(t,e.S)}return null},_=e=>{const t=e.S,n=e.i,l=e.C;B(n,"componentDidRender"),64&e.t?B(n,"componentDidUpdate"):(e.t|=64,I(t),B(n,"componentDidLoad"),e.L(t),l||z()),e.N(t),e.O&&(e.O(),e.O=void 0),512&e.t&&de((()=>A(e,!1))),e.t&=-517},z=()=>{I(i.documentElement),de((()=>F(o,"appload",{detail:{namespace:"living-base"}})))},B=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){le(e)}},G=(e,t)=>e&&e.then?e.then(t):t(),I=e=>e.classList.add("hydrated"),J=(e,t,n)=>{if(t.R){e.watchers&&(t.U=e.watchers);const l=Object.entries(t.R),s=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(s,e,{get(){return((e,t)=>Z(this).D.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=Z(e),o=s.S,i=s.D.get(t),c=s.t,r=s.i;if(n=((e,t)=>null==e||$(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.R[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(s.D.set(t,n),r)){if(l.U&&128&c){const e=l.U[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){le(e,o)}}))}2==(18&c)&&A(s,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(s,e,{value(...t){const n=Z(this);return n.F.then((()=>n.i[e](...t)))}})})),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,l){c.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(s.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const s=l[1]||e;return n.set(s,e),512&l[0]&&t.W.push([e,s]),s}))}}return e},K=e=>{B(e,"connectedCallback")},Q=(e,t={})=>{const n=[],l=t.exclude||[],s=o.customElements,r=i.head,f=r.querySelector("meta[charset]"),d=i.createElement("style"),p=[];let h,m=!0;Object.assign(c,t),c.l=new URL(t.resourcesUrl||"./",i.baseURI).href,e.map((e=>{e[1].map((t=>{const o={t:t[0],p:t[1],R:t[2],T:t[3]};o.R=t[2],o.T=t[3],o.W=[],o.U={};const i=o.p,r=class extends HTMLElement{constructor(e){super(e),te(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){h&&(clearTimeout(h),h=null),m?p.push(this):c.jmp((()=>(e=>{if(0==(1&c.t)){const t=Z(e),n=t.M,l=()=>{};if(1&t.t)u(e,t,n.T),K(t.i);else{t.t|=1;{let n=e;for(;n=n.parentNode||n.host;)if(n["s-p"]){T(t,t.C=n);break}}n.R&&Object.entries(n.R).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=oe(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(n.U=s.watchers,J(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){le(e)}t.t&=-9,t.t|=128,e(),K(t.i)}if(s.style){let e=s.style;const t=y(n);if(!ie.has(t)){const l=()=>{};((e,t,n)=>{let l=ie.get(e);a&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,ie.set(e,l)})(t,e,!!(1&n.t)),l()}}}const o=t.C,i=()=>A(t,!0);o&&o["s-rc"]?o["s-rc"].push(i):i()})(0,t,n)}l()}})(this)))}disconnectedCallback(){c.jmp((()=>(()=>{if(0==(1&c.t)){const e=Z(this),t=e.i;e.o&&(e.o.map((e=>e())),e.o=void 0),B(t,"disconnectedCallback")}})()))}componentOnReady(){return Z(this).A}};o.H=e[0],l.includes(i)||s.get(i)||(n.push(i),s.define(i,J(r,o,1)))}))})),d.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",d.setAttribute("data-styles",""),r.insertBefore(d,f?f.nextSibling:r.firstChild),m=!1,p.length?p.map((e=>e.connectedCallback())):c.jmp((()=>h=setTimeout(z,30)))},X=(e,t)=>t,Y=new WeakMap,Z=e=>Y.get(e),ee=(e,t)=>Y.set(t.i=e,t),te=(e,t)=>{const n={t:0,S:e,M:t,D:new Map};return n.F=new Promise((e=>n.N=e)),n.A=new Promise((e=>n.L=e)),e["s-p"]=[],e["s-rc"]=[],u(e,n,t.T),Y.set(e,n)},ne=(e,t)=>t in e,le=(e,t)=>(0,console.error)(e,t),se=new Map,oe=e=>{const t=e.p.replace(/-/g,"_"),n=e.H,l=se.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(se.set(n,e),e[t])),le)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},ie=new Map,ce=[],re=[],ae=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&c.t?de(fe):c.raf(fe))},ue=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){le(e)}e.length=0},fe=()=>{ue(ce),ue(re),(s=ce.length>0)&&c.raf(fe)},de=e=>r().then(e),pe=ae(re,!0);export{X as F,v as H,e as N,Q as b,D as c,U as g,w as h,r as p,ee as r}