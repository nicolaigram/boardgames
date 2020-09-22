(this["webpackJsonpnicolaigram.github.io"]=this["webpackJsonpnicolaigram.github.io"]||[]).push([[0],{24:function(e,n,a){e.exports=a(35)},29:function(e,n,a){},35:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(20),l=a.n(o);a(29),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(1),d=a(2);function c(){var e=Object(i.a)(["\n  display: flex;\n  margin-bottom: 20px;\n"]);return c=function(){return e},e}function u(e){var n=e.name,a=e.amount,t=e.rule,o="/boardgames/dice/"+n;return r.a.createElement(S,null,Array(a).fill(0).map((function(e,a){return r.a.createElement("img",{src:o,alt:n,style:{marginRight:"10px"},height:50,width:50})})),r.a.createElement("p",null,t))}var S=d.a.div(c());function s(){var e=Object(i.a)(["\n  display: flex;\n  div {\n    margin-right: 10px;\n  }\n"]);return s=function(){return e},e}function m(){var e=Object(i.a)(["\n  padding: 25px;\n  background: rgba(255, 255, 255, 0.8);\n  margin: 0 50px;\n  margin-top: 50px;\n  border-radius: 20px;\n"]);return m=function(){return e},e}function g(){var e=Object(i.a)(['\n  height: 100vh;\n  width: 100vw;\n  overflow: auto;\n\n  &::before {\n    background-image: url("/boardgames/bg.png");\n    background-position: center;\n    background-size: cover;\n    width: 100%;\n    height: 100%;\n    content: "";\n    position: absolute;\n    z-index: -1;\n    filter: brightness(50%);\n  }\n']);return g=function(){return e},e}function p(){return r.a.createElement(E,null,r.a.createElement(Y,null,r.a.createElement(b,null,r.a.createElement(u,{name:"01_heart.png",amount:1,rule:"Heal x"}),r.a.createElement(u,{name:"01_heart.png",amount:3,rule:"Take power-up card"})),r.a.createElement(u,{name:"02_destroy.png",amount:1,rule:"Damage x to buildings or units"}),r.a.createElement(u,{name:"03_energy.png",amount:1,rule:"Take x energy"}),r.a.createElement(u,{name:"04_skull.png",amount:1,rule:"Units in your borough you damage you"}),r.a.createElement(u,{name:"04_skull.png",amount:2,rule:"+ other monsters in your borough"}),r.a.createElement(u,{name:"04_skull.png",amount:3,rule:"All units damage all monsters + take the Statue of Liberty"}),r.a.createElement(b,null,r.a.createElement(u,{name:"05_claw.png",amount:1,rule:"Do x damage"}),r.a.createElement(u,{name:"05_claw.png",amount:4,rule:"Berserk (if using expansion)"})),r.a.createElement(b,null,r.a.createElement(u,{name:"06_star.png",amount:1,rule:"Nothing*"}),r.a.createElement(u,{name:"06_star.png",amount:3,rule:"Take Superstar card"})),r.a.createElement("div",null,r.a.createElement("p",null,"*If you have the Superstar card; x victory points"))))}var E=d.a.div(g()),Y=d.a.div(m()),b=d.a.div(s()),h=a(9),A=a(3);function f(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 100px;\n  min-height: 100vh;\n  a {\n    --link-color: rgb(255, 255, 255);\n    --link-color-hover: rgb(150, 150, 150);\n    --link-border-color: #333;\n    --link-text-color: black;\n    padding: 12px;\n    border-radius: 8px;\n    font-size: 32px;\n    background-color: var(--link-color);\n    border: 1px solid var(--link-border-color);\n    color: var(--link-text-color);\n    text-decoration: none;\n    margin-bottom: 16px;\n    &:hover {\n      background-color: var(--link-color-hover);\n    }\n  }\n"]);return f=function(){return e},e}function N(){return r.a.createElement(B,null,r.a.createElement(h.b,{to:"/boardgames/king-of-new-york"},"King of New York"),r.a.createElement(h.b,{to:"/boardgames/star-realms"},"Star Realms"),r.a.createElement(h.b,{to:"/boardgames/munchkin"},"Munchkin"),r.a.createElement(h.b,{to:"/boardgames/codenames-duet"},"Codenames Duet"),r.a.createElement(h.b,{to:"/boardgames/codenames-duet/keycard"},"Codenames Duet - KeyCard"))}var B=d.a.div(f()),T=a(11),D=a(5);function k(){var e=Object(i.a)(["\n  position: fixed;\n  background: rgba(255, 255, 255, 0.9);\n  height: 90vh;\n  width: 80vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  font-size: 30px;\n  button {\n    height: 80px;\n    width: 100px;\n    &:not(:last-of-type) {\n      margin-right: 20px;\n    }\n  }\n"]);return k=function(){return e},e}function v(e){var n=e.display,a=e.setPlayerCount;return n?r.a.createElement(R,null,r.a.createElement("p",null,"How many players?"),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return a(2)}},"2"),r.a.createElement("button",{onClick:function(){return a(3)}},"3"),r.a.createElement("button",{onClick:function(){return a(4)}},"4"))):null}var R=d.a.div(k());function y(){var e=Object(i.a)(['\n  height: 60px;\n  width: calc(100% + 32px);\n  background: black;\n  margin-left: -16px;\n  margin-top: -16px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  span {\n    position: absolute;\n    color: white;\n  }\n  &::after {\n    content: "";\n    background: ',";\n    display: block;\n    height: 100%;\n    width: ",";\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(i.a)(["\n  border: 1px solid black;\n  overflow: hidden;\n  padding: 16px;\n  font-size: 30px;\n  background-color: #eee;\n  margin-bottom: 20px;\n  opacity: 0.9;\n  border-radius: 20px;\n  border: 10px solid #333;\n  p {\n    margin: 0 0 10px;\n  }\n  button {\n    height: 80px;\n    width: 100px;\n    font-size: 24px;\n    border: 0;\n    background-color: #ccc;\n    &:not(:last-of-type) {\n      margin-right: 10px;\n    }\n  }\n"]);return x=function(){return e},e}function P(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return P=function(){return e},e}function w(){var e=Object(i.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 20px;\n  min-height: 100vh;\n  background: url("/boardgames/star-realms/star-wars-backgrounds-14.jpg");\n  animation: 10s bg alternate infinite;\n  background-position: center;\n  @keyframes bg {\n    0% {\n      background-size: 100%;\n    }\n    100% {\n      background-size: 120%;\n    }\n  }\n']);return w=function(){return e},e}function C(){var e=Object(t.useState)(50),n=Object(D.a)(e,2),a=n[0],o=(n[1],Object(t.useState)([])),l=Object(D.a)(o,2),i=l[0],d=l[1],c=Object(t.useState)("player-count"),u=Object(D.a)(c,2),S=u[0],s=u[1],m=new Audio("/boardgames/star-realms/laser_shot.mp3"),g=function(e,n){n<0&&m.play();var a=Object(T.a)(i),t=a[e].hp+n;t<0&&(t=0),a[e].hp=t,d(a)};return r.a.createElement(j,null,"player-count"!==S&&r.a.createElement("button",{onClick:function(){d([]),s("player-count")},style:{marginBottom:"20px"}},"Reset game"),r.a.createElement(M,null,i.map((function(e,n){return r.a.createElement(O,null,r.a.createElement(I,{percentage:e.hp/a*100},r.a.createElement("span",null,e.hp)),r.a.createElement("div",{style:{paddingTop:"16px"}},r.a.createElement("button",{onClick:function(){return g(n,-5)}},"-5"),r.a.createElement("button",{onClick:function(){return g(n,-1)}},"-1"),r.a.createElement("button",{onClick:function(){return g(n,1)}},"+1"),r.a.createElement("button",{onClick:function(){return g(n,5)}},"+5")))}))),r.a.createElement(v,{display:"player-count"===S,setPlayerCount:function(e){for(var n=[],t=0;t<e;t++)n.push({hp:a});d(n),s("")}}))}var j=d.a.div(w()),M=d.a.div(P()),O=d.a.div(x()),I=d.a.div(y(),(function(e){return(n=e.percentage)<=0?"#333":n<=25?"#B81D13":n<=50?"#EFB700":"#008450";var n}),(function(e){return e.percentage+"%"}));function z(){var e=Object(i.a)(["\n  padding: 20px;\n  border: 1px solid black;\n  border-radius: 6px;\n  box-shadow: 0px 3px 3px #ccc;\n  margin-right: 20px;\n  width: 200px;\n  background-color: #fff2e6;\n  .player-img-container {\n    padding: 8px;\n    display: flex;\n    justify-content: center;\n    border-radius: 10px;\n    background-color: ",";\n  }\n  .player-img {\n    height: 100px;\n  }\n  .player-name {\n    width: 100%;\n  }\n  .stats {\n    margin-top: 10px;\n    display: flex;\n    justify-content: space-between;\n    div {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      div {\n        &:first-of-type {\n          padding-top: 4px;\n        }\n        padding-bottom: 4px;\n      }\n      button {\n        height: 40px;\n        width: 40px;\n        font-size: 20px;\n      }\n    }\n  }\n"]);return z=function(){return e},e}function K(){var e=Object(i.a)([""]);return K=function(){return e},e}function G(){var e=Object(i.a)(['\n  @import url("https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@200;400&display=swap");\n  display: flex;\n  padding: 20px;\n  min-height: 100vh;\n  background-color: #ffe5cc;\n  * {\n    font-family: "Grenze Gotisch", cursive;\n    font-size: 22px;\n  }\n']);return G=function(){return e},e}function F(){var e=Object(t.useState)(50),n=Object(D.a)(e,2),a=(n[0],n[1],["#915A9A","#F2CA4C","#CD2026","#369541","#596DAD"]),o=function(e,n,a){var t=Object(T.a)(d);t[e][n]=a,c(t)},l=Object(t.useState)([{name:"",editingName:!0,level:0,strength:0,gender:"male"}]),i=Object(D.a)(l,2),d=i[0],c=i[1];return r.a.createElement(L,null,r.a.createElement(W,null,d.map((function(e,n){return r.a.createElement(_,{color:a[n]},e.editingName?r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{value:e.name,placeholder:"Enter name",className:"player-name",onChange:function(e){return o(n,"name",e.target.value)}}),r.a.createElement("button",{onClick:function(){return o(n,"editingName",!1)}},"Confirm")):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("span",null,e.name||"Unnamed")),r.a.createElement("button",{onClick:function(){return o(n,"editingName",!0)}},"Edit name")),r.a.createElement("div",{className:"player-img-container"},r.a.createElement("img",{className:"player-img",src:"/boardgames/munchkin/"+e.gender+".png",alt:"munchkin-"+e.gender})),r.a.createElement("div",{className:"stats"},r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(n,"level",e.level+1)}},"\u2191"),r.a.createElement("div",null,e.level),r.a.createElement("div",null,"Level"),r.a.createElement("button",{onClick:function(){return o(n,"level",e.level-1)}},"\u2193")),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return o(n,"strength",e.strength+1)}},"\u2191"),r.a.createElement("div",null,e.strength),r.a.createElement("div",null,"Strength"),r.a.createElement("button",{onClick:function(){return o(n,"strength",e.strength-1)}},"\u2193"))))}))))}var H,L=d.a.div(G()),W=d.a.div(K()),_=d.a.div(z(),(function(e){return e.color})),V=[{en:"Christmas",da:"Jul"},{en:"Steam",da:"Damp"},{en:"Ear",da:"\xd8re"},{en:"Ant",da:"Myre"},{en:"Bacon",da:"Bacon"},{en:"Sherwood",da:"Birketr\xe6"},{en:"Shell",da:"Muslingeskal"},{en:"Cave",da:"Grotte"},{en:"Big Ben",da:"Big Ben"},{en:"Boss",da:"Boss"},{en:"Scroll",da:"Rulle"},{en:"Valentine",da:"Valentin"},{en:"Wonderland",da:"Wonderland"},{en:"Ink",da:"Bl\xe6k"},{en:"Anchor",da:"Anker"},{en:"Beer",da:"\xd8l"},{en:"Step",da:"Trin"},{en:"Mother",da:"Mor"},{en:"Flood",da:"Oversv\xf8mmelse"},{en:"Salt",da:"Salt"},{en:"Boil",da:"At koge"},{en:"Country",da:"Land"},{en:"Sweat",da:"Sved"},{en:"Dust",da:"St\xf8v"},{en:"Hercules",da:"Herkules"},{en:"Sled",da:"K\xe6lk"},{en:"Musketeer",da:"Musketer"},{en:"Paddle",da:"Paddel"},{en:"Genie",da:"\xc5nd"},{en:"Virus",da:"Virus"},{en:"Curry",da:"Karry"},{en:"Texas",da:"Texas"},{en:"Mill",da:"M\xf8lle"},{en:"University",da:"Universitet"},{en:"Ladder",da:"Stige"},{en:"Battle",da:"Kamp"},{en:"Meter",da:"Meter"},{en:"Spurs",da:"Sporer"},{en:"Minute",da:"Minut"},{en:"Gear",da:"Gear"},{en:"Cane",da:"Sukkerr\xf8r"},{en:"Coach",da:"Tr\xe6ner"},{en:"Farm",da:"G\xe5rd"},{en:"King Arthur",da:"Kong Arthur"},{en:"Potter",da:"Pottemager"},{en:"Cone",da:"Kegle"},{en:"Stethoscope",da:"Stetoskop"},{en:"Lightning",da:"Lyn"},{en:"Onion",da:"L\xf8g"},{en:"Rice",da:"Ris"},{en:"Dressing",da:"Dressing"},{en:"Stamp",da:"Frim\xe6rke"},{en:"Collar",da:"Krave"},{en:"Baby",da:"Baby"},{en:"Squash",da:"Squash"},{en:"Scratch",da:"Kradse"},{en:"Potato",da:"Kartoffel"},{en:"Bee",da:"Bi"},{en:"Moses",da:"Moses"},{en:"Sticker",da:"Klisterm\xe6rke"},{en:"Santa",da:"Julemanden"},{en:"Leather",da:"L\xe6der"},{en:"Marathon",da:"Maraton"},{en:"Oasis",da:"Oase"},{en:"Door",da:"D\xf8r"},{en:"Bench",da:"B\xe6nk"},{en:"Polo",da:"Polo"},{en:"Volcano",da:"Vulkan"},{en:"Nerve",da:"Nerve"},{en:"Saddle",da:"Saddel"},{en:"Magician",da:"Tryllekunstner"},{en:"Glacier",da:"Glacier"},{en:"Coffee",da:"Kaffe"},{en:"Castle",da:"Borg"},{en:"Sail",da:"Sejl"},{en:"Leaf",da:"Blad"},{en:"Hair",da:"H\xe5r"},{en:"Ash",da:"Aske"},{en:"Foam",da:"Skum"},{en:"Bath",da:"Bad"},{en:"Sleep",da:"S\xf8vn"},{en:"Crystal",da:"Krystal"},{en:"Coast",da:"Kyst"},{en:"Kitchen",da:"K\xf8kken"},{en:"Salsa",da:"Salsa"},{en:"Medic",da:"Milit\xe6rl\xe6ge"},{en:"Mud",da:"Mudder"},{en:"Pepper",da:"Peber"},{en:"Captain",da:"Kaptajn"},{en:"Brother",da:"Bror"},{en:"Chip",da:"Computerchip"},{en:"Golf",da:"Golf"},{en:"Blade",da:"Klinge"},{en:"Paint",da:"Maling"},{en:"Silk",da:"Silke"},{en:"Halloween",da:"Halloween"},{en:"Pillow",da:"Pude"},{en:"Blind",da:"Blind"},{en:"Egg",da:"\xc6g"},{en:"Brazil",da:"Brasilien"},{en:"Groom",da:"Brudgom"},{en:"Clock",da:"Ur"},{en:"Wing",da:"Vinge"},{en:"Sand",da:"Sand"},{en:"Sahara",da:"Sahara"},{en:"Ram",da:"V\xe6dder"},{en:"Rip",da:"Fl\xe5"},{en:"Tattoo",da:"Tattoo"},{en:"Street",da:"Gade"},{en:"Ranch",da:"Ranch"},{en:"Storm",da:"Storm"},{en:"Fuel",da:"Br\xe6ndstof"},{en:"Easter",da:"P\xe5ske"},{en:"Blues",da:"Blues"},{en:"Mona Lisa",da:"Mona Lisa"},{en:"Crab",da:"Crab"},{en:"Troll",da:"Trold"},{en:"Spray",da:"Spray"},{en:"Battleship",da:"Krigsskib"},{en:"Armor",da:"Rustning"},{en:"Notre Dame",da:"Notre Dame"},{en:"Jockey",da:"Jockey"},{en:"Waitress",da:"Tjenerinde"},{en:"Mountie",da:"Livgarder"},{en:"Sheet",da:"Lagen"},{en:"Soap",da:"S\xe6be"},{en:"Tiger",da:"Tiger"},{en:"Computer",da:"Computer"},{en:"Window",da:"Vindue"},{en:"Mummy",da:"Mumie"},{en:"Bread",da:"Br\xf8d"},{en:"Drawing",da:"Tegning"},{en:"Einstein",da:"Einstein"},{en:"Cheese",da:"Ost"},{en:"Thunder",da:"Torden"},{en:"Trick",da:"Trick"},{en:"Bowl",da:"Sk\xe5l"},{en:"Brass",da:"Messing"},{en:"Pea",da:"\xc6rt"},{en:"Pig",da:"Gris"},{en:"Miss",da:"Frue"},{en:"Greenhouse",da:"Drivhus"},{en:"Tip",da:"Drikkepenge"},{en:"Wood",da:"T\xf8mmer"},{en:"Story",da:"Historie"},{en:"Wheel",da:"Hjul"},{en:"Sword",da:"Sv\xe6rd"},{en:"Apron",da:"Forkl\xe6de"},{en:"Stable",da:"Stald"},{en:"Pacific",da:"Stillehavet"},{en:"Penny",da:"\xd8re (kr.)"},{en:"Black Hole",da:"Sort hul"},{en:"Jumper",da:"Springer"},{en:"Whistle",da:"Fl\xf8jte"},{en:"Fog",da:"T\xe5ge"},{en:"Wish",da:"\xd8nske"},{en:"Earth",da:"Jorden"},{en:"Sun",da:"Sol"},{en:"Tin",da:"Tin"},{en:"Powder",da:"Pulver"},{en:"Popcorn",da:"Popcorn"},{en:"Eden",da:"Paradis"},{en:"Slipper",da:"T\xf8ffel"},{en:"Columbus",da:"Columbus"},{en:"Pen",da:"Kuglepen"},{en:"Minotaur",da:"Minotaur"},{en:"Ski",da:"Ski"},{en:"Cuckoo",da:"G\xf8g"},{en:"Blizzard",da:"Snestorm"},{en:"Caesar",da:"C\xe6sar"},{en:"Cake",da:"Kage"},{en:"Frog",da:"Fr\xf8"},{en:"Sugar",da:"Sukker"},{en:"Cloud",da:"Sky"},{en:"Mosquito",da:"Myg"},{en:"Chalk",da:"Kalk"},{en:"Spirit",da:"\xc5nd"},{en:"Shoulder",da:"Skulder"},{en:"Bowler",da:"Bowlerhat"},{en:"Drum",da:"Tromme"},{en:"Buttefly",da:"Sommerfugl"},{en:"Sphinx",da:"Sphinx"},{en:"Manicure",da:"Manicure"},{en:"Patient",da:"Patient"},{en:"Astronaut",da:"Astranaut"},{en:"Igloo",da:"Iglo"},{en:"Balloon",da:"Ballon"},{en:"Snake",da:"Slange"},{en:"Hose",da:"Haveslange"},{en:"Beard",da:"Sk\xe6g"},{en:"Hamburger",da:"Burger"},{en:"Polish",da:"Polere"},{en:"Tea",da:"Te"},{en:"Makeup",da:"Makeup"},{en:"Delta",da:"Delta"},{en:"Werewolf",da:"Vareulv"},{en:"Pizza",da:"Pizza"},{en:"Dollar",da:"Dollar"},{en:"Book",da:"Bog"}];!function(e){e.default="default",e.guessedNorth="guessed north",e.guessedSouth="guessed south",e.bystanderNorth="bystander north",e.bystanderSouth="bystander south",e.bystanderBoth="bystander both"}(H||(H={}));var J=function(){var e=function(e){var n,a,t;for(t=e.length-1;t>0;t--)n=Math.floor(Math.random()*(t+1)),a=e[t],e[t]=e[n],e[n]=a;return e}([].concat(V));return new Array(25).fill({}).map((function(n,a){return{word:e[a].da,state:H.default}}))},U="radial-gradient(".concat("#e0dd56",", ").concat("#048403",", ").concat("#004119",")");function q(){var e=Object(i.a)(['\n  background: url("/boardgames/codenames-duet/wooden-table-bg.jpg");\n  background-position: center;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  padding: 20px;\n  .turn-counter {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    transform: rotateZ(-90deg);\n    background: rgba(255, 255, 255, 0.3);\n    padding: 8px;\n    width: 250px;\n    span {\n      font-size: 40px;\n      text-align: center;\n    }\n    .buttons {\n      display: flex;\n      justify-content: space-between;\n      margin-bottom: 10px;\n      button {\n        height: 80px;\n        width: 80px;\n        border-radius: 8px;\n        border: 0;\n        background: #111;\n        color: white;\n        font-size: 30px;\n      }\n    }\n  }\n  .board {\n    display: flex;\n    flex-wrap: wrap;\n    width: 800px;\n    height: 600px;\n    .word {\n      font-size: 22px;\n      font-weight: 400;\n      position: relative;\n      background: linear-gradient('," 50%, #fff 50%);\n      border: 1px solid black;\n      border-radius: 8px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-around;\n      align-items: center;\n      flex: 1 0 16%;\n      margin: 5px;\n      user-select: none;\n      span {\n        &.player-north {\n          transform: rotateZ(180deg);\n          font-style: italic;\n        }\n      }\n      &.guessed {\n        background: ",';\n      }\n      &.north::before,\n      &.south::before,\n      &.both::before {\n        position: absolute;\n        font-size: 28px;\n        font-weight: 500;\n      }\n      &.north::before {\n        content: "\u2191";\n      }\n      &.south::before {\n        content: "\u2193";\n      }\n      &.both::before {\n        content: "\u2191\u2193";\n      }\n    }\n  }\n']);return q=function(){return e},e}function Z(){var e=Object(t.useState)(J()),n=Object(D.a)(e,2),a=n[0],o=n[1],l=Object(t.useState)(8),i=Object(D.a)(l,2),d=i[0],c=i[1],u=function(e){var n=Object(T.a)(a);n[e].state=function(e){switch(e){case H.default:return H.guessedNorth;case H.guessedNorth:return H.guessedSouth;case H.guessedSouth:return H.bystanderNorth;case H.bystanderNorth:return H.bystanderSouth;case H.bystanderSouth:return H.bystanderBoth;case H.bystanderBoth:default:return H.default}}(n[e].state),o(n)};return r.a.createElement(Q,null,r.a.createElement("div",{className:"turn-counter"},r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{onClick:function(){return c(d+1)}},"\u2191"),r.a.createElement("button",{onClick:function(){return c(d-1)}},"\u2193")),r.a.createElement("span",null,"Turns left: ",d)),r.a.createElement("div",{className:"board"},a.map((function(e,n){return r.a.createElement("div",{className:"word "+e.state,onClick:function(){return u(n)}},r.a.createElement("span",{className:"player-north"},e.word),r.a.createElement("span",{className:"player-south"},e.word))}))))}var $,Q=d.a.div(q(),"#ede1c7",U);!function(e){e.BYSTANDER="bystander",e.ASSASSIN="assasin",e.SPY="spy"}($||($={}));var X={"1a":[$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.SPY],"1b":[$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.SPY,$.ASSASSIN],"2a":[$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.ASSASSIN],"2b":[$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.ASSASSIN,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.ASSASSIN,$.BYSTANDER],"3a":[$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.ASSASSIN,$.SPY,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.SPY],"3b":[$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.SPY,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.ASSASSIN,$.ASSASSIN,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER],"4a":[$.SPY,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.BYSTANDER,$.SPY,$.ASSASSIN,$.SPY,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER],"4b":[$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.SPY,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER],"5a":[$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.ASSASSIN,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.ASSASSIN,$.SPY,$.BYSTANDER,$.BYSTANDER,$.ASSASSIN,$.SPY,$.BYSTANDER,$.SPY,$.BYSTANDER,$.SPY],"5b":[$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.ASSASSIN,$.SPY,$.BYSTANDER,$.ASSASSIN,$.SPY,$.BYSTANDER,$.SPY,$.SPY,$.BYSTANDER,$.BYSTANDER,$.BYSTANDER,$.SPY,$.BYSTANDER,$.BYSTANDER,$.SPY,$.SPY,$.SPY,$.BYSTANDER,$.ASSASSIN,$.BYSTANDER]};function ee(){var e=Object(i.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  min-height: 100vh;\n  form {\n    input {\n      height: 40px;\n      margin-bottom: 20px;\n    }\n  }\n  .keys {\n    @media all and (orientation: landscape) {\n      width: 90vh;\n      height: 90vh;\n    }\n    @media all and (orientation: portrait) {\n      width: 90vw;\n      height: 90vw;\n    }\n\n    display: flex;\n    flex-wrap: wrap;\n    border: 1px solid black;\n    .key {\n      flex: 1 0 18%;\n      border: 1px solid black;\n      &.bystander {\n        background: ",";\n      }\n      &.assasin {\n        background: black;\n      }\n      &.spy {\n        background: ",";\n      }\n    }\n  }\n"]);return ee=function(){return e},e}function ne(){var e=Object(t.useState)([]),n=Object(D.a)(e,2),a=n[0],o=n[1],l=Object(t.useState)(""),i=Object(D.a)(l,2),d=i[0],c=i[1];return r.a.createElement(ae,null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n=function(e){var n=Array.from(e),a="",t="";n.forEach((function(e){isNaN(e)?t=e:a+=String(e)}));var r=Number(a)%3+1,o=t.charCodeAt(0)%2===0?"a":"b",l=String(r)+o;return X[l]}(d);n&&(o(n),c(""))}},r.a.createElement("input",{type:"text",name:"gameId",placeholder:"Game ID",value:d,onChange:function(e){return c(e.target.value)}}),r.a.createElement("input",{type:"submit",value:"Select"})),r.a.createElement("div",{className:"keys"},a.map((function(e){return r.a.createElement("div",{className:"key "+e})}))))}var ae=d.a.div(ee(),"#ede1c7",U);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,null,r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/boardgames/codenames-duet/keycard"},r.a.createElement(ne,null)),r.a.createElement(A.a,{path:"/boardgames/codenames-duet"},r.a.createElement(Z,null)),r.a.createElement(A.a,{path:"/boardgames/munchkin"},r.a.createElement(F,null)),r.a.createElement(A.a,{path:"/boardgames/star-realms"},r.a.createElement(C,null)),r.a.createElement(A.a,{path:"/boardgames/king-of-new-york"},r.a.createElement(p,null)),r.a.createElement(A.a,{path:"/boardgames/"},r.a.createElement(N,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.4970981b.chunk.js.map