(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,n){e.exports=n(208)},207:function(e,t,n){e.exports={header_panel:"registration_header_panel__28_Qk",avatar_wrapper:"registration_avatar_wrapper__1cUXE"}},208:function(e,t,n){"use strict";n.r(t);n(145),n(170);var a=n(0),l=n.n(a),r=n(26),o=n.n(r),c=n(34),s=n.n(c),i=n(23),u=n.n(i),d=n(7),m=n(1),p=(n(186),n(17)),f=n.n(p),E=n(20),g=n.n(E),y=n(51),h=n.n(y),b=(n(204),n(93)),x=n.n(b),v=(n(205),n(94)),C=n.n(v),j=n(95),w=n.n(j),k=n(96),O=n.n(k),S=n(97),D=n.n(S),_=(n(206),n(98)),B=n.n(_),U={width:"calc(100% - 40px)",border:"none",borderRadius:"5px",padding:"12px",fontSize:"15px",justifyContent:"center",alignItems:"center",paddingLeft:"5px",marginLeft:"10px",height:70,marginBottom:10,display:"flex"},I=function(e){var t=e.quest,n=e.popoutType,r=e.handleClick,o=Object(a.useState)(null),c=Object(d.a)(o,2);c[0],c[1];return l.a.createElement("div",{onClick:function(){return r(n,t)},style:{position:"relative"}},l.a.createElement("div",{style:{background:"white",width:"40px",height:"40px",borderRadius:"50%",position:"absolute",boxShadow:"0 2px 24px 0 rgba(0,0,0,.08), 0 0 2px 0 rgba(0,0,0,.08)",top:5,left:15,color:"#2975CC",display:"flex",justifyContent:"space-around",alignItems:"center",zIndex:3,fontWeight:"bold"}},t.completed?l.a.createElement(D.a,null):l.a.createElement(B.a,null)),t.completed?"":l.a.createElement("div",{style:{position:"absolute",top:17,left:60,zIndex:3,fontSize:16,fontWeight:"bold",color:"#2975CC"}}),l.a.createElement("div",{style:{position:"absolute",top:17,right:25,zIndex:3,fontWeight:"bold"}},l.a.createElement("span",{style:{color:"#2975CC"}},"+",t.manabonus)," / ",l.a.createElement("span",{style:{color:"#77ba7c"}},"+",t.expbonus)),l.a.createElement(m.e,{size:"1",mode:"shadow",style:U},l.a.createElement("div",{style:{}},t.text)))},A=n(52),z=n.n(A),T="https://igratvoiput.ru:3000",W=n(99),Q=n.n(W),q=n(100),N=n.n(q),R=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),s=Object(d.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(!1),E=Object(d.a)(p,2),g=E[0],y=E[1];Object(a.useEffect)(function(){(g||null==i)&&f.a.get("".concat(T,"/getQuestsById/").concat(e.user.id)).then(function(t){console.log("quests = ",t.data.quests),u(t.data.quests),e.setQuestsApp(t.data.quests),e.setNeedUpdate(!0),y(!1)})},[g]);var h=function(t){console.log("QUEST ",t),console.log("USER =",e.user),t.completed||f.a.post("".concat(T,"/setQuest"),{user_id:t.user_id,text:t.text,completed:!0,user:e.user,manaBonus:t.manabonus,expBonus:t.expbonus}).then(function(t){console.log("HANDLECLICK = ",t),e.user.level!=t.data.newLvl&&0!=t.data.newLvl&&b("NEW_LVL"),y(!0),e.setNeedUpdate(!0)})},b=function(e,t){switch(e){case"SET_QUEST_DONE":t.completed?o(l.a.createElement(m.a,{onClose:function(){return o(null)}},l.a.createElement(m.b,{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(z.a,null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:"20px",color:"black"}},t.text),l.a.createElement("span",{style:{display:"block",color:"grey",fontSize:"14px",textAlign:"center",marginTop:"10px"}},t.description))),l.a.createElement(m.b,{autoclose:!0},l.a.createElement(m.d,{size:"xl",mode:"secondary"},"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e!")))):o(l.a.createElement(m.a,{onClose:function(){return o(null)}},l.a.createElement(m.b,{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(Q.a,null)),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:"20px",color:"black"}},t.text),l.a.createElement("span",{style:{display:"block",color:"grey",fontSize:"14px",textAlign:"center",marginTop:"10px"}},t.description))),l.a.createElement(m.b,{autoclose:!0},l.a.createElement(m.d,{size:"xl",onClick:function(){return h(t)}},"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u043a\u0430\u043a \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u043e\u0435"))));break;case"NEW_LVL":o(l.a.createElement(m.w,{alignY:"center",alignX:"center"},l.a.createElement("div",{onClick:function(){return o(null)},style:{background:"white",width:"calc(100% - 132px)",padding:10,height:200,borderRadius:5,boxShadow:"0 8px 8px 0 rgba(0,0,0,.16), 0 0 4px 0 rgba(0,0,0,.08)"}},l.a.createElement("div",{style:{width:"100%",height:50,display:"flex",justifyContent:"center",alignItems:"center",fontSize:18,fontWeight:"bold"}},"\u0412\u044b \u0434\u043e\u0441\u0442\u0438\u0433\u043b\u0438 6 \u0443\u0440\u043e\u0432\u043d\u044f!"),l.a.createElement("div",{style:{marginTop:10,color:"#2975CC"}},l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(N.a,null)),l.a.createElement("div",{style:{color:"black"}},l.a.createElement("div",null,"\u041d\u043e\u0432\u043e\u0433\u043e:"),l.a.createElement("div",null,"+2 \u043a \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u043a\u043e\u043b-\u0432\u0443 \u043a\u0432\u0435\u0441\u0442\u043e\u0432"))),l.a.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement(m.d,{size:"l",onClick:function(){return o(null)},style:{marginTop:10}},"\u041a\u0440\u0443\u0442\u043e!")))));break;default:alert("some problems with popoutType")}};return l.a.createElement(m.E,{id:"quest",activePanel:"quest",popout:r},l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,null,"\u0412\u0430\u0448\u0438 \u041a\u0432\u0435\u0441\u0442\u044b"),e.user.unusedquests?l.a.createElement(m.i,{style:{fontSize:13,textAlign:"center"}},l.a.createElement(m.s,{onClick:function(t){e.setUnusedQuestsCount(e.user.unusedquests),e.go(t)},"data-to":"unusedquests"},"\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c ",l.a.createElement("span",{style:{fontWeight:"bold",fontSize:15,color:"#2975CC"}},e.user.unusedquests)," \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043a\u0432\u0435\u0441\u0442\u0430(\u043e\u0432)")):"",l.a.createElement(m.n,null,i?i.map(function(e,t){return l.a.createElement(I,{key:t,handleClick:b,popoutType:"SET_QUEST_DONE",quest:e})}):"Loading")))},L=function(e){var t=e.user,n=e.id,a=e.fetchedUser,r=e.go;return console.log("fetcheduser = ",a),console.log("user = ",t),l.a.createElement(m.E,{id:n,activePanel:n},l.a.createElement(m.t,{id:n,style:{position:"relative",height:"calc(100vh - 70px)"}},l.a.createElement(m.u,null,"\u041c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(m.c,{src:"".concat(t?t.photo:"https://sun9-3.userapi.com/c639822/v639822055/55abd/Y4nIaWtNYVI.jpg"),size:120})),l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center",fontWeight:"bold",fontSize:"23px"}},a?"".concat(t.first_name," ").concat(t.last_name):"Name Surname"),l.a.createElement(m.i,{style:{width:"calc(100% - 32px)",textAlign:"center",fontWeight:"bold"}},t.level," \u0423\u0420\u041e\u0412\u0415\u041d\u042c"),l.a.createElement(m.i,null,l.a.createElement(m.q,{header:"".concat(t.currentlvl,"/").concat(t.maxlvlpoints)},l.a.createElement("div",{style:{background:"#EBEDF0",width:"100%",height:4,borderRadius:10}},l.a.createElement("div",{style:{width:"".concat(Math.floor(t.currentlvl/t.maxlvlpoints*100),"%"),background:"#77ba7c",height:"100%",borderRadius:10}})))),l.a.createElement(m.A,null),l.a.createElement(m.n,{separator:"hide",header:l.a.createElement(m.o,null,"\u041c\u043e\u0438 \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0438\u0441\u0442\u0438\u043a\u0438")},l.a.createElement(m.f,null,l.a.createElement(m.e,{size:"1",mode:"shadow",style:{width:"calc(100% - 10px)",height:"120px",padding:"5px",borderRadius:5}},l.a.createElement(m.o,{mode:"secondary",aside:l.a.createElement("div",{style:{display:"flex",fontWeight:"bold",alignItems:"center"}},l.a.createElement("div",{style:{marginRight:20}},l.a.createElement(m.x,{value:t.karma,style:{zIndex:10,width:130}})),l.a.createElement("div",{style:{color:"#99A2AD",width:70,display:"flex",justifyContent:"flex-end"}},t.karma,"/100"))},"\u0416\u0438\u0437\u043d\u0438"),l.a.createElement(m.A,null),l.a.createElement(m.o,{mode:"secondary",aside:l.a.createElement("div",{style:{display:"flex",fontWeight:"bold",alignItems:"center"}},l.a.createElement("div",{style:{marginRight:20}},l.a.createElement(m.x,{value:t.mana,style:{zIndex:10,width:130}})),l.a.createElement("div",{style:{color:"#99A2AD",width:70,display:"flex",justifyContent:"flex-end"}},t.mana,"/100"))},"\u041c\u0430\u043d\u0430"),l.a.createElement(m.A,null),l.a.createElement(m.o,{mode:"secondary",aside:l.a.createElement("div",{style:{display:"flex",fontWeight:"bold",alignItems:"center"}},l.a.createElement("div",{style:{color:"#99A2AD"}},t.karma))},"\u041a\u0430\u0440\u043c\u0430")))),l.a.createElement(m.i,{style:{position:"absolute",bottom:0,left:0,width:"calc(100% - 32px)",textAlign:"center",fontWeight:"bold"}},l.a.createElement("span",{style:{fontSize:"25px",color:"#2975CC",marginRight:"5px"}},"100")," \u043c\u0435\u0441\u0442\u043e \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043a\u0430\u0440\u043c\u044b"),l.a.createElement(m.i,{style:{position:"absolute",top:60,right:0,color:"#2975CC"},onClick:r,"data-to":"settings"},l.a.createElement(h.a,null))))},K=function(e){return l.a.createElement("div",{style:{padding:10}},l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:1,height:"40px",fontSize:"25px",display:"flex",justifyContent:"center",alignItems:"center",marginRight:10}},e.user.position),l.a.createElement("div",{style:{flex:1,marginRight:10}},l.a.createElement(m.c,{src:"".concat(e.user.photo),size:40})),l.a.createElement("div",{style:{flex:5,display:"flex",alignItems:"center",fontWeight:600}},e.user.first_name," ",e.user.last_name),l.a.createElement("div",{style:{flex:1.5,display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:600,color:"#2975CC",marginRight:5}},e.user.countKarma)),l.a.createElement("div",{style:{marginTop:10}},l.a.createElement(m.A,null)))},F=function(e){var t=e.id;return l.a.createElement(m.E,{id:t,activePanel:t},l.a.createElement(m.t,{id:t,style:{position:"relative",height:"calc(100vh - 70px)"}},l.a.createElement(m.u,{left:l.a.createElement("div",{style:{width:35,height:35,borderRadius:"50%",border:"3px solid #2975CC",marginLeft:10,fontWeight:"bold",display:"flex",justifyContent:"center",alignItems:"center",fontSize:20}},"6")},"\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u043b\u0438\u0434\u0435\u0440\u043e\u0432"),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041f\u043e \u043a\u0430\u0440\u043c\u0435")},l.a.createElement(m.f,null,l.a.createElement(m.e,{size:"1",mode:"shadow",style:{width:"100%",minHeight:200,marginBottom:50,borderRadius:5}},l.a.createElement(K,{user:{first_name:"\u0421\u0430\u0448\u0430",last_name:"\u0416\u0430\u0431\u043e\u0432\u0438\u0447",photo:"https://sun9-3.userapi.com/c639822/v639822055/55abd/Y4nIaWtNYVI.jpg",countKarma:2e4,position:1}}),l.a.createElement(K,{user:{first_name:"\u0418\u043b\u044c\u044f",last_name:"\u0411\u0435\u043b\u044f\u0435\u0432",photo:"https://sun9-61.userapi.com/c850428/v850428872/14f10b/DuBd53-Om6c.jpg",countKarma:1500,position:2}}),l.a.createElement(K,{user:{first_name:"\u0412\u0438\u043a\u0442\u043e\u0440\u0438\u044f",last_name:"\u0412\u0430\u0434\u0438\u043c\u043e\u0432\u043d\u0430",photo:"https://sun9-10.userapi.com/c851420/v851420604/5bd3f/w5n_viq3MDo.jpg",countKarma:200,position:3}}),l.a.createElement(K,{user:{first_name:"\u0418\u0432\u0430\u043d",last_name:"\u041f\u0435\u0442\u0440\u043e\u0432",photo:"https://upload.wikimedia.org/wikipedia/ru/8/86/%D0%98%D0%B2%D0%B0%D0%BD_%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87_%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B2_%28%D0%BF%D0%B5%D0%B2%D0%B5%D1%86%29.jpg",countKarma:100,position:4}})))),l.a.createElement(m.i,{style:{position:"absolute",bottom:0,left:0,width:"calc(100% - 32px)",textAlign:"center",fontWeight:"bold"}},"\u0412\u0430\u0448\u0435 \u043c\u0435\u0441\u0442\u043e: ",l.a.createElement("span",{style:{fontSize:"25px",color:"#2975CC",marginRight:"5px"}},"1"))))},V=[{text:"\u0412\u044b\u043f\u0438\u0442\u044c \u044d\u043d\u0435\u0440\u0433\u0435\u0442\u0438\u043a",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manabonus:100,expbonus:15,manadowner:0,expdowner:0}],M=function(e){var t=e.id,n=Object(a.useState)(null),r=Object(d.a)(n,2),o=r[0],c=r[1],s=Object(a.useState)(V),i=Object(d.a)(s,2),p=i[0];i[1];Object(a.useEffect)(function(){u.a.subscribe(function(e){switch(console.log("BRIDGE_EVENT = ",e.detail.type),e.detail.type){case"VKWebAppOpenPayFormResult":alert("payFormResult")}})},[]);var f=function(e,t){switch(e){case"SET_QUEST_BUY":c(l.a.createElement(m.a,{onClose:function(){return c(null)}},l.a.createElement(m.b,{style:{width:"100%",display:"flex",justifyContent:"center"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}},l.a.createElement("span",{style:{fontWeight:"bold",fontSize:"20px",color:"black"}},t.text),l.a.createElement("span",{style:{display:"block",color:"grey",fontSize:"14px",textAlign:"center",marginTop:"10px"}},t.description))),l.a.createElement(m.b,{autoclose:!0},l.a.createElement(m.d,{size:"xl",onClick:function(){u.a.send("VKWebAppOpenPayForm",{app_id:7416969,action:"pay-to-user",params:{user_id:477503899,amount:1}})}},"\u041a\u0443\u043f\u0438\u0442\u044c"))));break;default:alert("shit happens")}};return l.a.createElement(m.E,{id:t,activePanel:t,popout:o},l.a.createElement(m.t,{id:t},l.a.createElement(m.u,null,"\u0422\u0430\u0432\u0435\u0440\u043d\u0430"),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041f\u041b\u0410\u0422\u041d\u042b\u0415 \u041a\u0412\u0415\u0421\u0422\u042b")},p?p.map(function(e,t){return l.a.createElement(I,{key:t,handleClick:f,popoutType:"SET_QUEST_BUY",quest:e})}):"Loading")))},P=function(e){var t=Object(a.useState)("quest"),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),s=Object(d.a)(c,2),i=(s[0],s[1],Object(a.useState)(e.user)),u=Object(d.a)(i,2),p=u[0],E=u[1],g=Object(a.useState)(!1),y=Object(d.a)(g,2),h=y[0],b=y[1],v=function(e){console.log(e.currentTarget.dataset.story),o(e.currentTarget.dataset.story)};return Object(a.useEffect)(function(){console.log("Effect = ",p),console.log(h),h&&f()("".concat(T,"/getUserById/").concat(p.id)).then(function(e){console.log(e),console.log("NEW USER = ",e.data[0]),E(e.data[0]),b(!1)})},[h]),l.a.createElement(m.t,{id:e.id,style:{marginTop:-57}},l.a.createElement(m.j,{activeStory:r,tabbar:l.a.createElement(m.C,null,l.a.createElement(m.D,{onClick:v,selected:"quest"===r,"data-story":"quest",text:"\u041a\u0432\u0435\u0441\u0442\u044b"},l.a.createElement(C.a,null)),l.a.createElement(m.D,{onClick:v,selected:"leaderBoard"===r,"data-story":"leaderBoard",text:"\u041b\u0438\u0434\u0435\u0440\u044b"},l.a.createElement(x.a,null)),l.a.createElement(m.D,{onClick:v,selected:"payment"===r,"data-story":"payment",text:"\u0422\u0430\u0432\u0435\u0440\u043d\u0430"},l.a.createElement(w.a,null)),l.a.createElement(m.D,{onClick:v,selected:"profile"===r,"data-story":"profile",text:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"},l.a.createElement(O.a,null)))},l.a.createElement(R,{id:"quest",fetchedUser:e.fetchedUser,user:p,go:e.go,setNeedUpdate:b,setUnusedQuestsCount:e.setUnusedQuestsCount,setQuestsApp:e.setQuestsApp}),l.a.createElement(F,{id:"leaderBoard"}),l.a.createElement(M,{id:"payment"}),l.a.createElement(L,{user:p,id:"profile",fetchedUser:e.fetchedUser,go:e.go})))},Y=(n(53),n(49),n(22)),G=n.n(Y),H=(Object(m.F)(),n(207),Object(m.F)()),J=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),s=Object(d.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(1),E=Object(d.a)(p,2),y=(E[0],E[1]),h=Object(a.useState)(-1),b=Object(d.a)(h,2),x=b[0],v=b[1];return l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,{left:l.a.createElement(m.v,{onClick:e.go,"data-to":"start"},H===m.p?l.a.createElement(g.a,null):l.a.createElement(G.a,null))},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),l.a.createElement(m.k,{style:{}},l.a.createElement(m.l,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u0435\u0441(\u043a\u0433)",style:{},bottom:null==r||r?"":l.a.createElement("div",{style:{color:"#E64646"}},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0432\u0435\u0441")},l.a.createElement(m.r,{status:null==r||r?"":"error",type:"number",placeholder:"\u0412\u0430\u0448 \u0412\u0435\u0441",value:null==r?"":r,onChange:function(e){return o(0==Math.min(Number(e.target.value),250)?"":String(Math.min(Number(e.target.value),250)))}})),l.a.createElement(m.l,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442(\u0441\u043c)",style:{},bottom:null==i||i?"":l.a.createElement("div",{style:{color:"#E64646"}},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0440\u043e\u0441\u0442")},l.a.createElement(m.r,{status:null==i||i?"":"error",type:"number",placeholder:"\u0412\u0430\u0448 \u0440\u043e\u0441\u0442",value:null==i?"":i,onChange:function(e){return u(0==Math.min(Number(e.target.value),250)?"":String(Math.min(Number(e.target.value),250)))}})),l.a.createElement(m.l,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0438\u043f \u0442\u0435\u043b\u043e\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u044f",bottom:"\u041f\u0440\u0438 \u0432\u044b\u0431\u043e\u0440\u0435 \u043e\u043f\u0438\u0440\u0430\u0439\u0442\u0435\u0441\u044c \u043d\u0430 \u0412\u0430\u0448 \u0438\u043d\u0434\u0435\u043a\u0441 \u043c\u0430\u0441\u0441\u044b \u0442\u0435\u043b\u0430"},l.a.createElement("div",null,l.a.createElement(m.y,{name:"radio",value:"1",description:"\u043c\u0430\u043b\u043e \u0436\u0438\u0440\u0430, \u0442\u043e\u0449\u0438\u0435 \u043c\u0443\u0441\u043a\u0443\u043b\u044b",defaultChecked:!0,onClick:function(){return y(1)}},"\u0425\u0443\u0434\u043e\u0435"),l.a.createElement(m.y,{name:"radio",value:"2",description:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441 \u043c\u0435\u0436\u0434\u0443 \u0436\u0438\u0440\u043e\u043c \u0438 \u043c\u0443\u0441\u043a\u0443\u043b\u0430\u043c\u0438",onClick:function(){return y(2)}},"\u041e\u0431\u044b\u0447\u043d\u043e\u0435"),l.a.createElement(m.y,{name:"radio",value:"3",description:"\u041c\u0443\u0441\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430, \u043e\u0442\u0441\u0442\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0436\u0438\u0440\u0430",onClick:function(){return y(3)}},"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u043e\u0435"),l.a.createElement(m.y,{name:"radio",value:"4",description:"\u0422\u0435\u043b\u043e \u043a\u0440\u0443\u0433\u043b\u043e\u0435 \u0438 \u043c\u044f\u0433\u043a\u043e\u0435, \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0436\u0438\u0440\u043e\u0432\u043e\u0439 \u0442\u043a\u0430\u043d\u0438",onClick:function(){return y(4)}},"\u041f\u043e\u043b\u043d\u043e\u0435"))),l.a.createElement(m.l,{bottom:0==x?l.a.createElement("div",{style:{color:"#E64646"}},"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443"):""},l.a.createElement(m.h,{onClick:function(){return v(1==x?0:1)}},"\u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u043d\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0443 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445")),l.a.createElement(m.i,null,l.a.createElement(m.d,{size:"xl",stretched:!0,style:{},onClick:function(){r?i?-1!=x&&0!=x?(console.log(x),f.a.post("".concat(T,"/createNewUser"),{id:e.fetchedUser.id,first_name:e.fetchedUser.first_name,last_name:e.fetchedUser.last_name,photo_100:e.fetchedUser.photo_100}).then(function(t){e.setUser(t.data),f.a.post("".concat(T,"/addQuestToUser"),{user_id:e.fetchedUser.id,text:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c 20 \u043f\u0440\u0438\u0441\u0435\u0434\u0430\u043d\u0438\u0439",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u04351",manaBonus:5,expBonus:10,manaDowner:-5,expDowner:-10}).then(function(t){f.a.post("".concat(T,"/addQuestToUser"),{user_id:e.fetchedUser.id,text:"\u0412\u044b\u043f\u0438\u0442\u044c 1,5 \u043b\u0438\u0442\u0440\u0430 \u0432\u043e\u0434\u044b",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u04352",manaBonus:15,expBonus:5,manaDowner:-20,expDowner:-5}).then(function(t){f.a.post("".concat(T,"/addQuestToUser"),{user_id:e.fetchedUser.id,text:"\u0421\u044a\u0435\u0441\u0442\u044c 1 \u0444\u0440\u0443\u043a\u0442",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u04353",manaBonus:5,expBonus:5,manaDowner:0,expDowner:0}).then(function(t){e.goId("home")})})})})):v(0):u(""):o("")}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))},X=(Object(m.F)(),function(e){return l.a.createElement(m.t,{id:e.id,style:{marginTop:-70}},l.a.createElement(m.n,{separator:"hide"},l.a.createElement(m.m,{slideWidth:"100%",style:{height:"100vh"},bullets:"dark",align:"center"},l.a.createElement("div",{className:"pres_block",style:{background:"#db4e44",color:"white"}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2274/2274846.svg",alt:""}),"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0439 \u0435\u0436\u0435\u0434\u043d\u0435\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u044f"),l.a.createElement("div",{className:"pres_block",style:{background:"#44a1db",color:"white"}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/2736/2736289.svg",alt:""}),"\u041f\u043e\u0434\u043d\u0438\u043c\u0430\u0439\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043b\u0438\u0434\u0435\u0440\u043e\u0432"),l.a.createElement("div",{className:"pres_block",style:{background:"#44db88",color:"white"}},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/706/706164.svg",alt:""}),"\u041d\u0430\u0447\u043d\u0438 \u0432\u0435\u0441\u0442\u0438 \u0437\u0434\u043e\u0440\u043e\u0432\u044b\u0439 \u043e\u0431\u0440\u0430\u0437 \u0436\u0438\u0437\u043d\u0438"),l.a.createElement("div",{className:"pres_block",style:{background:"#fff",fontSize:30}},"\u0421\u0442\u0430\u043d\u044c \u043b\u0443\u0447\u0448\u0435",l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(m.d,{size:"xl",stretched:!0,style:{},onClick:e.go,"data-to":"reg"},"\u041f\u043e\u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c"))))),l.a.createElement(m.n,null))}),$=Object(m.F)(),Z=function(e){return console.log(e),l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,{left:l.a.createElement(m.v,{onClick:e.go,"data-to":"home"},$===m.p?l.a.createElement(g.a,null):l.a.createElement(G.a,null))},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041e\u0431\u0449\u0438\u0435")},l.a.createElement(m.g,{asideContent:l.a.createElement(m.B,{defaultChecked:!0})},"\u0423\u0432\u0435\u0434\u043e\u043c\u043b\u0435\u043d\u0438\u044f")),l.a.createElement(m.n,{header:l.a.createElement(m.o,{mode:"secondary"},"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u044c"),description:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f, \u0444\u0430\u043c\u0438\u043b\u0438\u044f, \u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430, \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0432 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 \u0438 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u043a\u0432\u0435\u0441\u0442\u044b",separator:"show"},l.a.createElement(m.g,{indicator:"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0434\u043b\u044f \u0432\u0441\u0435\u0445",expandable:!0},"\u041b\u0438\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435")))},ee=function(e){return l.a.createElement(m.t,{id:e.id})},te=n(101),ne=n(102);function ae(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(!e)return;if("string"===typeof e)return le(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(e,t)}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l,r=!0,o=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return r=e.done,e},e:function(e){o=!0,l=e},f:function(){try{r||null==a.return||a.return()}finally{if(o)throw l}}}}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var re=Object(m.F)(),oe=[{text:"10 \u043e\u0442\u0436\u0438\u043c\u0430\u043d\u0438\u0439 \u0438 100 \u0441\u043a\u0430\u043a\u0430\u043b\u043e\u043a",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:-15,expBonus:15,manaDowner:0,expDowner:0},{text:"\u041f\u043e\u0436\u0435\u043b\u0430\u0442\u044c \u0434\u043e\u0431\u0440\u0430 \u0431\u043b\u0438\u0437\u043a\u043e\u043c\u0443 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:5,expBonus:5,manaDowner:0,expDowner:0},{text:"\u0414\u044b\u0445\u0430\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u0433\u0438\u043c\u043d\u0430\u0441\u0442\u0438\u043a\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:-10,expBonus:15,manaDowner:0,expDowner:0},{text:"\u041a\u043e\u0433\u043d\u0438\u0442\u0438\u0432\u043d\u0430\u044f \u0433\u0438\u043c\u043d\u0430\u0441\u0442\u0438\u043a\u0430",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:-10,expBonus:15,manaDowner:0,expDowner:0},{text:"\u0421\u044a\u0435\u0441\u0442\u044c \u0441\u0430\u043b\u0430\u0442",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:10,expBonus:5,manaDowner:0,expDowner:0},{text:"\u041b\u0435\u0447\u044c \u0432 23:00",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:100,expBonus:5,manaDowner:0,expDowner:-5},{text:"\u041f\u0440\u043e\u0433\u0443\u043b\u043a\u0430 \u0432 \u043b\u0435\u0441\u0443",description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",manaBonus:20,expBonus:10,manaDowner:0,expDowner:0}],ce=function(e){var t=Object(a.useState)(new Set),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(0),s=Object(d.a)(c,2),i=s[0],u=s[1],p=Object(a.useState)(oe),E=Object(d.a)(p,2),y=E[0],h=E[1],b=function(t){var n=r;n.delete(t)?u(i-1):i<=e.unusedQuestsCount-1&&(u(i+1),n=n.add(t)),o(n)},x=function(){var t,n=[],a=ae(r);try{for(a.s();!(t=a.n()).done;){var l=t.value;n.push(l)}}catch(o){a.e(o)}finally{a.f()}!function e(t,n,a,l,r){t.length-1<n?f.a.post("".concat(T,"/setUser"),{newUnusedQuests:l-n,user_id:a}).then(function(e){r("home")}):f.a.post("".concat(T,"/addQuestToUser"),Object(ne.a)({},oe[t[n]],{user_id:a})).then(function(o){console.log("r = ",o.data),e(t,n+1,a,l,r)})}(n,0,e.fetchedUser.id,e.unusedQuestsCount,e.goId)};return Object(a.useEffect)(function(){for(var t=Object(te.a)(y),n=0;n<y.length;n++){t[n].useable=!0;for(var a=0;a<e.questsApp.length;a++)if(y[n].text==e.questsApp[a].text){t[n].useable=!1;break}}h(t)},[e.questsApp]),l.a.createElement(m.t,{id:e.id},l.a.createElement(m.u,{left:l.a.createElement(m.v,{onClick:e.go,"data-to":"home"},re===m.p?l.a.createElement(g.a,null):l.a.createElement(G.a,null))},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043a\u0432\u0435\u0441\u0442"),l.a.createElement(m.i,{style:{fontSize:13,textAlign:"center"}},l.a.createElement("span",null," \u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c ",l.a.createElement("span",{style:{fontWeight:"bold",fontSize:15,color:"#2975CC"}},e.unusedQuestsCount-i)," \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u043a\u0432\u0435\u0441\u0442\u0430(\u043e\u0432)")),l.a.createElement(m.n,null,y.map(function(t,n){if(t.useable)return!r.has(n)&&i>=e.unusedQuestsCount?l.a.createElement(m.g,{style:{},onClick:function(){return b(n)}},t.text):l.a.createElement(m.g,{selectable:!0,style:{},onClick:function(){return b(n)}},t.text)})),l.a.createElement(m.i,{style:{display:"flex",justifyContent:"center"}},l.a.createElement(m.d,{mode:i>0?"primary":"secondary",size:"xl",onClick:function(){return x()}},"\u0412\u044b\u0431\u0440\u0430\u0442\u044c")))},se=function(e){var t=Object(a.useState)("load"),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)(null),i=Object(d.a)(c,2),u=i[0],p=i[1],E=Object(a.useState)(null),g=Object(d.a)(E,2),y=g[0],h=g[1],b=Object(a.useState)(l.a.createElement(m.z,null)),x=Object(d.a)(b,2),v=x[0],C=x[1],j=Object(a.useState)([]),w=Object(d.a)(j,2),k=w[0],O=w[1],S=Object(a.useState)(0),D=Object(d.a)(S,2),_=D[0],B=D[1];Object(a.useEffect)(function(){s.a.subscribe(function(e){switch(e.detail.type){case"VKWebAppGetUserInfoResult":p(e.detail.data),console.log("User = ",e.detail.data),console.log("UserId = ",e.detail.data.id);break;default:console.log(e.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{})},[]),Object(a.useEffect)(function(){u&&f()("".concat(T,"/getUserById/").concat(u.id)).then(function(e){C(null),console.log("response = ",e),0==e.data.length?o("start"):(h(e.data[0]),o("home"))})},[u]);var U=function(e){console.log(e.currentTarget.dataset.to),o(e.currentTarget.dataset.to)},I=function(e){o(e)};return l.a.createElement(m.E,{activePanel:r,popout:v},l.a.createElement(P,{id:"home",go:U,fetchedUser:u,user:y,setUnusedQuestsCount:B,setQuestsApp:O}),l.a.createElement(J,{id:"reg",go:U,fetchedUser:u,setUser:h,goId:I}),l.a.createElement(X,{id:"start",go:U,fetchedUser:u}),l.a.createElement(Z,{id:"settings",go:U}),l.a.createElement(ee,{id:"load"}),l.a.createElement(ce,{id:"unusedquests",questsApp:k,go:U,unusedQuestsCount:_,fetchedUser:u,goId:I}))};s.a.send("VKWebAppInit",{}),u.a.send("VKWebAppInit",{}),o.a.render(l.a.createElement(se,null),document.getElementById("root"))},49:function(e,t,n){},53:function(e,t,n){e.exports=n.p+"static/media/persik.4e1ec840.png"}},[[144,1,2]]]);
//# sourceMappingURL=main.d774beb4.chunk.js.map