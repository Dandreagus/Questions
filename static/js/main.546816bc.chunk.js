(this.webpackJsonpquestions=this.webpackJsonpquestions||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(8),o=n.n(i),r=(n(14),n(9)),s=n(2),u=n(6),l=n.n(u),j=function(){return fetch("https://opentdb.com/api.php?amount=10").then((function(e){return e.json()})).then((function(e){return e.results}))},d=n(7),b=n.n(d),f=n(0),p=function(e){var t=e.num,n=e.questio,c=e.category,a=e.difficulty,i=n.replace(/&quot;/g,'"').replace(/&#039;/g,"'").replace(/&eacute;/g,"\xe9");return Object(f.jsxs)("div",{className:b.a.card,children:[Object(f.jsx)("section",{className:b.a.num,children:t}),Object(f.jsx)("section",{children:i}),Object(f.jsx)("p",{children:"".concat(c," : ").concat(a)})]})};var h=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),o=Object(s.a)(i,2),u=o[0],d=o[1],b=Object(c.useState)("loading"),h=Object(s.a)(b,2),g=h[0],O=h[1],m=Object(c.useState)(0),y=Object(s.a)(m,2),x=y[0],_=y[1],S=Object(c.useState)(""),w=Object(s.a)(S,2),v=w[0],k=w[1],C=n[u];return Object(c.useEffect)((function(){j().then((function(e){a(e),O("pending")}))}),[]),console.log(g),"loading"===g?Object(f.jsx)("span",{children:"Loading..."}):"finished"===g?Object(f.jsxs)("div",{className:l.a.playAgain,children:[Object(f.jsxs)("span",{children:["Your points earned: $",x]}),Object(f.jsx)("button",{onClick:function(){return window.location.reload()},children:"Play again"})]}):Object(f.jsxs)("div",{className:l.a.container,children:[Object(f.jsx)(p,{category:C.category,difficulty:C.difficulty,questio:C.question,num:"".concat(u+1," / ").concat(n.length," ")}),[].concat(Object(r.a)(C.incorrect_answers),[C.correct_answer]).sort((function(e,t){return e.localeCompare(t)})).map((function(e){return Object(f.jsx)("button",{style:{backgroundColor:v===e?"green":""},onClick:function(){return function(e){if(e===C.correct_answer)switch(k(e),C.type){case"multiple":_(x+10);break;case"boolean":_(x+5);break;default:return}u+1===n.length?O("finished"):setTimeout((function(){d(u+1)}),1e3)}(e)},children:e},e)}))]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),i(e),o(e)}))};o.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),g()},6:function(e,t,n){e.exports={container:"App_container__li0uw",playAgain:"App_playAgain__3jjyj"}},7:function(e,t,n){e.exports={card:"Section_card__2WeSe",num:"Section_num__1ySya"}}},[[16,1,2]]]);
//# sourceMappingURL=main.546816bc.chunk.js.map