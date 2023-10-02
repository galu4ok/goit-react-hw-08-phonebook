"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[909],{1465:function(n,e,t){t.r(e),t.d(e,{default:function(){return Y}});var r,o,i,a,s,c,l,d,u,p,x,m,h=t(9434),f=t(6916),b=function(n){return n.contacts.items},g=function(n){return n.filter},j=function(n){return n.contacts.IsLoading},y=function(n){return n.contacts.error},v=(0,f.P1)([b,g],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),Z=(0,f.P1)([b],(function(n){return n.length})),w=t(2791),k=t(3634),P=t(1413),C=t(5705),F=t(168),I=t(5867),N=(0,I.ZP)(C.l0)(r||(r=(0,F.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),S=(0,I.ZP)(C.gN)(o||(o=(0,F.Z)(["\n  padding: 5px;\n  height: 30px;\n  border: 1px solid grey;\n  border-radius: 5px;\n"]))),_=(0,I.ZP)(C.Bc)(i||(i=(0,F.Z)(["\n  font-style: italic;\n  font-size: 10px;\n  color: tomato;\n"]))),z=I.ZP.button(a||(a=(0,F.Z)(["\n  width: 120px;\n  height: 30px;\n  color: black;\n  border: 1px solid grey;\n  border-radius: 5px;\n  margin-bottom: 20px;\n\n  &:hover {\n    background-color: teal;\n    color: white;\n  }\n"]))),E=t(6727),M=t(5984),q=t(948),H=t(3329),L=E.Ry().shape({name:E.Z_().required("*The field cannot be empty!Please enter the name"),number:E.Z_().required("*The field cannot be empty!Please enter the number")}),R=function(){var n=(0,h.v9)(b),e=(0,h.I0)();return(0,H.jsx)(C.J9,{initialValues:{name:"",number:""},validationSchema:L,onSubmit:function(t,r){if(n.find((function(n){return n.name===t.name})))return alert("Contact ".concat(t.name," is already in contacts"));e((0,k.uK)((0,P.Z)({id:(0,M.x0)()},t))),r.resetForm()},children:(0,H.jsxs)(N,{autoComplete:"off",children:[(0,H.jsx)("label",{children:"Name"}),(0,H.jsx)(C.gN,{as:S,name:"name",placeholder:"Enter name",style:{width:"440px"}}),(0,H.jsx)(_,{name:"name",component:"div"}),(0,H.jsx)("label",{children:"Number"}),(0,H.jsx)(C.gN,{as:q.HH,customInput:S,name:"number",placeholder:"Enter number",variant:"standard",style:{width:"440px"},format:"###-##-##",allowEmptyFormatting:!0,mask:"#"}),(0,H.jsx)(_,{name:"number",component:"div"}),(0,H.jsx)(z,{type:"submit",children:"Add contact"})]})})},B=I.ZP.div(s||(s=(0,F.Z)(["\n  display: flex;\n  /* gap: 20px; */\n  align-items: center;\n"]))),D=I.ZP.p(c||(c=(0,F.Z)(["\n  color: #444444;\n  text-align: center;\n  padding: 5px;\n"]))),J=I.ZP.span(l||(l=(0,F.Z)(["\n  font-weight: 500;\n  padding-left: 15px;\n"]))),K=I.ZP.button(d||(d=(0,F.Z)(["\n  position: absolute;\n  font-size: 14px;\n  border: none;\n  outline: none;\n  padding: 5px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  margin-left: 380px;\n  width: 60px;\n\n  &:hover {\n    background-color: teal;\n    outline: teal;\n    color: #ffffff;\n  }\n"]))),T=function(n){var e=n.contact,t=e.name,r=e.number,o=e.id,i=(0,h.I0)();return(0,H.jsxs)(B,{children:[(0,H.jsxs)(D,{children:[t,":",(0,H.jsx)(J,{children:r})]}),(0,H.jsx)(K,{type:"button",onClick:function(){return i((0,k.GK)(o))},children:"Delete"})]})},U=I.ZP.ul(u||(u=(0,F.Z)(["\n  width: 440px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border-radius: 5px;\n"]))),A=I.ZP.li(p||(p=(0,F.Z)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),G=function(){var n=(0,h.v9)(v);return(0,H.jsx)(U,{children:n.map((function(n){return(0,H.jsx)(A,{children:(0,H.jsx)(T,{contact:n})},n.id)}))})},O=t(4808),V=I.ZP.input(x||(x=(0,F.Z)(["\n  padding: 5px;\n  height: 30px;\n  border: 1px solid grey;\n  border-radius: 5px;\n  box-sizing: border-box;\n  width: 220px;\n"]))),Q=function(){var n=(0,h.v9)(g),e=(0,h.I0)();return(0,H.jsxs)("div",{children:[(0,H.jsx)("p",{children:"Find contacts by name"}),(0,H.jsx)(V,{type:"text",value:n,onChange:function(n){e((0,O.M6)(n.target.value))},placeholder:"Search name..."})]})},W=function(){var n=(0,h.v9)(Z);return(0,H.jsxs)("div",{children:[(0,H.jsx)("hr",{}),(0,H.jsxs)("p",{children:["Contacts count: ",n]})]})},X=(t(7021),(0,I.vJ)(m||(m=(0,F.Z)(["body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0px;\n  padding: 5px;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  }\n\na {\n  display: block;\n  color: currentColor;\n  text-decoration: none;\n  cursor: pointer;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nimg {\n  display: block;\n}\nh1,h2 {\n  margin-bottom: 10px;\n  }\n\n#root {\n  margin: 30px;\n  padding: 30px;\n  background-color: #b5e6ac;\n  width: 500px;\n  display: block;\n  border-radius: 8px;\n  box-shadow: 1px 1px 8px 0px #000000;  \n}\n"])))),Y=function(){var n=(0,h.I0)(),e=(0,h.v9)(y),t=(0,h.v9)(j);return(0,w.useEffect)((function(){n((0,k.yF)())}),[n]),(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)("h1",{children:"Phonebook"}),(0,H.jsx)(R,{}),(0,H.jsx)("h2",{children:"Contacts"}),(0,H.jsx)(Q,{}),t&&!e&&(0,H.jsx)("b",{children:"Request in progress... "}),(0,H.jsx)(G,{}),(0,H.jsx)(W,{}),(0,H.jsx)(X,{})]})}}}]);
//# sourceMappingURL=909.a73353cb.chunk.js.map