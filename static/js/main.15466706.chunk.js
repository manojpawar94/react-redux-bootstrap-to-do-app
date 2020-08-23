(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{43:function(e,t,a){e.exports=a(57)},48:function(e,t,a){},49:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),i=a.n(l),o=(a(48),a(49),a(9)),c=a(40),s="ADD_TODO_ITEM",u="REMOVE_TODO_ITEM",m="EDIT_TODO_ITEM",d="TODO_COMPLETED",p="TOGGLE_TODO",g="SET_VISIBILITY_FILTER",E="SHOW_ALL",h="SHOW_COMPLETED",f="SHOW_ACTIVE",b=a(24),v=a(13),y=a(14),O=a(11),T=Object(o.b)()((function(e){var t=e.dispatch,a=Object(n.useState)(""),l=Object(c.a)(a,2),i=l[0],o=l[1];return r.a.createElement(b.a,{onSubmit:function(e){e.preventDefault(),i.trim()&&(t(function(e){var t=e.trim();return{type:s,payload:t}}(i)),o(""))}},r.a.createElement(b.a.Row,null,r.a.createElement(v.a,{size:"lg",className:"mb-3"},r.a.createElement(y.a,{placeholder:"Enter to-do task","aria-label":"Enter to-do task","aria-describedby":"basic-addon2",type:"text",value:i,onChange:function(e){return o(e.target.value)}}),r.a.createElement(v.a.Append,null,r.a.createElement(O.a,{type:"submit",variant:"outline-secondary"},"Add Task")))))})),k=a(19),P=a(20),x=a(12),j=a(23),C=a(22),I=a(41),S=a(26),D=a(25),w=function(e){Object(j.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).state={isEditable:!1,updateTodoText:"Default"},e.setTodoText=e.setTodoText.bind(Object(x.a)(e)),e.toggleIsEditable=e.toggleIsEditable.bind(Object(x.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(x.a)(e)),e}return Object(P.a)(a,[{key:"setTodoText",value:function(e){this.setState({updateTodoText:e.target.value})}},{key:"toggleIsEditable",value:function(){this.setState({isEditable:!this.state.isEditable})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.state.updateTodoText.trim()&&("Default"!==this.state.updateTodoText?(this.props.update(this.props.id,this.state.updateTodoText),this.setState({isEditable:!1})):this.setState({isEditable:!1}))}},{key:"render",value:function(){var e=this,t=this.state.isEditable,a=this.props,n=a.id,l=a.text,i=a.completed;return r.a.createElement(I.a,null,t?r.a.createElement(b.a,{onSubmit:this.handleSubmit},r.a.createElement(b.a.Row,null,r.a.createElement(v.a,{size:"lg"},r.a.createElement(y.a,{placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2",type:"text",value:"Default"===this.state.updateTodoText?l:this.state.updateTodoText,onChange:this.setTodoText,style:{height:"46px"}}),r.a.createElement(v.a.Append,null,r.a.createElement(S.a,{placement:"bottom",overlay:r.a.createElement(D.a,null,r.a.createElement("strong",null,"Update"),".")},r.a.createElement(O.a,{type:"submit",variant:"outline-secondary"},r.a.createElement("i",{className:"material-icons"},"done"))),r.a.createElement(S.a,{placement:"bottom",overlay:r.a.createElement(D.a,null,r.a.createElement("strong",null,"Cancel"),".")},r.a.createElement(O.a,{variant:"outline-secondary",onClick:this.toggleIsEditable},r.a.createElement("i",{className:"material-icons"},"cancel"))))))):r.a.createElement(v.a,{size:"lg"},r.a.createElement(y.a,{"aria-describedby":"basic-addon2",style:{textDecoration:i?"line-through":"none",border:"none",background:"none",height:"46px"},value:l,disabled:!0}),r.a.createElement(v.a.Append,null,r.a.createElement(S.a,{placement:"bottom",overlay:r.a.createElement(D.a,null,r.a.createElement("strong",null,"Edit"),".")},r.a.createElement(O.a,{variant:"outline-secondary",onClick:this.toggleIsEditable},r.a.createElement("i",{className:"material-icons"},"create"))),r.a.createElement(S.a,{placement:"bottom",overlay:r.a.createElement(D.a,null,r.a.createElement("strong",null,"Delete"),".")},r.a.createElement(O.a,{variant:"outline-secondary",onClick:function(t){return e.props.remove(n)}},r.a.createElement("i",{className:"material-icons"},"delete"))),r.a.createElement(S.a,{placement:"bottom",overlay:r.a.createElement(D.a,null,r.a.createElement("strong",null,i?"Mark Active":"Mark Completed"),".")},r.a.createElement(O.a,{variant:"outline-secondary",onClick:function(t){return e.props.done(n)}},i?r.a.createElement("i",{className:"material-icons"},"cancel"):r.a.createElement("i",{className:"material-icons"},"done"))))))}}]),a}(n.Component),N=Object(o.b)(null,(function(e){return{update:function(t,a){return e(function(e,t){return{type:m,payload:{id:e,text:t}}}(t,a))},remove:function(t){return e(function(e){return{type:u,payload:e}}(t))},done:function(t){return e(function(e){return{type:d,payload:e}}(t))}}}))(w),A=a(30),M=a(16),_=function(e){Object(j.a)(a,e);var t=Object(C.a)(a);function a(e){var n;return Object(k.a)(this,a),(n=t.call(this,e)).state={pager:{}},n}return Object(P.a)(a,[{key:"componentWillMount",value:function(){this.props.items&&this.props.items.length&&this.setPage(this.props.initialPage)}},{key:"componentDidUpdate",value:function(e,t){this.props.items!==e.items&&this.setPage(this.props.initialPage)}},{key:"setPage",value:function(e){var t=this.props,a=t.items,n=t.pageSize;if(!(e<1)){var r=this.getPager(a.length,e,n),l=a.slice(r.startIndex,r.endIndex+1);this.setState({pager:r}),this.props.onChangePage(l)}}},{key:"getPager",value:function(e,t,a){t=t||1,a=a||10;var n,r,l=Math.ceil(e/a);l<=10?(n=1,r=l):t<=6?(n=1,r=10):t+4>=l?(n=l-9,r=l):(n=t-5,r=t+4);var i=(t-1)*a,o=Math.min(i+a-1,e-1),c=Object(A.a)(Array(r+1-n).keys()).map((function(e){return n+e}));return{totalItems:e,currentPage:t,pageSize:a,totalPages:l,startPage:n,endPage:r,startIndex:i,endIndex:o,pages:c}}},{key:"render",value:function(){var e=this,t=this.state.pager;return!t.pages||t.pages.length<=1?null:r.a.createElement(M.a,{size:"lg"},r.a.createElement(M.a.First,{className:1===t.currentPage?"disabled":"",onClick:function(){return e.setPage(1)}}),r.a.createElement(M.a.Prev,{className:1===t.currentPage?"disabled":"",onClick:function(){return e.setPage(t.currentPage-1)}}),t.pages.map((function(a,n){return r.a.createElement(M.a.Item,{key:n,className:t.currentPage===a?"active":"",onClick:function(){return e.setPage(a)}},a)})),r.a.createElement(M.a.Next,{className:t.currentPage===t.totalPages?"disabled":"",onClick:function(){return e.setPage(t.currentPage+1)}}),r.a.createElement(M.a.Last,{className:t.currentPage===t.totalPages?"disabled":"",onClick:function(){return e.setPage(t.totalPages)}}))}}]),a}(n.Component);_.defaultProps={initialPage:1,pageSize:5};var L=_,R=a(15),z=a(10),W=function(e){Object(j.a)(a,e);var t=Object(C.a)(a);function a(){var e;return Object(k.a)(this,a),(e=t.call(this)).state={pageOfItems:[]},e.onChangePage=e.onChangePage.bind(Object(x.a)(e)),e}return Object(P.a)(a,[{key:"componentDidMount",value:function(){0!==this.props.todos.length&&0===this.state.pageOfItems.length&&this.setState({pageOfItems:[]})}},{key:"onChangePage",value:function(e){this.setState({pageOfItems:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{style:{height:"366px"}},r.a.createElement(z.a,null,this.state.pageOfItems.map((function(e,t){return r.a.createElement(N,Object.assign({key:t+1},e))})))),r.a.createElement(R.a,{className:"justify-content-md-center"},r.a.createElement(z.a,{style:{textAlign:"center"}},r.a.createElement(L,{items:this.props.todos,onChangePage:this.onChangePage}))))}}]),a}(n.Component),F=function(e,t){switch(t){case E:return e;case h:return e.filter((function(e){return e.completed}));case f:return e.filter((function(e){return!e.completed}));default:throw new Error("Unknown filter: "+t)}},B=Object(o.b)((function(e){return{todos:F(e.todos,e.visibilityFilter)}}))(W),H=a(39),U=function(e){var t=e.active,a=e.children,n=e.onClick;return r.a.createElement(O.a,{onClick:n,disabled:t,style:{marginLeft:"4px"},size:"lg"},a)},V=Object(o.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){return e((a=t.filter,{type:g,filter:a}));var a}}}))(U),G=function(){return r.a.createElement("div",null,r.a.createElement("span",null,"Filter: "),r.a.createElement(V,{filter:E},"All"),r.a.createElement(V,{filter:f},"Active"),r.a.createElement(V,{filter:h},"Completed"))};var J=function(){return r.a.createElement(H.a,null,r.a.createElement(R.a,null,r.a.createElement(z.a,null,r.a.createElement("h3",{style:{fontWeight:"bolder"}},"Todo Application - {React, Redux, React-Bootstrap}"),r.a.createElement("h5",null,"Developed by Manoj Pawar"),r.a.createElement("hr",null))),r.a.createElement(R.a,null,r.a.createElement(z.a,{sm:6},r.a.createElement(T,null),r.a.createElement("h5",{style:{paddingBottom:"12px",fontWeight:"bolder"}},"Your To-do item list"),r.a.createElement(B,null)),r.a.createElement(z.a,{sm:6})),r.a.createElement(R.a,null,r.a.createElement(z.a,null,r.a.createElement(G,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=a(17),$=a(42),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return[].concat(Object(A.a)(e),[Object.assign({},{id:e.length+1,text:t.payload,completed:!1})]);case m:return e.map((function(e){if(e.id===t.payload.id){var a={id:t.payload.id,text:t.payload.text,completed:e.completed};return console.log(a),a}return e}));case u:return e.filter((function(e){return e.id!==t.payload})).map((function(e,t){return{id:t+1,text:e.text,completed:e.completed}}));case d:return e.map((function(e){return e.id===t.payload?{id:e.id,text:e.text,completed:!e.completed}:e}));case p:return e.map((function(e){return e.id===t.id?Object($.a)({},e,{completed:!e.completed}):e}));default:return e}},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return t.filter;default:return e}},Q=Object(Y.b)({todos:q,visibilityFilter:K}),X=Object(Y.c)(Q);i.a.render(r.a.createElement(o.a,{store:X},r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.15466706.chunk.js.map