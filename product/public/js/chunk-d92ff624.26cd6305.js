(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d92ff624"],{"61e9":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),u=Object(r["h"])("label",{for:""},"題名",-1),c=Object(r["h"])("label",{for:""},"段落",-1),l=Object(r["h"])("label",{for:""},"文",-1),a=Object(r["h"])("label",{for:""},"文章",-1),b=Object(r["h"])("input",{type:"submit",value:"Submit"},null,-1),o=Object(r["h"])("div",null,[Object(r["h"])("p",null,"データベース内容表示"),Object(r["h"])("button",null,"内容チェック")],-1);function p(e,t,n,p,i,s){var h=Object(r["x"])("Header");return Object(r["q"])(),Object(r["d"])("div",null,[Object(r["h"])(h),Object(r["h"])("div",null,[Object(r["h"])("form",{onSubmit:t[5]||(t[5]=Object(r["G"])((function(){return s.registerText.apply(s,arguments)}),["prevent"])),method:"post"},[Object(r["h"])("p",null,[u,Object(r["F"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return i.title=e})},null,512),[[r["B"],i.title]])]),Object(r["h"])("p",null,[c,Object(r["F"])(Object(r["h"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return i.paragraphNumber=e})},null,512),[[r["B"],i.paragraphNumber]])]),Object(r["h"])("p",null,[l,Object(r["F"])(Object(r["h"])("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return i.sentenceNumber=e})},null,512),[[r["B"],i.sentenceNumber]])]),Object(r["h"])("p",null,[a,Object(r["F"])(Object(r["h"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return i.sentenceText=e})},null,512),[[r["B"],i.sentenceText]])]),b],32)]),o])}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var i=n("0418"),s={components:{Header:i["a"]},data:function(){return{title:"",paragraphNumber:0,sentenceNumber:0,sentenceText:""}},methods:{registerText:function(){if(""===this.title||this.paragraphNumber<=0||this.sentenceNumber<=0||""===this.sentenceText)alert("入力漏れがあります");else{var e=new URLSearchParams;e.append("title",this.title),e.append("paragraphNumber",this.paragraphNumber),e.append("sentenceNumber",this.sentenceNumber),e.append("sentenceText",this.sentenceText),this.axios.post("/controllers/register",e).then((function(e){console.log(e.data)})).catch((function(e){console.log("エラーです"),console.log(e)}))}}}};n("f4ff");s.render=p;t["default"]=s},ea62:function(e,t,n){},f4ff:function(e,t,n){"use strict";n("ea62")}}]);
//# sourceMappingURL=chunk-d92ff624.26cd6305.js.map