System.register([],(function(e){"use strict";return{execute:function(){e("s",r);
/**
       * @license
       * ITSI https://github.com/Tangcuyu/living-base.git
       *
       * Copyright (c) 2022 ITSI Information Technology Ltd.,
       *
       * This Source Code Form is subject to the terms of the Mozilla Public
       * License, v. 2.0. If a copy of the MPL was not distributed with this
       * file, You can obtain one at https://mozilla.org/MPL/2.0/.
       */var n={beta:"β",WIP:"🛠 WIP",deprecated:"😵 废弃提醒",warning:"警告"};var o={beta:"这个组件处于beta状态。有些功能可能会重构，可以参考功能改变日志。",WIP:"（Working In Progress）这个组件处于开发状态，功能会随时发生改变，请等待正式发布版本。组件正式发布后，会更新在在线文档站点。",deprecated:"这个组件已经被废弃."};function r(e){var r=e.tag,t=r===void 0?"WIP":r,c=e.extraMessage,a=c===void 0?"":c,i=e.message,s=i===void 0?"":i,d=e.source,u=d===void 0?"":d,v=e.type,g=v===void 0?"info":v;var l=console[g];l("%c living – ".concat(n[t]," "),"background: #E20074; color: #FFF; border-radius: 4px","\n\n".concat(s?s:o[t]," ").concat(a?"\n"+a:"","\n    "),u!==null?"\nsource:":"",typeof u==="object"?u:"".concat(u),u!==null?"\n\n":"")}}}}));