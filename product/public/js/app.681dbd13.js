(function(e){function t(t){for(var o,r,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);g&&g(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{"chunk-2d0d3750":"f17c740c","chunk-794e1472":"1f91e974",about:"22916ca2","chunk-d92ff624":"c0a14d5d"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-d92ff624":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about"}[e]||e)+"."+{"chunk-2d0d3750":"31d6cfe0","chunk-794e1472":"31d6cfe0",about:"5a5999a7","chunk-d92ff624":"20d07bff"}[e]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===o||l===a)return t()}var g=document.createElement("link");g.rel="stylesheet",g.type="text/css",g.onload=t,g.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],g.parentNode.removeChild(g),n(c)},g.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(g)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(g);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",d.name="ChunkLoadError",d.type=o,d.request=r,n[1](d)}a[e]=void 0}};var g=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var g=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0418":function(e,t,n){"use strict";var o=n("7a23"),r=Object(o["F"])("data-v-29d6381e");Object(o["s"])("data-v-29d6381e");var a=Object(o["f"])("top"),c=Object(o["f"])(" | "),i=Object(o["f"])("login"),s=Object(o["f"])(" | "),u=Object(o["f"])("signin"),l=Object(o["f"])("logout");Object(o["q"])();var d=r((function(e,t,n,d,g,p){var b=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",null,[Object(o["g"])(b,{class:"link",to:"/"},{default:r((function(){return[a]})),_:1}),c,Object(o["D"])(Object(o["g"])(b,{class:"link",to:{name:"LoginPage",params:{nextPage:"/"}}},{default:r((function(){return[i]})),_:1},512),[[o["B"],!g.sessionStart]]),s,Object(o["D"])(Object(o["g"])(b,{class:"link",to:{name:"SigninPage",params:{nextPage:"/"}}},{default:r((function(){return[u]})),_:1},512),[[o["B"],!g.sessionStart]]),Object(o["D"])(Object(o["g"])(b,{class:"link",to:"/logout"},{default:r((function(){return[l]})),_:1},512),[[o["B"],g.sessionStart]])])])})),g={name:"Header",props:{},data:function(){return{sessionStart:!1}},beforeMount:function(){var e=this;this.axios.get("/controllers/session").then((function(t){e.sessionStart=t.data.session,console.log(t.data.userName+"がログインしました")})).catch((function(e){console.log(e)}))},methods:{onclick:function(){}}};n("5ad5");g.render=d,g.__scopeId="data-v-29d6381e";t["a"]=g},"0a69":function(e,t,n){},"0ec5":function(e,t,n){e.exports=n.p+"img/ibmkey600-200.946fa5f0.png"},"0fff":function(e,t,n){e.exports=n.p+"img/ibmkey900-300.846450af.png"},"12e2":function(e,t,n){e.exports=n.p+"media/blip02.8bf494ca.mp3"},3004:function(e,t,n){"use strict";n("5c05")},"4b4c":function(e,t,n){var o={"./ibmkey900-300.png":"0fff","./mackey900-300.png":"b76d"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="4b4c"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={id:"nav"};function a(e,t,n,a,c,i){var s=Object(o["w"])("router-view");return Object(o["p"])(),Object(o["d"])("div",r,[Object(o["g"])(s)])}var c={components:{}};n("64be");c.render=a;var i=c,s=(n("a9e3"),n("d3b7"),n("6c02")),u=Object(o["F"])("data-v-fe13f4de");Object(o["s"])("data-v-fe13f4de");var l={class:"topWrapper"},d={class:"main"},g=Object(o["g"])("h1",null,"arabic typing",-1),p={class:"modeSelectWrapper"},b={class:"modeSelectBox"},m={class:"collapsible"},f=Object(o["g"])("div",{class:"collapsible-header",id:"bookMode"},"長文モード",-1),O={class:"collapsible-body"},h=Object(o["g"])("p",{class:"button"},"title1",-1),v=Object(o["g"])("p",{class:"button"},"title2",-1),j=Object(o["g"])("ul",{class:"collapsible"},[Object(o["g"])("li",null,[Object(o["g"])("div",{class:"collapsible-header",id:"wordMode"},"単語モード"),Object(o["g"])("div",{class:"collapsible-body"},[Object(o["g"])("p",{class:"button"},"未実装です"),Object(o["g"])("p",null,"easy"),Object(o["g"])("p",null,"normal"),Object(o["g"])("p",null,"hard")])])],-1),y={class:"gameOptionWrapper"},k={class:"keyboard"},S={class:"sound"};Object(o["q"])();var w=u((function(e,t,n,r,a,c){var i=Object(o["w"])("Header"),s=Object(o["w"])("Footer");return Object(o["p"])(),Object(o["d"])("div",l,[Object(o["g"])(i,{class:"header"}),Object(o["g"])("div",d,[g,Object(o["g"])("div",p,[Object(o["g"])("div",b,[Object(o["g"])("div",{class:"collapsibleBox",onMouseleave:t[3]||(t[3]=function(e){return c.mouseLeave("bookMode")}),onMouseenter:t[4]||(t[4]=function(e){return c.mouseEnter("bookMode")})},[Object(o["g"])("ul",m,[Object(o["g"])("li",null,[f,Object(o["g"])("div",O,[Object(o["g"])("p",{onClick:t[1]||(t[1]=function(){return c.startGame.apply(c,arguments)}),class:"button"},"أَلشَّمْسُ"),h,v,Object(o["g"])("p",{onClick:t[2]||(t[2]=function(){return c.startGame.apply(c,arguments)}),class:"button"},"example")])])])],32),Object(o["g"])("div",{class:"collapsibleBox",onMouseleave:t[5]||(t[5]=function(e){return c.mouseLeave("wordMode")}),onMouseenter:t[6]||(t[6]=function(e){return c.mouseEnter("wordMode")})},[j],32)])]),Object(o["g"])("div",y,[Object(o["g"])("div",k,[Object(o["g"])("p",{onClick:t[7]||(t[7]=function(){return c.setKeyboard.apply(c,arguments)}),id:"mac"},">mac"),Object(o["g"])("p",{onClick:t[8]||(t[8]=function(){return c.setKeyboard.apply(c,arguments)}),id:"ibm"},"ibm")]),Object(o["g"])("div",S,[Object(o["g"])("p",{onClick:t[9]||(t[9]=function(){return c.switchSound.apply(c,arguments)}),class:"isSound"},"Sound:OFF")]),Object(o["g"])("div",null,[Object(o["g"])("p",null,"ようこそ "+Object(o["y"])(a.userName),1)])])]),Object(o["g"])(s,{class:"footer"})])})),x=n("0418"),P=Object(o["F"])("data-v-4b23e1ba"),M=P((function(e,t,n,r,a,c){return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("a",{onClick:t[1]||(t[1]=function(){return c.checkUser.apply(c,arguments)})},"registerページへ")])})),E=(n("96cf"),n("1da1")),T={name:"Footer",props:{},data:function(){return{sessionStart:!1}},methods:{checkUser:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/controllers/session");case 3:n=t.sent,console.log(n.data.session),"nan.hanaoka@gmail.com"===n.data.userName?e.$router.push("/register"):alert("権限がありません"),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}}};n("3004");T.render=M,T.__scopeId="data-v-4b23e1ba";var _=T,q=n("4d5c"),C=n.n(q),L={name:"TopPage",data:function(){return{keyboard:"mac",gameMode:"bookMode",gameSection:"",gameSound:!1,userName:""}},mounted:function(){C.a.AutoInit(),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelectorAll(".collapsible");C.a.Collapsible.init(e,{accordion:!0})})),this.session()},components:{Header:x["a"],Footer:_},methods:{mouseEnter:function(e){document.getElementById("".concat(e)).click(),this.gameMode=e,console.log("over")},mouseLeave:function(e){document.getElementById("".concat(e)).click(),console.log("leave")},startGame:function(e){this.gameSection=e.target.textContent,this.$router.push({name:"TypingPage",query:{gameMode:this.gameMode,gameSection:this.gameSection,keyboard:this.keyboard,gameSound:this.gameSound}})},setKeyboard:function(e){var t=document.getElementById("mac"),n=document.getElementById("ibm");this.keyboard=e.target.id;var o=document.getElementById(this.keyboard);o.innerText=">"+this.keyboard,"mac"===this.keyboard?n.innerText="ibm":t.innerText="mac"},switchSound:function(e){this.gameSound=!this.gameSound,!1===this.gameSound?e.target.textContent="Sound:OFF":!0===this.gameSound&&(e.target.textContent="Sound:ON")},session:function(){var e=this;this.axios.get("/controllers/session").then((function(t){t.data.session&&(e.userName=t.data.userName)})).catch((function(e){console.log(e)}))}}};n("87c6");L.render=w,L.__scopeId="data-v-fe13f4de";var N=L,B=Object(o["F"])("data-v-2beb435c");Object(o["s"])("data-v-2beb435c");var F={class:"topWrapper"},G={key:0,class:"waitScreen"},D=Object(o["g"])("p",null,"スペースキーでスタート",-1),I=Object(o["g"])("p",null,"escでリスタート",-1),A=Object(o["f"])("タイトルへ"),R={key:1,class:"middleWrapper"},U={class:"sentenceBox"},H={class:"arabicText"},$={class:"inputBox"},W={class:"imgBox"};Object(o["q"])();var K=B((function(e,t,n,r,a,c){var i=Object(o["w"])("router-link");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])("div",F,[a.waiting?(Object(o["p"])(),Object(o["d"])("div",G,[D,I,Object(o["g"])(i,{to:"/",class:"link"},{default:B((function(){return[A]})),_:1})])):Object(o["e"])("",!0),a.waiting?Object(o["e"])("",!0):(Object(o["p"])(),Object(o["d"])("div",R,[Object(o["g"])("div",U,[Object(o["g"])("h1",null,Object(o["y"])(n.gameOption.section),1),Object(o["g"])("p",H,Object(o["y"])(a.nowSentence),1)]),Object(o["g"])("div",$,[Object(o["g"])("p",null,Object(o["y"])(a.inputSentence),1)]),Object(o["g"])("div",W,[Object(o["g"])("picture",null,[Object(o["g"])("source",{media:"(min-width: 960px)",srcset:a.img.bigger},null,8,["srcset"]),Object(o["g"])("img",{src:a.img.smaller},null,8,["src"])])])]))])])})),J=n("12e2"),z=n.n(J),Q=n("7919"),V=n.n(Q),X={name:"TypingPage",data:function(){return{sentenceOrg:[],nowSentence:"",inputSentence:"",score:{startTime:0,endTime:0,resultScore:0},waiting:!0,img:{bigger:n("4b4c")("./"+this.gameOption.keyboard+"key900-300.png"),smaller:n("ba90")("./"+this.gameOption.keyboard+"key600-200.png")}}},props:{gameOption:Object},beforeMount:function(){var e=this;this.getText(),this.axios.get("/controllers/game",{params:{gameMode:this.gameOption.mode,gameSection:this.gameOption.section}}).then((function(t){console.log(t.data),e.sentenceOrg=t.data})).catch((function(e){console.log("エラーです"),console.log(e)}))},mounted:function(){this.waitGame(),this.retryGame()},components:{},methods:{waitGame:function(){var e=this,t=!0;document.addEventListener("keyup",(function(n){t&&"Space"===n.code&&(t=!1,console.log("start"),e.startGame())}))},getText:function(){var e=this;this.axios.get("/controllers/game",{params:{gameMode:this.gameOption.mode,gameSection:this.gameOption.section}}).then((function(t){console.log(t.data),e.sentenceOrg=t.data})).catch((function(e){console.log("エラーです"),console.log(e)}))},startGame:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n,o,r,a,c,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.waiting=!1,t.next=3,new Date;case 3:return e.score.startTime=t.sent,t.next=6,new Audio(z.a);case 6:return n=t.sent,t.next=9,new Audio(V.a);case 9:o=t.sent,console.log(e.gameOption.sound),e.gameOption.sound||(console.log("音量ゼロ"),n.volume=0,o.volume=0),r=0,a=0,e.nowSentence=e.sentenceOrg[a],c=1,i=0,document.addEventListener("keypress",(function(t){" "===e.sentenceOrg[a][r]&&(e.inputSentence+=" ",r++),e.sentenceOrg[a][r]===t.key?(e.inputSentence+=t.key,r++,i++):(c++,n.play()),e.sentenceOrg[a].length===r&&(a++,e.nowSentence=e.sentenceOrg[a],e.inputSentence="",r=0,o.play()),e.sentenceOrg.length===a&&e.endGame(c,i)}));case 17:case"end":return t.stop()}}),t)})))()},endGame:function(e,t){this.score.endTime=new Date;var n=(this.score.endTime-this.score.startTime)/1e3;this.score.resultScore=Math.floor(t/n*60*(e/t^3)),this.$router.push({name:"ScorePage",query:{resultScore:this.score.resultScore,gameMode:this.gameOption.mode,gameSection:this.gameOption.section,keyboard:this.gameOption.keyboard}})},retryGame:function(){document.addEventListener("keydown",(function(e){"Escape"===e.code&&(console.log(location.host),location.reload())}))}}};n("bb07");X.render=K,X.__scopeId="data-v-2beb435c";var Y=X,Z=Object(o["F"])("data-v-acc8a6ac");Object(o["s"])("data-v-acc8a6ac");var ee=Object(o["f"])(" あなたのスコアは"),te=Object(o["f"])("でした ");Object(o["q"])();var ne=Z((function(e,t,n,r,a,c){var i=Object(o["w"])("Header");return Object(o["p"])(),Object(o["d"])("div",null,[Object(o["g"])(i),Object(o["g"])("div",null,[Object(o["g"])("p",null,[ee,Object(o["g"])("span",null,Object(o["y"])(n.resultScore),1),te])]),Object(o["g"])("div",null,[Object(o["g"])("div",null,[Object(o["g"])("a",{class:"waves-effect waves-teal btn-flat",onClick:t[1]||(t[1]=function(){return c.entryRanking.apply(c,arguments)})},"ランキングに登録する"),Object(o["g"])("a",{class:"waves-effect waves-teal btn-flat",onClick:t[2]||(t[2]=function(){return c.share.apply(c,arguments)})},"Twitterで共有する")])])])})),oe={name:"ScorePage",date:function(){return{}},props:{gameOption:Object,resultScore:Number},components:{Header:x["a"]},mounted:function(){this.retryGame()},methods:{entryRanking:function(){var e=this;return Object(E["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get("/controllers/session");case 3:n=t.sent,console.log(n.data.session),n.data.session?(console.log("そのまま"),e.$router.push("/ranking?resultScore=".concat(e.resultScore))):e.$router.push({name:"LoginPage",params:{nextPage:"/ranking"},query:{resultScore:e.resultScore,gameMode:e.gameOption.mode,gameSection:e.gameOption.section,keyboard:e.gameOption.keyboard}}),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},retryGame:function(){var e=this;document.addEventListener("keydown",(function(t){"Escape"===t.code&&(console.log("retry"),e.$router.push({name:"TypingPage",query:{gameMode:e.gameOption.mode,gameSection:e.gameOption.section,keyboard:e.gameOption.keyboard,gameSound:e.gameOption.sound}}))}))},share:function(){var e="https://twitter.com/intent/tweet?text=あなたのスコアは"+this.resultScore+"でした&hashtags=arabictyping&url=https://nanyanenvh2.xyz/";location.href=e},createUrl:function(){console.log(this.shareUrl)}}};n("6b20");oe.render=ne,oe.__scopeId="data-v-acc8a6ac";var re=oe,ae=[{path:"/",name:"TopPage",component:N},{path:"/typing",name:"TypingPage",component:Y,props:function(e){return{gameOption:{mode:e.query.gameMode,section:e.query.gameSection,keyboard:e.query.keyboard,sound:"true"===e.query.gameSound}}}},{path:"/score",name:"ScorePage",component:re,props:function(e){return{gameOption:{mode:e.query.gameMode,section:e.query.gameSection,keyboard:e.query.keyboard,sound:"true"===e.query.gameSound},resultScore:Number(e.query.resultScore)}}},{path:"/login/:nextPage",name:"LoginPage",props:function(e){return{nextPage:e.params.nextPage,gameOption:{mode:e.query.gameMode,section:e.query.gameSection,keyboard:e.query.keyboard},resultScore:Number(e.query.resultScore)}},component:function(){return Promise.all([n.e("chunk-794e1472"),n.e("about")]).then(n.bind(null,"48ca"))}},{path:"/signin:nextPage",name:"SigninPage",props:function(e){return{nextPage:e.params.nextPage}},component:function(){return Promise.all([n.e("chunk-794e1472"),n.e("about")]).then(n.bind(null,"cf14"))}},{path:"/ranking",name:"RankingPage",props:function(e){return{resultScore:Number(e.query.resultScore)}},component:function(){return n.e("chunk-2d0d3750").then(n.bind(null,"5d9d"))}},{path:"/register",name:"RegisterPage",props:!0,component:function(){return Promise.all([n.e("chunk-794e1472"),n.e("chunk-d92ff624")]).then(n.bind(null,"61e9"))}},{path:"/logout",name:"LogoutPage",props:!0,component:function(){return Promise.all([n.e("chunk-794e1472"),n.e("about")]).then(n.bind(null,"0127"))}}],ce=Object(s["a"])({history:Object(s["b"])("/"),routes:ae}),ie=ce,se=n("bc3a"),ue=n.n(se),le=n("2106"),de=n.n(le),ge=Object(o["c"])(i);ge.use(de.a,ue.a),ge.use(ie),ge.mount("#app")},"5ad5":function(e,t,n){"use strict";n("f492")},"5c05":function(e,t,n){},"64be":function(e,t,n){"use strict";n("c894")},"6b20":function(e,t,n){"use strict";n("7801")},7801:function(e,t,n){},7919:function(e,t,n){e.exports=n.p+"media/clearSound.0eba61b1.mp3"},"87c6":function(e,t,n){"use strict";n("9dac")},"9dac":function(e,t,n){},b76d:function(e,t,n){e.exports=n.p+"img/mackey900-300.492716ef.png"},ba90:function(e,t,n){var o={"./ibmkey600-200.png":"0ec5","./mackey600-200.png":"ec46"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=a,e.exports=r,r.id="ba90"},bb07:function(e,t,n){"use strict";n("0a69")},c894:function(e,t,n){},ec46:function(e,t,n){e.exports=n.p+"img/mackey600-200.d0b7fbfd.png"},f492:function(e,t,n){}});
//# sourceMappingURL=app.681dbd13.js.map