(this["webpackJsonpnicolaigram.github.io"]=this["webpackJsonpnicolaigram.github.io"]||[]).push([[0],{24:function(n,e,t){n.exports=t(35)},29:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(18),l=t.n(o);t(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=t(5),u=t(6);function c(){var n=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return c=function(){return n},n}function m(n){var e=n.name,t=n.amount,a=n.rule,o="/boardgames/dice/"+e;return r.a.createElement(p,null,Array(t).fill(0).map((function(n,t){return r.a.createElement("img",{src:o,alt:e,style:{marginRight:"10px"},height:50,width:50})})),r.a.createElement("p",null,a))}var p=u.a.div(c());function g(){var n=Object(i.a)(["\n  display: flex;\n  div {\n    margin-right: 10px;\n  }\n"]);return g=function(){return n},n}function s(){var n=Object(i.a)(["\n  padding: 25px;\n  background: rgba(255, 255, 255, 0.8);\n  margin: 0 50px;\n  margin-top: 50px;\n"]);return s=function(){return n},n}function d(){var n=Object(i.a)(['\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n\n  &::before {\n    background-image: url("/boardgames/bg.png");\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    content: "";\n    position: absolute;\n    z-index: -1;\n    filter: brightness(50%);\n  }\n']);return d=function(){return n},n}function h(){return r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(v,null,r.a.createElement(m,{name:"01_heart.png",amount:1,rule:"Heal x"}),r.a.createElement(m,{name:"01_heart.png",amount:3,rule:"Take power-up card"})),r.a.createElement(m,{name:"02_destroy.png",amount:1,rule:"Damage x to buildings or units"}),r.a.createElement(m,{name:"03_energy.png",amount:1,rule:"Take x energy"}),r.a.createElement(m,{name:"04_skull.png",amount:1,rule:"Units in your borough you damage you"}),r.a.createElement(m,{name:"04_skull.png",amount:2,rule:"+ other monsters in your borough"}),r.a.createElement(m,{name:"04_skull.png",amount:3,rule:"All units damage all monsters + take the Statue of Liberty"}),r.a.createElement(v,null,r.a.createElement(m,{name:"05_claw.png",amount:1,rule:"Do x damage"}),r.a.createElement(m,{name:"05_claw.png",amount:4,rule:"Berserk (if using expansion)"})),r.a.createElement(v,null,r.a.createElement(m,{name:"06_star.png",amount:1,rule:"Nothing*"}),r.a.createElement(m,{name:"06_star.png",amount:3,rule:"Take Superstar card"})),r.a.createElement("div",null,r.a.createElement("p",null,"*If you have the Superstar card; x victory points"))))}var f=u.a.div(d()),b=u.a.div(s()),v=u.a.div(g()),E=t(10),x=t(1);function k(){var n=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 100px;\n  min-height: 100vh;\n  a {\n    --link-color: rgb(255, 255, 255);\n    --link-color-hover: rgb(150, 150, 150);\n    --link-border-color: #333;\n    --link-text-color: black;\n    padding: 12px;\n    border-radius: 8px;\n    font-size: 32px;\n    background-color: var(--link-color);\n    border: 1px solid var(--link-border-color);\n    color: var(--link-text-color);\n    text-decoration: none;\n    margin-bottom: 16px;\n    &:hover {\n      background-color: var(--link-color-hover);\n    }\n  }\n"]);return k=function(){return n},n}function y(){return r.a.createElement(w,null,r.a.createElement(E.b,{to:"/king-of-new-york"},"King of New York"),r.a.createElement(E.b,{to:"/star-realms"},"Star Realms"))}var w=u.a.div(k()),j=t(22),O=t(23);function _(){var n=Object(i.a)(["\n  border: 1px solid black;\n  padding: 20px;\n  font-size: 24px;\n  background-color: ",";\n  &:not(:first-of-type) {\n    margin-left: 20px;\n  }\n  button {\n    height: 80px;\n    width: 100px;\n    font-size: 24px;\n  }\n"]);return _=function(){return n},n}function S(){var n=Object(i.a)(["\n  display: flex;\n"]);return S=function(){return n},n}function z(){var n=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 80px;\n"]);return z=function(){return n},n}function B(){var n=Object(a.useState)([{hp:50},{hp:50},{hp:50},{hp:50}]),e=Object(O.a)(n,2),t=e[0],o=e[1],l=function(n,e){var a=Object(j.a)(t);a[n].hp=a[n].hp+e,o(a)};return r.a.createElement(T,null,r.a.createElement(A,null,t.map((function(n,e){return r.a.createElement(C,{hp:n.hp},r.a.createElement("p",null,"Player "+(e+1)),r.a.createElement("p",null,"HP "+n.hp),r.a.createElement("button",{onClick:function(){return l(e,1)}},"+1"),r.a.createElement("button",{onClick:function(){return l(e,-1)}},"-1"))}))))}var T=u.a.div(z()),A=u.a.div(S()),C=u.a.div(_(),(function(n){return(e=n.hp)<10?"red":e<25?"yellow":"green";var e}));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(E.a,null,r.a.createElement(x.c,null,r.a.createElement(x.a,{path:"/star-realms"},r.a.createElement(B,null)),r.a.createElement(x.a,{path:"/king-of-new-york"},r.a.createElement(h,null)),r.a.createElement(x.a,{path:"/"},r.a.createElement(y,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.0409cad7.chunk.js.map