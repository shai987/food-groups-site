"use strict";(self.webpackChunkfood_groups_site=self.webpackChunkfood_groups_site||[]).push([[311],{1271:function(t,n,r){r.d(n,{Z:function(){return e}});var a=r(184),e=function(t){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"form-frame-container",children:(0,a.jsx)("div",{className:"form-frame",children:t.children})})})}},1311:function(t,n,r){r.r(n),r.d(n,{default:function(){return c}});var a=r(9439),e=r(2791),u=[{details:{productName:"\u05e7\u05d5\u05d8\u05dc\u05d9\u05d8",value:2,fat:1},fat:{fatString:" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05de\u05df *"},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4)"}},{details:{productName:"\u05d4\u05de\u05d1\u05d5\u05e8\u05d2\u05e8",value:2,fat:1},fat:{fatString:" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05de\u05df *"},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4)"}},{details:{productName:"\u05e7\u05e6\u05d9\u05e6\u05ea \u05d9\u05e8\u05e7",value:2,fat:1},fat:{fatString:" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05de\u05df *"},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4)"}}],i=r(6690),o=r(1271),l=(r(7876),r(184)),c=function(){var t=(0,e.useState)(u),n=(0,a.Z)(t,1)[0],r=(0,e.useState)(u[0].details.productName),c=(0,a.Z)(r,2),d=c[0],f=c[1],s=(0,e.useState)(1),v=(0,a.Z)(s,2),m=v[0],g=v[1],p=(0,e.useState)(""),h=(0,a.Z)(p,2),_=h[0],j=h[1],b=n.find((function(t){var n;return(null===t||void 0===t||null===(n=t.details)||void 0===n?void 0:n.productName)===d})),x=function(t){t.target.value=""};return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Z,{children:(0,l.jsxs)("form",{onSubmit:function(t){t.preventDefault();try{j(function(t){var n,r,a,e=(t/(null===b||void 0===b||null===(n=b.details)||void 0===n?void 0:n.value)).toLocaleString(null===i.R||void 0===i.R?void 0:i.R.numberFormat),u="".concat(null===b||void 0===b||null===(r=b.fat)||void 0===r?void 0:r.fatString.split(" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 ")[0]," \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3"),o=null===b||void 0===b||null===(a=b.fat)||void 0===a?void 0:a.fatString.split(" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 ")[1],l=" ".concat(e),c=" ".concat(null===i.R||void 0===i.R?void 0:i.R.fractionCalculation(e),"\n ").concat(u," ").concat(null===i.R||void 0===i.R?void 0:i.R.fractionCalculation(e)," ").concat(o);return b?l>=(null===i.R||void 0===i.R?void 0:i.R.NEGLIGIBLE_NUMBER)?c:" \u05d6\u05e0\u05d9\u05d7":alert("\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd")}(m))}catch(n){console.log(n.message),j("\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8")}},children:[(0,l.jsx)("h1",{children:"\u05ea\u05d7\u05dc\u05d9\u05e4\u05d9 \u05d1\u05e9\u05e8 - \u05dc\u05d9\u05d9\u05d8"}),(0,l.jsxs)("label",{htmlFor:"productAmount",children:["\u05db\u05de\u05d5\u05ea \u05e0\u05d0\u05db\u05dc\u05ea:",(0,l.jsx)("input",{name:"productAmount",type:"number",id:"productAmount",min:"0",max:"1000",step:"any",value:m,onChange:function(t){g(t.target.value)}})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("label",{children:["\u05e1\u05d5\u05d2 \u05d4\u05de\u05d5\u05e6\u05e8:",(0,l.jsx)("input",{list:"productName",defaultValue:d,onChange:function(t){f(t.target.value)},onClick:x,onFocus:x}),(0,l.jsx)("datalist",{id:"productName",children:n.map((function(t){var n,r,a;return(0,l.jsx)("option",{name:"productName",value:null===t||void 0===t||null===(r=t.details)||void 0===r?void 0:r.productName,children:null===t||void 0===t||null===(a=t.unit)||void 0===a?void 0:a.measureString},null===t||void 0===t||null===(n=t.details)||void 0===n?void 0:n.productName)}))})]}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsxs)("div",{className:"div1",children:["\u05de\u05e1\u05e4\u05e8 \u05de\u05e0\u05d5\u05ea:",(0,l.jsx)("p",{className:"result",children:_})]}),(0,l.jsx)("button",{type:"submit",children:"\u05d7\u05e9\u05d1"})]})})})}},6690:function(t,n,r){r.d(n,{R:function(){return e}});var a=r(8373),e={numberFormat:{minimumFractionDigits:2,maximumFractionDigits:2},fractionFormat:{useUnicodeVulgar:!0},fractionCalculation:function(t){return(0,a.toFraction)(Number(t)||0,e.fractionFormat)},NEGLIGIBLE_NUMBER:.25,stringResult:"\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8",stringAlert:"\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd"}},2024:function(t,n,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var e=a(r(1527));n.default=function(t){var n=0,r=1;return Object.keys(e.default).forEach((function(a){var e=parseFloat(a),u=Math.abs(t-e);u<r&&(r=u,n=e)})),n}},1527:function(t,n){Object.defineProperty(n,"__esModule",{value:!0});n.default={.1:{vulgar:"\u2152",fraction:"1/10"},.11:{vulgar:"\u2151",fraction:"1/9"},.12:{vulgar:"\u215b",fraction:"1/8"},.14:{vulgar:"\u2150",fraction:"1/7"},.16:{vulgar:"\u2159",fraction:"1/6"},.2:{vulgar:"\u2155",fraction:"1/5"},.25:{vulgar:"\xbc",fraction:"1/4"},.33:{vulgar:"\u2153",fraction:"1/3"},.37:{vulgar:"\u215c",fraction:"3/8"},.4:{vulgar:"\u2156",fraction:"2/5"},.5:{vulgar:"\xbd",fraction:"1/2"},.6:{vulgar:"\u2157",fraction:"3/5"},.62:{vulgar:"\u215d",fraction:"5/8"},.66:{vulgar:"\u2154",fraction:"2/3"},.75:{vulgar:"\xbe",fraction:"3/4"},.8:{vulgar:"\u2158",fraction:"4/5"},.83:{vulgar:"\u215a",fraction:"5/6"},.87:{vulgar:"\u215e",fraction:"7/8"}}},8373:function(t,n,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.toDecimal=n.toFraction=void 0;var e=r(6856);Object.defineProperty(n,"toFraction",{enumerable:!0,get:function(){return a(e).default}});var u=r(2691);Object.defineProperty(n,"toDecimal",{enumerable:!0,get:function(){return a(u).default}})},2691:function(t,n,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var e=a(r(1527));n.default=function(t){if("number"===typeof t)return t;if(""===t||void 0===t||null===t)return 0;var n=t.split(" "),r=n[0],a=n[1];if(void 0===a||""===a)return parseFloat(r);var u=Object.keys(e.default).find((function(t){return e.default[t].vulgar===a||e.default[t].fraction===a}))||a;return parseFloat(r)+parseFloat(u)}},6856:function(t,n,r){var a=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var e=a(r(1527)),u=a(r(2024));n.default=function(t,n){var r=n.useUnicodeVulgar,a=void 0===r||r;if(t%1===0)return t.toString();var i=(t-Math.floor(t)).toFixed(2),o=Math.trunc(t);return o=0===o?"":"".concat(o," "),a?"".concat(o).concat(e.default[(0,u.default)(i)].vulgar):"".concat(o).concat(e.default[(0,u.default)(i)].fraction)}}}]);
//# sourceMappingURL=311.5f26ca60.chunk.js.map