(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(e,t,a){e.exports=a.p+"static/media/loading.40a14a29.gif"},34:function(e,t,a){e.exports=a(45)},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(5),r=a.n(c),o=a(10),i=a(70),s=a(76),u=a(73),m=a(49),p=Object(i.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,borderRadius:"5px",boxShadow:e.shadows[5],padding:"0",margin:"0"}}})),d=function(e){var t=e.handleClose,a=e.open,n=e.current,c=p();return console.log(n),l.a.createElement("div",null,l.a.createElement(s.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:c.modal,open:a,onClose:t,closeAfterTransition:!0,BackdropComponent:u.a,BackdropProps:{timeout:500}},l.a.createElement(m.a,{in:a},l.a.createElement("div",{className:c.paper},l.a.createElement("img",{src:n.webformatURL,alt:"sad",style:{objectFit:"cover"}})))))},h=function(e){var t=e.photo,a=e.handleOpen,n=e.popHandle;return l.a.createElement("div",{onClick:function(){a(),n(t)},className:"card"},l.a.createElement("div",null,l.a.createElement("img",{src:t.webformatURL,alt:"sad"})),l.a.createElement("div",{className:"info"},l.a.createElement("p",null,t.user),l.a.createElement("div",null,l.a.createElement("span",null,"#nature"),l.a.createElement("span",null,"#nature"))))},f=function(e){var t=e.photos,a=e.handleOpen,n=e.popHandle;return t.map((function(e){return l.a.createElement(h,{photo:e,popHandle:n,handleOpen:a,key:e.id})}))},E=a(77),b=a(74),v=a(75),g=a(29),y=a.n(g),j=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(E.a,{className:"bar",color:"transparent",style:{boxShadow:"none",transition:"0.5s"}},l.a.createElement(b.a,null,l.a.createElement(v.a,{style:{color:"white",fontSize:"1.5rem"},variant:"h6"},l.a.createElement(y.a,null)," glassPoint"))))},O=a(30),k=a.n(O),S=function(e){var t=e.onSearch,a=Object(n.useState)(""),c=Object(o.a)(a,2),r=c[0],i=c[1];return l.a.createElement("div",{className:"input-block"},l.a.createElement("div",{className:"search-block"},l.a.createElement("div",{className:"search-icon"},l.a.createElement(k.a,null)),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),t(r)}},l.a.createElement("input",{onChange:function(e){i(e.target.value)},value:r,type:"text",placeholder:"Search here",className:"search-input"}))))},x=a(31),N=a.n(x),w=function(){return l.a.createElement("div",{style:{width:"100%",height:"100vh",display:"flex",alignItems:"center"}},l.a.createElement("img",{src:N.a,alt:"spinner",style:{width:"200px",margin:"auto",display:"block"}}))};var C=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(o.a)(r,2),s=i[0],u=i[1],m=Object(n.useState)(""),p=Object(o.a)(m,2),h=p[0],E=p[1],b=Object(n.useState)(!1),v=Object(o.a)(b,2),g=v[0],y=v[1],O=Object(n.useState)({}),k=Object(o.a)(O,2),x=k[0],N=k[1];return Object(n.useEffect)((function(){y(!0),fetch("https://pixabay.com/api/?key=16229574-dc0305a345f048a240cd3f66c").then((function(e){return e.json()})).then((function(e){console.log(e),u(e.hits),y(!1)}))}),[]),g?l.a.createElement(w,null):l.a.createElement("div",null,l.a.createElement(j,null),l.a.createElement("main",null,l.a.createElement("div",null,l.a.createElement("h1",null,"The Best Photos from talanted creators."),l.a.createElement(S,{onSearch:function(e){fetch("https://pixabay.com/api/?key=16229574-dc0305a345f048a240cd3f66c&q=".concat(e)).then((function(e){return e.json()})).then((function(t){console.log(t),u(t.hits),E(e)}))}}))),l.a.createElement("section",null,l.a.createElement("h1",{className:"tag-name"},h),l.a.createElement("div",{className:"cards"},l.a.createElement(f,{photos:s,handleOpen:function(){c(!0)},popHandle:function(e){N(e)}}))),l.a.createElement(d,{handleClose:function(){c(!1)},open:a,current:x}))};a(44);r.a.render(l.a.createElement(C,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.9617ca04.chunk.js.map