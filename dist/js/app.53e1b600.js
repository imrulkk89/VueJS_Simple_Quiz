(function(t){function e(e){for(var i,u,c=e[0],s=e[1],a=e[2],b=0,l=[];b<c.length;b++)u=c[b],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&l.push(o[u][0]),o[u]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);f&&f(e);while(l.length)l.shift()();return r.push.apply(r,a||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(i=!1)}i&&(r.splice(e--,1),t=u(u.s=n[0]))}return t}var i={},o={app:0},r=[];function u(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=i,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)u.d(n,i,function(e){return t[e]}.bind(null,i));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var f=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0503":function(t,e,n){},1271:function(t,e,n){},"2e4c":function(t,e,n){"use strict";n("765e")},"52d5":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("7a23"),o={class:"container"};function r(t,e,n,r,u,c){var s=Object(i["w"])("router-view");return Object(i["p"])(),Object(i["e"])("div",o,[Object(i["g"])(s)])}var u={name:"App",components:{}},c=(n("e99b"),n("6b0d")),s=n.n(c);const a=s()(u,[["render",r]]);var f=a,b=n("6c02"),l=function(t){return Object(i["s"])("data-v-34bd975c"),t=t(),Object(i["q"])(),t},d={id:"content"},p=l((function(){return Object(i["f"])("h1",null,"MCQ TEST",-1)})),O=l((function(){return Object(i["f"])("span",{id:"start-btn"},"START",-1)})),j=[O];function h(t,e,n,o,r,u){return Object(i["p"])(),Object(i["e"])("div",d,[p,Object(i["f"])("h4",null,"Total "+Object(i["y"])(this.$store.getters.totalQuestions)+" questions",1),Object(i["f"])("button",{onClick:e[0]||(e[0]=function(t){return u.startQuiz()})},j)])}var v={name:"Start",methods:{startQuiz:function(){rt.push({path:"/quiz"})}}};n("a539");const m=s()(v,[["render",h],["__scopeId","data-v-34bd975c"]]);var g=m,q={id:"content"},y={id:"quiz"};function Q(t,e,n,o,r,u){var c=Object(i["w"])("Timer"),s=Object(i["w"])("Questions");return Object(i["p"])(),Object(i["e"])("div",q,[Object(i["f"])("div",y,[Object(i["g"])(c),Object(i["g"])(s,{questions:this.$store.getters.getQuestions},null,8,["questions"]),Object(i["f"])("button",{onClick:e[0]||(e[0]=function(t){return u.showResult()})},"Finish")])])}function w(t,e,n,o,r,u){var c=Object(i["w"])("Question");return Object(i["p"])(),Object(i["d"])(c,{questions:n.questions},null,8,["questions"])}var z=function(t){return Object(i["s"])("data-v-75d772f5"),t=t(),Object(i["q"])(),t},_={class:"answer"},P=["id","name","disabled","value","onChange"],T=["for"],C=z((function(){return Object(i["f"])("br",null,null,-1)}));function I(t,e,n,o,r,u){return Object(i["p"])(!0),Object(i["e"])(i["a"],null,Object(i["v"])(r.allQuestions,(function(t,e){return Object(i["p"])(),Object(i["e"])("div",{class:"question",key:e},[Object(i["f"])("h3",null,Object(i["y"])(e+1)+". "+Object(i["y"])(t.title),1),Object(i["f"])("ul",_,[(Object(i["p"])(!0),Object(i["e"])(i["a"],null,Object(i["v"])(t.options,(function(n,o){return Object(i["p"])(),Object(i["e"])("li",{key:o},[Object(i["f"])("input",{type:"radio",id:e+1+"_"+(o+1),name:"answer_of_"+(e+1),disabled:t.answered,value:n,onChange:function(t){return u.answeredQuestion(e,t)}},null,40,P),Object(i["f"])("label",{for:e+1+"_"+(o+1)},Object(i["y"])(n),9,T),C])})),128))])])})),128)}n("d3b7"),n("159b");var S={name:"Question",props:{questions:Array},data:function(){return{allQuestions:[]}},methods:{answeredQuestion:function(t,e){var n=this,i=t,o=e.target.value;this.allQuestions[t].answered=!0,this.questions.forEach((function(t,e){e===i&&(t.answer===o?n.$store.commit("updateQuizPoints",{question:i,point:5}):n.$store.commit("updateQuizPoints",{question:i,point:0}))}))}},mounted:function(){var t=this;this.questions.forEach((function(e){e.answered&&delete e.answered,t.allQuestions.push(e)}))}};n("7fd8");const A=s()(S,[["render",I],["__scopeId","data-v-75d772f5"]]);var k=A,R={name:"Questions",components:{Question:k},props:{questions:Array}};const $=s()(R,[["render",w]]);var x=$,M=function(t){return Object(i["s"])("data-v-1e47e950"),t=t(),Object(i["q"])(),t},E={id:"quiz-time"},F=M((function(){return Object(i["f"])("h3",null,"Remaning Time",-1)}));function J(t,e,n,o,r,u){return Object(i["p"])(),Object(i["e"])("div",E,[F,Object(i["f"])("p",null,"00:00:"+Object(i["y"])(r.timerCount),1)])}var W={name:"Timer",data:function(){return{timerCount:this.$store.getters.getQuizTime}},watch:{timerCount:{handler:function(t){var e=this;t>0&&setTimeout((function(){e.timerCount--}),1e3)},immediate:!0}}};n("6e28");const G=s()(W,[["render",J],["__scopeId","data-v-1e47e950"]]);var K=G,N={name:"Quiz",components:{Questions:x,Timer:K},methods:{showResult:function(){rt.push({path:"/finish"})}}};n("2e4c");const Y=s()(N,[["render",Q],["__scopeId","data-v-196ee0a4"]]);var B=Y,D=function(t){return Object(i["s"])("data-v-044be300"),t=t(),Object(i["q"])(),t},H={id:"content"},L=D((function(){return Object(i["f"])("h1",null,"MCQ Result",-1)})),U=D((function(){return Object(i["f"])("div",{id:"gift"},"🎉",-1)})),V=D((function(){return Object(i["f"])("span",{id:"start-btn"},"TAKE AGAIN",-1)})),X=[V];function Z(t,e,n,o,r,u){return Object(i["p"])(),Object(i["e"])("div",H,[L,U,Object(i["f"])("h4",null,"You got "+Object(i["y"])(this.$store.getters.getQuizResult)+" score",1),Object(i["f"])("button",{onClick:e[0]||(e[0]=function(t){return u.startAgain()})},X)])}var tt={name:"Start",methods:{startAgain:function(){this.$store.commit("clearQuizPoints"),rt.push({path:"/quiz"})}}};n("95c2");const et=s()(tt,[["render",Z],["__scopeId","data-v-044be300"]]);var nt=et,it=[{path:"/",name:"Start",component:g},{path:"/quiz",name:"Quiz",component:B},{path:"/finish",name:"Finish",component:nt}],ot=Object(b["a"])({history:Object(b["b"])(),routes:it}),rt=ot,ut=n("2909"),ct=(n("4de4"),n("a434"),n("99af"),n("5502")),st=Object(ct["a"])({state:{quizPoints:[],quizTime:30,questions:[{title:"What is the past form of 'eat'?",options:["eat","ate","eaten","have ate"],answer:"ate"},{title:"Which sentence is present continuous tense?",options:["I eat rice","I am eating rice","I have ate rice","I have been eating rice for 1 year"],answer:"I am eating rice"}]},mutations:{updateQuizPoints:function(t,e){var n,i=t.quizPoints.filter((function(t){return t.question!==e.question}));t.quizPoints.splice(0),(n=t.quizPoints).push.apply(n,Object(ut["a"])(i).concat([e]))},clearQuizPoints:function(t){t.quizPoints.splice(0)}},actions:{},getters:{getQuestions:function(t){return t.questions},totalQuestions:function(t){return t.questions.length},getQuizTime:function(t){return t.quizTime},getQuizResult:function(t){var e=0;return t.quizPoints.forEach((function(t){e+=t.point})),e}},modules:{}});Object(i["c"])(f).use(rt).use(st).mount("#app")},"5b8b":function(t,e,n){},"6e28":function(t,e,n){"use strict";n("5b8b")},"765e":function(t,e,n){},"767b":function(t,e,n){},"7fd8":function(t,e,n){"use strict";n("1271")},"95c2":function(t,e,n){"use strict";n("767b")},a539:function(t,e,n){"use strict";n("0503")},e99b:function(t,e,n){"use strict";n("52d5")}});
//# sourceMappingURL=app.53e1b600.js.map