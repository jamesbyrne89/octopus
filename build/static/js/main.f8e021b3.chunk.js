(this.webpackJsonpoctopus=this.webpackJsonpoctopus||[]).push([[0],{37:function(e,n,t){},38:function(e,n,t){},60:function(e,n,t){"use strict";t.r(n);var r,a,o,s,c,i,d,l,b,u,j=t(0),p=t.n(j),h=t(13),m=t.n(h),A=(t(37),t(6)),O=t(7),g=(t(38),t(3)),f=t(19),v=t(1),x=O.a.div(r||(r=Object(A.a)(["\n  margin-top: 1rem;\n\n  input {\n    box-sizing: border-box;\n    background: none;\n    border: solid 1px white;\n    line-height: 2.5;\n    color: white;\n    padding: 0 1rem;\n    width: 100%;\n    font-size: 0.875rem;\n  }\n"]))),y=function(e){var n=e.placeholder,t=e.label,r=e.name,a=e.register;return Object(v.jsx)(x,{children:Object(v.jsxs)(ee,{children:[Object(v.jsx)("span",{children:t}),Object(v.jsx)("input",{type:"text",name:r,ref:a,placeholder:n})]})})},S=O.a.button(a||(a=Object(A.a)(["\n  line-height: 3.5;\n  padding: 0 6rem;\n  border-radius: 3.5rem;\n  background: white;\n  color: var(--gradient-color-two);\n  border: solid 1px var(--gradient-color-two);\n  font-weight: bold;\n  cursor: pointer;\n"]))),E=function(e){var n=e.text;return Object(v.jsx)(S,{children:n})},w=t(12),D=function(){return Object(w.b)()},C=w.c,k=function(e){return{type:"SET_YEARS_AT_ADDRESS",payload:e}},R=function(e){return{type:"SET_MONTHS_AT_ADDRESS",payload:e}},_=O.a.form(o||(o=Object(A.a)(["\n  margin-top: 3rem;\n\n  .address-form__submit-btn-wrapper {\n    margin-top: 3rem;\n  }\n"]))),B=function(){var e=C((function(e){return e.formData.address})),n=C((function(e){return e.formData.timeAtAddress})),t=D(),r=Object(f.a)({defaultValues:e}),a=r.register,o=r.handleSubmit,s=r.errors,c=r.reset;return Object(j.useEffect)((function(){c(e)}),[e,c]),Object(v.jsxs)(_,{onSubmit:o((function(e){t({type:"ADD_NEW_ADDRESS",payload:Object(g.a)(Object(g.a)({},e),{},{timeAtAddress:n||{}})}),console.log({formData:e})})),children:[Object(v.jsx)(y,{register:a({required:"Address line 1 is required"}),name:"addressLine1",label:"Address line 1*"}),s.addressLine1&&Object(v.jsx)("div",{children:s.addressLine1.message}),Object(v.jsx)(y,{register:a,name:"addressLine2",label:"Address line 2"}),Object(v.jsx)(y,{register:a,name:"city",label:"City*"}),Object(v.jsx)(y,{register:a,name:"county",label:"County"}),Object(v.jsx)(y,{register:a({required:"Postcode is required"}),name:"postcode",label:"Postcode*"}),s.postcode&&Object(v.jsx)("div",{children:s.postcode.message}),Object(v.jsx)("div",{className:"address-form__submit-btn-wrapper",children:Object(v.jsx)(E,{text:"Add Address"})})]})},T=t(32),z={placeholder:function(e){return Object(g.a)(Object(g.a)({},e),{},{color:"white"})},menu:function(e,n){return Object(g.a)(Object(g.a)({},e),{},{width:"100%",color:"white",background:n.isSelected?"red":"var(--gradient-color-one)"})},indicatorSeparator:function(){return{display:"none"}},dropdownIndicator:function(){return{fill:"white",margin:"auto 2px"}},control:function(e){return{width:"auto",display:"flex",color:"white",border:"solid 1px white",cursor:"pointer",fontSize:"0.875rem","&:hover":{background:"none"}}},singleValue:function(e,n){return Object(g.a)(Object(g.a)({},e),{},{color:"white"})},option:function(e,n){return Object(g.a)(Object(g.a)({},e),{},{outline:n.isSelected?"solid 1px white":"none",background:"none",cursor:"pointer","&:hover":{background:"none",outline:"solid 1px white"}})},valueContainer:function(e,n){return Object(g.a)(Object(g.a)({},e),{},{color:"white","&:focus":{color:"white"}})}},L=function(e){var n=e.options,t=e.onSelect,r=e.placeholder,a=e.name;return Object(v.jsx)("div",{children:Object(v.jsx)(T.a,{name:a,options:n,onChange:t,styles:z,placeholder:r})})},N=O.a.div(s||(s=Object(A.a)(["\n  margin-top: 2rem;\n  color: white;\n  text-align: left;\n\n  span {\n    font-size: 0.875rem;\n    display: block;\n    color: rgba(255, 255, 255, 0.8);\n    margin-bottom: 0.75rem;\n  }\n"]))),J=O.a.div(c||(c=Object(A.a)(["\n  display: flex;\n  justify-content: center;\n  gap: 2rem;\n\n  > * {\n    flex-grow: 1;\n  }\n"]))),P=[{value:0,label:"0 years"},{value:1,label:"1 year"},{value:2,label:"2 years"},{value:3,label:"3 years"},{value:4,label:"4 years"},{value:"5+",label:"5+ years"}],U=[{value:0,label:"0 months"},{value:1,label:"1 month"},{value:2,label:"2 months"},{value:3,label:"3 months"},{value:4,label:"4 months"},{value:5,label:"5 months"},{value:6,label:"6 months"},{value:7,label:"7 months"},{value:8,label:"8 months"},{value:9,label:"9 months"},{value:10,label:"10 months"},{value:11,label:"11 months"}],G=function(){var e=Object(w.b)();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(N,{children:Object(v.jsx)("span",{children:"How long have you lived at your current address?"})}),Object(v.jsxs)(J,{children:[Object(v.jsx)(L,{name:"years-at-address",onSelect:function(n){var t=n.value;n.label;return function(){e(k(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0))}(t)},placeholder:"Select years",options:P}),Object(v.jsx)(L,{name:"months-at-address",onSelect:function(n){var t=n.value;n.label;return function(){e(R(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0))}(t)},placeholder:"Select months",options:U})]})]})},Y=O.a.li(i||(i=Object(A.a)(["\n  border: solid 1px white;\n  background: var(--gradient-color-one);\n  text-align: left;\n  padding: 1rem;\n  list-style: none;\n  margin: 1rem 0 0;\n  position: relative;\n  button {\n    background: none;\n    border: none;\n    cursor: pointer;\n    position: absolute;\n    top: 1rem;\n    right: 0.5rem;\n\n    img {\n      height: 0.95rem;\n      width: 0.95rem;\n    }\n  }\n"]))),M=function(e){var n=e.address,t=e.onDelete;return Object(v.jsxs)(Y,{children:[Object(v.jsx)("div",{className:"user-address__header",children:Object(v.jsx)("button",{type:"button","aria-label":"Remove address",onClick:function(){return t(n.id)},children:Object(v.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAALdJREFUWAntV1sOgzAMa9AOsYlzccSdYzsN7IM7dPY+O8CNRgWaEskfEOOk7kMlJRE55wGYAG/wm0HIJ1MEiEzgXBVvJf8ys9tK7vO6poG8JaByaGCzRqcEWucv3gJqRFwoHs3DHTBvx57R1XAPdyAaqJmm/+Z8nVKtd0V5jsQiDAfCgXAgHAgHwoFTOsBfsVYxlsJLDjxK0o7PT6mFG1EPzLwZ7RzU7GUDJJAI3IER+DWoQa3F4m+lWwl0appCEAAAAABJRU5ErkJggg=="})})}),Object(v.jsx)("div",{children:"".concat(n.addressLine1,", ").concat(n.addressLine2,", ").concat(n.city,", ").concat(n.county,", ").concat(n.postcode.toUpperCase())}),Object(v.jsxs)("div",{children:[Object(v.jsx)("span",{children:"Time at address: "}),Object(v.jsx)("span",{children:n.timeAtAddress.years||n.timeAtAddress.months?"".concat(n.timeAtAddress.years," years, ").concat(n.timeAtAddress.months," months"):"Not supplied"})]})]})},Q=function(){var e=C((function(e){return e.userAddresses})),n=D(),t=function(t){console.log(t),console.log(e),n(function(e){return{type:"REMOVE_USER_ADDRESS",payload:e}}(t))};return Object(v.jsx)("ul",{children:e.map((function(e){return Object(v.jsx)(M,{onDelete:t,address:e},e.id)}))})},I=O.a.header(d||(d=Object(A.a)(["\n  border-bottom: solid 2px var(--horizontal-line-color);\n\n  h1 {\n  }\n\n  h2 {\n    font-weight: normal;\n    font-size: 1rem;\n  }\n"]))),H=function(){return Object(v.jsxs)(I,{children:[Object(v.jsx)("h1",{children:"Address Search"}),Object(v.jsx)("h2",{children:"Please enter your address"})]})},K=t(9),F=O.a.div(l||(l=Object(A.a)(["\n  margin-top: 2rem;\n\n  label {\n    display: block;\n    text-align: left;\n  }\n\n  .search-input__wrapper {\n    display: flex;\n    position: relative;\n    margin-top: 0.75rem;\n  }\n\n  input {\n    background: transparent;\n    line-height: 2.5;\n    color: white;\n    padding: 0 1rem;\n    border: solid 1px white;\n    width: 100%;\n\n    &::placeholder {\n      color: white;\n      opacity: 1;\n    }\n  }\n\n  .search-input__submit-btn {\n    display: inline-flex;\n    align-items: center;\n    background: none;\n    border: none;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    cursor: pointer;\n    img {\n      height: 0.95em;\n      width: 0.95em;\n    }\n  }\n"]))),Z=function(e){var n=e.register,t=e.name,r=e.placeholder,a=e.label;return Object(v.jsx)(F,{children:Object(v.jsxs)(ee,{htmlFor:t,children:[Object(v.jsx)("span",{children:a}),Object(v.jsxs)("div",{className:"search-input__wrapper",children:[Object(v.jsx)("input",{type:"text",ref:n,name:t,placeholder:r}),Object(v.jsx)("button",{className:"search-input__submit-btn","aria-label":"Search by postcode",children:Object(v.jsx)("img",{alt:"",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfUlEQVRYhb2XP2hUQRCHv4t4wYgJMbHyUGNhQNFDREyXQkghooiFVrEQEbERrMSArWAVsQ7BykYELcT4B2IlKQRJoWiw0CqeEiHEI4r+ZMI72OztvvfOe+fAHLu8nZnv7ezOmytJIod0AUPAQeAAsCUx+QK8AV4Di0AuZ+vEAFK0T9INSavKlpqkcUkbM3yu09iDLklXcwQNyYqksbwAoRT0AC+BQ4EN+wnMAu+AMlAFRiKbOwVcAP60koLNkj4F3uqWpIqkUmS39kl6GLB7ljzPlYINkt56DuYkDbaQ0/3JWXBlKi/Abc9wOos+opsCL3IsC2DIM5iJbHcrEIuOv7qkchrAY29xTxvBG7rXe6nzMYA+b+G5AoI31D2YS6FdtZ+THkB3gQDDnu+Kv8ZK7AnnVs4Aqy2X07h88OpAU20xgKPO/EGBwUmCz2YB7HTmHwsGMJl3xrtCAK786gCAm4JyCOC7M9/eAYCKM/4cAnBzNNoBgDFnPO8/NIBHznw8kJZ2ZBvQ69jPhQCeOnPL0ZECAS46YzsLC00rkoKw4BSLhX/8CPnaK+m34/dm2rdg1KtYE20Gt5L7wvO5NQ3ADF55BmfbCD7p+bKesj8NgGSB33xea/GzbN+R+wpLLQThO6gGTN9LGskAsU74lKTlSPCGNEGEmtJqcl38qvUDuAs8B2pACdgBHAdOt3B9vwJ7gCWbxP6YDABPIp1xEWIQu4HlGPU34HBSxZrKZ4pYVR0GJjLWDQLTa6Och8t6xstJm113cmpdzj1JZyQNeDbXM86DSamde57ndqRB1EO3oBMag7jyvwBML3nB7zR2MO/f8yKkG+i3kw+srDkE/gIeWZx+sSWqEQAAAABJRU5ErkJggg=="})})]})]})})},q=function(e){return e.split(",").filter((function(e){return" "!==e})).join(",")},V=/([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1,2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9][A-Za-z]?))))\s?[0-9][A-Za-z]{2})/,W=function(e){var n=e.split(",").map((function(e){return e.trim()})),t=Object(K.a)(n,7),r=t[0],a=void 0===r?"":r,o=t[1],s=void 0===o?"":o,c=(t[2],t[3],t[4],t[5]),i=void 0===c?"":c,d=t[6];return{addressLine1:a,addressLine2:s,city:i,county:void 0===d?"":d}},X=function(){var e=Object(j.useState)(null),n=Object(K.a)(e,2),t=n[0],r=n[1],a=Object(j.useState)(!1),o=Object(K.a)(a,2),s=o[0],c=o[1],i=Object(w.b)(),d=Object(f.a)(),l=d.register,b=d.handleSubmit,u=d.errors,p=d.watch;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("form",{onSubmit:b((function(e){var n=e.postcodeSearch.trim().split(" ").join("").toLowerCase();i(function(e){return{type:"SET_POSTCODE",payload:e}}(n)),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";fetch("https://api.getAddress.io/find/".concat(e,"?api-key=").concat("d2CFjHGLvUyAn7ZhPpR9eQ30092"),{mode:"cors",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e.json();c(!0)})).then((function(n){console.log({data:n});var t=n.addresses.map((function(n){return{value:W(n),label:"".concat(q(n),", ").concat(e.toUpperCase())}}));r(t)})).catch((function(){return c(!0)}))}(n)})),children:Object(v.jsx)(Z,{label:"Postcode search",name:"postcodeSearch",placeholder:"Enter postcode",register:l({pattern:{value:V,message:"Please enter a valid postcode"}})})}),u.postcodeSearch&&Object(v.jsx)("div",{children:u.postcodeSearch.message}),s&&Object(v.jsx)("div",{children:"Failed to fetch addresses"}),t&&!s&&Object(v.jsx)("div",{className:"address-matches-dropdown-wrapper",children:Object(v.jsxs)(ee,{children:[Object(v.jsx)("span",{children:"Address"}),Object(v.jsx)(L,{name:"address-matches",onSelect:function(e){var n=p("postcodeSearch"),t=Object(g.a)(Object(g.a)({},e.value),{},{postcode:n.trim().toUpperCase()});console.log({formattedData:t}),i(function(e){return{type:"SET_SELECTED_ADDRESS",payload:e}}(Object(g.a)(Object(g.a)({},t),{},{postcode:n})))},options:t})]})})]})},$=O.a.main(b||(b=Object(A.a)(["\n  padding: 2rem;\n  width: 100%;\n  max-width: 30rem;\n  margin: auto;\n"]))),ee=O.a.label(u||(u=Object(A.a)(["\n  margin-top: 2rem;\n  color: white;\n  text-align: left;\n\n  span {\n    font-size: 0.875rem;\n    display: block;\n    color: rgba(255, 255, 255, 0.8);\n    margin-bottom: 0.75rem;\n  }\n"])));var ne=function(){var e=C((function(e){return e.formData.address}));return Object(v.jsx)("div",{className:"App",children:Object(v.jsxs)($,{children:[Object(v.jsx)(H,{}),Object(v.jsx)(Q,{}),Object(v.jsx)(G,{}),Object(v.jsx)(X,{}),e&&Object(v.jsx)(B,{})]})})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,61)).then((function(n){var t=n.getCLS,r=n.getFID,a=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),r(e),a(e),o(e),s(e)}))},re=t(18),ae=t(4),oe={userAddresses:[],formData:{}};var se=Object(re.b)((function(){var e,n,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"SET_POSTCODE":return Object(g.a)(Object(g.a)({},t),{},{formData:Object(g.a)(Object(g.a)({},t.formData),{},{postcode:r.payload})});case"ADD_NEW_ADDRESS":return Object(g.a)(Object(g.a)({},t),{},{userAddresses:[].concat(Object(ae.a)(t.userAddresses),[Object(g.a)(Object(g.a)({},r.payload),{},{id:"".concat(1e4*Math.random())})])});case"REMOVE_USER_ADDRESS":return Object(g.a)(Object(g.a)({},t),{},{userAddresses:t.userAddresses.filter((function(e){return e.id!==r.payload}))});case"SET_YEARS_AT_ADDRESS":return Object(g.a)(Object(g.a)({},t),{},{formData:{timeAtAddress:null===(e=t.formData)||void 0===e?void 0:e.timeAtAddress,years:r.payload}});case"SET_MONTHS_AT_ADDRESS":return Object(g.a)(Object(g.a)({},t),{},{formData:{timeAtAddress:null===(n=t.formData)||void 0===n?void 0:n.timeAtAddress,months:r.payload}});case"SET_SELECTED_ADDRESS":return Object(g.a)(Object(g.a)({},t),{},{formData:Object(g.a)(Object(g.a)({},t.formData),{},{address:r.payload})});default:return t}}));m.a.render(Object(v.jsx)(p.a.StrictMode,{children:Object(v.jsx)(w.a,{store:se,children:Object(v.jsx)(ne,{})})}),document.getElementById("root")),te()}},[[60,1,2]]]);
//# sourceMappingURL=main.f8e021b3.chunk.js.map