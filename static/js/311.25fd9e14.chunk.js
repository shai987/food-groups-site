"use strict";(self.webpackChunkfood_groups_site=self.webpackChunkfood_groups_site||[]).push([[311],{1271:function(n,t,i){i.d(t,{Z:function(){return o}});var e=i(184),o=function(n){return(0,e.jsx)(e.Fragment,{children:(0,e.jsx)("div",{className:"form-frame-container",children:(0,e.jsx)("div",{className:"form-frame",children:n.children})})})}},1311:function(n,t,i){i.r(t),i.d(t,{default:function(){return c}});var e=i(9439),o=i(2791),a=i(861),u=[{details:{productName:"\u05e7\u05d5\u05d8\u05dc\u05d9\u05d8",value:2,fat:1},fat:{fatString:" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05de\u05df *"},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4)"}},{details:{productName:"\u05d4\u05de\u05d1\u05d5\u05e8\u05d2\u05e8",value:2,fat:1},fat:{fatString:" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05de\u05df *"},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4)"}},{details:{productName:"\u05e7\u05e6\u05d9\u05e6\u05ea \u05d9\u05e8\u05e7",value:2,fat:1},fat:{fatString:" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 \u05de\u05e0\u05d5\u05ea \u05e9\u05d5\u05de\u05df *"},unit:{measureString:"(\u05d9\u05d7\u05d9\u05d3\u05d4)"}}],r=i(6690),l=i(1271),d=(i(7876),i(184)),c=function(){var n=(0,o.useState)(u),t=(0,e.Z)(n,1)[0],i=(0,o.useState)(u[0].details.productName),c=(0,e.Z)(i,2),s=c[0],v=c[1],f=(0,o.useState)(window.innerWidth),m=(0,e.Z)(f,2),p=m[0],g=m[1],h=(0,o.useState)(1),N=(0,e.Z)(h,2),R=N[0],S=N[1],x=(0,o.useState)(""),j=(0,e.Z)(x,2),b=j[0],w=j[1],F=(0,o.useState)(!1),E=(0,e.Z)(F,2),Z=E[0],C=E[1],L=t.find((function(n){var t;return(null===n||void 0===n||null===(t=n.details)||void 0===t?void 0:t.productName)===s}));(0,o.useEffect)((function(){return window.addEventListener("resize",_),function(){window.removeEventListener("resize",_)}}),[]);var _=function(){g(window.innerWidth)},A=t.map((function(n){var t,i,e;return{value:null===n||void 0===n||null===(t=n.details)||void 0===t?void 0:t.productName,label:"".concat(null===n||void 0===n||null===(i=n.details)||void 0===i?void 0:i.productName," ").concat(null===n||void 0===n||null===(e=n.unit)||void 0===e?void 0:e.measureString)}}));return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)(l.Z,{children:(0,d.jsxs)("form",{onSubmit:function(n){n.preventDefault();try{w(function(n){var t,i,e,o=(n/(null===L||void 0===L||null===(t=L.details)||void 0===t?void 0:t.value)).toLocaleString(null===r.R||void 0===r.R?void 0:r.R.numberFormat),a="".concat(null===L||void 0===L||null===(i=L.fat)||void 0===i?void 0:i.fatString.split(" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 ")[0]," \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3"),u=null===L||void 0===L||null===(e=L.fat)||void 0===e?void 0:e.fatString.split(" \u05d9\u05e9 \u05dc\u05d4\u05d5\u05e8\u05d9\u05d3 ")[1],l=" ".concat(o),d=" ".concat(null===r.R||void 0===r.R?void 0:r.R.fractionCalculation(o),"\n ").concat(a," ").concat(null===r.R||void 0===r.R?void 0:r.R.fractionCalculation(o)," ").concat(u);return L?l>=(null===r.R||void 0===r.R?void 0:r.R.NEGLIGIBLE_NUMBER)?d:" \u05d6\u05e0\u05d9\u05d7":alert(r.R.stringAlert)}(R)),C(!0)}catch(t){console.log(t.message),w(r.R.stringResult)}},children:[(0,d.jsx)("h1",{children:"\u05ea\u05d7\u05dc\u05d9\u05e4\u05d9 \u05d1\u05e9\u05e8 - \u05dc\u05d9\u05d9\u05d8"}),(0,d.jsxs)("label",{htmlFor:"productAmount",children:["\u05db\u05de\u05d5\u05ea \u05e0\u05d0\u05db\u05dc\u05ea:",(0,d.jsx)("input",{name:"productAmount",type:"number",id:"productAmount",min:"0",max:"1000",step:"any",value:R,onChange:function(n){S(n.target.value)}})]}),(0,d.jsxs)("label",{children:["\u05e1\u05d5\u05d2 \u05d4\u05de\u05d5\u05e6\u05e8:",p<=600?(0,d.jsx)("select",{value:s,onChange:function(n){v(n.target.value)},children:t.map((function(n){var t,i,e,o;return(0,d.jsx)("option",{value:null===n||void 0===n||null===(i=n.details)||void 0===i?void 0:i.productName,children:"".concat(null===n||void 0===n||null===(e=n.details)||void 0===e?void 0:e.productName," ").concat(null===n||void 0===n||null===(o=n.unit)||void 0===o?void 0:o.measureString)},null===n||void 0===n||null===(t=n.details)||void 0===t?void 0:t.productName)}))}):(0,d.jsx)(a.ZP,{options:A,isSearchable:!0,value:A.find((function(n){return n.value===s})),onChange:function(n){v(n.value)}})]}),(0,d.jsxs)("div",{className:"div-result div-result-pc",children:[!0===Z&&"\u05de\u05e1\u05e4\u05e8 \u05de\u05e0\u05d5\u05ea:",(0,d.jsx)("div",{className:"result",children:b})]}),(0,d.jsx)("button",{type:"submit",children:"\u05d7\u05e9\u05d1"})]})})})}},6690:function(n,t,i){i.d(t,{R:function(){return o}});var e=i(8373),o={numberFormat:{minimumFractionDigits:2,maximumFractionDigits:2},fractionFormat:{useUnicodeVulgar:!0},fractionCalculation:function(n){return(0,e.toFraction)(Number(n)||0,o.fractionFormat)},NEGLIGIBLE_NUMBER:.25,stringResult:"\u05e7\u05d9\u05d9\u05de\u05ea \u05d1\u05e2\u05d9\u05d4, \u05d1\u05de\u05e7\u05e8\u05d4 \u05d5\u05d4\u05d9\u05d0 \u05d7\u05d5\u05d6\u05e8\u05ea \u05d0\u05e0\u05d0 \u05e4\u05e0\u05d4 \u05dc\u05d1\u05d5\u05e0\u05d4 \u05d4\u05d0\u05ea\u05e8",stringAlert:"\u05d4\u05e2\u05e8\u05da \u05e9\u05d4\u05d5\u05d6\u05df \u05d0\u05d9\u05e0\u05d5 \u05e7\u05d9\u05d9\u05dd"}}}]);
//# sourceMappingURL=311.25fd9e14.chunk.js.map