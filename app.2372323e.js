(function(){"use strict";var t={1539:function(t,n,o){var e=o(9242),i=o(3396);const r={id:"app"};function s(t,n,o,e,s,u){const c=(0,i.up)("Posts");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(c)])}var u=o(7139);const c=["onClick"],l=["onClick"],f=["onClick"];function a(t,n,o,e,r,s){return(0,i.wg)(),(0,i.iD)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.posts,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.id},[(0,i.Uk)((0,u.zw)(t.title)+" ",1),(0,i._)("button",{onClick:n=>s.likePost(t.id)},"Like",8,c),(0,i._)("span",null,(0,u.zw)(t.likes),1),(0,i._)("button",{onClick:n=>s.dislikePost(t.id)},"Dislike",8,l),(0,i._)("span",null,(0,u.zw)(t.dislikes),1),(0,i._)("button",{onClick:n=>s.deletePost(t.id)},"Delete",8,f)])))),128))])}var d=o(4161),p={data(){return{posts:[]}},mounted(){this.fetchPosts()},methods:{fetchPosts(){d.Z.get("https://jsonplaceholder.typicode.com/posts").then((t=>{this.posts=t.data.map((t=>({...t,likes:0,dislikes:0})))})).catch((t=>{console.log(t)}))},likePost(t){const n=this.posts.find((n=>n.id==t));n&&n.likes++},dislikePost(t){const n=this.posts.find((n=>n.id==t));n&&n.dislikes++},deletePost(t){this.posts=this.posts.filter((n=>n.id!=t))}}},v=o(89);const h=(0,v.Z)(p,[["render",a]]);var k=h,b={name:"App",components:{Posts:k}};const w=(0,v.Z)(b,[["render",s]]);var g=w;(0,e.ri)(g).mount("#app")}},n={};function o(e){var i=n[e];if(void 0!==i)return i.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(n,e,i,r){if(!e){var s=1/0;for(f=0;f<t.length;f++){e=t[f][0],i=t[f][1],r=t[f][2];for(var u=!0,c=0;c<e.length;c++)(!1&r||s>=r)&&Object.keys(o.O).every((function(t){return o.O[t](e[c])}))?e.splice(c--,1):(u=!1,r<s&&(s=r));if(u){t.splice(f--,1);var l=i();void 0!==l&&(n=l)}}return n}r=r||0;for(var f=t.length;f>0&&t[f-1][2]>r;f--)t[f]=t[f-1];t[f]=[e,i,r]}}(),function(){o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,{a:n}),n}}(),function(){o.d=function(t,n){for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};o.O.j=function(n){return 0===t[n]};var n=function(n,e){var i,r,s=e[0],u=e[1],c=e[2],l=0;if(s.some((function(n){return 0!==t[n]}))){for(i in u)o.o(u,i)&&(o.m[i]=u[i]);if(c)var f=c(o)}for(n&&n(e);l<s.length;l++)r=s[l],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(f)},e=self["webpackChunkvue"]=self["webpackChunkvue"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(1539)}));e=o.O(e)})();
//# sourceMappingURL=app.2372323e.js.map