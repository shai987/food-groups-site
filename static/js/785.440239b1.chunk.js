"use strict";(self.webpackChunkfood_groups_site=self.webpackChunkfood_groups_site||[]).push([[785],{1271:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r(184),a=function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"form-frame-container",children:(0,n.jsx)("div",{className:"form-frame",children:t.children})})})}},3785:function(t,e,r){r.r(e),r.d(e,{default:function(){return c}});var n=r(9439),a=r(2791),u=[{details:{productName:"\u05d1\u05d9\u05e6\u05d4 \u05e9\u05dc\u05de\u05d4",value:3},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4 \u05e7\u05d8\u05e0\u05d4)"}}],o=r(6690),i=r(1271),l=(r(7876),r(184)),c=function(){var t=(0,a.useState)(u),e=(0,n.Z)(t,1)[0],r=(0,a.useState)(u[0].details.productName),c=(0,n.Z)(r,2),d=c[0],f=c[1],s=(0,a.useState)(1),v=(0,n.Z)(s,2),m=v[0],g=v[1],p=(0,a.useState)(""),h=(0,n.Z)(p,2),_=h[0],j=h[1],b=e.find((function(t){var e;return(null===t||void 0===t||null===(e=t.details)||void 0===e?void 0:e.productName)===d})),x=function(t){t.target.value=""};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(i.Z,{children:(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();try{j(function(t){var e,r=(t/(null===b||void 0===b||null===(e=b.details)||void 0===e?void 0:e.value)).toLocaleString(null===o.R||void 0===o.R?void 0:o.R.numberFormat),n=" ".concat(r),a=" ".concat(null===o.R||void 0===o.R?void 0:o.R.fractionCalculation(r));return b?n>=(null===o.R||void 0===o.R?void 0:o.R.NEGLIGIBLE_NUMBER)?a:"\u05d6\u05e0\u05d9\u05d7":alert("\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd")}(m))}catch(e){console.log(e.message),j("\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8")}},children:[(0,l.jsx)("h1",{children:"\u05d1\u05d9\u05e6\u05d9\u05dd"}),(0,l.jsxs)("label",{htmlFor:"productAmount",children:["\u05db\u05de\u05d5\u05ea \u05e0\u05d0\u05db\u05dc\u05ea:",(0,l.jsx)("input",{name:"productAmount",type:"number",id:"productAmount",min:"0.00000001",step:"any",value:m,onChange:function(t){g(t.target.value)}})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("label",{children:["\u05e1\u05d5\u05d2 \u05d4\u05de\u05d5\u05e6\u05e8:",(0,l.jsx)("input",{list:"productName",defaultValue:d,onChange:function(t){f(t.target.value)},onClick:x,onFocus:x}),(0,l.jsx)("datalist",{id:"productName",children:e.map((function(t){var e,r,n;return(0,l.jsx)("option",{name:"productName",value:null===t||void 0===t||null===(r=t.details)||void 0===r?void 0:r.productName,children:null===t||void 0===t||null===(n=t.unit)||void 0===n?void 0:n.measureString},null===t||void 0===t||null===(e=t.details)||void 0===e?void 0:e.productName)}))})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("div",{className:"div1",children:["\u05de\u05e1\u05e4\u05e8 \u05de\u05e0\u05d5\u05ea:",(0,l.jsx)("p",{className:"result",children:_})]}),(0,l.jsx)("button",{type:"submit",children:"\u05d7\u05e9\u05d1"})]})})})}},6690:function(t,e,r){r.d(e,{R:function(){return a}});var n=r(8373),a={numberFormat:{minimumFractionDigits:2,maximumFractionDigits:2},fractionFormat:{useUnicodeVulgar:!0},fractionCalculation:function(t){return(0,n.toFraction)(Number(t)||0,a.fractionFormat)},NEGLIGIBLE_NUMBER:.25,stringResult:"\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8",stringAlert:"\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd"}},2024:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(r(1527));e.default=function(t){var e=0,r=1;return Object.keys(a.default).forEach((function(n){var a=parseFloat(n),u=Math.abs(t-a);u<r&&(r=u,e=a)})),e}},1527:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});e.default={.1:{vulgar:"\u2152",fraction:"1/10"},.11:{vulgar:"\u2151",fraction:"1/9"},.12:{vulgar:"\u215b",fraction:"1/8"},.14:{vulgar:"\u2150",fraction:"1/7"},.16:{vulgar:"\u2159",fraction:"1/6"},.2:{vulgar:"\u2155",fraction:"1/5"},.25:{vulgar:"\xbc",fraction:"1/4"},.33:{vulgar:"\u2153",fraction:"1/3"},.37:{vulgar:"\u215c",fraction:"3/8"},.4:{vulgar:"\u2156",fraction:"2/5"},.5:{vulgar:"\xbd",fraction:"1/2"},.6:{vulgar:"\u2157",fraction:"3/5"},.62:{vulgar:"\u215d",fraction:"5/8"},.66:{vulgar:"\u2154",fraction:"2/3"},.75:{vulgar:"\xbe",fraction:"3/4"},.8:{vulgar:"\u2158",fraction:"4/5"},.83:{vulgar:"\u215a",fraction:"5/6"},.87:{vulgar:"\u215e",fraction:"7/8"}}},8373:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.toDecimal=e.toFraction=void 0;var a=r(6856);Object.defineProperty(e,"toFraction",{enumerable:!0,get:function(){return n(a).default}});var u=r(2691);Object.defineProperty(e,"toDecimal",{enumerable:!0,get:function(){return n(u).default}})},2691:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(r(1527));e.default=function(t){if("number"===typeof t)return t;if(""===t||void 0===t||null===t)return 0;var e=t.split(" "),r=e[0],n=e[1];if(void 0===n||""===n)return parseFloat(r);var u=Object.keys(a.default).find((function(t){return a.default[t].vulgar===n||a.default[t].fraction===n}))||n;return parseFloat(r)+parseFloat(u)}},6856:function(t,e,r){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=n(r(1527)),u=n(r(2024));e.default=function(t,e){var r=e.useUnicodeVulgar,n=void 0===r||r;if(t%1===0)return t.toString();var o=(t-Math.floor(t)).toFixed(2),i=Math.trunc(t);return i=0===i?"":"".concat(i," "),n?"".concat(i).concat(a.default[(0,u.default)(o)].vulgar):"".concat(i).concat(a.default[(0,u.default)(o)].fraction)}}}]);
//# sourceMappingURL=785.440239b1.chunk.js.map