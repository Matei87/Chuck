(this["webpackJsonpchuck-norris-jokes"]=this["webpackJsonpchuck-norris-jokes"]||[]).push([[0],{35:function(e,t,n){e.exports=n(51)},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){e.exports=n.p+"static/media/logo.a9f147c0.jpg"},43:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(14),l=n.n(r),o=(n(40),n(23)),i=n(6),u=n(8),s=n(9),m=n(13),d=n(11),f=(n(41),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement("img",{src:n(42),alt:"logo"}),c.a.createElement("p",null,"Chuck Norris JOKES")))))}}]),a}(a.Component)),b=(n(43),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.jokeProp,n=e.unlaikeJoke,a=e.laikeJoke,r=e.index;return c.a.createElement("div",{className:"card",style:{marginBottom:"10px"},id:"joke-".concat(r)},c.a.createElement("div",{className:"card-body"},t.categories.length>0?t.categories.map((function(e){return c.a.createElement("span",{className:"badge badge-pill badge-primary",key:e,style:{color:"#F7F7F7",background:"crimson"}},e)})):c.a.createElement("span",{className:"badge badge-pill badge-primary",style:{color:"#F7F7F7",background:"#3d6ad6"}},"regular"),c.a.createElement("p",{className:"card-text",style:{color:"crimson"}},t.joke),c.a.createElement("button",{type:"button",className:"btn btn-primary",style:{marginRight:"10px"},onClick:function(){return a(t.id)}},c.a.createElement("i",{className:"fas fa-thumbs-up"})),c.a.createElement("button",{type:"button",className:"btn btn-primary",onClick:function(){return n(t.id)}},c.a.createElement("i",{className:"fas fa-thumbs-down"}))))}}]),n}(a.Component)),p=(n(44),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("footer",null,"Made by\xa0",c.a.createElement("p",null,"Matei Mircea"),"\xa0@ ",(new Date).getFullYear())}}]),n}(a.Component)),h=n(56),j=n(54),E=n(55),k=n(32);n(45),n(46);var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),s=u[0],m=u[1],d=Object(a.useState)([]),v=Object(i.a)(d,2),g=v[0],O=v[1],y=Object(a.useState)([]),N=Object(i.a)(y,2),x=N[0],J=N[1],S=Object(a.useState)([]),w=Object(i.a)(S,2),C=w[0],F=w[1],I=Object(a.useState)("home"),K=Object(i.a)(I,2),B=K[0],M=K[1],P=Object(a.useState)(!1),L=Object(i.a)(P,2),D=L[0],H=L[1];Object(a.useEffect)((function(){fetch("http://api.icndb.com/jokes/").then((function(e){return e.json()})).then((function(e){r(e.value),m(e.value.slice(0,10))})).catch((function(e){console.log(e)})),fetch("http://api.icndb.com/categories").then((function(e){return e.json()})).then((function(e){O(e.value),J(e.value)})).catch((function(e){return console.log(e)}))}),[]);var R=function(e){if(e){var t=new IntersectionObserver((function(a){!0===a[0].isIntersecting&&(H(!0),setTimeout((function(){m(n.slice(0,s.length+10))}),500),t.unobserve(e))}),{threshold:1});t.observe(e)}};Object(a.useEffect)((function(){var e=document.getElementById("joke-".concat(s.length-1));R(e)}),[s]);var T=function(e){if(!C.find((function(t){return t.id===e}))){var t=n.find((function(t){return t.id===e}));F([t].concat(Object(o.a)(C)))}},Y=function(e){var t=C.filter((function(t){return t.id!==e}));F(t),console.log(t)},q=function(e){var t=e.target.name;if(x.includes(t)){var n=Object(o.a)(x),a=n.indexOf(t);n.splice(a,1),J(n)}else J([].concat(Object(o.a)(x),[t]))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12"},c.a.createElement(h.a,{activeKey:B,onSelect:function(e){return M(e)}},c.a.createElement(j.a,{eventKey:"home",title:"Home"}),c.a.createElement(j.a,{eventKey:"profile",title:c.a.createElement("span",null,"Likes",c.a.createElement(k.a,{pill:!0,className:"edited-badge-pill",variant:"primary"},C.length>0?C.length:null))})),c.a.createElement("div",{hidden:"home"!==B},c.a.createElement(E.a,{inline:!0},g.map((function(e){return c.a.createElement("div",{key:e,className:"mr-3 mb-3"},c.a.createElement(E.a.Check,{label:e,type:"checkbox",name:e,checked:x.includes(e),onChange:q}))}))),s.map((function(e,t){return 0===e.categories.length||function(e){for(var t=0;t<e.length;t++)if(x.includes(e[t]))return!0;return!1}(e.categories)?c.a.createElement(b,{key:e.id,jokeProp:e,laikeJoke:T,unlaikeJoke:Y,index:t}):""})),D&&c.a.createElement("div",{className:"spinner-grow text-dark",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading..."))),c.a.createElement("div",{hidden:"home"===B},C.map((function(e){return c.a.createElement(b,{key:e.id,jokeProp:e,laikeJoke:T,unlaikeJoke:Y})})))))),c.a.createElement(p,null))};l.a.render(c.a.createElement(v,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a7b1cbfa.chunk.js.map