"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,t,r){r.r(t),r.d(t,{default:function(){return l}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(689),i=r(791),o=r(637),p="Reviews_list__okdpy",f="Reviews_item__DJKij",v="Reviews_author__CqYAZ",h=r(184),l=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),r=t[0],c=t[1],l=(0,i.useState)(!0),d=(0,a.Z)(l,2),w=d[0],m=d[1],x=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var e=function(){var e=(0,n.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,(0,o.tx)(x);case 4:t=e.sent,r=t.results,c(r),m(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:return e.prev=13,m(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();e()}),[x]),(0,h.jsx)(h.Fragment,{children:w?"Loading...":r&&r.length>0?(0,h.jsx)("div",{children:(0,h.jsx)("ul",{className:p,children:r.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,h.jsxs)("li",{className:f,children:[(0,h.jsx)("p",{className:v,children:t}),r&&r]},n)}))})}):(0,h.jsx)("p",{children:"No reviews found"})})}},637:function(e,t,r){r.d(t,{Df:function(){return s},M1:function(){return f},TP:function(){return o},qF:function(){return d},tx:function(){return h}});var n=r(861),a=r(757),c=r.n(a),u=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ea96f6fb5fc9e33f95fe833ab22b1c37",language:"en-US"}});function s(e){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/trending/movie/week",e.prev=1,e.next=4,u.get("/trending/movie/week",{params:{page:t}});case 4:return r=e.sent,n=r.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function o(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/credits"),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function h(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="/movie/".concat(t,"/reviews"),e.prev=1,e.next=4,u.get(r);case 4:return n=e.sent,a=n.data,e.abrupt("return",a);case 9:throw e.prev=9,e.t0=e.catch(1),e.t0;case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function d(e,t){return w.apply(this,arguments)}function w(){return(w=(0,n.Z)(c().mark((function e(t,r){var n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/search/movie?query=".concat(t),e.prev=1,e.next=4,u.get(n,{params:{page:r}});case 4:return a=e.sent,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=168.ae79082d.chunk.js.map