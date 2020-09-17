(this["webpackJsonpnicolaigram.github.io"]=this["webpackJsonpnicolaigram.github.io"]||[]).push([[0],{24:function(n,e,t){n.exports=t(35)},29:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(20),l=t.n(o);t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(2),c=t(3);function u(){var n=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return u=function(){return n},n}function m(n){var e=n.name,t=n.amount,a=n.rule,o="/boardgames/dice/"+e;return r.a.createElement(d,null,Array(t).fill(0).map((function(n,t){return r.a.createElement("img",{src:o,alt:e,style:{marginRight:"10px"},height:50,width:50})})),r.a.createElement("p",null,a))}var d=c.a.div(u());function p(){var n=Object(i.a)(["\n  display: flex;\n  div {\n    margin-right: 10px;\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(i.a)(["\n  padding: 25px;\n  background: rgba(255, 255, 255, 0.8);\n  margin: 0 50px;\n  margin-top: 50px;\n  border-radius: 20px;\n"]);return s=function(){return n},n}function g(){var n=Object(i.a)(['\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n\n  &::before {\n    background-image: url("/boardgames/bg.png");\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    content: "";\n    position: absolute;\n    z-index: -1;\n    filter: brightness(50%);\n  }\n']);return g=function(){return n},n}function b(){return r.a.createElement(f,null,r.a.createElement(h,null,r.a.createElement(v,null,r.a.createElement(m,{name:"01_heart.png",amount:1,rule:"Heal x"}),r.a.createElement(m,{name:"01_heart.png",amount:3,rule:"Take power-up card"})),r.a.createElement(m,{name:"02_destroy.png",amount:1,rule:"Damage x to buildings or units"}),r.a.createElement(m,{name:"03_energy.png",amount:1,rule:"Take x energy"}),r.a.createElement(m,{name:"04_skull.png",amount:1,rule:"Units in your borough you damage you"}),r.a.createElement(m,{name:"04_skull.png",amount:2,rule:"+ other monsters in your borough"}),r.a.createElement(m,{name:"04_skull.png",amount:3,rule:"All units damage all monsters + take the Statue of Liberty"}),r.a.createElement(v,null,r.a.createElement(m,{name:"05_claw.png",amount:1,rule:"Do x damage"}),r.a.createElement(m,{name:"05_claw.png",amount:4,rule:"Berserk (if using expansion)"})),r.a.createElement(v,null,r.a.createElement(m,{name:"06_star.png",amount:1,rule:"Nothing*"}),r.a.createElement(m,{name:"06_star.png",amount:3,rule:"Take Superstar card"})),r.a.createElement("div",null,r.a.createElement("p",null,"*If you have the Superstar card; x victory points"))))}var f=c.a.div(g()),h=c.a.div(s()),v=c.a.div(p()),x=t(10),E=t(1);function k(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 100px;\n  min-height: 100vh;\n  a {\n    --link-color: rgb(255, 255, 255);\n    --link-color-hover: rgb(150, 150, 150);\n    --link-border-color: #333;\n    --link-text-color: black;\n    padding: 12px;\n    border-radius: 8px;\n    font-size: 32px;\n    background-color: var(--link-color);\n    border: 1px solid var(--link-border-color);\n    color: var(--link-text-color);\n    text-decoration: none;\n    margin-bottom: 16px;\n    &:hover {\n      background-color: var(--link-color-hover);\n    }\n  }\n"]);return k=function(){return n},n}function y(){return r.a.createElement(w,null,r.a.createElement(x.b,{to:"/boardgames/king-of-new-york"},"King of New York"),r.a.createElement(x.b,{to:"/boardgames/star-realms"},"Star Realms"),r.a.createElement(x.b,{to:"/boardgames/munchkin"},"Munchkin"))}var w=c.a.div(k()),j=t(14),O=t(9);function C(){var n=Object(i.a)(["\n  position: fixed;\n  background: rgba(255, 255, 255, 0.9);\n  height: 90vh;\n  width: 80vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 30px;\n  button {\n    height: 80px;\n    width: 100px;\n    &:not(:last-of-type) {\n      margin-right: 20px;\n    }\n  }\n"]);return C=function(){return n},n}function _(n){var e=n.display,t=n.setPlayerCount;return e?r.a.createElement(S,null,r.a.createElement("p",null,"How many players?"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return t(2)}},"2"),r.a.createElement("button",{onClick:function(){return t(3)}},"3"),r.a.createElement("button",{onClick:function(){return t(4)}},"4"))):null}var S=c.a.div(C());function z(){var n=Object(i.a)(['\n  height: 60px;\n  width: calc(100% + 32px);\n  background: black;\n  margin-left: -16px;\n  margin-top: -16px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    position: absolute;\n    color: white;\n  }\n  &::after {\n    content: "";\n    background: ',";\n    display: block;\n    height: 100%;\n    width: ",";\n  }\n"]);return z=function(){return n},n}function A(){var n=Object(i.a)(["\n  border: 1px solid black;\n  overflow: hidden;\n  padding: 16px;\n  font-size: 30px;\n  background-color: #eee;\n  margin-bottom: 20px;\n  opacity: 0.9;\n  border-radius: 20px;\n  border: 10px solid #333;\n  p {\n    margin: 0 0 10px;\n  }\n  button {\n    height: 80px;\n    width: 100px;\n    font-size: 24px;\n    border: 0;\n    background-color: #ccc;\n    &:not(:last-of-type) {\n      margin-right: 10px;\n    }\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return B=function(){return n},n}function D(){var n=Object(i.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n  min-height: 100vh;\n  background: url("/boardgames/star-realms/star-wars-backgrounds-14.jpg");\n  animation: 10s bg alternate infinite;\n  background-position: center;\n  @keyframes bg {\n    0% {\n      background-size: 100%;\n    }\n    100% {\n      background-size: 120%;\n    }\n  }\n']);return D=function(){return n},n}function N(){var n=Object(a.useState)(50),e=Object(O.a)(n,2),t=e[0],o=(e[1],Object(a.useState)([])),l=Object(O.a)(o,2),i=l[0],c=l[1],u=Object(a.useState)("player-count"),m=Object(O.a)(u,2),d=m[0],p=m[1],s=new Audio("/boardgames/star-realms/laser_shot.mp3"),g=function(n,e){e<0&&s.play();var t=Object(j.a)(i),a=t[n].hp+e;a<0&&(a=0),t[n].hp=a,c(t)};return r.a.createElement(T,null,"player-count"!==d&&r.a.createElement("button",{onClick:function(){c([]),p("player-count")},style:{marginBottom:"20px"}},"Reset game"),r.a.createElement(R,null,i.map((function(n,e){return r.a.createElement(F,null,r.a.createElement(H,{percentage:n.hp/t*100},r.a.createElement("span",null,n.hp)),r.a.createElement("div",{style:{paddingTop:"16px"}},r.a.createElement("button",{onClick:function(){return g(e,-5)}},"-5"),r.a.createElement("button",{onClick:function(){return g(e,-1)}},"-1"),r.a.createElement("button",{onClick:function(){return g(e,1)}},"+1"),r.a.createElement("button",{onClick:function(){return g(e,5)}},"+5")))}))),r.a.createElement(_,{display:"player-count"===d,setPlayerCount:function(n){for(var e=[],a=0;a<n;a++)e.push({hp:t});c(e),p("")}}))}var T=c.a.div(D()),R=c.a.div(B()),F=c.a.div(A()),H=c.a.div(z(),(function(n){return(e=n.percentage)<=0?"#333":e<=25?"#B81D13":e<=50?"#EFB700":"#008450";var e}),(function(n){return n.percentage+"%"}));function I(){var n=Object(i.a)(["\n  padding: 20px;\n  border: 1px solid black;\n  border-radius: 6px;\n  box-shadow: 0px 3px 3px #ccc;\n  margin-right: 20px;\n  width: 200px;\n  background-color: #fff2e6;\n  .player-img-container {\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    border-radius: 10px;\n    background-color: ",";\n  }\n  .player-img {\n    height: 100px;\n  }\n  .stats {\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      div {\n        &:first-of-type {\n          padding-top: 4px;\n        }\n        padding-bottom: 4px;\n      }\n      button {\n        height: 40px;\n        width: 40px;\n        font-size: 20px;\n      }\n    }\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(i.a)([""]);return J=function(){return n},n}function L(){var n=Object(i.a)(["\n  display: flex;\n  padding: 20px;\n  min-height: 100vh;\n  background-color: #ffe5cc;\n"]);return L=function(){return n},n}function M(){var n=Object(a.useState)(50),e=Object(O.a)(n,2),t=(e[0],e[1],["#915A9A","#F2CA4C","#CD2026","#369541","#596DAD"]),o=function(n,e,t){var a=Object(j.a)(c);a[n][e]=t,u(a)},l=Object(a.useState)([{name:"",level:0,strength:0,gender:"male"}]),i=Object(O.a)(l,2),c=i[0],u=i[1];return r.a.createElement(P,null,r.a.createElement(U,null,c.map((function(n,e){return r.a.createElement(W,{color:t[e]},r.a.createElement("p",null,n.name||"Unnamed"),r.a.createElement("div",{className:"player-img-container"},r.a.createElement("img",{className:"player-img",src:"/boardgames/munchkin/"+n.gender+".png",alt:"munchkin-"+n.gender})),r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(e,"level",n.level+1)}},"\u2191"),r.a.createElement("div",null,n.level),r.a.createElement("div",null,"Level"),r.a.createElement("button",{onClick:function(){return o(e,"level",n.level-1)}},"\u2193")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(e,"strength",n.strength+1)}},"\u2191"),r.a.createElement("div",null,n.strength),r.a.createElement("div",null,"Strength"),r.a.createElement("button",{onClick:function(){return o(e,"strength",n.strength-1)}},"\u2193"))))}))))}var P=c.a.div(L()),U=c.a.div(J()),W=c.a.div(I(),(function(n){return n.color}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{path:"/boardgames/munchkin"},r.a.createElement(M,null)),r.a.createElement(E.a,{path:"/boardgames/star-realms"},r.a.createElement(N,null)),r.a.createElement(E.a,{path:"/boardgames/king-of-new-york"},r.a.createElement(b,null)),r.a.createElement(E.a,{path:"/boardgames/"},r.a.createElement(y,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2f20dfe1.chunk.js.map