(this.webpackJsonpresty=this.webpackJsonpresty||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(10),a=n.n(c),i=(n(17),n(2)),o=n(3),u=n(6),l=n(5),h=n(4),d=(n(18),n(19),n(0)),j=function(){return Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:" RESTy "})})},b=(n(21),function(){return Object(d.jsx)("footer",{className:"App-footer",children:"&copy 2021 Tamara Amin"})}),p=n(8),O=n.n(p),f=n(12),x=n(11),m=(n(23),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).handleInput=function(e){var t=e.target.value;r.setState({section:t})},r.handleClick=function(e){e.preventDefault();var t=e.target.value;r.setState({method:t})},r.submitHandler=function(){var e=Object(x.a)(O.a.mark((function e(t){var n,s,c,a,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=r.state.section,e.next=4,fetch(n);case 4:return s=e.sent,e.next=7,fetch(n).then((function(e){var t,n=Object(f.a)(e.headers.entries());try{for(n.s();!(t=n.n()).done;){for(var r=t.value,s=r.length,c="",a=0;a<s;a++)a%2===0&&(c=c+r[a]+": "+r[a+1]);return c}}catch(i){n.e(i)}finally{n.f()}}));case 7:return c=e.sent,e.next=10,s.json();case 10:a=e.sent,console.log("headers",c),console.log("data",a),i=a.count,o=a.results,r.props.handler(o,i,c);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r.state={section:"http://localhost:3000",method:"GET"},r}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsxs)("form",{onSubmit:this.submitHandler,children:[Object(d.jsx)("label",{for:"url-input",children:"URL : "}),Object(d.jsx)("input",{id:"url-input",type:"text",name:"url-input",onChange:this.handleInput}),Object(d.jsx)("input",{id:"submit",type:"submit",value:"Go!"}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{id:"get",onClick:this.handleClick,value:"GET",children:"GET"}),Object(d.jsx)("button",{id:"post",onClick:this.handleClick,value:"POST",children:"POST"}),Object(d.jsx)("button",{id:"put",onClick:this.handleClick,value:"PUT",children:"PUT"}),Object(d.jsx)("button",{id:"delete",onClick:this.handleClick,value:"DELETE",children:"DELETE"})]}),Object(d.jsx)("div",{id:"formd",children:Object(d.jsxs)("h4",{children:[this.state.method,"  :  ",this.state.section," "]})})]})}}]),n}(s.a.Component)),v=n(9),y=n.n(v),k=(n(27),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("props : ",this.props),Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)("div",{id:"results",children:[" results for your search :",Object(d.jsxs)("p",{children:["Headers : ",Object(d.jsx)(y.a,{id:"json-pretty",data:this.props.header})]}),Object(d.jsxs)("p",{children:["count is ",this.props.count]}),Object(d.jsxs)("p",{children:["Results : ",Object(d.jsx)(y.a,{id:"json-pretty",data:this.props.results})," "]})]})})}}]),n}(s.a.Component)),C=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var r;return Object(i.a)(this,n),(r=t.call(this,e)).state={results:["search result will appear here :"],count:0,header:"headers will be displayed here"},r.handleForm=r.handleForm.bind(Object(u.a)(r)),r}return Object(o.a)(n,[{key:"handleForm",value:function(e,t,n){this.setState({results:e,count:t,header:n})}},{key:"render",value:function(){return Object(d.jsxs)(s.a.Fragment,{children:[Object(d.jsx)(j,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(m,{handler:this.handleForm}),Object(d.jsx)(k,{results:this.state.results,count:this.state.count,header:this.state.header})]}),Object(d.jsx)(b,{})]})}}]),n}(s.a.Component);a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.066e9b44.chunk.js.map