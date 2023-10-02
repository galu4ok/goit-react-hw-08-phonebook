"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[214],{2214:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,o,i,a,c,l,s,d,u,x,p,h=t(9434),f=t(6916),m=function(n){return n.contacts.items},b=function(n){return n.filter},g=function(n){return n.contacts.IsLoading},j=function(n){return n.contacts.error},Z=(0,f.P1)([m,b],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),v=(0,f.P1)([m],(function(n){return n.length})),y=t(2791),w=t(3634),P=t(1413),k=t(5705),C=t(168),I=t(5867),_=(0,I.ZP)(k.l0)(r||(r=(0,C.Z)(["\n  margin-top: 15px;\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),F=(0,I.ZP)(k.gN)(o||(o=(0,C.Z)(["\n  padding: 5px;\n  height: 30px;\n  border: 1px solid grey;\n  border-radius: 5px;\n"]))),N=(0,I.ZP)(k.Bc)(i||(i=(0,C.Z)(["\n  font-style: italic;\n  font-size: 10px;\n  color: tomato;\n"]))),E=I.ZP.button(a||(a=(0,C.Z)(["\n  width: 120px;\n  height: 30px;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 5px;\n  margin-bottom: 20px;\n\n  &:hover,\n  &:focus {\n    background-color: teal;\n    color: white;\n  }\n"]))),q=t(6727),z=t(5984),L=t(948),S=t(3329),H=q.Ry().shape({name:q.Z_().required("*The field cannot be empty!Please enter the name"),number:q.Z_().required("*The field cannot be empty!Please enter the number")}),K=function(){var n=(0,h.v9)(m),e=(0,h.I0)();return(0,S.jsx)(k.J9,{initialValues:{name:"",number:""},validationSchema:H,onSubmit:function(t,r){if(n.find((function(n){return n.name===t.name})))return alert("Contact ".concat(t.name," is already in contacts"));e((0,w.uK)((0,P.Z)({id:(0,z.x0)()},t))),r.resetForm()},children:(0,S.jsxs)(_,{autoComplete:"off",children:[(0,S.jsx)("label",{children:"Name"}),(0,S.jsx)(k.gN,{as:F,name:"name",placeholder:"Enter name",style:{width:"440px"}}),(0,S.jsx)(N,{name:"name",component:"div"}),(0,S.jsx)("label",{children:"Number"}),(0,S.jsx)(k.gN,{as:L.HH,customInput:F,name:"number",placeholder:"Enter number",variant:"standard",style:{width:"440px"},format:"###-##-##",allowEmptyFormatting:!0,mask:"#"}),(0,S.jsx)(N,{name:"number",component:"div"}),(0,S.jsx)(E,{type:"submit",children:"Add contact"})]})})},R=I.ZP.div(c||(c=(0,C.Z)(["\n  display: flex;\n  /* gap: 20px; */\n  align-items: center;\n"]))),T=I.ZP.p(l||(l=(0,C.Z)(["\n  color: #444444;\n  text-align: center;\n  padding: 5px;\n"]))),A=I.ZP.span(s||(s=(0,C.Z)(["\n  font-weight: 500;\n  padding-left: 15px;\n"]))),B=I.ZP.button(d||(d=(0,C.Z)(["\n  position: absolute;\n  font-size: 14px;\n  border: none;\n  outline: none;\n  padding: 5px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  margin-left: 380px;\n  width: 60px;\n\n  &:hover {\n    background-color: teal;\n    outline: teal;\n    color: #ffffff;\n  }\n"]))),D=function(n){var e=n.contact,t=e.name,r=e.number,o=e.id,i=(0,h.I0)();return(0,S.jsxs)(R,{children:[(0,S.jsxs)(T,{children:[t,":",(0,S.jsx)(A,{children:r})]}),(0,S.jsx)(B,{type:"button",onClick:function(){return i((0,w.GK)(o))},children:"Delete"})]})},G=I.ZP.ul(u||(u=(0,C.Z)(["\n  width: 600px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-radius: 5px;\n"]))),J=I.ZP.li(x||(x=(0,C.Z)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),M=function(){var n=(0,h.v9)(Z);return(0,S.jsx)(G,{children:n.map((function(n){return(0,S.jsx)(J,{children:(0,S.jsx)(D,{contact:n})},n.id)}))})},V=t(4808),O=I.ZP.input(p||(p=(0,C.Z)(["\n  padding: 5px;\n  height: 30px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 220px;\n"]))),Q=function(){var n=(0,h.v9)(b),e=(0,h.I0)();return(0,S.jsxs)("div",{children:[(0,S.jsx)("p",{children:"Find contacts by name"}),(0,S.jsx)(O,{type:"text",value:n,onChange:function(n){e((0,V.M6)(n.target.value))},placeholder:"Search name..."})]})},U=function(){var n=(0,h.v9)(v);return(0,S.jsxs)("div",{children:[(0,S.jsx)("hr",{}),(0,S.jsxs)("p",{children:["Contacts count: ",n]})]})},W=function(){var n=(0,h.I0)(),e=(0,h.v9)(j),t=(0,h.v9)(g);return(0,y.useEffect)((function(){n((0,w.yF)())}),[n]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("h1",{children:"Phonebook"}),(0,S.jsx)(K,{}),(0,S.jsx)("h2",{children:"Contacts"}),(0,S.jsx)(Q,{}),t&&!e&&(0,S.jsx)("b",{children:"Request in progress... "}),(0,S.jsx)(M,{}),(0,S.jsx)(U,{})]})}}}]);
//# sourceMappingURL=214.9962b250.chunk.js.map