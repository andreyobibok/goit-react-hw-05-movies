"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(t,e,r){r.r(e),r.d(e,{default:function(){return d}});var n=r(861),a=r(439),c=r(757),u=r.n(c),s=r(689),i=r(791),o=r(637),p=r(806),f="Cast_list__GlWio",l="Cast_item__a0CDL",h="Cast_image__mOsuM",v=r(184),d=function(){var t=(0,i.useState)(null),e=(0,a.Z)(t,2),r=e[0],c=e[1],d=(0,i.useState)(!0),m=(0,a.Z)(d,2),w=m[0],g=m[1],x=(0,s.UO)().movieId;return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(u().mark((function t(){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,g(!0),t.next=4,(0,o.M1)(x);case 4:e=t.sent,r=e.cast,c(r),g(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:return t.prev=13,g(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]),(0,v.jsx)(v.Fragment,{children:w?"Loading...":r&&r.length>0?(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:f,children:r.map((function(t){var e=t.name,r=t.character,n=t.profile_path,a=t.id;return(0,v.jsxs)("li",{className:l,children:[n?(0,v.jsx)("img",{alt:e,src:"https://image.tmdb.org/t/p/w92".concat(n)}):(0,v.jsx)("img",{alt:"default",src:p,className:h}),(0,v.jsx)("p",{children:e}),(0,v.jsxs)("p",{children:["(",r,")"]})]},a)}))})}):(0,v.jsx)("p",{children:"No data found"})})}},637:function(t,e,r){r.d(e,{Df:function(){return s},M1:function(){return f},TP:function(){return o},qF:function(){return d},tx:function(){return h}});var n=r(861),a=r(757),c=r.n(a),u=r(243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"ea96f6fb5fc9e33f95fe833ab22b1c37",language:"en-US"}});function s(t){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function t(e){var r,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"/trending/movie/week",t.prev=1,t.next=4,u.get("/trending/movie/week",{params:{page:e}});case 4:return r=t.sent,n=r.data,t.abrupt("return",n);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function o(t){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/credits"),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function t(e){var r,n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="/movie/".concat(e,"/reviews"),t.prev=1,t.next=4,u.get(r);case 4:return n=t.sent,a=n.data,t.abrupt("return",a);case 9:throw t.prev=9,t.t0=t.catch(1),t.t0;case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))).apply(this,arguments)}function d(t,e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(c().mark((function t(e,r){var n,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="/search/movie?query=".concat(e),t.prev=1,t.next=4,u.get(n,{params:{page:r}});case 4:return a=t.sent,t.abrupt("return",a);case 8:throw t.prev=8,t.t0=t.catch(1),t.t0;case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}},806:function(t,e,r){t.exports=r.p+"static/media/profile.8e7ab55da0bc52271ed8.jpg"}}]);
//# sourceMappingURL=76.36bb7cb4.chunk.js.map