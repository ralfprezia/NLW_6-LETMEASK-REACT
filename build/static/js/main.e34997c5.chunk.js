(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},46:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var r=n(4),a=n.n(r),s=n(32),c=n.n(s),i=n(18),o=n(9),u=n(7),d=n.n(u),l=n(12),j=n(13),h=n(21);n(43),n(44);h.a.initializeApp({apiKey:"AIzaSyCqhBQqP8Cw_BfkIAvM7NrMptq73IcBRic",authDomain:"letmeask-56c2d.firebaseapp.com",databaseURL:"https://letmeask-56c2d-default-rtdb.firebaseio.com",projectId:"letmeask-56c2d",storageBucket:"letmeask-56c2d.appspot.com",messagingSenderId:"1092814907323",appId:"1:1092814907323:web:0ecd51c2135e49120e869e"});var b=h.a.auth(),p=h.a.database(),m=n.p+"static/media/illustration.ae7276f0.svg",f=n.p+"static/media/logo.a88331cb.svg",x=n.p+"static/media/google-icon.df15d8e5.svg",O=n(36),v=n(37),g=(n(46),n(2)),k=["isOutlined"];function w(e){var t=e.isOutlined,n=void 0!==t&&t,r=Object(v.a)(e,k);return Object(g.jsx)("button",Object(O.a)({className:"button ".concat(n?"outlined":"")},r))}n(30);var y=n(35),C=Object(r.createContext)({});function q(e){var t=Object(r.useState)(),n=Object(j.a)(t,2),a=n[0],s=n[1];function c(){return(c=Object(l.a)(d.a.mark((function e(){var t,n,r,a,c,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new y.a.auth.GoogleAuthProvider,e.next=3,b.signInWithPopup(t);case 3:if(!(n=e.sent).user){e.next=9;break}if(r=n.user,a=r.displayName,c=r.photoURL,i=r.uid,a&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:a,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)((function(){var e=b.onAuthStateChanged((function(e){if(e){var t=e.displayName,n=e.photoURL,r=e.uid;if(!t||!n)throw new Error("Missing information from Google Account.");s({id:r,name:t,avatar:n})}}));return function(){e()}}),[]),Object(g.jsx)(C.Provider,{value:{user:a,signInwithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}function A(){return Object(r.useContext)(C)}function N(){var e=Object(o.f)(),t=A(),n=t.user,a=t.signInwithGoogle,s=Object(r.useState)(""),c=Object(j.a)(s,2),i=c[0],u=c[1];function h(){return(h=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=3;break}return t.next=3,a();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=Object(l.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==i.trim()){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,p.ref("rooms/".concat(i)).get();case 5:if((r=t.sent).exists()){t.next=9;break}return alert("Room does not exists."),t.abrupt("return");case 9:if(!r.val().endedAt){t.next=12;break}return alert("Room alredy closed."),t.abrupt("return");case 12:e.push("/rooms/".concat(i));case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-auth",children:[Object(g.jsxs)("aside",{children:[Object(g.jsx)("img",{src:m,alt:"Tlustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(g.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(g.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"main-content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsxs)("button",{onClick:function(){return h.apply(this,arguments)},className:"create-room",children:[Object(g.jsx)("img",{src:x,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(g.jsx)("div",{className:"separator",children:"ou entre na sala"}),Object(g.jsxs)("form",{onSubmit:function(e){return b.apply(this,arguments)},children:[Object(g.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala",onChange:function(e){return u(e.target.value)},value:i}),Object(g.jsx)(w,{type:"submit",children:"Entrar na sala"})]})]})})]})}function I(){var e=A().user,t=Object(o.f)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),s=a[0],c=a[1];function u(){return(u=Object(l.a)(d.a.mark((function n(r){var a,c;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),""!==s.trim()){n.next=3;break}return n.abrupt("return");case 3:return a=p.ref("rooms"),n.next=6,a.push({title:s,authorId:null===e||void 0===e?void 0:e.id});case 6:c=n.sent,t.push("/rooms/".concat(c.key));case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-auth",children:[Object(g.jsxs)("aside",{children:[Object(g.jsx)("img",{src:m,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(g.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(g.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(g.jsx)("main",{children:Object(g.jsxs)("div",{className:"main-content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsx)("h2",{children:"Criar nova sala"}),Object(g.jsxs)("form",{onSubmit:function(e){return u.apply(this,arguments)},children:[Object(g.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return c(e.target.value)},value:s}),Object(g.jsx)(w,{type:"submit",children:"Criar sala"})]}),Object(g.jsxs)("p",{children:["Quer entrar em uma sala existente?",Object(g.jsx)(i.b,{to:"/",children:"Clique aqui"})]})]})})]})}n(31);var L=n.p+"static/media/copy.2f36f99e.svg";n(56);function S(e){return Object(g.jsxs)("button",{className:"room-code",onClick:function(){navigator.clipboard.writeText(e.code)},children:[Object(g.jsx)("div",{children:Object(g.jsx)("img",{src:L,alt:"Copy room code"})}),Object(g.jsxs)("span",{children:["Sala #",e.code]})]})}var H=n(34),E=n.n(H);n(57);function M(e){var t=e.content,n=e.author,r=e.isAnswered,a=void 0!==r&&r,s=e.isHighlighted,c=void 0!==s&&s,i=e.children;return Object(g.jsxs)("div",{className:E()("question",{answered:a},{highlighted:c&&!a}),children:[Object(g.jsx)("p",{children:t}),Object(g.jsxs)("footer",{children:[Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("img",{src:n.avatar,alt:n.name}),Object(g.jsx)("span",{children:n.name})]}),Object(g.jsx)("div",{children:i})]})]})}function D(e){var t=A().user,n=Object(r.useState)([]),a=Object(j.a)(n,2),s=a[0],c=a[1],i=Object(r.useState)(""),o=Object(j.a)(i,2),u=o[0],d=o[1];return Object(r.useEffect)((function(){var n=p.ref("rooms/".concat(e));return n.on("value",(function(e){var n,r=e.val(),a=null!==(n=r.questions)&&void 0!==n?n:{},s=Object.entries(a).map((function(e){var n,r,a,s=Object(j.a)(e,2),c=s[0],i=s[1];return{id:c,content:i.content,author:i.author,isHighLighted:i.isHighLighted,isAnswered:i.isAnswered,likeCount:Object.values(null!==(n=i.likes)&&void 0!==n?n:{}).length,likeId:null===(r=Object.entries(null!==(a=i.likes)&&void 0!==a?a:{}).find((function(e){var n=Object(j.a)(e,2);n[0];return n[1].authorId===(null===t||void 0===t?void 0:t.id)})))||void 0===r?void 0:r[0]}}));d(r.title),c(s)})),function(){n.off("value")}}),[e,null===t||void 0===t?void 0:t.id]),{questions:s,title:u}}function G(){var e=A().user,t=Object(o.g)(),n=Object(r.useState)(""),a=Object(j.a)(n,2),s=a[0],c=a[1],i=t.id,u=D(i),h=u.title,b=u.questions;function m(){return(m=Object(l.a)(d.a.mark((function t(n){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),""!==s.trim()){t.next=3;break}return t.abrupt("return");case 3:if(e){t.next=5;break}throw new Error("You must be logged in");case 5:return r={content:s,author:{name:e.name,avatar:e.avatar},isHighLigted:!1,isAnswered:!1},t.next=8,p.ref("rooms/".concat(i,"/questions")).push(r);case 8:c("");case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return(x=Object(l.a)(d.a.mark((function t(n,r){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!r){t.next=5;break}return t.next=3,p.ref("rooms/".concat(i,"/questions/").concat(n,"/likes/").concat(r)).remove();case 3:t.next=7;break;case 5:return t.next=7,p.ref("rooms/".concat(i,"/questions/").concat(n,"/likes")).push({authorId:null===e||void 0===e?void 0:e.id});case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-room",children:[Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsx)(S,{code:t.id})]})}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"room-title",children:[Object(g.jsxs)("h1",{children:["Sala ",h]}),b.length>0&&Object(g.jsxs)("span",{children:[b.length," pergunta(s)"]})]}),Object(g.jsxs)("form",{onSubmit:function(e){return m.apply(this,arguments)},children:[Object(g.jsx)("textarea",{placeholder:"O que voc\xea quer perguntar? ",onChange:function(e){return c(e.target.value)},value:s}),Object(g.jsxs)("div",{className:"form-footer",children:[e?Object(g.jsxs)("div",{className:"user-info",children:[Object(g.jsx)("img",{src:e.avatar,alt:e.name}),Object(g.jsx)("span",{children:e.name})]}):Object(g.jsxs)("span",{children:["Para enviar sua pergunta, ",Object(g.jsx)("button",{children:"fa\xe7a seu login"}),"."]}),Object(g.jsx)(w,{type:"submit",disabled:!e,children:"Enviar pergunta"})]})]}),Object(g.jsx)("div",{className:"question-list",children:b.map((function(e){return Object(g.jsx)(M,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighLighted,children:!e.isAnswered&&Object(g.jsxs)("button",{className:"like-button ".concat(e.likeId?"liked":""),type:"button","aria-label":"Marcar como gostei",onClick:function(){return function(e,t){return x.apply(this,arguments)}(e.id,e.likeId)},children:[e.likeCount>0&&Object(g.jsx)("span",{children:e.likeCount}),Object(g.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(g.jsx)("path",{d:"M7 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V13C2 12.4696 2.21071 11.9609 2.58579 11.5858C2.96086 11.2107 3.46957 11 4 11H7M14 9V5C14 4.20435 13.6839 3.44129 13.1213 2.87868C12.5587 2.31607 11.7956 2 11 2L7 11V22H18.28C18.7623 22.0055 19.2304 21.8364 19.5979 21.524C19.9654 21.2116 20.2077 20.7769 20.28 20.3L21.66 11.3C21.7035 11.0134 21.6842 10.7207 21.6033 10.4423C21.5225 10.1638 21.3821 9.90629 21.1919 9.68751C21.0016 9.46873 20.7661 9.29393 20.5016 9.17522C20.2371 9.0565 19.9499 8.99672 19.66 9H14Z",stroke:"#737380",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]})},e.id)}))})]})]})}var R=n.p+"static/media/delete.22ba6e00.svg",B=n.p+"static/media/check.5dfa6ed6.svg",z=n.p+"static/media/answer.4502a8d5.svg";function P(){var e=Object(o.f)(),t=Object(o.g)(),n=t.id,r=D(n),a=r.title,s=r.questions;function c(){return(c=Object(l.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.ref("rooms/".concat(n)).update({endedAt:new Date});case 2:e.push("/");case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function i(){return(i=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("Tem certeza que voc\xea deseja excluir esta pergunta?")){e.next=3;break}return e.next=3,p.ref("rooms/".concat(n,"/questions/").concat(t)).remove();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(){return(u=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(n,"/questions/").concat(t)).update({isAnswered:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(){return(j=Object(l.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.ref("rooms/".concat(n,"/questions/").concat(t)).update({isHighlighted:!0});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(g.jsxs)("div",{id:"page-room",children:[Object(g.jsx)("header",{children:Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("img",{src:f,alt:"Letmeask"}),Object(g.jsxs)("div",{children:[Object(g.jsx)(S,{code:t.id}),Object(g.jsx)(w,{isOutlined:!0,onClick:function(){return c.apply(this,arguments)},children:"Encerrar sala"})]})]})}),Object(g.jsxs)("main",{children:[Object(g.jsxs)("div",{className:"room-title",children:[Object(g.jsxs)("h1",{children:["Sala ",a]}),s.length>0&&Object(g.jsxs)("span",{children:[s.length," pergunta(s)"]})]}),Object(g.jsx)("div",{className:"question-list",children:s.map((function(e){return Object(g.jsxs)(M,{content:e.content,author:e.author,isAnswered:e.isAnswered,isHighlighted:e.isHighLighted,children:[!e.isAnswered&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("button",{type:"button",onClick:function(){return function(e){return u.apply(this,arguments)}(e.id)},children:Object(g.jsx)("img",{src:B,alt:"Marcar pergunta como respondida"})}),Object(g.jsx)("button",{type:"button",onClick:function(){return function(e){return j.apply(this,arguments)}(e.id)},children:Object(g.jsx)("img",{src:z,alt:"Dar destaque a pergunta"})})]}),Object(g.jsx)("button",{type:"button",onClick:function(){return function(e){return i.apply(this,arguments)}(e.id)},children:Object(g.jsx)("img",{src:R,alt:"Remover pergunta"})})]},e.id)}))})]})]})}var T=function(){return Object(g.jsx)(i.a,{children:Object(g.jsx)(q,{children:Object(g.jsxs)(o.c,{children:[Object(g.jsx)(o.a,{path:"/",exact:!0,component:N}),Object(g.jsx)(o.a,{path:"/rooms/new",component:I}),Object(g.jsx)(o.a,{path:"/rooms/:id",component:G}),Object(g.jsx)(o.a,{path:"/admin/rooms/:id",component:P})]})})})};n(58);c.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(T,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.e34997c5.chunk.js.map