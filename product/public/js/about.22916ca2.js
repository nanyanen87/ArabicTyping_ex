(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0127":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["g"])("h3",null,"ログアウトしました",-1);function a(e,t,o,a,r,l){var s=Object(n["w"])("Header");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(s),c])}var r=o("0418"),l={name:"LogoutPage",data:function(){return{}},beforeMount:function(){this.axios.get("/controllers/logout").then((function(e){console.log(e.data)})).catch((function(e){console.log(e)}))},components:{Header:r["a"]}};l.render=a;t["default"]=l},"0d8d":function(e,t,o){},3011:function(e,t,o){"use strict";o("746e")},"48ca":function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["F"])("data-v-4bbbe58c");Object(n["s"])("data-v-4bbbe58c");var a=Object(n["g"])("h3",null,"ログイン画面",-1),r={key:0},l=Object(n["g"])("b",null,"Please correct the following error(s):",-1),s=Object(n["g"])("label",{for:"email"},"email:",-1),i=Object(n["g"])("label",{for:"password"},"password:",-1);Object(n["q"])();var u=c((function(e,t,o,c,u,d){var b=Object(n["w"])("Header");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(b),a,Object(n["g"])("div",null,[Object(n["g"])("form",{onSubmit:t[4]||(t[4]=Object(n["E"])((function(){return d.checkForm.apply(d,arguments)}),["prevent"])),method:"post"},[u.errors.length?(Object(n["p"])(),Object(n["d"])("p",r,[l,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(u.errors,(function(e,t){return Object(n["p"])(),Object(n["d"])("li",{key:t},Object(n["y"])(e),1)})),128))])])):Object(n["e"])("",!0),Object(n["g"])("p",null,[s,Object(n["D"])(Object(n["g"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.email=e})},null,512),[[n["A"],u.email]])]),Object(n["g"])("p",null,[i,Object(n["D"])(Object(n["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.password=e})},null,512),[[n["A"],u.password]])]),Object(n["g"])("p",{class:"button",onClick:t[3]||(t[3]=function(){return d.checkForm.apply(d,arguments)})}," 送信 ")],32),Object(n["g"])("div",null,[Object(n["g"])("p",{class:"button",onClick:t[5]||(t[5]=function(){return d.guestLogin.apply(d,arguments)})},"ゲストログイン")])])])})),d=(o("a9e3"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("0418")),b={name:"LoginPage",data:function(){return{email:"example@gmail.com",password:"guestNo1",errors:[]}},props:{nextPage:String,gameOption:Object,resultScore:Number},components:{Header:d["a"]},methods:{checkForm:function(){var e=this;if(this.errors=[],""===this.email)this.errors.push("email is required.");else{var t=new URLSearchParams;t.append("email",this.email),t.append("password",this.password),this.axios.post("/controllers/login",t).then((function(t){if(200===t.data.code){console.log(t.data.message);var o=e.nextPage+"?resultScore=".concat(e.resultScore);e.$router.push(o)}else alert(t.data.message),console.log(t.data.message)})).catch((function(e){console.log("エラーです"),console.log(e)}))}},guestLogin:function(){this.email="example@gmail.com",this.password="guestNo1",this.checkForm()}}};o("79d0");b.render=u,b.__scopeId="data-v-4bbbe58c";t["default"]=b},"746e":function(e,t,o){},"79d0":function(e,t,o){"use strict";o("0d8d")},cf14:function(e,t,o){"use strict";o.r(t);var n=o("7a23"),c=Object(n["F"])("data-v-04b82326");Object(n["s"])("data-v-04b82326");var a=Object(n["g"])("h3",null,"サインイン画面",-1),r={key:0},l=Object(n["g"])("b",null,"Please correct the following error(s):",-1),s=Object(n["g"])("label",{for:"email"},"email:",-1),i=Object(n["g"])("label",{for:"password"},"password:",-1);Object(n["q"])();var u=c((function(e,t,o,c,u,d){var b=Object(n["w"])("Header");return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])(b),a,Object(n["g"])("div",null,[Object(n["g"])("form",{onSubmit:t[4]||(t[4]=Object(n["E"])((function(){return d.checkForm.apply(d,arguments)}),["prevent"])),method:"post"},[u.errors.length?(Object(n["p"])(),Object(n["d"])("p",r,[l,Object(n["g"])("ul",null,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(u.errors,(function(e,t){return Object(n["p"])(),Object(n["d"])("li",{key:t},Object(n["y"])(e),1)})),128))])])):Object(n["e"])("",!0),Object(n["g"])("p",null,[s,Object(n["D"])(Object(n["g"])("input",{type:"email",id:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return u.email=e})},null,512),[[n["A"],u.email]])]),Object(n["g"])("p",null,[i,Object(n["D"])(Object(n["g"])("input",{type:"password",id:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return u.password=e})},null,512),[[n["A"],u.password]])]),Object(n["g"])("p",{class:"button",onClick:t[3]||(t[3]=function(){return d.checkForm.apply(d,arguments)})}," 送信 ")],32),Object(n["g"])("div",null,Object(n["y"])(u.password),1)])])})),d=(o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("0418")),b={name:"LoginPage",data:function(){return{email:"",password:"",errors:[],user:{session:!0}}},components:{Header:d["a"]},methods:{checkForm:function(){if(this.errors=[],""===this.email)this.errors.push("email is required.");else{var e=new URLSearchParams;e.append("email",this.email),e.append("password",this.password),this.axios.post("/controllers/signin",e).then((function(e){e.data.code,alert(e.data.message),console.log(e.data.message)})).catch((function(e){console.log("エラーです"),console.log(e)}))}}}};o("3011");b.render=u,b.__scopeId="data-v-04b82326";t["default"]=b}}]);
//# sourceMappingURL=about.22916ca2.js.map