(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(179)},176:function(e,t,a){},178:function(e,t,a){e.exports={header_panel:"registration_header_panel__28_Qk",avatar_wrapper:"registration_avatar_wrapper__1cUXE"}},179:function(e,t,a){"use strict";a.r(t);a(135),a(160);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=a(24),o=a.n(i),s=a(69),m=a(70),u=a(74),d=a(71),p=a(75),h=a(4),E=(a(175),function(e){var t=e.id,a=e.go,n=e.fetchedUser;return r.a.createElement(h.j,{id:t},r.a.createElement(h.k,null,"Example"),n&&r.a.createElement(h.f,{title:"User Data Fetched with VK Connect"},r.a.createElement(h.i,{before:n.photo_200?r.a.createElement(h.a,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r.a.createElement(h.f,{title:"Navigation Example"},r.a.createElement(h.c,null,r.a.createElement(h.b,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"Show me the Persik, please"))))}),f=a(73),g=a.n(f),b=(a(176),a(40)),v=a.n(b),k=a(41),y=a.n(k),_=Object(h.o)(),j=function(e){return r.a.createElement(h.j,{id:e.id},r.a.createElement(h.k,{left:r.a.createElement(h.l,{onClick:e.go,"data-to":"home"},_===h.g?r.a.createElement(v.a,null):r.a.createElement(y.a,null))},"Persik"),r.a.createElement("img",{className:"Persik",src:g.a,alt:"Persik The Cat"}))},w=a(42),O=(a(178),Object(h.o)(),function(e){var t=Object(n.useState)(""),a=Object(w.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),o=Object(w.a)(i,2),s=o[0],m=o[1];return r.a.createElement(h.j,{id:e.id},r.a.createElement(h.k,null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement(h.d,{style:{marginTop:20}},r.a.createElement(h.e,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0432\u0435\u0441",style:{}},r.a.createElement(h.h,{type:"number",placeholder:"\u0412\u0430\u0448 \u0412\u0435\u0441",value:c,onChange:function(e){return l(0==Math.min(Number(e.target.value),250)?"":String(Math.min(Number(e.target.value),250)))}})),r.a.createElement(h.e,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0440\u043e\u0441\u0442"},r.a.createElement(h.h,{type:"number",placeholder:"\u0412\u0430\u0448 \u0440\u043e\u0441\u0442",value:s,onChange:function(e){return m(0==Math.min(Number(e.target.value),250)?"":String(Math.min(Number(e.target.value),250)))}})),r.a.createElement(h.e,{top:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u0412\u0430\u0448 \u0442\u0438\u043f \u0442\u0435\u043b\u043e\u0441\u043b\u043e\u0436\u0435\u043d\u0438\u044f"},r.a.createElement("div",null,r.a.createElement(h.m,{name:"radio",value:"1",description:"\u041c\u0443\u0441\u043a\u0443\u043b\u0430\u0442\u0443\u0440\u0430, \u043e\u0442\u0441\u0442\u0443\u0442\u0441\u0442\u0432\u0438\u0435 \u0436\u0438\u0440\u0430",defaultChecked:!0},"\u041c\u0435\u0437\u043e\u043c\u043e\u0440\u0444"),r.a.createElement(h.m,{name:"radio",value:"2",description:"\u0422\u0435\u043b\u043e \u043a\u0440\u0443\u0433\u043b\u043e\u0435 \u0438 \u043c\u044f\u0433\u043a\u043e\u0435, \u0432\u044b\u0441\u043e\u043a\u0438\u0439 \u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0436\u0438\u0440\u043e\u0432\u043e\u0439 \u0442\u043a\u0430\u043d\u0438"},"\u042d\u043d\u0434\u043e\u043c\u043e\u0440\u0444"),r.a.createElement(h.m,{name:"radio",value:"3",description:"\u0425\u0443\u0434\u043e\u0449\u0430\u0432\u044b\u0439, \u043c\u0430\u043b\u043e \u0436\u0438\u0440\u0430, \u0442\u043e\u0449\u0438\u0435 \u043c\u0443\u0441\u043a\u0443\u043b\u044b"},"\u042d\u043a\u0442\u043e\u043c\u043e\u0440\u0444"))),r.a.createElement(h.c,{style:{display:"flex"}},r.a.createElement(h.b,{size:"xl",stretched:!0,style:{marginRight:8}},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"))))}),U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).go=function(e){console.log(e.currentTarget),a.setState({activePanel:e.currentTarget.dataset.to})},a.state={activePanel:"reg",fetchedUser:null},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(h.n,{activePanel:this.state.activePanel},r.a.createElement(E,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go}),r.a.createElement(j,{id:"persik",go:this.go}),r.a.createElement(O,{id:"reg",go:this.go,fetchedUser:this.state.fetchedUser}))}}]),t}(r.a.Component);o.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(U,null),document.getElementById("root"))},73:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"}},[[134,1,2]]]);
//# sourceMappingURL=main.63dd277e.chunk.js.map