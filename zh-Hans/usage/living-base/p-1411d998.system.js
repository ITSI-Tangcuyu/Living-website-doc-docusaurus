System.register([],(function(e){"use strict";return{execute:function(){e({a:u,e:n});
/**
       * @license
       * ITSI https://github.com/Tangcuyu/living-base.git
       *
       * Copyright (c) 2022 ITSI Information Technology Ltd.,
       *
       * This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/.
       */var t=e("h",(function(e){return!!e.shadowRoot&&!!e.attachShadow}));var r=e("b",(function(e){var t=document.styleSheets[0];if(!t){var r=document.createElement("style");document.head.appendChild(r);t=document.styleSheets[0];document.head.removeChild(r)}function n(){try{if(!/^:/.test(e)){e=":"+e}t.insertRule("html"+e+"{}",0);t.deleteRule(0);return true}catch(e){return false}}return n()}));function n(e,t,r){var n=t+"Legacy";var u=[];if(typeof e[n]!=="undefined"){u.push(e[n].emit(r))}u.push(e[t].emit(r));return u}function u(e,t){var r=e.target;var n=r.shadowRoot!=null;var u=n?e.composedPath():[];do{if(r===t){return false}if(n){r=u.shift()}else{r=r.parentNode}}while(r);return true}var a=e("i",(function(e){if(e==null){return false}return e.nodeName.toUpperCase().substring(0,10)==="LI-ICON"}))}}}));