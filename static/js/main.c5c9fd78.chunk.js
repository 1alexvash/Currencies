(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),u=a(4),s=a.n(u),l=a(15),i=a(2),m=a(3),f=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],r=t[1];return setTimeout(function(){r("")},4e3),a},d=a(16),p=a.n(d),v=(a(41),function(){var e=["UAH","USD","EUR"],t=Object(n.useState)({from:e[0],to:e[1],amount:0,result:"",date:"",rates:void 0,rate:void 0}),a=Object(m.a)(t,2),c=a[0],o=a[1];Object(n.useEffect)(function(){var e=(c.amount*c.rate).toFixed(3);o(Object(i.a)({},c,{result:e}))},[c.rate,c.amount]),Object(n.useEffect)(function(){if(void 0!==c.rates){var e=c.rates[c.to]/c.rates[c.from];o(Object(i.a)({},c,{rate:e}))}},[c.rates,c.from,c.to]);var u=function(){var e=Object(l.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://data.fixer.io/api/latest?access_key=a05d207ddb46b3f2afa728b84709f1ad");case 2:t=e.sent,a=t.data.rates,o(Object(i.a)({},c,{date:t.data.date,rates:a}));case 5:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){u()},[]),r.a.createElement("div",{className:"App"},r.a.createElement(f,null),r.a.createElement("header",{className:"Header"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:"favicon.ico",alt:"logo"})," CURRENCIES"),r.a.createElement("div",{className:"date"},c.date)),r.a.createElement("div",{className:"Content"},r.a.createElement("section",null,r.a.createElement("p",null,"From:"),r.a.createElement("div",{className:"currencies"},e.map(function(e){return r.a.createElement("span",{className:c.from===e?"currency active":"currency",key:e,onClick:function(){return o(Object(i.a)({},c,{from:e}))}},e)}))),r.a.createElement("section",null,r.a.createElement("p",null,"To:"),r.a.createElement("div",{className:"currencies"},e.map(function(e){return r.a.createElement("span",{className:c.to===e?"currency active":"currency",key:e,onClick:function(){return o(Object(i.a)({},c,{to:e}))}},e)})))),r.a.createElement("footer",{className:"Footer"},r.a.createElement("input",{type:"number",className:"amount",onChange:function(e){return function(e){var t=parseInt(e.target.value);e.target.value=t,o(Object(i.a)({},c,{amount:t}))}(e)},value:c.amount,placeholder:"Type amount"}),r.a.createElement("div",{className:"output"},"Result: ",c.result)))});o.a.render(r.a.createElement(v,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.c5c9fd78.chunk.js.map