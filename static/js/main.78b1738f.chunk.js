(this["webpackJsonpcv-project"]=this["webpackJsonpcv-project"]||[]).push([[0],{96:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(11),i=n.n(a),r=n(73),s=n(134),l=n(129),j=n(124),o=n(127),d=n(128),b=n(50),u=n(130),h=n(62),O=n.n(h),x=n(63),m=n.n(x),f=n(1),p=function(){return Object(f.jsx)(j.a,{position:"static",children:Object(f.jsxs)(o.a,{children:[Object(f.jsx)(d.a,{edge:"start",color:"inherit","aria-label":"menu",disabled:!0,children:Object(f.jsx)(O.a,{})}),Object(f.jsxs)(l.a,{container:!0,spacing:1,alignItems:"center",children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(m.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(b.a,{variant:"h6",style:{flex:1},children:"SibiApp"})})]}),Object(f.jsx)(u.a,{color:"inherit",disabled:!0,children:"Login"})]})})},v=n(7),g=n(137),y=n(131),C=n(132),S=n(64),k=n.n(S),W=n(49),N=n.n(W),F=function(){var e=Object(c.useState)(!0),t=Object(v.a)(e,2),n=t[0],a=t[1];return n&&Object(f.jsx)(g.a,{m:1,children:Object(f.jsx)(y.a,{children:Object(f.jsx)(C.a,{avatar:Object(f.jsx)(k.a,{}),action:Object(f.jsx)(d.a,{onClick:function(){a(!1)},children:Object(f.jsx)(N.a,{color:"secondary"})}),title:"Click on the text you wish to edit."})})})},z=n(75),I=n(12),A=n(14),R=n(36),P=n(139),T=n(74),D=n(140),E=n(136),w=n(133),J=n(66),L=n.n(J),B=n(65),G=n.n(B),H=n(3),_=function(e){var t=e.text,n=e.type,a=e.placeholder,i=e.children,r=e.childRef,s=Object(H.a)(e,["text","type","placeholder","children","childRef"]),j=Object(c.useState)(!1),o=Object(v.a)(j,2),d=o[0],u=o[1];Object(c.useEffect)((function(){r&&r.current&&!0===d&&r.current.focus()}),[d,r]);return Object(f.jsx)("section",Object(R.a)(Object(R.a)({},s),{},{children:d?Object(f.jsx)("div",{onBlur:function(){return u(!1)},onKeyDown:function(e){},children:i}):Object(f.jsx)(l.a,{item:!0,xs:s.xs,onClick:function(){return u(!0)},children:Object(f.jsx)(b.a,{variant:s.typography||"body1",color:"content"===n||"subheader"===n?"textSecondary":"textPrimary",children:t||a||"Editable content"})})}))},M=function(e){var t=Object(c.useState)({}),n=Object(v.a)(t,2),a=n[0],i=n[1],r=Object(c.useState)(null),s=Object(v.a)(r,2),l=s[0],j=s[1],o=e.data,b=e.deleteItem,u=function(e,t){i((function(n){return Object(R.a)(Object(R.a)({},n),{},Object(A.a)({},t,e.target.value))}))},h=function(){j(null)};return Object(f.jsx)(g.a,{className:"content",my:2,children:Object(f.jsxs)(y.a,{children:[Object(f.jsx)(C.a,{avatar:Object(f.jsx)(P.a,{"aria-label":"content",children:o.title[0]}),action:o.content?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(d.a,{"aria-label":"settings","aria-controls":"card-menu","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},children:Object(f.jsx)(G.a,{})}),Object(f.jsx)(T.a,{id:"card-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:h,children:Object(f.jsxs)(D.a,{onClick:function(){b(),h()},children:[Object(f.jsx)(L.a,{color:"secondary"}),"Delete"]})})]}):Object(f.jsx)(d.a,{onClick:b,children:Object(f.jsx)(N.a,{color:"secondary"})}),title:Object(f.jsx)(_,{text:a.title||o.title,type:"text",children:Object(f.jsx)(E.a,{variant:"outlined",size:"small",margin:"dense",label:o.title,value:a.title||"",onChange:function(e){return u(e,"title")},autoFocus:!0,fullWidth:!0})},o.title),subheader:Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(_,{text:a.subheader||o.subheader||" ",type:"subheader",children:Object(f.jsx)(E.a,{variant:"outlined",size:"small",margin:"dense",label:o.subheader,value:a.subheader||"",onChange:function(e){return u(e,"subheader")},autoFocus:!0,fullWidth:!0})},o.subheader),Object(f.jsx)(_,{text:a.subheader2||o.subheader2||" ",type:"subheader",children:Object(f.jsx)(E.a,{variant:"outlined",size:"small",margin:"dense",label:o.subheader2,value:a.subheader2||"",onChange:function(e){return u(e,"subheader2")},autoFocus:!0,fullWidth:!0})},o.subheader2)]})}),o.content&&Object(f.jsx)(w.a,{children:Object(f.jsx)(_,{text:a.content||o.content,type:"content",children:Object(f.jsx)(E.a,{variant:"outlined",size:"small",margin:"dense",label:o.content,value:a.content||"",onChange:function(e){return u(e,"content")},autoFocus:!0,fullWidth:!0})},o.content)})]})})},K=n(17),U=n.n(K);function q(){return"_"+Math.random().toString(36).substr(2,9)}var Q=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"achievements",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Achievements"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Achievement",subheader:"Description"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},V=n(67),X=n.n(V),Y=n(68),Z=n.n(Y),$=n(69),ee=n.n($),te=n(70),ne=n.n(te),ce=n(71),ae=n.n(ce),ie=n(72),re=n.n(ie),se=function(){var e=Object(c.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(v.a)(i,2),s=r[0],j=r[1],o=Object(c.useState)(""),d=Object(v.a)(o,2),b=d[0],u=d[1],h=Object(c.useState)(""),O=Object(v.a)(h,2),x=O[0],m=O[1],p=Object(c.useState)(""),g=Object(v.a)(p,2),y=g[0],C=g[1],S=Object(c.useState)(""),k=Object(v.a)(S,2),W=k[0],N=k[1];return Object(f.jsxs)("div",{className:"contact-information",children:[Object(f.jsxs)(l.a,{container:!0,alignContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(X.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(_,{text:n||"enter_your@email.com",type:"text",children:Object(f.jsx)(E.a,{variant:"outlined",placeholder:"enter_your@email.com",value:n,label:"Email Address",onChange:function(e){return a(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})})]}),Object(f.jsxs)(l.a,{container:!0,alignContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(Z.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(_,{text:s||"Phone number",type:"number",children:Object(f.jsx)(E.a,{variant:"outlined",placeholder:"Phone number",value:s,label:"Phone Number",onChange:function(e){return j(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})})]}),Object(f.jsxs)(l.a,{container:!0,alignContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(ee.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(_,{text:b||"Residence",type:"number",children:Object(f.jsx)(E.a,{variant:"outlined",placeholder:"Residence",value:b,label:"Residence",onChange:function(e){return u(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})})]}),Object(f.jsxs)(l.a,{container:!0,alignContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(ne.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(_,{text:x||"Website / Portfolio",type:"number",children:Object(f.jsx)(E.a,{variant:"outlined",placeholder:"Website / Portfolio",value:x,label:"Website / Portfolio",onChange:function(e){return m(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})})]}),Object(f.jsxs)(l.a,{container:!0,alignContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(ae.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(_,{text:y||"LinkedIn",type:"number",children:Object(f.jsx)(E.a,{variant:"outlined",placeholder:"LinkedIn",value:y,label:"LinkedIn",onChange:function(e){return C(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})})]}),Object(f.jsxs)(l.a,{container:!0,alignContent:"center",spacing:1,children:[Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(re.a,{})}),Object(f.jsx)(l.a,{item:!0,children:Object(f.jsx)(_,{text:W||"GitHub",type:"number",children:Object(f.jsx)(E.a,{variant:"outlined",placeholder:"GitHub",value:W,label:"GitHub",onChange:function(e){return N(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})})]})]})},le=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"education",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Education"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Institution",content:"Degree",subheader:"Date"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},je=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"interests",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Interests"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Interest"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},oe=function(){var e=Object(c.useState)("Jose"),t=Object(v.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)("Rizal"),r=Object(v.a)(i,2),s=r[0],l=r[1],j=Object(c.useState)("Ophthalmologist"),o=Object(v.a)(j,2),d=o[0],b=o[1],u=Object(c.useState)("A Filipino nationalist and polymath during the tail end of the Spanish colonial period of the Philippines."),h=Object(v.a)(u,2),O=h[0],x=h[1],m=Object(c.useRef)();return Object(f.jsxs)("div",{className:"personal-information",children:[Object(f.jsx)(_,{text:n||"Jose",childRef:m,type:"text",typography:"h2",xs:6,children:Object(f.jsx)(E.a,{variant:"outlined",ref:m,placeholder:"e.g. Jose",value:n,label:"First Name",onChange:function(e){return a(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})}),Object(f.jsx)(_,{text:s||"Rizal",childRef:m,type:"text",typography:"h2",xs:6,children:Object(f.jsx)(E.a,{variant:"outlined",ref:m,placeholder:"e.g. Rizal",value:s,label:"Last Name",onChange:function(e){return l(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})}),Object(f.jsx)(_,{text:d||"Ophthalmologist",childRef:m,type:"text",children:Object(f.jsx)(E.a,{variant:"outlined",ref:m,placeholder:"e.g. Ophthalmologist",value:d,label:"Profession",onChange:function(e){return b(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})}),Object(f.jsx)(_,{text:O||"A Filipino nationalist and polymath during the tail end of the Spanish colonial period of the Philippines.",childRef:m,type:"text",children:Object(f.jsx)(E.a,{variant:"outlined",ref:m,placeholder:"Write a sentence or two describing your career objectives.",value:O,multiline:!0,label:"Career Objective",onChange:function(e){return x(e.target.value)},size:"small",color:"primary",autoFocus:!0,fullWidth:!0})})]})},de=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"projects",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Projects"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Project Title",subheader:"Technologies Used",content:"Description"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},be=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"technical-skills",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Technical Skills"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Section Title",subheader:"Technologies"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},ue=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"training-and-certificates",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Trainings and Certificates"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Training/Certificate Title",subheader:"Giving Body"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},he=function(){var e=Object(c.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1],i=function(e){a((function(t){var n=Object(I.a)(t);return n.splice(e,1),n}))};return Object(f.jsxs)("div",{className:"work-experiences",children:[Object(f.jsx)(b.a,{variant:"h5",children:"Work Experiences"}),n,Object(f.jsxs)(u.a,{variant:"outlined",color:"primary",className:"add-btn",onClick:function(){var e=q();a(n.concat(Object(f.jsx)(M,{data:{title:"Job Title",subheader:"Company",subheader2:"Inclusive Date",content:"Description"},deleteItem:function(){return i(e)}},e)))},children:[Object(f.jsx)(U.a,{}),"Add"]})]})},Oe=function(){return Object(f.jsx)(u.a,{variant:"contained",color:"primary",onClick:function(){},fullWidth:!0,children:"Save"})},xe=function(){return Object(f.jsx)(g.a,{m:1,children:Object(f.jsxs)(z.a,{elevation:3,children:[Object(f.jsx)(g.a,{px:1,py:2,children:Object(f.jsxs)(l.a,{container:!0,direction:"column",children:[Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(g.a,{p:1,children:Object(f.jsx)(oe,{})})}),Object(f.jsxs)(l.a,{item:!0,container:!0,xs:12,children:[Object(f.jsx)(l.a,{item:!0,sm:12,md:6,lg:4,children:Object(f.jsx)(g.a,{px:1,children:Object(f.jsxs)(l.a,{container:!0,children:[Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(se,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(be,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(je,{})})]})})}),Object(f.jsx)(l.a,{item:!0,sm:12,md:6,lg:8,children:Object(f.jsx)(g.a,{px:1,children:Object(f.jsxs)(l.a,{container:!0,children:[Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(de,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(he,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(le,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(ue,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,children:Object(f.jsx)(Q,{})})]})})})]})]})}),Object(f.jsxs)(l.a,{container:!0,children:[Object(f.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(f.jsx)(Oe,{})}),Object(f.jsx)(l.a,{item:!0,xs:12,md:6,children:Object(f.jsx)(u.a,{variant:"contained",color:"secondary",fullWidth:!0,children:"Clear"})})]})]})})},me=function(){var e=Object(r.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});return Object(f.jsxs)(s.a,{theme:e,children:[Object(f.jsx)(p,{}),Object(f.jsxs)(l.a,{container:!0,children:[Object(f.jsx)(l.a,{item:!0,xs:!1,sm:1,md:2,lg:3}),Object(f.jsxs)(l.a,{item:!0,xs:12,sm:10,md:8,lg:6,children:[Object(f.jsx)(F,{}),Object(f.jsx)(xe,{})]}),Object(f.jsx)(l.a,{item:!0,xs:!1,sm:1,md:2,lg:3})]})]})};n(96);i.a.render(Object(f.jsx)(me,{}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.78b1738f.chunk.js.map