(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=(c(14),c(15),c(16),c(2)),b=(c(0),c(1)),j=function(){return Object(b.jsx)("h1",{className:"title",children:"Home page"})},r=c(6),l=c.n(r),d=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],o=function(){var e=Object(i.h)().tabId,t=d.find((function(t){return t.id===e}));return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Tabs page"}),Object(b.jsx)("div",{className:"tabs is-boxed",children:Object(b.jsx)("ul",{children:d.map((function(t){return Object(b.jsx)("li",{"data-cy":"Tab",className:l()({"is-active":t.id===e}),children:Object(b.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(b.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})},h=function(){return Object(b.jsx)("h1",{className:"title",children:"Page not found"})},x=function(){return Object(b.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"navbar-brand",children:[Object(b.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:"Home"}),Object(b.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return l()("navbar-item",{"is-active":t})},children:"Tabs"})]})})})},O=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{path:"/",element:Object(b.jsx)(j,{})}),Object(b.jsxs)(i.b,{path:"/tabs",children:[Object(b.jsx)(i.b,{index:!0,element:Object(b.jsx)(o,{})}),Object(b.jsx)(i.b,{path:":tabId",element:Object(b.jsx)(o,{})})]}),Object(b.jsx)(i.b,{path:"*",element:Object(b.jsx)(h,{})}),Object(b.jsx)(i.b,{path:"/home*",element:Object(b.jsx)(i.a,{to:"/"})})]})})})]})};s.a.render(Object(b.jsx)(n.a,{children:Object(b.jsx)(O,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.683b8edf.chunk.js.map