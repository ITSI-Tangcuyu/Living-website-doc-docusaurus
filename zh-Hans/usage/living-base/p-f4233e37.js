/**
 * @license
 * ITSI https://github.com/Tangcuyu/living-base.git
 *
 * Copyright (c) 2022 ITSI Information Technology Ltd.,
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */
const e={beta:"β",WIP:"🛠 WIP",deprecated:"😵 废弃提醒",warning:"警告"},n={beta:"这个组件处于beta状态。有些功能可能会重构，可以参考功能改变日志。",WIP:"（Working In Progress）这个组件处于开发状态，功能会随时发生改变，请等待正式发布版本。组件正式发布后，会更新在在线文档站点。",deprecated:"这个组件已经被废弃."};function o({tag:o="WIP",extraMessage:r="",message:a="",source:s="",type:t="info"}){(0,console[t])(`%c living – ${e[o]} `,"background: #E20074; color: #FFF; border-radius: 4px",`\n\n${a||n[o]} ${r?"\n"+r:""}\n    `,null!==s?"\nsource:":"","object"==typeof s?s:`${s}`,null!==s?"\n\n":"")}export{o as s}