(window.webpackJsonphhumanschallenge=window.webpackJsonphhumanschallenge||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),l=t.n(c),o=(t(11),t(2)),s=t.n(o),i=t(5),m=t(1);t(13);function u(){return r.a.createElement("header",{id:"header-component"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:"#0"},r.a.createElement("img",{alt:"Helpful Humans",src:"/HHumansChallengeassets/logo.svg"}))),r.a.createElement("input",{className:"search",label:"Search",placeholder:"Search"}))}t(14);function d(e){var a=e.random;return r.a.createElement("section",{className:"sidebar"},r.a.createElement("div",{id:"sidebar-logo"},r.a.createElement("a",{href:"#0"},r.a.createElement("img",{alt:"Helpful Humans",src:"/HHumansChallengeassets/blacklogo.png"}))),r.a.createElement("div",{className:"random-button"},r.a.createElement("button",{onClick:a,className:"random"},"Random Color")),r.a.createElement("div",{className:"flex"},r.a.createElement("a",{href:"#0",className:"colors"},"Red"),r.a.createElement("a",{href:"#0",className:"colors"},"Orange"),r.a.createElement("a",{href:"#0",className:"colors"},"Yellow"),r.a.createElement("a",{href:"#0",className:"colors"},"Green"),r.a.createElement("a",{href:"#0",className:"colors"},"Blue"),r.a.createElement("a",{href:"#0",className:"colors"},"Purple"),r.a.createElement("a",{href:"#0",className:"colors"},"Brown"),r.a.createElement("a",{href:"#0",className:"colors"},"Gray")))}t(15);function f(e){var a=e.color,t=e.details;return r.a.createElement("div",{onClick:function(){return t(a.colorId)},className:"card"},r.a.createElement("div",{className:"card-color",style:{backgroundColor:a.hexString}}),r.a.createElement("div",{className:"card-text"},r.a.createElement("p",null,a.hexString)))}t(16);function E(e){var a=e.colors,t=e.loading,n=e.details;return t?r.a.createElement("h1",{style:{textAlign:"center"}},"Loading..."):r.a.createElement("section",{id:"list-section"},a.map((function(e){return r.a.createElement(f,{key:e.colorId,color:e,details:n})})))}t(17);function h(e){for(var a=e.totalColors,t=e.colorsPerPage,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("div",{className:"pages"},r.a.createElement("a",{href:"#0",className:"page-link"},"\xab"),c.map((function(e){return r.a.createElement("a",{key:e,onClick:function(){return n(e)},href:"#0",className:"page-link"},e)})),r.a.createElement("a",{href:"#0",className:"page-link"},"\xbb"))}t(18);function g(e){var a=e.detailColor,t=e.colors,n=e.details,c=e.clear;return r.a.createElement("div",{id:"detail"},r.a.createElement(f,{color:a,details:n}),r.a.createElement("div",{className:"flex-detail"},t.map((function(e){return r.a.createElement(f,{key:e.colorId,color:e,details:n})}))),r.a.createElement("div",{className:"clear-button"},r.a.createElement("button",{onClick:c},"Clear")))}l.a.render(r.a.createElement((function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),o=Object(m.a)(l,2),f=o[0],p=o[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),N=v[0],k=v[1],j=Object(n.useState)(),O=Object(m.a)(j,2),C=O[0],w=O[1],x=Object(n.useState)([]),S=Object(m.a)(x,2),H=S[0],y=S[1],P=Object(n.useState)(1),I=Object(m.a)(P,2),B=I[0],M=I[1];Object(n.useEffect)((function(){Object(i.a)(s.a.mark((function e(){var a,t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,fetch("colors.json");case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Failed to fetch");case 6:return e.next=8,a.json();case 8:t=e.sent,c(t),p(!1);case 11:case"end":return e.stop()}}),e)})))().catch((function(e){return console.error(e)}))}),[]);var F=12*B,G=F-12,J=t.slice(G,F),R=function(e){k(!0),w(t[e]),y(t.slice(e+1,e+6))};return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(d,{random:function(){k(!0);var e=Math.floor(Math.random()*t.length);w(t[e]),y(t.slice(e+1,e+6))}}),N?r.a.createElement(g,{detailColor:C,colors:H,details:R,clear:function(){k(!1)}}):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{colors:J,loading:f,details:R}),r.a.createElement(h,{colorsPerPage:12,totalColors:t.length,paginate:function(e){return M(e)}})))}),null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.9765b608.chunk.js.map