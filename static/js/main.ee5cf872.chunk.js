(this["webpackJsonpreact_list-of-goods-js"]=this["webpackJsonpreact_list-of-goods-js"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),r=n(6),i=n(8),o=n(1),a=n(4),u=n.n(a),l=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];var j=function(){var t=Object(o.useState)(""),e=Object(r.a)(t,2),n=e[0],s=e[1],c=Object(o.useState)(!1),a=Object(r.a)(c,2),j=a[0],d=a[1],h=function(t,e){var n=e.isSorted,s=e.isReversed,c=(e.query,Object(i.a)(t));switch(n){case"A":c.sort((function(t,e){return t.localeCompare(e)}));break;case"L":c.sort((function(t,e){return t.length-e.length}))}return s&&c.reverse(),c}(b,{isSorted:n,isReversed:j});return Object(l.jsxs)("div",{className:"section content",children:[Object(l.jsxs)("div",{className:"buttons",children:[Object(l.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":"A"!==n}),onClick:function(){return s("A")},children:"Sort alphabetically"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":"L"!==n}),onClick:function(){return s("L")},children:"Sort by length"}),Object(l.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!j}),onClick:function(){return d(!j)},children:"Reverse"}),(""!==n||j)&&Object(l.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(""),d(!1)},children:"Reset"})]}),Object(l.jsx)("ul",{children:h.map((function(t){return Object(l.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(l.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ee5cf872.chunk.js.map