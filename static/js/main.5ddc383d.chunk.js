(this["webpackJsonpreact_goods-selector-js"]=this["webpackJsonpreact_goods-selector-js"]||[]).push([[0],{10:function(t,e,c){},12:function(t,e,c){"use strict";c.r(e);var s=c(3),n=c.n(s),a=c(4),o=c(1),i=(c(9),c(10),c(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],r=function(){var t=Object(o.useState)("Jam"),e=Object(a.a)(t,2),c=e[0],s=e[1],n=function(){s("")};return Object(i.jsxs)("main",{className:"section container",children:[Object(i.jsxs)("h1",{className:"title is-flex is-align-items-center ".concat(c?"has-background-success-light":""),children:[c?"".concat(c," is selected"):"No goods selected",c&&Object(i.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:n})]}),Object(i.jsx)("table",{className:"table",children:Object(i.jsx)("tbody",{children:l.map((function(t){return Object(i.jsxs)("tr",{"data-cy":"Good",className:c===t?"has-background-success-light":"",children:[Object(i.jsxs)("td",{children:[!c&&Object(i.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){return s(t)},children:"+"}),c===t&&Object(i.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:n,children:"-"})]}),Object(i.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:t})]},t)}))})})]})};n.a.render(Object(i.jsx)(r,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.5ddc383d.chunk.js.map