(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{113:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(24),c=a.n(r),l=(a(79),a(15)),i=a(16),s=a(19),u=a(17),m=a(20),d=a(12),p=a(21),h=(a(80),a(81),a(82),a(30)),b=a.n(h),E=a(65),g=a.n(E);function f(e){return o.a.createElement(d.b,{className:"navbar-brand",to:"/React-SPA-Blog/"},"Blog")}function v(e){var t=e.text,a=e.exact,n=e.to;return o.a.createElement(p.a,{path:n,exact:a,children:function(e){var a=e.match;return o.a.createElement("li",{className:a?"active":""},a?"> ":"",o.a.createElement(d.b,{to:n},t))}})}var y=function(){return o.a.createElement(b.a,{bg:"dark",expand:"lg"},o.a.createElement(f,null),o.a.createElement(b.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(b.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(g.a,{className:"mr-auto"},o.a.createElement(v,{text:"Home",to:"/React-SPA-Blog/",exact:!0},"Home"),o.a.createElement(v,{text:"Posts",to:"/React-SPA-Blog/posts"},"Posts"),o.a.createElement(v,{text:"Write a post",to:"/React-SPA-Blog/NewPost"},"Write a post"))))},P=a(18),O=(a(113),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChangeAuthor=function(e){a.setState({author:e.target.value})},a.handleChangeTitle=function(e){a.setState({title:e.target.value})},a.handleChangeContent=function(e){a.setState({body:e.target.value})},a.handleSubmit=function(e){e.preventDefault();var t=a.props,n=t.createPost,o=t.history,r=a.state;n(r.author,r.title,r.body),a.setState({title:"",body:"",author:""}),o.push("/React-SPA-Blog/posts")},a.state={title:"",body:"",author:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.title,a=e.body,n=e.author;return console.log(this.state),o.a.createElement("div",null,o.a.createElement("h2",null,"Write a Post"),o.a.createElement("div",{className:"new-post-author"},o.a.createElement("label",null,"\u4f5c\u8005\uff1a"),o.a.createElement("textarea",{onChange:this.handleChangeAuthor,value:n})),o.a.createElement("div",{className:"new-post-title"},o.a.createElement("label",null,"\u6a19\u984c\uff1a"),o.a.createElement("textarea",{onChange:this.handleChangeTitle,value:t})),o.a.createElement("div",{className:"new-post-content"},o.a.createElement("label",null,"\u5167\u6587\uff1a"),o.a.createElement("textarea",{onChange:this.handleChangeContent,value:a})),o.a.createElement("button",{type:"submit",className:"btn btn-outline-info",onClick:this.handleSubmit},"Submit"))}}]),t}(n.Component)),j=a(26),w=a.n(j),S="GET_SINGLE_POST",N="GET_ALL_POSTS",C=Object(p.e)(Object(P.b)(null,function(e){return{createPost:function(t,a,n){e(function(e,t,a){return{type:"CREATE_POST",payload:w.a.post("https://qootest.com/posts",{author:e,title:t,body:a})}}(t,a,n))}}})(function(e){return o.a.createElement(O,e)})),R=(a(130),a(73)),k=a(69),D=a.n(k),A=a(67),x=a.n(A),B=a(68),T=a.n(B);function L(){var e=Object(n.useState)(!1),t=Object(R.a)(e,2),a=t[0],r=t[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(x.a,{onClick:function(){return r(!a)},"aria-controls":"example-fade-text","aria-expanded":a},"\u4f86\u9996\u6b4c\u597d\u55ce\uff1f"),o.a.createElement(T.a,{in:a},o.a.createElement("div",{style:{width:660,height:"auto"},className:"home-page-video"},o.a.createElement(D.a,{aspect:"a16by9",aspectRatio:"16by9"},o.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/0dxP6oEuNHM",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})))))}var _=function(){return o.a.createElement("div",null,o.a.createElement("h2",null,"Home Page"),o.a.createElement("p",null,"E \u4e16\u4ee3\u6700\u3105\u3127\u3124\u02cb\u7684\u4e8b\u60c5\uff0c\u5c31\u662f\u5230\u6230\u7565\u9ad8\u624b\u4e0a\u5947\u6469\u5bb6\u65cf\uff0c\u4e00\u908a\u7528\u5373\u6642\u901a\u628a\u59b9\uff0c\u6216\u662f\u5e36\u8457\u6700\u65b0\u7684\u54c8\u96fb\u65cf\u8ddf\u540c\u4e00\u639b\u7684\u9ebb\u5409\u53bb\u897f\u9580\u753a\u58d3\u99ac\u8def\u3002"),o.a.createElement("p",null,"\u5982\u679c\u6709\u4eba\u770b\u4e0d\u61c2\uff0c\u54c7\u54e9\u54a7\uff0c\u4f60\u5011\u5c31\u771f\u7684\u662fLKK\u4e86\u3002"),o.a.createElement(L,null))};a(131);function q(e){var t=e.posts,a=e.history;return t.map(function(e){return o.a.createElement("div",{key:e.id,className:"card text-white bg-dark mb-3",onClick:function(){a.push("/React-SPA-Blog/posts/"+e.id)}},o.a.createElement("div",{className:"card-header"},e.id),o.a.createElement("div",{className:"card-body"},o.a.createElement("h4",{className:"card-title"},e.title),o.a.createElement("p",{className:"card-text"},e.body)))})}var F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.getAllPosts)()}},{key:"render",value:function(){var e=this.props,t=e.history,a=e.allPosts;return o.a.createElement("div",null,o.a.createElement("h2",null,"Posts"),o.a.createElement("div",{className:"post-list"},o.a.createElement(q,{posts:a,key:a.id,history:t})))}}]),t}(n.Component),I=Object(p.e)(Object(P.b)(function(e){return{allPosts:e.AllPostsReducer.allPosts}},function(e){return{getAllPosts:function(){e({type:N,payload:w.a.get("https://qootest.com/posts")})}}})(function(e){return o.a.createElement(F,e)})),G=(a(132),a(70)),M=a.n(G);function W(){return o.a.createElement(M.a,{animation:"border",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading..."))}function H(e){var t=e.className,a=e.value,n=e.onChange;return o.a.createElement("div",{className:t},o.a.createElement("textarea",{value:a,onChange:n}))}var J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(){var e=a.props,t=e.match,n=e.deletePost,o=e.history;if(!window.confirm("\u78ba\u5b9a\u8981\u522a\u9664\u55ce\uff1f"))return null;n(t.params.id),o.push("/React-SPA-Blog/posts")},a.handleEditMode=function(){a.setState({isEditing:!a.state.isEditing})},a.handleEditTitle=function(e){a.setState({title:e.target.value})},a.handleEditContent=function(e){a.setState({body:e.target.value})},a.handleEditSubmit=function(){var e=a.state,t=e.author,n=e.title,o=e.body,r=a.props,c=r.editPost,l=r.singlePost,i=r.history;c(l.id,t,n,o),i.push("/React-SPA-Blog/posts")},a.state={isEditing:!1,title:"",body:"",author:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.match;(0,e.getSinglePost)(t.params.id)}},{key:"componentDidUpdate",value:function(e,t){if(e!==this.props){var a=this.props.singlePost;this.setState({title:a.title,body:a.body,author:a.author})}}},{key:"render",value:function(){var e=this.state,t=e.isEditing,a=e.title,r=e.body,c=this.props,l=c.singlePost,i=c.isLoading;return o.a.createElement("div",null,o.a.createElement("div",{className:"content"},t?o.a.createElement(n.Fragment,null,o.a.createElement(H,{className:"edit-title",value:a,onChange:this.handleEditTitle}),o.a.createElement(H,{className:"edit-content",value:r,onChange:this.handleEditContent})):o.a.createElement(n.Fragment,null,o.a.createElement("h2",null,i?o.a.createElement(W,null):l.title),i?o.a.createElement(W,null):o.a.createElement("p",{className:"card-content"}," ",l.body," "))),o.a.createElement("div",{className:"btn-container"},t?o.a.createElement(n.Fragment,null,o.a.createElement("button",{className:"btn btn-outline-warning",onClick:this.handleEditSubmit},"Submit")):o.a.createElement(n.Fragment,null,o.a.createElement("button",{className:"btn btn-outline-primary",onClick:this.handleDelete},"Delete"),o.a.createElement("button",{className:"btn btn-outline-warning",onClick:this.handleEditMode},"Edit"))),o.a.createElement("div",{className:"back-btn-container"},o.a.createElement(d.b,{to:"/React-SPA-Blog/posts",className:"btn btn-outline-info"}," Go back ")))}}]),t}(n.Component),U=Object(p.e)(Object(P.b)(function(e){return{singlePost:e.singlePostReducer.singlePost,isLoading:e.singlePostReducer.isPostRequesting}},function(e){return{deletePost:function(t){e(function(e){return{type:"DELETE_POST",payload:w.a.delete("https://qootest.com/posts/"+e)}}(t))},editPost:function(t,a,n,o){e(function(e,t,a,n){return{type:"EDIT_POST",payload:w.a.put("https://qootest.com/posts/"+e,{author:t,title:a,body:n})}}(t,a,n,o))},getSinglePost:function(t){e(function(e){return{type:S,payload:w.a.get("https://qootest.com/posts/"+e)}}(t))}}})(function(e){return o.a.createElement(J,e)})),K=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(y,null),o.a.createElement("div",{className:"main-page"},o.a.createElement(p.a,{exact:!0,path:"/React-SPA-Blog/",component:_}),o.a.createElement(p.a,{exact:!0,path:"/React-SPA-Blog/posts",component:I}),o.a.createElement(p.a,{path:"/React-SPA-Blog/NewPost",component:C}),o.a.createElement(p.a,{path:"/React-SPA-Blog/posts/:id",component:U}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(22),z=a(29);function Q(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function V(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Q(a,!0).forEach(function(t){Object(z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Q(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var X={singlePost:{},isPostRequesting:!1};function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach(function(t){Object(z.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ee={allPosts:[],isLoadingDeletePost:!1};var te=Object($.c)({singlePostReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(S,"_PENDING"):return V({},e,{isPostRequesting:!0});case"".concat(S,"_FULFILLED"):return V({},e,{singlePost:t.payload.data,isPostRequesting:!1});case"".concat(S,"_REJECTED"):return V({},e,{isPostRequesting:!1});default:return e}},AllPostsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"".concat(N,"_PENDING"):return Z({},e);case"".concat(N,"_FULFILLED"):return Z({},e,{allPosts:t.payload.data});case"".concat(N,"_REJECTED"):return Z({},e);default:return e}}}),ae=a(71),ne=a(72),oe=a.n(ne),re=Object($.d)(te,Object($.a)(ae.a,oe.a));c.a.render(o.a.createElement(P.a,{store:re},o.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports=a(133)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.27825fe8.chunk.js.map