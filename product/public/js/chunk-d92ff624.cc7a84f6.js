(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d92ff624"],{"61e9":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),l=Object(c["g"])("label",{for:""},"題名",-1),a=Object(c["g"])("label",{for:""},"段落",-1),r=Object(c["g"])("label",{for:""},"文",-1),o=Object(c["g"])("label",{for:""},"文章",-1),u={class:"checkText"},s=Object(c["f"])(" 確認 ");function i(e,t,n,i,b,p){var g=Object(c["w"])("Header");return Object(c["p"])(),Object(c["d"])("div",null,[Object(c["g"])(g),Object(c["g"])("div",null,[Object(c["g"])("form",null,[Object(c["g"])("p",null,[l,Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[1]||(t[1]=function(e){return b.title=e})},null,512),[[c["A"],b.title]])]),Object(c["g"])("p",null,[a,Object(c["D"])(Object(c["g"])("input",{type:"number","onUpdate:modelValue":t[2]||(t[2]=function(e){return b.paragraphNumber=e})},null,512),[[c["A"],b.paragraphNumber]])]),Object(c["g"])("p",null,[r,Object(c["D"])(Object(c["g"])("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=function(e){return b.sentenceNumber=e})},null,512),[[c["A"],b.sentenceNumber]])]),Object(c["g"])("p",null,[o,Object(c["D"])(Object(c["g"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(e){return b.sentenceText=e})},null,512),[[c["A"],b.sentenceText]])]),Object(c["g"])("a",{class:"waves-effect waves-teal btn-flat",onClick:t[5]||(t[5]=function(){return p.registerText.apply(p,arguments)})},"登録")])]),Object(c["g"])("div",u,[s,Object(c["g"])("p",null,Object(c["y"])(b.title),1),Object(c["g"])("p",null,Object(c["y"])(b.sentenceText),1)]),Object(c["g"])("div",null,[Object(c["g"])("button",{onClick:t[6]||(t[6]=function(){return p.getText.apply(p,arguments)})},"consoleに表示")])])}n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var b=n("0418"),p={components:{Header:b["a"]},data:function(){return{title:"",paragraphNumber:0,sentenceNumber:0,sentenceText:""}},methods:{registerText:function(){if(""===this.title||this.paragraphNumber<=0||this.sentenceNumber<=0||""===this.sentenceText)alert("入力漏れがあります");else{var e=new URLSearchParams;e.append("title",this.title),e.append("paragraphNumber",this.paragraphNumber),e.append("sentenceNumber",this.sentenceNumber),e.append("sentenceText",this.sentenceText),this.axios.post("/controllers/register",e).then((function(e){console.log(e.data)})).catch((function(e){console.log("エラーです"),console.log(e)}))}},getText:function(){var e=this;this.axios.get("/controllers/game",{params:{gameMode:"bookMode",gameSection:this.title}}).then((function(t){console.log(t.data),e.sentenceOrg=t.data})).catch((function(e){console.log("エラーです"),console.log(e)}))}}};n("f4ff");p.render=i;t["default"]=p},ea62:function(e,t,n){},f4ff:function(e,t,n){"use strict";n("ea62")}}]);
//# sourceMappingURL=chunk-d92ff624.cc7a84f6.js.map