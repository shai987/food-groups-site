"use strict";(self.webpackChunkfood_groups_site=self.webpackChunkfood_groups_site||[]).push([[75],{1271:function(t,e,a){a.d(e,{Z:function(){return r}});var n=a(184),r=function(t){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:"form-frame-container",children:(0,n.jsx)("div",{className:"form-frame",children:t.children})})})}},6075:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var n=a(9439),r=a(2791),u=[{details:{typeName:"\u05db\u05d5\u05e1 \u05d9\u05e8\u05e7 \u05d8\u05e8\u05d9",value:1}},{details:{typeName:"2 \u05db\u05d5\u05e1\u05d5\u05ea \u05d9\u05e8\u05e7\u05d5\u05ea \u05e2\u05dc\u05d9\u05d9\u05dd",value:2}},{details:{typeName:"\u05d7\u05e6\u05d9 \u05db\u05d5\u05e1 \u05d9\u05e8\u05e7 \u05de\u05d1\u05d5\u05e9\u05dc",value:.5}},{details:{typeName:"\u05d7\u05e6\u05d9 \u05db\u05d5\u05e1 \u05de\u05d9\u05e5 \u05d9\u05e8\u05e7 (\u05db-100 \u05d2\u05e8\u05dd)",value:.5}}],i=a(6690),o=a(1271),l=(a(7876),a(184)),c=function(){var t=(0,r.useState)(u),e=(0,n.Z)(t,1)[0],a=(0,r.useState)(u[0].details.typeName),c=(0,n.Z)(a,2),d=c[0],f=c[1],s=(0,r.useState)(1),v=(0,n.Z)(s,2),m=v[0],p=v[1],g=(0,r.useState)(""),h=(0,n.Z)(g,2),_=h[0],j=h[1],b=e.find((function(t){var e;return(null===t||void 0===t||null===(e=t.details)||void 0===e?void 0:e.typeName)===d})),y=function(t){t.target.value=""};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Z,{children:(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();try{j(function(t){var e,a=(t/(null===b||void 0===b||null===(e=b.details)||void 0===e?void 0:e.value)).toLocaleString(null===i.R||void 0===i.R?void 0:i.R.numberFormat),n=" ".concat(a),r=" ".concat(null===i.R||void 0===i.R?void 0:i.R.fractionCalculation(a));return b?n>=(null===i.R||void 0===i.R?void 0:i.R.NEGLIGIBLE_NUMBER)?r:" \u05d6\u05e0\u05d9\u05d7":alert("\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd")}(m))}catch(e){console.log(e.message),j("\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8")}},children:[(0,l.jsx)("h1",{children:"\u05d9\u05e8\u05e7\u05d5\u05ea"}),(0,l.jsxs)("label",{children:["\u05d7\u05d9\u05e9\u05d5\u05d1 \u05dc\u05e4\u05d9 \u05db\u05de\u05d5\u05ea:",(0,l.jsx)("input",{list:"typeName",defaultValue:d,onChange:function(t){f(t.target.value)},onClick:y,onFocus:y}),(0,l.jsx)("datalist",{id:"typeName",children:e.map((function(t){var e,a,n;return(0,l.jsx)("option",{name:"typeName",value:null===t||void 0===t||null===(a=t.details)||void 0===a?void 0:a.typeName,children:null===t||void 0===t||null===(n=t.details)||void 0===n?void 0:n.typeName},null===t||void 0===t||null===(e=t.details)||void 0===e?void 0:e.typeName)}))})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("label",{htmlFor:"productAmount",children:["\u05db\u05de\u05d5\u05ea \u05e0\u05d0\u05db\u05dc\u05ea:",(0,l.jsx)("input",{name:"productAmount",type:"number",id:"productAmount",min:"0.00000001",step:"any",value:m,onChange:function(t){p(t.target.value)}})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("div",{className:"div1",children:["\u05de\u05e1\u05e4\u05e8 \u05de\u05e0\u05d5\u05ea:",(0,l.jsx)("p",{className:"result",children:_})]}),(0,l.jsx)("button",{type:"submit",children:"\u05d7\u05e9\u05d1"})]})})})}},6690:function(t,e,a){a.d(e,{R:function(){return r}});var n=a(8373),r={numberFormat:{minimumFractionDigits:2,maximumFractionDigits:2},fractionFormat:{useUnicodeVulgar:!0},fractionCalculation:function(t){return(0,n.toFraction)(Number(t)||0,r.fractionFormat)},NEGLIGIBLE_NUMBER:.25,stringResult:"\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8",stringAlert:"\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd"}},2024:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(a(1527));e.default=function(t){var e=0,a=1;return Object.keys(r.default).forEach((function(n){var r=parseFloat(n),u=Math.abs(t-r);u<a&&(a=u,e=r)})),e}},1527:function(t,e){Object.defineProperty(e,"__esModule",{value:!0});e.default={.1:{vulgar:"\u2152",fraction:"1/10"},.11:{vulgar:"\u2151",fraction:"1/9"},.12:{vulgar:"\u215b",fraction:"1/8"},.14:{vulgar:"\u2150",fraction:"1/7"},.16:{vulgar:"\u2159",fraction:"1/6"},.2:{vulgar:"\u2155",fraction:"1/5"},.25:{vulgar:"\xbc",fraction:"1/4"},.33:{vulgar:"\u2153",fraction:"1/3"},.37:{vulgar:"\u215c",fraction:"3/8"},.4:{vulgar:"\u2156",fraction:"2/5"},.5:{vulgar:"\xbd",fraction:"1/2"},.6:{vulgar:"\u2157",fraction:"3/5"},.62:{vulgar:"\u215d",fraction:"5/8"},.66:{vulgar:"\u2154",fraction:"2/3"},.75:{vulgar:"\xbe",fraction:"3/4"},.8:{vulgar:"\u2158",fraction:"4/5"},.83:{vulgar:"\u215a",fraction:"5/6"},.87:{vulgar:"\u215e",fraction:"7/8"}}},8373:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0}),e.toDecimal=e.toFraction=void 0;var r=a(6856);Object.defineProperty(e,"toFraction",{enumerable:!0,get:function(){return n(r).default}});var u=a(2691);Object.defineProperty(e,"toDecimal",{enumerable:!0,get:function(){return n(u).default}})},2691:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(a(1527));e.default=function(t){if("number"===typeof t)return t;if(""===t||void 0===t||null===t)return 0;var e=t.split(" "),a=e[0],n=e[1];if(void 0===n||""===n)return parseFloat(a);var u=Object.keys(r.default).find((function(t){return r.default[t].vulgar===n||r.default[t].fraction===n}))||n;return parseFloat(a)+parseFloat(u)}},6856:function(t,e,a){var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r=n(a(1527)),u=n(a(2024));e.default=function(t,e){var a=e.useUnicodeVulgar,n=void 0===a||a;if(t%1===0)return t.toString();var i=(t-Math.floor(t)).toFixed(2),o=Math.trunc(t);return o=0===o?"":"".concat(o," "),n?"".concat(o).concat(r.default[(0,u.default)(i)].vulgar):"".concat(o).concat(r.default[(0,u.default)(i)].fraction)}}}]);
//# sourceMappingURL=75.bc27a5da.chunk.js.map