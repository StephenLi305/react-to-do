(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,n){e.exports=n(13)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(4),l=n.n(o),c=(n(11),n(2)),i=n(1),u=(n(12),function(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],o=t[1],l=Object(a.useState)(0),c=Object(i.a)(l,2),u=c[0],s=c[1],m=Object(a.useState)(0),d=Object(i.a)(m,2),f=d[0],p=d[1],b=Object(a.useState)(!1),E=Object(i.a)(b,2),v=E[0],h=E[1],k=Object(a.useState)(null),j=Object(i.a)(k,2),O=j[0],w=j[1];Object(a.useEffect)(function(){console.log(n),n>59&&(o(0),s(u+1)),u>59&&(s(0),p(f+1))},[n,u,f]);var g=f<10?"0"+f:f,x=u<10?"0"+u:u,C=n<10?"0"+n:n;return r.a.createElement("div",{className:"box"},r.a.createElement("h3",null,"Stopwatch"),r.a.createElement("p",null,"Hours:",g),r.a.createElement("p",null,"Minutes:",x),r.a.createElement("p",null,"Seconds:",C),r.a.createElement("button",{onClick:function(){v?(clearInterval(O),h(!1),w(null)):(h(!0),w(function(){return setInterval(function(){return o(function(e){return e+1})},1e3)}))}},v?"Stop Time":"Start Time"),r.a.createElement("button",{onClick:function(){v&&(clearInterval(O),w(null),h(!1)),o(0),s(0),p(0)}},"Reset Time"))}),s=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/StephenLi305",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-github"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/stephenli305/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-linkedin-in"})),r.a.createElement("a",{href:"https://stephenli.fun/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fas fa-portrait"})),r.a.createElement("a",{href:"https://angel.co/stephen-li-15",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fab fa-angellist"})))},m=function(e){var t=e.list,n=e.index,a=e.updateList,o=e.deleteList,l=function(e){var r=Object(c.a)(t);r[e].isCompleted=!r[e].isCompleted,a(r,n)},i=function(e){var r=Object(c.a)(t);r.splice(e,1),a(r,n)};return r.a.createElement("div",{className:"box",key:n},r.a.createElement("h3",null,r.a.createElement("div",null,"List ",n+1),r.a.createElement("button",{onClick:function(){return o(n)}},"X")),t.map(function(e,t){return r.a.createElement(d,{key:t,todo:e,completeTodo:l,removeTodo:i,index:t})}),r.a.createElement(f,{addTodo:function(e){var r=[].concat(Object(c.a)(t),[{text:e}]);a(r,n)}}))},d=function(e){var t=e.todo,n=e.index,a=e.completeTodo,o=e.removeTodo;return r.a.createElement("div",{className:"todo",style:{textDecoration:t.isCompleted?"line-through":""}},t.text,r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return a(n)}},"Complete"),r.a.createElement("button",{onClick:function(){return o(n)}},"X")))},f=function(e){var t=e.addTodo,n=Object(a.useState)(""),o=Object(i.a)(n,2),l=o[0],c=o[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l&&(t(l),c(""))}},r.a.createElement("input",{type:"text",className:"input",value:l,placeholder:"Add new to do...",onChange:function(e){return c(e.target.value)}}),r.a.createElement("button",null,"Add!"))},p=function(){var e=Object(a.useState)([[{text:"Learn ReactHooks",isCompleted:!1},{text:"Go get boba",isCompleted:!1},{text:"Play basketball",isCompleted:!1}]]),t=Object(i.a)(e,2),n=t[0],o=t[1],l=function(e,t){var a=Object(c.a)(n);a[t]=e,o(a)},d=function(e){var t=Object(c.a)(n);t.splice(e,1),o(t)};return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app-items"},n.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(m,{list:e,key:t,index:t,updateList:l,deleteList:d}))}),r.a.createElement("button",{className:"box",onClick:function(){return function(){var e=Object(c.a)(n);e.push([]),o(e)}()}},"Add a new list!")),r.a.createElement("div",{className:"app-items"},r.a.createElement(u,null)),r.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[5,1,2]]]);
//# sourceMappingURL=main.ebde2599.chunk.js.map