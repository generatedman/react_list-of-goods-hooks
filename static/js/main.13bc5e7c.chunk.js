(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c,s=n(6),o=n.n(s),i=n(7),r=n(5),a=n(1),u=(n(12),n(13),n(0)),l=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(c||(c={}));var b=function(){var t=Object(a.useState)(!1),e=Object(r.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(c.NONE),b=Object(r.a)(o,2),j=b[0],h=b[1];return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:"button is-info ".concat(j!==c.ALPHABET?"is-light":""),onClick:function(){return h(c.ALPHABET)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:"button is-success ".concat(j!==c.LENGTH?"is-light":""),onClick:function(){return h(c.LENGTH)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:"button is-warning ".concat(n?"":"is-light"),onClick:function(){return s(!n)},children:"Reverse"}),(j!==c.NONE||n)&&Object(u.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){h(c.NONE),s(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:Object(u.jsx)("ul",{children:function(t,e,n){var s=Object(i.a)(t);return s.sort((function(t,n){switch(e){case c.ALPHABET:return t.localeCompare(n);case c.LENGTH:return t.length-n.length;default:return 0}})),n&&s.reverse(),s}(l,j,n).map((function(t){return Object(u.jsx)("li",{"data-cy":"good",children:t},t)}))})})]})};o.a.render(Object(u.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.13bc5e7c.chunk.js.map