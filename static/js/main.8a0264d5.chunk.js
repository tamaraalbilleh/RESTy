(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),r=n(23),c=n.n(r),i=(n(30),n(22)),l=n(7),o=n(8),h=n(11),u=n(10),j=n(9),d=(n(31),n(12)),b=(n(32),n(0)),p=function(){return Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("h1",{children:" RESTy "}),Object(b.jsx)("nav",{id:"nav",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:"list",children:Object(b.jsx)(d.b,{to:"/",children:"Home"})}),Object(b.jsx)("li",{className:"list",children:Object(b.jsx)(d.b,{to:"/history",children:"History"})}),Object(b.jsx)("li",{className:"list",children:Object(b.jsx)(d.b,{to:"/help",children:" Help"})})]})})]})},O=(n(42),function(){return Object(b.jsx)("footer",{className:"App-footer",children:"&copy 2021 Tamara Amin"})}),f=n(15),x=n.n(f),m=n(25),y=n(20),v=(n(44),function(e){return e.condition?e.children:null});n(45);var g=function(){return Object(b.jsx)("div",{className:"laod"})},k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target.value;a.setState({section:t})},a.handleClick=function(e){e.preventDefault();var t=e.target.value;a.setState({method:t})},a.submitHandler=function(){var e=Object(y.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),setTimeout(Object(y.a)(x.a.mark((function e(){var n,s,r,c,i,l,o,h,u,j,d,b;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.props.meth||!a.props.ur){e.next=12;break}if(s=a.props.meth,r=a.props.ur,!a.props.bod){e.next=9;break}return e.next=6,JSON.stringify(a.props.bod);case 6:c=e.sent,e.next=10;break;case 9:c=t.target.body.value;case 10:e.next=15;break;case 12:s=a.state.method,r=a.state.section,c=t.target.body.value;case 15:if("PUT"!==s&&"POST"!==s){e.next=21;break}return e.next=18,fetch(r,{method:s,body:c,mode:"cors",headers:{"Content-Type":"application/json"}});case 18:n=e.sent,e.next=25;break;case 21:if("GET"!==s&&"DELETE"!==s){e.next=25;break}return e.next=24,fetch(r,{method:s});case 24:n=e.sent;case 25:return a.setState({body:c,flag:!a.state.flag}),e.next=28,fetch(r).then((function(e){var t,n=Object(m.a)(e.headers.entries());try{for(n.s();!(t=n.n()).done;){for(var a=t.value,s=a.length,r="",c=0;c<s;c++)c%2===0&&(r=r+a[c]+": "+a[c+1]);return r}}catch(i){n.e(i)}finally{n.f()}}));case 28:return i=e.sent,e.next=31,n.json();case 31:l=e.sent,a.setState({results:l,body:c,flag:!a.state.flag}),o=[],l&&(h="".concat(a.state.method,",").concat(a.state.section,",").concat(c),(u=JSON.parse(localStorage.getItem("request")))&&Object.values(u).map((function(e){o.includes(e)||o.push(e)})),o.includes(h)||(o.push(h),localStorage.setItem("request",JSON.stringify(o)))),j=l.results?l.results:l,d=l.count?l.count:l.length,b=a.state.flag,a.props.handler(j,d,i,o,b);case 39:case"end":return e.stop()}}),e)}))),3e3);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.toggle=function(){a.setState({flag:!a.state.flag})},a.state={section:"http://localhost:3000",method:"GET",body:{},results:[],flag:!1},a.submitHandler=a.submitHandler.bind(Object(h.a)(a)),a.toggle=a.toggle.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(b.jsx)("label",{for:"url-input",children:"URL : "}),Object(b.jsx)("input",{id:"inputs",type:"text",name:"inputurl",onChange:this.handleInput}),Object(b.jsx)(v,{condition:this.state.flag,children:Object(b.jsx)(g,{})}),Object(b.jsx)("button",{id:"get",onClick:this.handleClick,value:"GET",children:"GET"}),Object(b.jsx)("button",{id:"post",onClick:this.handleClick,value:"POST",children:"POST"}),Object(b.jsx)("button",{id:"put",onClick:this.handleClick,value:"PUT",children:"PUT"}),Object(b.jsx)("button",{id:"delete",onClick:this.handleClick,value:"DELETE",children:"DELETE"}),Object(b.jsx)("textarea",{rows:"4",cols:"60",id:"textarea",name:"body",placeholder:"please enter a json body"}),Object(b.jsx)("input",{id:"submit",type:"submit",value:"Go!",className:"go"}),Object(b.jsx)("br",{})]}),Object(b.jsxs)("h4",{children:[this.props.meth||this.state.method,"  :  ",this.props.ur||this.state.section," "]})]})}}]),n}(s.a.Component),S=n(21),C=n.n(S),H=(n(46),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.props.count>0?Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)("div",{id:"results",children:[" results for your search :",Object(b.jsx)("p",{children:"Headers :"})," ",Object(b.jsx)(C.a,{id:"json-pretty",data:this.props.header}),Object(b.jsxs)("p",{children:["count is ",this.props.count]}),Object(b.jsx)("p",{children:"Results : "}),Object(b.jsx)(C.a,{id:"json-pretty",data:this.props.results})]})}):Object(b.jsx)("p",{})}}]),n}(s.a.Component)),T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).hisClickHandler=function(e){e.preventDefault();var t=[],n=JSON.parse(localStorage.getItem("request"));if(n){Object.values(n).map((function(e){t.includes(e)||t.push(e)}));var s=e.target.method.value,r=e.target.url.value,c=e.target.body.value;a.props.after(s,r,c)}},a.hisClickHandler=a.hisClickHandler.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsx)("ul",{className:"history",children:this.props.arr.map((function(t){var n,a=t.split(","),r=a[0],c=a[1];if(a[2]&&(n=a[2]),a.length>3)for(var i=3;i<a.length;i++)n+=a[i];return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)("form",{onSubmit:e.hisClickHandler,children:[Object(b.jsx)("input",{type:"hidden",value:a[0],name:"method"}),Object(b.jsx)("input",{type:"hidden",value:a[1],name:"url"}),Object(b.jsx)("input",{type:"hidden",value:a[2]+a[3],name:"body"}),Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{type:"submit",children:r}),"   ",c," , body is ",n]})]})})}))})})}}]),n}(s.a.Component),E=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(s.a.Fragment,{children:[Object(b.jsx)("h2",{children:"How to use this website :"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:"input the url for the api"}),Object(b.jsx)("li",{children:"choose the method from the buttons below"}),Object(b.jsx)("li",{children:"press on GO"}),Object(b.jsx)("li",{children:"to use the history : click on the button next to the history query then press GO"})]})]})}}]),n}(s.a.Component),N=n(2),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).afterSubmit=function(e,t,n){a.setState({method:e,URL:t,body:n})},a.componentDidMount=function(){var e=[],t=JSON.parse(localStorage.getItem("request"));t&&Object.values(t).map((function(t){e.includes(t)||e.push(t)})),a.setState({array:e})},a.state={results:["search result will appear here :"],count:0,header:"headers will be displayed here",array:[],method:"",URL:"",body:{},flag:!1},a.handleForm=a.handleForm.bind(Object(h.a)(a)),a.handleHistory=a.handleHistory.bind(Object(h.a)(a)),a}return Object(o.a)(n,[{key:"handleForm",value:function(e,t,n,a,s){this.setState({results:e,count:t,header:n,array:a,flag:s})}},{key:"handleHistory",value:function(e,t){this.setState(Object(i.a)(Object(i.a)({},this.state),{},{array:e,flag:t}))}},{key:"render",value:function(){return Object(b.jsx)(s.a.Fragment,{children:Object(b.jsxs)(d.a,{children:[Object(b.jsx)(p,{}),Object(b.jsx)(N.c,{children:Object(b.jsxs)("main",{children:[Object(b.jsx)(N.a,{exact:!0,path:"/history",children:Object(b.jsx)(T,{historyHandler:this.handleHistory,after:this.afterSubmit,arr:this.state.array,flag:this.state.flag})}),Object(b.jsxs)(N.a,{exact:!0,path:"/",children:[Object(b.jsx)(T,{historyHandler:this.handleHistory,after:this.afterSubmit,arr:this.state.array,flag:this.state.flag}),Object(b.jsx)(k,{handler:this.handleForm,meth:this.state.method,ur:this.state.URL,bod:this.state.body,fl:this.state.flag}),Object(b.jsx)(H,{results:this.state.results,count:this.state.count,header:this.state.header})]}),Object(b.jsx)(N.a,{exact:!0,path:"/help",children:Object(b.jsx)(E,{})})]})}),Object(b.jsx)(O,{})]})})}}]),n}(s.a.Component);c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.8a0264d5.chunk.js.map