"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[606],{606:function(t,e,r){r.r(e),r.d(e,{default:function(){return w}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(791),i=r(689),o=r(637),p="Home_title__XLxL1",f=r(87),v="MovieList_item__tDivI",l="MovieList_link__+cn-g",h=r(184),m=function(t){var e=t.movies,r=t.location,n=e.map((function(t){var e=t.id,n=t.title;return(0,h.jsx)("li",{className:v,children:(0,h.jsx)(f.rU,{state:{from:r},to:"/movies/".concat(e,"}"),className:l,children:n})},e)}));return(0,h.jsx)("ul",{children:n})},d=function(){var t=(0,s.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],f=(0,s.useState)(!0),v=(0,a.Z)(f,2),l=v[0],d=v[1],w=(0,i.TH)();return(0,s.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,d(!0),t.next=4,(0,o.Df)();case 4:e=t.sent,c(e.results),d(!1),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:return t.prev=12,d(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:p,children:"Trending movies:"}),l?"Loading...":(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(m,{movies:r,location:w})})]})},w=function(){return(0,h.jsx)("div",{children:(0,h.jsx)(d,{})})}},637:function(t,e,r){r.d(e,{Df:function(){return s},M1:function(){return f},TP:function(){return o},qF:function(){return m},tx:function(){return l}});var n=r(861),a=r(757),c=r.n(a),u=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ea96f6fb5fc9e33f95fe833ab22b1c37",language:"en-US"}});function s(t){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,u.get("/trending/movie/week",{params:{page:e}});case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function l(t){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function m(t,e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,u.get(n,{params:{page:r}});case 4:return a=t.sent,t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=606.73bde3b6.chunk.js.map