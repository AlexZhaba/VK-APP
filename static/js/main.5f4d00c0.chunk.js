(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){e.exports=n(210)},209:function(e,t,n){e.exports={header_panel:"registration_header_panel__28_Qk",avatar_wrapper:"registration_avatar_wrapper__1cUXE"}},210:function(e,t,n){"use strict";n.r(t);n(147),n(172);var a=n(0),l=n.n(a),r=n(26),o=n.n(r),c=n(34),s=n.n(c),i=n(21),u=n.n(i),d=n(6),m=n(2),p=(n(188),n(17)),f=n.n(p),E=n(20),g=n.n(E),y=n(52),b=n.n(y),h=(n(206),n(95)),x=n.n(h),v=(n(207),n(96)),C=n.n(v),j=n(97),w=n.n(j),k=n(98),O=n.n(k),S=n(99),U=n.n(S),_=(n(208),n(100)),A=n.n(_),B=n(53),D=n.n(B),I=n(40),z=n.n(I),T={width:"calc(100% - 40px)",border:"none",borderRadius:"5px",padding:"12px",fontSize:"15px",justifyContent:"center",alignItems:"center",paddingLeft:"5px",marginLeft:"10px",height:70,marginBottom:10,display:"flex"},W=function(e){var t=e.quest,n=e.popoutType,r=e.handleClick,o=e.shop,c=Object(a.useState)(null),s=Object(d.a)(c,2);s[0],s[1];return l.a.createElement("div",{onClick:function(){return r(n,t)},style:{position:"relative"}},o?"":l.a.createElement("div",{style:{background:"white",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",boxShadow:"0 2px 24px 0 rgba(0,0,0,.08), 0 0 2px 0 rgba(0,0,0,.08)",top:5,left:15,color:"#2975CC",display:"flex",justifyContent:"space-around",alignItems:"center",zIndex:3,fontWeight:"bold"}},t.completed?l.a.createElement(U.a,null):l.a.createElement(A.a,null)),t.completed?"":l.a.createElement("div",{style:{position:"absolute",top:17,left:60,zIndex:3,fontSize:16,fontWeight:"bold",color:"#2975CC"}}),l.a.createElement("div",{style:{position:"absolute",top:13,right:40,zIndex:3,fontWeight:"bold",display:"flex",alignItems:"center"}},l.a.createElement("span",{style:{color:"#2975CC"}},t.manabonus<0?"":"+",t.manabonus),l.a.createElement(z.a,{style:{color:"#3f8ae0"}})," /",l.a.createElement("span",{style:{color:"#77ba7c"}}," \xa0",t.expbonus<0?"":"+",t.expbonus),l.a.createElement(D.a,{style:{color:"#77ba7c",marginLeft:2}})),l.a.createElement(m.e,{size:"1",mode:"shadow",style:T},l.a.createElement("div",{style:{}},t.text)))},Q=n(54),q=n.n(Q),N="https://igratvoiput.ru:3000",R=n(101),L=n.n(R),V=n(102),K=n.n(V),F=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),s=Object(d.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(!1),E=Object(d.a)(p,2),g=E[0],y=E[1];Object(a.useEffect)(function(){(g||null==i)&&f.a.get("".concat(N,"/getQuestsById/").concat(e.user.id)).then(function(t){console.log("quests = ",t.data.quests),u(t.data.quests),e.setQuestsApp(t.data.quests),e.setNeedUpdate(!0),y(!1)})},[g]);var b=function(t){console.log("QUEST ",t),console.log("USER =",e.user),t.completed||f.a.post("".concat(N,"/setQuest"),{user_id:t.user_id,text:t.text,completed:!0,user:e.user,manaBonus:t.manabonus,expBonus:t.expbonus}).then(function(t){console.log("HANDLECLICK = ",t),e.user.level!=t.data.newLvl&&0!=t.data.newLvl&&h("NEW_LVL"),y(!0),e.setNeedUpdate(!0)})},h=function(e,t){switch(e){case"SET_QUEST_DONE":t.completed?o(l.a.createElement(m.a,{onClose:function(){return o(null)}},l.a.createElement(m.b,{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(q.a,null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:"20px",color:"black"}},t.text),l.a.createElement("span",{style:{display:"block",color:"grey",fontSize:"14px",textAlign:"center",marginTop:"10px"}},t.description))),l.a.createElement(m.b,{autoclose:!0},l.a.createElement(m.d,{size:"xl",mode:"secondary"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e!")))):o(l.a.createElement(m.a,{onClose:function(){return o(null)}},l.a.createElement(m.b,{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(L.a,null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:"20px",color:"black"}},t.text),l.a.createElement("span",{style:{display:"block",color:"grey",fontSize:"14px",textAlign:"center",marginTop:"10px"}},t.description))),l.a.createElement(m.b,{autoclose:!0},l.a.createElement(m.d,{size:"xl",onClick:function(){return b(t)}},"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0435"))));break;case"NEW_LVL":o(l.a.createElement(m.w,{alignY:"center",alignX:"center"},l.a.createElement("div",{onClick:function(){return o(null)},style:{background:"white",width:"calc(100% - 132px)",padding:10,height:250,borderRadius:5,boxShadow:"0 8px 8px 0 rgba(0,0,0,.16), 0 0 4px 0 rgba(0,0,0,.08)"}},l.a.createElement("div",{style:{width:"100%",height:50,display:"flex",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:"bold"}},"\u041d\u043e\u0432\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c!"),l.a.createElement("div",{style:{marginTop:10,color:"#2975CC"}},l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(K.a,null)),l.a.createElement("div",{style:{color:"black"}},l.a.createElement("div",null,"\u041d\u043e\u0432\u043e\u0433\u043e:"),l.a.createElement("div",null,"+2 \u043a \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u043a\u043e\u043b-\u0432\u0443 \u043a\u0432\u0435\u0441\u0442\u043e\u0432"))),l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(m.d,{size:"l",onClick:function(){return o(null)},style:{marginTop:10}},"\u041a\u0440\u0443\u0442\u043e!")))));break;default:alert("some problems with popoutType")}};return l.a.createElement(m.G,{id:"quest",activePanel:"quest",popout:r},l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,null,"\u0412\u0430\u0448\u0438 \u041a\u0432\u0435\u0441\u0442\u044b"),e.user.unusedquests?l.a.createElement(m.i,{style:{fontSize:13,textAlign:"center"}},l.a.createElement(m.s,{onClick:function(t){e.setUnusedQuestsCount(e.user.unusedquests),e.go(t)},"data-to":"unusedquests"},"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c ",l.a.createElement("span",{style:{fontWeight:"bold",fontSize:15,color:"#2975CC"}},e.user.unusedquests)," \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043a\u0432\u0435\u0441\u0442\u0430(\u043e\u0432)")):"",l.a.createElement(m.n,null,i?i.map(function(e,t){return l.a.createElement(W,{key:t,handleClick:h,popoutType:"SET_QUEST_DONE",quest:e,shop:!1})}):l.a.createElement(m.C,{size:"medium",style:{marginTop:40}}))))},G=n(103),H=n.n(G),M=n(104),P=n.n(M),Y=function(e){var t=e.user,n=e.id,r=e.fetchedUser,o=e.go,c=Object(a.useState)(null),s=Object(d.a)(c,2),i=s[0],u=s[1];console.log("fetcheduser = ",r),console.log("user = ",t);var p=function(){i||u(l.a.createElement(m.B,{layout:"vertical",before:l.a.createElement(P.a,{style:{color:"#f0945b"}}),onActionClick:function(){return console.log("click")},onClose:function(){return u(null)}},"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u0438 \u0443\u0432\u0435\u043b\u0438\u0447\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u043a\u0430\u0440\u043c\u044b, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0448\u0435 \u043f\u043e\u0434\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0440\u0435\u0439\u0442\u0438\u043d\u0433\u0430!"))};return l.a.createElement(m.G,{id:n,activePanel:n},l.a.createElement(m.t,{id:n,style:{position:"relative",height:"calc(100vh - 70px)"}},l.a.createElement(m.u,null,"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(m.c,{src:"".concat(t?t.photo:"https://sun9-3.userapi.com/c639822/v639822055/55abd/Y4nIaWtNYVI.jpg"),size:120})),l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center",fontWeight:"bold",fontSize:"23px"}},r?"".concat(t.first_name," ").concat(t.last_name):"Name Surname"),l.a.createElement(m.i,{style:{width:"calc(100% - 32px)",textAlign:"center",fontWeight:"bold"}},t.level," \u0423\u0420\u041e\u0412\u0415\u041d\u042c"),l.a.createElement(m.i,null,l.a.createElement(m.q,{header:"".concat(t.currentlvl,"/").concat(t.maxlvlpoints)},l.a.createElement("div",{style:{background:"#EBEDF0",width:"100%",height:4,borderRadius:10}},l.a.createElement("div",{style:{width:"".concat(Math.floor(t.currentlvl/t.maxlvlpoints*100),"%"),background:"#77ba7c",height:"100%",borderRadius:10}})))),l.a.createElement(m.A,null),l.a.createElement(m.n,{separator:"hide",header:l.a.createElement(m.o,null,"\u041c\u043e\u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438")},l.a.createElement(m.f,null,l.a.createElement(m.e,{size:"1",mode:"shadow",style:{width:"calc(100% - 10px)",height:"120px",padding:"5px",borderRadius:5}},l.a.createElement(m.o,{mode:"secondary",onClick:function(){console.log("openLife()"),i||u(l.a.createElement(m.B,{layout:"vertical",before:l.a.createElement(H.a,{style:{color:"#ED574A"}}),onActionClick:function(){return console.log("click")},onClose:function(){return u(null)}},"\u0416\u0438\u0437\u043d\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0435\u043c \u0437\u0434\u043e\u0440\u043e\u0432\u044c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"))},aside:l.a.createElement("div",{style:{display:"flex",fontWeight:"bold",alignItems:"center"}},l.a.createElement(m.q,{style:{marginRight:20}},l.a.createElement("div",{style:{background:"#EBEDF0",width:130,height:4,borderRadius:10,zIndex:10}},l.a.createElement("div",{style:{width:"".concat(Math.floor(t.karma/100*130),"px"),background:"#ed574a",height:"100%",borderRadius:10}}))),l.a.createElement("div",{style:{color:"#99A2AD",width:70,display:"flex",justifyContent:"flex-end"}},t.karma,"/100"))},l.a.createElement("span",null,"\u0416\u0438\u0437\u043d\u0438")),l.a.createElement(m.A,null),l.a.createElement(m.o,{mode:"secondary",onClick:function(){i||u(l.a.createElement(m.B,{layout:"vertical",before:l.a.createElement(z.a,{style:{color:"#3F8AE0"}}),onActionClick:function(){return console.log("click")},onClose:function(){return u(null)}},"\u041c\u0430\u043d\u0430 \u043a\u0430\u043a \u0440\u0435\u0441\u0443\u0440\u0441 \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0438\u0437\u0440\u0430\u0441\u0445\u043e\u0434\u0443\u0435\u0442\u0441\u044f, \u0431\u0443\u0434\u044c\u0442\u0435 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u044b \u0438 \u0432\u043e\u0432\u0440\u0435\u043c\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0439\u0442\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f!"))},aside:l.a.createElement("div",{style:{display:"flex",fontWeight:"bold",alignItems:"center"}},l.a.createElement("div",{style:{marginRight:20}},l.a.createElement(m.x,{value:t.mana,style:{zIndex:10,width:130}})),l.a.createElement("div",{style:{color:"#99A2AD",width:70,display:"flex",justifyContent:"flex-end"}},t.mana,"/100"))},l.a.createElement("span",null,"\u041c\u0430\u043d\u0430")),l.a.createElement(m.A,null),l.a.createElement(m.o,{mode:"secondary",onClick:p,aside:l.a.createElement("div",{style:{display:"flex",fontWeight:"bold",alignItems:"center"}},l.a.createElement("div",{style:{color:"#99A2AD"}},t.karma))},l.a.createElement("span",{onClick:p},"\u041a\u0430\u0440\u043c\u0430"))))),l.a.createElement(m.i,{style:{position:"absolute",top:60,right:0,color:"#2975CC"},onClick:o,"data-to":"settings"},l.a.createElement(b.a,null)),i))},J=function(e){return l.a.createElement("div",{style:{padding:10}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:1,height:"40px",fontSize:"25px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:10}},e.user.position),l.a.createElement("div",{style:{flex:2,marginRight:10}},l.a.createElement(m.c,{src:"".concat(e.user.photo),size:40})),l.a.createElement("div",{style:{flex:5,display:"flex",alignItems:"center",fontWeight:600}},e.user.first_name," ",e.user.last_name),l.a.createElement("div",{style:{flex:1.5,display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:600,color:"#2975CC",marginRight:5}},e.user.countKarma)),l.a.createElement("div",{style:{marginTop:10}},l.a.createElement(m.A,null)))},X=function(e){var t=e.id,n=e.fetchedUser,r=Object(a.useState)(null),o=Object(d.a)(r,2),c=o[0],s=o[1],i=Object(a.useState)(null),u=Object(d.a)(i,2),p=u[0],E=u[1];return Object(a.useEffect)(function(){f.a.get("".concat(N,"/getLeaders")).then(function(e){console.log("LEADERS = ",e),s(e.data.leaders);for(var t=0;t<e.data.leaders.length;t++)if(e.data.leaders[t].id==n.id){E(t+1);break}})},[]),l.a.createElement(m.G,{id:t,activePanel:t},l.a.createElement(m.t,{id:t,style:{position:"relative",height:"calc(100vh - 70px)"}},l.a.createElement(m.u,null,"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043b\u0438\u0434\u0435\u0440\u043e\u0432"),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041f\u043e \u0443\u0440\u043e\u0432\u043d\u044e")},c?l.a.createElement(m.f,{style:{margin:0}},l.a.createElement(m.e,{size:"1",mode:"shadow",style:{width:"100%",minHeight:200,marginBottom:50,borderRadius:5}},c.map(function(e,t){return t<=9?l.a.createElement(J,{user:{first_name:e.first_name,last_name:e.last_name,photo:e.photo,countKarma:e.level,position:t+1}}):void 0}))):l.a.createElement(m.C,{size:"medium",style:{marginTop:40}})),l.a.createElement(m.i,{style:{position:"absolute",bottom:0,left:0,width:"calc(100% - 32px)",textAlign:"center",fontWeight:"bold"}},"\u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e: ",l.a.createElement("span",{style:{fontSize:"25px",color:"#2975CC",marginRight:"5px"}},p))))},$=[{text:"\u0412\u044b\u043f\u0438\u0442\u044c \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manabonus:100,expbonus:15,manadowner:0,expdowner:0}],Z=function(e){var t=e.id,n=e.fetchedUser,r=Object(a.useState)(null),o=Object(d.a)(r,2),c=o[0],s=o[1],i=Object(a.useState)($),p=Object(d.a)(i,2),E=p[0],g=(p[1],Object(a.useState)(null)),y=Object(d.a)(g,2),b=y[0],h=y[1],x=Object(a.useState)(!1),v=Object(d.a)(x,2),C=v[0],j=v[1];Object(a.useEffect)(function(e){u.a.subscribe(function(e){switch(console.log("BRIDGE_EVENT = ",e),e.detail.type){case"VKWebAppOpenPayFormResult":console.log(e.detail.data.status),e.detail.data.status&&j(!0);break;default:console.log("RANDOM SHIT = ",e.detail.type)}})},[]),Object(a.useEffect)(function(){C&&(console.log("NiCE DAY ",b),f.a.post("".concat(N,"/addQuestToUser"),{user_id:n.id,text:b.text,description:b.description,manaBonus:b.manabonus,expBonus:b.expbonus,manaDowner:b.manadowner,expDowner:b.expdowner}).then(function(e){h(null),j(!1)}))},[C]);var w=function(e,t){switch(e){case"SET_QUEST_BUY":console.log("lastQuest = ",t),h(t),s(l.a.createElement(m.a,{onClose:function(){return s(null)}},l.a.createElement(m.b,{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:"20px",color:"black"}},t.text),l.a.createElement("span",{style:{display:"block",color:"grey",fontSize:"14px",textAlign:"center",marginTop:"10px"}},t.description))),l.a.createElement(m.b,{autoclose:!0},l.a.createElement(m.d,{size:"xl",onClick:function(){u.a.send("VKWebAppOpenPayForm",{app_id:7416969,action:"pay-to-user",params:{user_id:26267723,amount:1}})}},"\u041a\u0443\u043f\u0438\u0442\u044c"))));break;default:alert("shit happens")}};return l.a.createElement(m.G,{id:t,activePanel:t,popout:c},l.a.createElement(m.t,{id:t},l.a.createElement(m.u,null,"\u0422\u0430\u0432\u0435\u0440\u043d\u0430"),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041f\u041b\u0410\u0422\u041d\u042b\u0415 \u041a\u0412\u0415\u0421\u0422\u042b")},E?E.map(function(e,t){return l.a.createElement(W,{key:t,handleClick:w,popoutType:"SET_QUEST_BUY",quest:e,shop:!0})}):"Loading")))},ee=function(e){var t=Object(a.useState)("quest"),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),s=Object(d.a)(c,2),i=(s[0],s[1],Object(a.useState)(e.user)),u=Object(d.a)(i,2),p=u[0],E=u[1],g=Object(a.useState)(!1),y=Object(d.a)(g,2),b=y[0],h=y[1],v=function(e){console.log(e.currentTarget.dataset.story),o(e.currentTarget.dataset.story)};return Object(a.useEffect)(function(){console.log("Effect = ",p),console.log(b),b&&f()("".concat(N,"/getUserById/").concat(p.id)).then(function(e){console.log(e),console.log("NEW USER = ",e.data[0]),E(e.data[0]),h(!1)})},[b]),l.a.createElement(m.t,{id:e.id,style:{marginTop:-57}},l.a.createElement(m.j,{activeStory:r,tabbar:l.a.createElement(m.E,null,l.a.createElement(m.F,{onClick:v,selected:"quest"===r,"data-story":"quest",text:"\u041a\u0432\u0435\u0441\u0442\u044b"},l.a.createElement(C.a,null)),l.a.createElement(m.F,{onClick:v,selected:"leaderBoard"===r,"data-story":"leaderBoard",text:"\u041b\u0438\u0434\u0435\u0440\u044b"},l.a.createElement(x.a,null)),l.a.createElement(m.F,{onClick:v,selected:"payment"===r,"data-story":"payment",text:"\u0422\u0430\u0432\u0435\u0440\u043d\u0430"},l.a.createElement(w.a,null)),l.a.createElement(m.F,{onClick:v,selected:"profile"===r,"data-story":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(O.a,null)))},l.a.createElement(F,{id:"quest",fetchedUser:e.fetchedUser,user:p,go:e.go,setNeedUpdate:h,setUnusedQuestsCount:e.setUnusedQuestsCount,setQuestsApp:e.setQuestsApp}),l.a.createElement(X,{id:"leaderBoard",fetchedUser:e.fetchedUser}),l.a.createElement(Z,{id:"payment",fetchedUser:e.fetchedUser}),l.a.createElement(Y,{user:p,id:"profile",fetchedUser:e.fetchedUser,go:e.go})))},te=(n(55),n(50),n(23)),ne=n.n(te),ae=(Object(m.H)(),n(209),Object(m.H)()),le=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),s=Object(d.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(1),E=Object(d.a)(p,2),y=(E[0],E[1]),b=Object(a.useState)(-1),h=Object(d.a)(b,2),x=h[0],v=h[1];return l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,{left:l.a.createElement(m.v,{onClick:e.go,"data-to":"start"},ae===m.p?l.a.createElement(g.a,null):l.a.createElement(ne.a,null))},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement(m.k,{style:{}},l.a.createElement(m.l,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u0435\u0441(\u043a\u0433)",style:{},bottom:null==r||r?"":l.a.createElement("div",{style:{color:"#E64646"}},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u0435\u0441")},l.a.createElement(m.r,{status:null==r||r?"":"error",type:"number",placeholder:"\u0412\u0430\u0448 \u0412\u0435\u0441",value:null==r?"":r,onChange:function(e){return o(0==Math.min(Number(e.target.value),250)?"":String(Math.min(Number(e.target.value),250)))}})),l.a.createElement(m.l,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442(\u0441\u043c)",style:{},bottom:null==i||i?"":l.a.createElement("div",{style:{color:"#E64646"}},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0440\u043e\u0441\u0442")},l.a.createElement(m.r,{status:null==i||i?"":"error",type:"number",placeholder:"\u0412\u0430\u0448 \u0440\u043e\u0441\u0442",value:null==i?"":i,onChange:function(e){return u(0==Math.min(Number(e.target.value),250)?"":String(Math.min(Number(e.target.value),250)))}})),l.a.createElement(m.l,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0438\u043f \u0442\u0435\u043b\u043e\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u044f",bottom:"\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043e\u043f\u0438\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0412\u0430\u0448 \u0438\u043d\u0434\u0435\u043a\u0441 \u043c\u0430\u0441\u0441\u044b \u0442\u0435\u043b\u0430"},l.a.createElement("div",null,l.a.createElement(m.y,{name:"radio",value:"1",description:"\u043c\u0430\u043b\u043e \u0436\u0438\u0440\u0430, \u0442\u043e\u0449\u0438\u0435 \u043c\u0443\u0441\u043a\u0443\u043b\u044b",defaultChecked:!0,onClick:function(){return y(1)}},"\u0425\u0443\u0434\u043e\u0435"),l.a.createElement(m.y,{name:"radio",value:"2",description:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u043c\u0435\u0436\u0434\u0443 \u0436\u0438\u0440\u043e\u043c \u0438 \u043c\u0443\u0441\u043a\u0443\u043b\u0430\u043c\u0438",onClick:function(){return y(2)}},"\u041e\u0431\u044b\u0447\u043d\u043e\u0435"),l.a.createElement(m.y,{name:"radio",value:"3",description:"\u041c\u0443\u0441\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430, \u043e\u0442\u0441\u0442\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0436\u0438\u0440\u0430",onClick:function(){return y(3)}},"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u0435"),l.a.createElement(m.y,{name:"radio",value:"4",description:"\u0422\u0435\u043b\u043e \u043a\u0440\u0443\u0433\u043b\u043e\u0435 \u0438 \u043c\u044f\u0433\u043a\u043e\u0435, \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0436\u0438\u0440\u043e\u0432\u043e\u0439 \u0442\u043a\u0430\u043d\u0438",onClick:function(){return y(4)}},"\u041f\u043e\u043b\u043d\u043e\u0435"))),l.a.createElement(m.l,{bottom:0==x?l.a.createElement("div",{style:{color:"#E64646"}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443"):""},l.a.createElement(m.h,{onClick:function(){return v(1==x?0:1)}},"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")),l.a.createElement(m.i,null,l.a.createElement(m.d,{size:"xl",stretched:!0,style:{},onClick:function(){r?i?-1!=x&&0!=x?(console.log(x),f.a.post("".concat(N,"/createNewUser"),{id:e.fetchedUser.id,first_name:e.fetchedUser.first_name,last_name:e.fetchedUser.last_name,photo_100:e.fetchedUser.photo_100}).then(function(t){e.setUser(t.data),f.a.post("".concat(N,"/addQuestToUser"),{user_id:e.fetchedUser.id,text:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c 20 \u043f\u0440\u0438\u0441\u0435\u0434\u0430\u043d\u0438\u0439",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u04351",manaBonus:5,expBonus:10,manaDowner:-5,expDowner:-10}).then(function(t){f.a.post("".concat(N,"/addQuestToUser"),{user_id:e.fetchedUser.id,text:"\u0412\u044b\u043f\u0438\u0442\u044c 1,5 \u043b\u0438\u0442\u0440\u0430 \u0432\u043e\u0434\u044b",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u04352",manaBonus:15,expBonus:5,manaDowner:-20,expDowner:-5}).then(function(t){f.a.post("".concat(N,"/addQuestToUser"),{user_id:e.fetchedUser.id,text:"\u0421\u044a\u0435\u0441\u0442\u044c 1 \u0444\u0440\u0443\u043a\u0442",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u04353",manaBonus:5,expBonus:5,manaDowner:0,expDowner:0}).then(function(t){e.goId("home")})})})})):v(0):u(""):o("")}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))},re=(Object(m.H)(),function(e){return l.a.createElement(m.t,{id:e.id,style:{marginTop:-70}},l.a.createElement(m.n,{separator:"hide"},l.a.createElement(m.m,{slideWidth:"100%",style:{height:"100vh"},bullets:"dark",align:"center"},l.a.createElement("div",{className:"pres_block",style:{background:"#db4e44",color:"white"}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2274/2274846.svg",alt:""}),"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0439 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement("div",{className:"pres_block",style:{background:"#44a1db",color:"white"}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2736/2736289.svg",alt:""}),"\u041f\u043e\u0434\u043d\u0438\u043c\u0430\u0439\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043b\u0438\u0434\u0435\u0440\u043e\u0432"),l.a.createElement("div",{className:"pres_block",style:{background:"#44db88",color:"white"}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/706/706164.svg",alt:""}),"\u041d\u0430\u0447\u043d\u0438 \u0432\u0435\u0441\u0442\u0438 \u0437\u0434\u043e\u0440\u043e\u0432\u044b\u0439 \u043e\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043d\u0438"),l.a.createElement("div",{className:"pres_block",style:{background:"#fff",fontSize:30}},"\u0421\u0442\u0430\u043d\u044c \u043b\u0443\u0447\u0448\u0435",l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(m.d,{size:"xl",stretched:!0,style:{},onClick:e.go,"data-to":"reg"},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c"))))),l.a.createElement(m.n,null))}),oe=Object(m.H)(),ce=function(e){return console.log(e),l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,{left:l.a.createElement(m.v,{onClick:e.go,"data-to":"home"},oe===m.p?l.a.createElement(g.a,null):l.a.createElement(ne.a,null))},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041e\u0431\u0449\u0438\u0435")},l.a.createElement(m.g,{asideContent:l.a.createElement(m.D,{defaultChecked:!0})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u044c"),description:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f, \u0444\u0430\u043c\u0438\u043b\u0438\u044f, \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430, \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u043a\u0432\u0435\u0441\u0442\u044b",separator:"show"},l.a.createElement(m.g,{indicator:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445",expandable:!0},"\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")))},se=function(e){return l.a.createElement(m.t,{id:e.id})},ie=n(105),ue=n(106);function de(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return me(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return me(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l,r=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,l=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw l}}}}function me(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var pe=Object(m.H)(),fe=[{text:"10 \u043e\u0442\u0436\u0438\u043c\u0430\u043d\u0438\u0439 \u0438 100 \u0441\u043a\u0430\u043a\u0430\u043b\u043e\u043a",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:-15,expBonus:15,manaDowner:0,expDowner:0},{text:"\u041f\u043e\u0436\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u0431\u0440\u0430 \u0431\u043b\u0438\u0437\u043a\u043e\u043c\u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:5,expBonus:5,manaDowner:0,expDowner:0},{text:"\u0414\u044b\u0445\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0433\u0438\u043c\u043d\u0430\u0441\u0442\u0438\u043a\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:-10,expBonus:15,manaDowner:0,expDowner:0},{text:"\u041a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u0430\u044f \u0433\u0438\u043c\u043d\u0430\u0441\u0442\u0438\u043a\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:-10,expBonus:15,manaDowner:0,expDowner:0},{text:"\u0421\u044a\u0435\u0441\u0442\u044c \u0441\u0430\u043b\u0430\u0442",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:10,expBonus:5,manaDowner:0,expDowner:0},{text:"\u041b\u0435\u0447\u044c \u0432 23:00",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:100,expBonus:5,manaDowner:0,expDowner:-5},{text:"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u043b\u0435\u0441\u0443",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:20,expBonus:10,manaDowner:0,expDowner:0}],Ee=function(e){var t=Object(a.useState)(new Set),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(0),s=Object(d.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(fe),E=Object(d.a)(p,2),y=E[0],b=E[1],h=function(t){var n=r;n.delete(t)?u(i-1):i<=e.unusedQuestsCount-1&&(u(i+1),n=n.add(t)),o(n)},x=function(){var t,n=[],a=de(r);try{for(a.s();!(t=a.n()).done;){var l=t.value;n.push(l)}}catch(o){a.e(o)}finally{a.f()}!function e(t,n,a,l,r){t.length-1<n?f.a.post("".concat(N,"/setUser"),{newUnusedQuests:l-n,user_id:a}).then(function(e){r("home")}):f.a.post("".concat(N,"/addQuestToUser"),Object(ue.a)({},fe[t[n]],{user_id:a})).then(function(o){console.log("r = ",o.data),e(t,n+1,a,l,r)})}(n,0,e.fetchedUser.id,e.unusedQuestsCount,e.goId)};return Object(a.useEffect)(function(){for(var t=Object(ie.a)(y),n=0;n<y.length;n++){t[n].useable=!0;for(var a=0;a<e.questsApp.length;a++)if(y[n].text==e.questsApp[a].text){t[n].useable=!1;break}}b(t)},[e.questsApp]),l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,{left:l.a.createElement(m.v,{onClick:e.go,"data-to":"home"},pe===m.p?l.a.createElement(g.a,null):l.a.createElement(ne.a,null))},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0432\u0435\u0441\u0442"),l.a.createElement(m.i,{style:{fontSize:13,textAlign:"center"}},l.a.createElement("span",null," \u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c ",l.a.createElement("span",{style:{fontWeight:"bold",fontSize:15,color:"#2975CC"}},e.unusedQuestsCount-i)," \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043a\u0432\u0435\u0441\u0442\u0430(\u043e\u0432)")),l.a.createElement(m.n,null,y.map(function(t,n){if(t.useable)return!r.has(n)&&i>=e.unusedQuestsCount?l.a.createElement(m.g,{style:{},onClick:function(){return h(n)}},t.text):l.a.createElement(m.g,{selectable:!0,style:{},onClick:function(){return h(n)}},t.text)})),l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(m.d,{mode:i>0?"primary":"secondary",size:"xl",onClick:function(){return x()}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")))},ge=function(e){var t=Object(a.useState)("load"),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),i=Object(d.a)(c,2),u=i[0],p=i[1],E=Object(a.useState)(null),g=Object(d.a)(E,2),y=g[0],b=g[1],h=Object(a.useState)(l.a.createElement(m.z,null)),x=Object(d.a)(h,2),v=x[0],C=x[1],j=Object(a.useState)([]),w=Object(d.a)(j,2),k=w[0],O=w[1],S=Object(a.useState)(0),U=Object(d.a)(S,2),_=U[0],A=U[1];Object(a.useEffect)(function(){s.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":p(e.detail.data),console.log("User = ",e.detail.data),console.log("UserId = ",e.detail.data.id);break;default:console.log(e.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{})},[]),Object(a.useEffect)(function(){u&&f()("".concat(N,"/getUserById/").concat(u.id)).then(function(e){C(null),console.log("response = ",e),0==e.data.length?o("start"):(b(e.data[0]),o("home"))})},[u]);var B=function(e){console.log(e.currentTarget.dataset.to),o(e.currentTarget.dataset.to)},D=function(e){o(e)};return l.a.createElement(m.G,{activePanel:r,popout:v},l.a.createElement(ee,{id:"home",go:B,fetchedUser:u,user:y,setUnusedQuestsCount:A,setQuestsApp:O}),l.a.createElement(le,{id:"reg",go:B,fetchedUser:u,setUser:b,goId:D}),l.a.createElement(re,{id:"start",go:B,fetchedUser:u}),l.a.createElement(ce,{id:"settings",go:B}),l.a.createElement(se,{id:"load"}),l.a.createElement(Ee,{id:"unusedquests",questsApp:k,go:B,unusedQuestsCount:_,fetchedUser:u,goId:D}))};s.a.send("VKWebAppInit",{}),u.a.send("VKWebAppInit",{}),u.a.send("VKWebAppResizeWindow",{width:640,height:800}),o.a.render(l.a.createElement(ge,null),document.getElementById("root"))},50:function(e,t,n){},55:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"}},[[146,1,2]]]);
//# sourceMappingURL=main.5f4d00c0.chunk.js.map