import{S as ue,i as fe,s as de,k as w,q as G,l as y,m as v,r as M,h as p,n as d,b as z,E as m,u as Ee,B as re,a as L,a3 as ve,c as j,a4 as we,F,f as A,t as C,e as X,g as $,d as ee,a5 as Ve,w as he,x as pe,y as _e,z as me,G as Ne,I as Y,V as ft,a6 as Ae,a7 as ye,a8 as P,o as dt}from"../../../../chunks/index-7eb94aea.js";import{t as Ce}from"../../../../chunks/SvelteToast.svelte_svelte_type_style_lang-3dc53d3a.js";import{r as Le}from"../../../../chunks/index-35a671a5.js";import{w as R,b as oe,s as De,a as Se,c as ae,d as Re}from"../../../../chunks/notes-b72b5684.js";import{f as ze,t as pt}from"../../../../chunks/index-a809133b.js";import{w as _t}from"../../../../chunks/index-f9fb8d43.js";function mt(i){let t,e,r=i[0].slice(0,20)+"",l,s;return{c(){t=w("li"),e=w("a"),l=G(r),this.h()},l(o){t=y(o,"LI",{});var n=v(t);e=y(n,"A",{href:!0,target:!0,rel:!0,class:!0});var a=v(e);l=M(a,r),a.forEach(p),n.forEach(p),this.h()},h(){d(e,"href",s="notebook/note/"+i[1]),d(e,"target","_blank"),d(e,"rel","noreferrer"),d(e,"class","flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700")},m(o,n){z(o,t,n),m(t,e),m(e,l)},p(o,[n]){n&1&&r!==(r=o[0].slice(0,20)+"")&&Ee(l,r),n&2&&s!==(s="notebook/note/"+o[1])&&d(e,"href",s)},i:re,o:re,d(o){o&&p(t)}}}function gt(i,t,e){let{title:r}=t,{id:l}=t;return i.$$set=s=>{"title"in s&&e(0,r=s.title),"id"in s&&e(1,l=s.id)},[r,l]}class bt extends ue{constructor(t){super(),fe(this,t,gt,mt,de,{title:0,id:1})}}function Xe(i,t,e){const r=i.slice();return r[5]=t[e],r}function kt(i){let t,e,r=i[2],l=[];for(let o=0;o<r.length;o+=1)l[o]=Ze(Xe(i,r,o));const s=o=>C(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=X()},l(o){for(let n=0;n<l.length;n+=1)l[n].l(o);t=X()},m(o,n){for(let a=0;a<l.length;a+=1)l[a].m(o,n);z(o,t,n),e=!0},p(o,n){if(n&4){r=o[2];let a;for(a=0;a<r.length;a+=1){const f=Xe(o,r,a);l[a]?(l[a].p(f,n),A(l[a],1)):(l[a]=Ze(f),l[a].c(),A(l[a],1),l[a].m(t.parentNode,t))}for($(),a=r.length;a<l.length;a+=1)s(a);ee()}},i(o){if(!e){for(let n=0;n<r.length;n+=1)A(l[n]);e=!0}},o(o){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)C(l[n]);e=!1},d(o){Ve(l,o),o&&p(t)}}}function Ze(i){let t,e;return t=new bt({props:{title:i[5].Title,id:i[5].ID}}),{c(){he(t.$$.fragment)},l(r){pe(t.$$.fragment,r)},m(r,l){_e(t,r,l),e=!0},p:re,i(r){e||(A(t.$$.fragment,r),e=!0)},o(r){C(t.$$.fragment,r),e=!1},d(r){me(t,r)}}}function vt(i){let t,e,r,l=i[0][1]+"",s,o,n,a,f,c,u,_,N,b,g=i[2]&&kt(i);return{c(){t=w("li"),e=w("button"),r=w("span"),s=G(l),o=L(),n=ve("svg"),a=ve("path"),f=L(),c=w("ul"),g&&g.c(),this.h()},l(k){t=y(k,"LI",{});var h=v(t);e=y(h,"BUTTON",{type:!0,class:!0});var I=v(e);r=y(I,"SPAN",{class:!0});var T=v(r);s=M(T,l),T.forEach(p),o=j(I),n=we(I,"svg",{class:!0,fill:!0,viewBox:!0,xmlns:!0});var x=v(n);a=we(x,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(a).forEach(p),x.forEach(p),I.forEach(p),f=j(h),c=y(h,"UL",{class:!0});var E=v(c);g&&g.l(E),E.forEach(p),h.forEach(p),this.h()},h(){d(r,"class","flex-1 ml-3 text-left whitespace-nowrap"),d(a,"fill-rule","evenodd"),d(a,"d","M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"),d(a,"clip-rule","evenodd"),d(n,"class","w-6 h-6"),d(n,"fill","currentColor"),d(n,"viewBox","0 0 20 20"),d(n,"xmlns","http://www.w3.org/2000/svg"),d(e,"type","button"),d(e,"class","flex items-center w-full p-2 text-base font-normal text-gray-900 duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"),d(c,"class",u=i[1]+" py-2 space-y-2")},m(k,h){z(k,t,h),m(t,e),m(e,r),m(r,s),m(e,o),m(e,n),m(n,a),m(t,f),m(t,c),g&&g.m(c,null),_=!0,N||(b=F(e,"click",i[3]),N=!0)},p(k,[h]){(!_||h&1)&&l!==(l=k[0][1]+"")&&Ee(s,l),k[2]&&g.p(k,h),(!_||h&2&&u!==(u=k[1]+" py-2 space-y-2"))&&d(c,"class",u)},i(k){_||(A(g),_=!0)},o(k){C(g),_=!1},d(k){k&&p(t),g&&g.d(),N=!1,b()}}}function wt(i,t,e){let r;R.subscribe(a=>{r=a});let{name:l}=t,s=[];for(const a in r.Data)r.Data[a].NotebookID==l[0]&&s.push(r.Data[a]);let o="hidden";const n=()=>{o==="hidden"?e(1,o="visible"):e(1,o="hidden")};return i.$$set=a=>{"name"in a&&e(0,l=a.name)},[l,o,s,n]}class yt extends ue{constructor(t){super(),fe(this,t,wt,vt,de,{name:0})}}function $e(i){let t,e,r,l,s,o,n,a,f;return{c(){t=w("button"),e=w("div"),r=w("button"),l=G("Delete"),this.h()},l(c){t=y(c,"BUTTON",{class:!0});var u=v(t);e=y(u,"DIV",{class:!0});var _=v(e);r=y(_,"BUTTON",{class:!0});var N=v(r);l=M(N,"Delete"),N.forEach(p),_.forEach(p),u.forEach(p),this.h()},h(){d(r,"class","group-hover:flex text-[#ECF2FF] "),d(e,"class","m-auto"),d(t,"class",s="cursor-pointer absolute z-100 flex top-0 h-full transition-width transition-slowest ease duration-150 m-auto right-0 bg-red-400 "+i[4]+" rounded-md text-white")},m(c,u){z(c,t,u),m(t,e),m(e,r),m(r,l),n=!0,a||(f=F(r,"click",i[11]),a=!0)},p(c,u){(!n||u&16&&s!==(s="cursor-pointer absolute z-100 flex top-0 h-full transition-width transition-slowest ease duration-150 m-auto right-0 bg-red-400 "+c[4]+" rounded-md text-white"))&&d(t,"class",s)},i(c){n||(ft(()=>{o||(o=Ae(t,ze,{x:12,duration:400},!0)),o.run(1)}),n=!0)},o(c){o||(o=Ae(t,ze,{x:12,duration:400},!1)),o.run(0),n=!1},d(c){c&&p(t),c&&o&&o.end(),a=!1,f()}}}function et(i){let t,e,r,l,s;return{c(){t=w("div"),e=w("input"),this.h()},l(o){t=y(o,"DIV",{class:!0});var n=v(t);e=y(n,"INPUT",{class:!0,placeholder:!0}),n.forEach(p),this.h()},h(){d(e,"class",r="block "+i[2]),d(e,"placeholder",Tt),d(t,"class","")},m(o,n){z(o,t,n),m(t,e),ye(e,i[3]),l||(s=F(e,"input",i[12]),l=!0)},p(o,n){n&4&&r!==(r="block "+o[2])&&d(e,"class",r),n&8&&e.value!==o[3]&&ye(e,o[3])},d(o){o&&p(t),l=!1,s()}}}function Dt(i){let t=i[0].slice(0,34)+"",e,r;return{c(){e=G(t),r=G("...")},l(l){e=M(l,t),r=M(l,"...")},m(l,s){z(l,e,s),z(l,r,s)},p(l,s){s&1&&t!==(t=l[0].slice(0,34)+"")&&Ee(e,t)},d(l){l&&p(e),l&&p(r)}}}function Et(i){let t;return{c(){t=G(i[0])},l(e){t=M(e,i[0])},m(e,r){z(e,t,r)},p(e,r){r&1&&Ee(t,e[0])},d(e){e&&p(t)}}}function Nt(i){let t,e,r,l,s,o,n,a,f,c,u=i[4]=="w-[33%]"&&$e(i),_=i[1]=="0"&&et(i);function N(k,h){return k[0].length<35?Et:Dt}let b=N(i),g=b(i);return{c(){t=w("div"),u&&u.c(),e=L(),r=w("button"),_&&_.c(),l=L(),s=w("p"),g.c(),this.h()},l(k){t=y(k,"DIV",{class:!0});var h=v(t);u&&u.l(h),e=j(h),r=y(h,"BUTTON",{class:!0});var I=v(r);_&&_.l(I),l=j(I),s=y(I,"P",{class:!0});var T=v(s);g.l(T),T.forEach(p),I.forEach(p),h.forEach(p),this.h()},h(){d(s,"class",o="w-fit flex-none mx-auto text-2xl overflow-hidden text-clip font-bold tracking-tight text-gray-900 "+i[2]+" dark:text-white"),d(r,"class","min-w-full inline-block text-ellipsis"),d(t,"class",n="text-ellipsis group mx-auto relative min-w-full h-full "+i[2]+" max-w-sm py-6 border rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700")},m(k,h){z(k,t,h),u&&u.m(t,null),m(t,e),m(t,r),_&&_.m(r,null),m(r,l),m(r,s),g.m(s,null),a=!0,f||(c=[F(r,"click",i[13]),F(t,"pointerenter",i[14]),F(t,"pointerleave",i[15])],f=!0)},p(k,[h]){k[4]=="w-[33%]"?u?(u.p(k,h),h&16&&A(u,1)):(u=$e(k),u.c(),A(u,1),u.m(t,e)):u&&($(),C(u,1,1,()=>{u=null}),ee()),k[1]=="0"?_?_.p(k,h):(_=et(k),_.c(),_.m(r,l)):_&&(_.d(1),_=null),b===(b=N(k))&&g?g.p(k,h):(g.d(1),g=b(k),g&&(g.c(),g.m(s,null))),(!a||h&4&&o!==(o="w-fit flex-none mx-auto text-2xl overflow-hidden text-clip font-bold tracking-tight text-gray-900 "+k[2]+" dark:text-white"))&&d(s,"class",o),(!a||h&4&&n!==(n="text-ellipsis group mx-auto relative min-w-full h-full "+k[2]+" max-w-sm py-6 border rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"))&&d(t,"class",n)},i(k){a||(A(u),a=!0)},o(k){C(u),a=!1},d(k){k&&p(t),u&&u.d(),_&&_.d(),g.d(),f=!1,Ne(c)}}}let Tt="New notebook!";function It(i,t,e){let r,l,s;Y(i,oe,D=>e(17,r=D)),Y(i,De,D=>e(6,l=D)),Y(i,Se,D=>e(7,s=D));let{content:o}=t,{id:n}=t,{token:a}=t,{pointer:f}=t,{pre:c}=t,u;R.subscribe(D=>{u=D});let _=[];for(const D in u.Data)u.Data[D].NotebookID==n&&_.push(u.Data[D]);let N="",b="",g="";async function k(D){const B=new FormData;if(B.append("id",D),(await(await fetch("http://localhost:81/notebooks/",{method:"DELETE",body:B,headers:{Authorization:"Bearer "+a}})).json()).Status=="error")throw Le(302,"/logout");let K=await(await fetch("http://localhost:81/notebooks/all",{method:"GET",headers:{Authorization:"Bearer "+a,"Content-Type":"application/json"}})).json(),U=[];for(const W in K.Data)U.push([K.Data[W].ID,K.Data[W].Title]);P(oe,r=U,r)}const h=()=>{k(n),Ce.push("Notebook Deleted!",{theme:{"--toastColor":"mintcream","--toastBarBackground":"#C70039"}})};function I(){N=this.value,e(3,N)}const T=()=>{P(De,l=n,l),P(Se,s="notes",s),s&&window.sessionStorage.setItem("store",s),l&&window.sessionStorage.setItem("id",l)},x=()=>{e(4,b="w-[33%]"),e(5,g="Delete")},E=()=>{e(4,b=""),e(5,g="")};return i.$$set=D=>{"content"in D&&e(0,o=D.content),"id"in D&&e(1,n=D.id),"token"in D&&e(9,a=D.token),"pointer"in D&&e(2,f=D.pointer),"pre"in D&&e(10,c=D.pre)},[o,n,f,N,b,g,l,s,k,a,c,h,I,T,x,E]}class Bt extends ue{constructor(t){super(),fe(this,t,It,Nt,de,{content:0,id:1,token:9,pointer:2,pre:10})}}function tt(i){let t,e,r,l,s,o,n,a,f;return{c(){t=w("button"),e=w("div"),r=w("button"),l=G("Delete"),this.h()},l(c){t=y(c,"BUTTON",{class:!0});var u=v(t);e=y(u,"DIV",{class:!0});var _=v(e);r=y(_,"BUTTON",{class:!0});var N=v(r);l=M(N,"Delete"),N.forEach(p),_.forEach(p),u.forEach(p),this.h()},h(){d(r,"class","group-hover:flex text-[#ECF2FF] "),d(e,"class","m-auto"),d(t,"class",s="cursor-pointer absolute z-100 flex top-0 h-full transition-width transition-slowest ease duration-150 m-auto right-0 bg-red-400 "+i[3]+" rounded-md text-white")},m(c,u){z(c,t,u),m(t,e),m(e,r),m(r,l),n=!0,a||(f=F(r,"click",i[7]),a=!0)},p(c,u){(!n||u&8&&s!==(s="cursor-pointer absolute z-100 flex top-0 h-full transition-width transition-slowest ease duration-150 m-auto right-0 bg-red-400 "+c[3]+" rounded-md text-white"))&&d(t,"class",s)},i(c){n||(ft(()=>{o||(o=Ae(t,ze,{x:12,duration:200},!0)),o.run(1)}),n=!0)},o(c){o||(o=Ae(t,ze,{x:12,duration:200},!1)),o.run(0),n=!1},d(c){c&&p(t),c&&o&&o.end(),a=!1,f()}}}function xt(i){let t,e,r,l,s=i[0].Title+"",o,n,a,f=i[0].Content.slice(0,25)+"",c,u,_,N,b=i[3]=="w-[33%]"&&tt(i);return{c(){t=w("div"),b&&b.c(),e=L(),r=w("a"),l=w("h5"),o=G(s),n=L(),a=w("p"),this.h()},l(g){t=y(g,"DIV",{class:!0});var k=v(t);b&&b.l(k),e=j(k),r=y(k,"A",{href:!0,target:!0,rel:!0});var h=v(r);l=y(h,"H5",{class:!0});var I=v(l);o=M(I,s),I.forEach(p),n=j(h),a=y(h,"P",{class:!0});var T=v(a);T.forEach(p),h.forEach(p),k.forEach(p),this.h()},h(){d(l,"class","w-fit m-auto flex-none mx-auto text-2xl overflow-hidden text-clip font-bold tracking-tight text-gray-900 dark:text-white"),d(a,"class","m-auto font-normal w-fit max-h-full max-w-sm text-ellipsis text-gray-700 dark:text-gray-400"),d(r,"href",c="notebook-"+i[2]+"/note/"+i[0].ID),d(r,"target","_blank"),d(r,"rel","noreferrer"),d(t,"class","text-ellipsis mx-auto relative min-w-full h-full max-w-sm py-6 border rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700")},m(g,k){z(g,t,k),b&&b.m(t,null),m(t,e),m(t,r),m(r,l),m(l,o),m(r,n),m(r,a),a.innerHTML=f,u=!0,_||(N=[F(r,"click",i[8]),F(t,"pointerenter",i[9]),F(t,"pointerleave",i[10])],_=!0)},p(g,[k]){g[3]=="w-[33%]"?b?(b.p(g,k),k&8&&A(b,1)):(b=tt(g),b.c(),A(b,1),b.m(t,e)):b&&($(),C(b,1,1,()=>{b=null}),ee()),(!u||k&1)&&s!==(s=g[0].Title+"")&&Ee(o,s),(!u||k&1)&&f!==(f=g[0].Content.slice(0,25)+"")&&(a.innerHTML=f),(!u||k&5&&c!==(c="notebook-"+g[2]+"/note/"+g[0].ID))&&d(r,"href",c)},i(g){u||(A(b),u=!0)},o(g){C(b),u=!1},d(g){g&&p(t),b&&b.d(),_=!1,Ne(N)}}}function At(i,t,e){let r,l,s;Y(i,R,h=>e(13,r=h)),Y(i,ae,h=>e(14,l=h)),Y(i,Re,h=>e(5,s=h)),dt(function(){});let{title:o}=t,n,a,{token:f}=t;De.subscribe(h=>{e(2,a=h)}),R.subscribe(h=>{n=h});let c="",u="";async function _(h){const I=new FormData;if(I.append("id",h),(await(await fetch("http://localhost:81/notes/",{method:"DELETE",body:I,headers:{Authorization:"Bearer "+f}})).json()).Status=="error")throw Le(302,"/logout");n=await(await fetch("http://localhost:81/notes/all",{method:"GET",headers:{Authorization:"Bearer "+f,"Content-Type":"application/json"}})).json();let D=[];for(const B in n.Data)n.Data[B].NotebookID==a&&D.push(n.Data[B]);P(ae,l=D,l),P(R,r=n,r)}const N=()=>{Ce.push("Note deleted!",{theme:{"--toastColor":"mintcream","--toastBarBackground":"#C70039"}}),_(o.ID)},b=()=>{P(Re,s=[o.ID,f],s)},g=()=>{e(3,c="w-[33%]"),e(4,u="Delete")},k=()=>{e(3,c=""),e(4,u="")};return i.$$set=h=>{"title"in h&&e(0,o=h.title),"token"in h&&e(1,f=h.token)},[o,f,a,c,u,s,_,N,b,g,k]}class St extends ue{constructor(t){super(),fe(this,t,At,xt,de,{title:0,token:1})}}function ot(i,t,e){const r=i.slice();return r[25]=t[e],r}function rt(i){let t,e=i[4]()+"",r;return{c(){t=w("div"),r=G(e),this.h()},l(l){t=y(l,"DIV",{class:!0});var s=v(t);r=M(s,e),s.forEach(p),this.h()},h(){d(t,"class","hidden")},m(l,s){z(l,t,s),m(t,r)},p(l,s){s&16&&e!==(e=l[4]()+"")&&Ee(r,e)},d(l){l&&p(t)}}}function lt(i){let t,e;return t=new St({props:{title:i[25],token:i[1]}}),{c(){he(t.$$.fragment)},l(r){pe(t.$$.fragment,r)},m(r,l){_e(t,r,l),e=!0},p(r,l){const s={};l&64&&(s.title=r[25]),l&2&&(s.token=r[1]),t.$set(s)},i(r){e||(A(t.$$.fragment,r),e=!0)},o(r){C(t.$$.fragment,r),e=!1},d(r){me(t,r)}}}function zt(i){let t,e,r,l,s,o,n,a,f,c,u,_,N,b,g,k,h=i[3]<1&&rt(i),I=i[6].reverse(),T=[];for(let E=0;E<I.length;E+=1)T[E]=lt(ot(i,I,E));const x=E=>C(T[E],1,1,()=>{T[E]=null});return{c(){h&&h.c(),t=L(),e=w("div"),r=w("div"),l=w("div"),s=w("div"),o=w("input"),n=L(),a=w("button"),f=w("p"),c=G("+"),u=L(),_=w("div"),N=L();for(let E=0;E<T.length;E+=1)T[E].c();this.h()},l(E){h&&h.l(E),t=j(E),e=y(E,"DIV",{class:!0});var D=v(e);r=y(D,"DIV",{class:!0});var B=v(r);l=y(B,"DIV",{class:!0});var H=v(l);s=y(H,"DIV",{});var J=v(s);o=y(J,"INPUT",{class:!0,placeholder:!0}),J.forEach(p),n=j(H),a=y(H,"BUTTON",{class:!0});var le=v(a);f=y(le,"P",{});var K=v(f);c=M(K,"+"),K.forEach(p),le.forEach(p),H.forEach(p),u=j(B),_=y(B,"DIV",{}),v(_).forEach(p),B.forEach(p),N=j(D);for(let U=0;U<T.length;U+=1)T[U].l(D);D.forEach(p),this.h()},h(){d(o,"class","relative block w-full appearance-none rounded border border-gray-300 py-6 px-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"),d(o,"placeholder",Vt),d(a,"class","min-w-full hover:bg-blue-200 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"),d(l,"class","mx-auto block max-w-sm min-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"),d(r,"class",""),d(e,"class","mx-auto grid min-w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 min-h-full")},m(E,D){h&&h.m(E,D),z(E,t,D),z(E,e,D),m(e,r),m(r,l),m(l,s),m(s,o),ye(o,i[2]),m(l,n),m(l,a),m(a,f),m(f,c),m(r,u),m(r,_),m(e,N);for(let B=0;B<T.length;B+=1)T[B].m(e,null);b=!0,g||(k=[F(o,"input",i[14]),F(a,"click",i[15])],g=!0)},p(E,[D]){if(E[3]<1?h?h.p(E,D):(h=rt(E),h.c(),h.m(t.parentNode,t)):h&&(h.d(1),h=null),D&4&&o.value!==E[2]&&ye(o,E[2]),D&66){I=E[6].reverse();let B;for(B=0;B<I.length;B+=1){const H=ot(E,I,B);T[B]?(T[B].p(H,D),A(T[B],1)):(T[B]=lt(H),T[B].c(),A(T[B],1),T[B].m(e,null))}for($(),B=I.length;B<T.length;B+=1)x(B);ee()}},i(E){if(!b){for(let D=0;D<I.length;D+=1)A(T[D]);b=!0}},o(E){T=T.filter(Boolean);for(let D=0;D<T.length;D+=1)C(T[D]);b=!1},d(E){h&&h.d(E),E&&p(t),E&&p(e),Ve(T,E),g=!1,Ne(k)}}}let Vt="Make a new note!",Ct=10;function Lt(i,t,e){let r,l,s,o,n,a,f=re;Y(i,R,x=>e(23,n=x)),Y(i,ae,x=>e(6,a=x)),i.$$.on_destroy.push(()=>f());let{ids:c}=t,{token:u}=t,_;De.subscribe(x=>{e(9,c=x)}),R.subscribe(x=>{e(11,_=x)});let N="",b=[];for(const x in _.Data)_.Data[x].NotebookID==c&&b.push(_.Data[x]);P(ae,a=b,a);function g(){}async function k(x){const E=new FormData;if(E.append("id",x),(await(await fetch("http://localhost:81/notes/",{method:"DELETE",body:E,headers:{Authorization:"Bearer "+u}})).json()).Status=="error")throw Le(302,"/logout");const H=await fetch("http://localhost:81/notes/all",{method:"GET",headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"}});e(11,_=await H.json()),e(12,b=[]);for(const J in _.Data)_.Data[J].NotebookID==c&&b.push(_.Data[J]);P(ae,a=b,a),P(R,n=_,n)}let h=pt(Ct);Y(i,h,x=>e(3,o=x)),setInterval(()=>{o>0&&P(h,o--,o)},1e3);function I(){N=this.value,e(2,N)}const T=()=>{r(),Ce.push("New note created!",{theme:{"--toastColor":"mintcream","--toastBackground":"rgba(72,187,120,0.9)","--toastBarBackground":"#2F855A"}})};return i.$$set=x=>{"ids"in x&&e(9,c=x.ids),"token"in x&&e(1,u=x.token)},i.$$.update=()=>{i.$$.dirty&6662&&e(5,r=async()=>{N=="Sheel-patel-todo"&&window.open("https://tasktonic.netlify.app/","_blank");const x=new FormData;x.append("id",c),x.append("Title",N);const E=await fetch("http://localhost:81/notes/create",{method:"POST",body:x,headers:{Authorization:"Bearer "+u}}),D=await fetch("http://localhost:81/notes/all",{method:"GET",headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"}});e(11,_=await D.json()),e(12,b=[]);for(const B in _.Data)_.Data[B].NotebookID==c&&b.push(_.Data[B]);P(ae,a=b,a),P(R,n=_,n),await E.json()}),i.$$.dirty&6658&&e(4,l=async()=>{const x=await fetch("http://localhost:81/notes/all",{method:"GET",headers:{Authorization:"Bearer "+u,"Content-Type":"application/json"}});e(11,_=await x.json()),e(12,b=[]);for(const E in _.Data)_.Data[E].NotebookID==c&&b.push(_.Data[E]);P(ae,a=b,a),P(R,n=_,n)}),i.$$.dirty&8&&e(13,s=Math.floor(o/60)),i.$$.dirty&8192,i.$$.dirty&8200},[ae,u,N,o,l,r,a,g,h,c,k,_,b,s,I,T]}class jt extends ue{constructor(t){super(),fe(this,t,Lt,zt,de,{arr:0,ids:9,token:1,dele:10})}get arr(){return ae}get dele(){return this.$$.ctx[10]}}function at(i,t,e){const r=i.slice();return r[6]=t[e],r}function nt(i,t,e){const r=i.slice();return r[6]=t[e],r}function Ut(i){let t,e,r=i[4].reverse(),l=[];for(let o=0;o<r.length;o+=1)l[o]=st(at(i,r,o));const s=o=>C(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=X()},l(o){for(let n=0;n<l.length;n+=1)l[n].l(o);t=X()},m(o,n){for(let a=0;a<l.length;a+=1)l[a].m(o,n);z(o,t,n),e=!0},p(o,n){if(n&16){r=o[4].reverse();let a;for(a=0;a<r.length;a+=1){const f=at(o,r,a);l[a]?(l[a].p(f,n),A(l[a],1)):(l[a]=st(f),l[a].c(),A(l[a],1),l[a].m(t.parentNode,t))}for($(),a=r.length;a<l.length;a+=1)s(a);ee()}},i(o){if(!e){for(let n=0;n<r.length;n+=1)A(l[n]);e=!0}},o(o){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)C(l[n]);e=!1},d(o){Ve(l,o),o&&p(t)}}}function Pt(i){let t,e,r=i[3],l=[];for(let o=0;o<r.length;o+=1)l[o]=it(nt(i,r,o));const s=o=>C(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=X()},l(o){for(let n=0;n<l.length;n+=1)l[n].l(o);t=X()},m(o,n){for(let a=0;a<l.length;a+=1)l[a].m(o,n);z(o,t,n),e=!0},p(o,n){if(n&11){r=o[3];let a;for(a=0;a<r.length;a+=1){const f=nt(o,r,a);l[a]?(l[a].p(f,n),A(l[a],1)):(l[a]=it(f),l[a].c(),A(l[a],1),l[a].m(t.parentNode,t))}for($(),a=r.length;a<l.length;a+=1)s(a);ee()}},i(o){if(!e){for(let n=0;n<r.length;n+=1)A(l[n]);e=!0}},o(o){l=l.filter(Boolean);for(let n=0;n<l.length;n+=1)C(l[n]);e=!1},d(o){Ve(l,o),o&&p(t)}}}function st(i){let t,e,r,l;return e=new yt({props:{name:i[6]}}),{c(){t=w("li"),he(e.$$.fragment),r=L()},l(s){t=y(s,"LI",{});var o=v(t);pe(e.$$.fragment,o),r=j(o),o.forEach(p)},m(s,o){z(s,t,o),_e(e,t,null),m(t,r),l=!0},p(s,o){const n={};o&16&&(n.name=s[6]),e.$set(n)},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){s&&p(t),me(e)}}}function it(i){let t,e,r,l;return e=new Bt({props:{token:i[0],id:i[6][0],content:i[6][1],pointer:i[1],pre:i[6][2]}}),{c(){t=w("div"),he(e.$$.fragment),r=L(),this.h()},l(s){t=y(s,"DIV",{class:!0});var o=v(t);pe(e.$$.fragment,o),r=j(o),o.forEach(p),this.h()},h(){d(t,"class","mx-auto text-ellipsis min-h-full block w-[100%] border border-slate-700 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700")},m(s,o){z(s,t,o),_e(e,t,null),m(t,r),l=!0},p(s,o){const n={};o&1&&(n.token=s[0]),o&8&&(n.id=s[6][0]),o&8&&(n.content=s[6][1]),o&2&&(n.pointer=s[1]),o&8&&(n.pre=s[6][2]),e.$set(n)},i(s){l||(A(e.$$.fragment,s),l=!0)},o(s){C(e.$$.fragment,s),l=!1},d(s){s&&p(t),me(e)}}}function Ft(i){let t,e,r,l;const s=[Pt,Ut],o=[];function n(a,f){return a[2]==0?0:a[2]==1?1:-1}return~(t=n(i))&&(e=o[t]=s[t](i)),{c(){e&&e.c(),r=X()},l(a){e&&e.l(a),r=X()},m(a,f){~t&&o[t].m(a,f),z(a,r,f),l=!0},p(a,[f]){let c=t;t=n(a),t===c?~t&&o[t].p(a,f):(e&&($(),C(o[c],1,1,()=>{o[c]=null}),ee()),~t?(e=o[t],e?e.p(a,f):(e=o[t]=s[t](a),e.c()),A(e,1),e.m(r.parentNode,r)):e=null)},i(a){l||(A(e),l=!0)},o(a){C(e),l=!1},d(a){~t&&o[t].d(a),a&&p(r)}}}function Ot(i,t,e){let r,l;Y(i,oe,f=>e(4,l=f));let{token:s}=t,{pointer:o}=t,{mode:n}=t,a=_t([]);return Y(i,a,f=>e(3,r=f)),oe.subscribe(f=>{P(a,r=f,r)}),i.$$set=f=>{"token"in f&&e(0,s=f.token),"pointer"in f&&e(1,o=f.pointer),"mode"in f&&e(2,n=f.mode)},[s,o,n,r,l,a]}class ht extends ue{constructor(t){super(),fe(this,t,Ot,Ft,de,{token:0,pointer:1,mode:2})}}function Gt(i){let t,e,r,l;return{c(){t=w("div"),e=w("div"),r=w("span"),l=G("Loading..."),this.h()},l(s){t=y(s,"DIV",{class:!0});var o=v(t);e=y(o,"DIV",{class:!0,role:!0});var n=v(e);r=y(n,"SPAN",{class:!0});var a=v(r);l=M(a,"Loading..."),a.forEach(p),n.forEach(p),o.forEach(p),this.h()},h(){d(r,"class","!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"),d(e,"class","inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"),d(e,"role","status"),d(t,"class","grid content-center mx-auto max-w-2xl rounded-lg mt-16 items-center justify-center")},m(s,o){z(s,t,o),m(t,e),m(e,r),m(r,l)},p:re,i:re,o:re,d(s){s&&p(t)}}}function Mt(i){let t,e,r,l,s,o,n,a,f,c,u,_,N,b,g,k,h,I,T,x,E,D,B,H,J,le,K,U,W,V,ie,Z,ce,Te,ne,Q,q,ge,Ie,je,Ue;B=new ht({props:{mode:"1",token:i[0].token,pointer:i[7]}});const Pe=[Wt,Ht],se=[];function Fe(S,O){return S[0]?0:1}return Q=Fe(i),q=se[Q]=Pe[Q](i),{c(){t=w("button"),e=w("span"),r=G("Open sidebar"),l=L(),s=ve("svg"),o=ve("path"),n=L(),a=w("div"),f=w("div"),c=w("ul"),u=w("button"),_=w("span"),N=G("Simple Notes"),b=L(),g=w("ul"),k=w("li"),h=w("a"),I=w("span"),T=G("Your notebooks:"),x=L(),E=w("ul"),D=L(),he(B.$$.fragment),H=L(),J=w("ul"),le=L(),K=w("li"),U=w("a"),W=ve("svg"),V=ve("path"),ie=L(),Z=w("span"),ce=G("Logout"),ne=L(),q.c(),ge=X(),this.h()},l(S){t=y(S,"BUTTON",{type:!0,class:!0});var O=v(t);e=y(O,"SPAN",{class:!0});var be=v(e);r=M(be,"Open sidebar"),be.forEach(p),l=j(O),s=we(O,"svg",{class:!0,"aria-hidden":!0,fill:!0,viewBox:!0,xmlns:!0});var ke=v(s);o=we(ke,"path",{"clip-rule":!0,"fill-rule":!0,d:!0}),v(o).forEach(p),ke.forEach(p),O.forEach(p),n=j(S),a=y(S,"DIV",{class:!0,"aria-label":!0});var Oe=v(a);f=y(Oe,"DIV",{class:!0});var Ge=v(f);c=y(Ge,"UL",{class:!0});var Be=v(c);u=y(Be,"BUTTON",{class:!0});var Me=v(u);_=y(Me,"SPAN",{class:!0});var He=v(_);N=M(He,"Simple Notes"),He.forEach(p),Me.forEach(p),b=j(Be),g=y(Be,"UL",{class:!0});var te=v(g);k=y(te,"LI",{});var We=v(k);h=y(We,"A",{href:!0,class:!0});var qe=v(h);I=y(qe,"SPAN",{class:!0});var Ye=v(I);T=M(Ye,"Your notebooks:"),Ye.forEach(p),qe.forEach(p),We.forEach(p),x=j(te),E=y(te,"UL",{class:!0}),v(E).forEach(p),D=j(te),pe(B.$$.fragment,te),H=j(te),J=y(te,"UL",{class:!0}),v(J).forEach(p),le=j(te),K=y(te,"LI",{});var Je=v(K);U=y(Je,"A",{href:!0,target:!0,class:!0});var xe=v(U);W=we(xe,"svg",{"aria-hidden":!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var Ke=v(W);V=we(Ke,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(V).forEach(p),Ke.forEach(p),ie=j(xe),Z=y(xe,"SPAN",{class:!0});var Qe=v(Z);ce=M(Qe,"Logout"),Qe.forEach(p),xe.forEach(p),Je.forEach(p),te.forEach(p),Be.forEach(p),Ge.forEach(p),Oe.forEach(p),ne=j(S),q.l(S),ge=X(),this.h()},h(){d(e,"class","sr-only"),d(o,"clip-rule","evenodd"),d(o,"fill-rule","evenodd"),d(o,"d","M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"),d(s,"class","w-6 h-6"),d(s,"aria-hidden","true"),d(s,"fill","currentColor"),d(s,"viewBox","0 0 20 20"),d(s,"xmlns","http://www.w3.org/2000/svg"),d(t,"type","button"),d(t,"class","Class z-50 inline-flex items-center p-6 mt-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"),d(_,"class","self-center text-xl font-semibold whitespace-nowrap dark:text-white"),d(u,"class","flex items-center pl-2.5 mb-5"),d(I,"class","flex-1 whitespace-nowrap"),d(h,"href","#"),d(h,"class","flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"),d(E,"class","pt-4 mt-4 space-y-2 border-t border-gray-500 dark:border-gray-700"),d(J,"class","pt-4 mt-4 space-y-2 border-t border-gray-500 dark:border-gray-700"),d(V,"fill-rule","evenodd"),d(V,"d","M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"),d(V,"clip-rule","evenodd"),d(W,"aria-hidden","true"),d(W,"class","flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"),d(W,"fill","currentColor"),d(W,"viewBox","0 0 20 20"),d(W,"xmlns","http://www.w3.org/2000/svg"),d(Z,"class","flex-1 ml-3 whitespace-nowrap"),d(U,"href","/logout"),d(U,"target","_self"),d(U,"class","flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"),d(g,"class","space-y-2"),d(c,"class","space-y-2"),d(f,"class","h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"),d(a,"class",Te="ease-in-out duration-300 fixed top-0 left-0 z-40 "+i[5]+" h-screen"),d(a,"aria-label","Sidebar")},m(S,O){z(S,t,O),m(t,e),m(e,r),m(t,l),m(t,s),m(s,o),z(S,n,O),z(S,a,O),m(a,f),m(f,c),m(c,u),m(u,_),m(_,N),m(c,b),m(c,g),m(g,k),m(k,h),m(h,I),m(I,T),m(g,x),m(g,E),m(g,D),_e(B,g,null),m(g,H),m(g,J),m(g,le),m(g,K),m(K,U),m(U,W),m(W,V),m(U,ie),m(U,Z),m(Z,ce),z(S,ne,O),se[Q].m(S,O),z(S,ge,O),Ie=!0,je||(Ue=[F(t,"click",i[16]),F(u,"click",i[17])],je=!0)},p(S,O){const be={};O&1&&(be.token=S[0].token),O&128&&(be.pointer=S[7]),B.$set(be),(!Ie||O&32&&Te!==(Te="ease-in-out duration-300 fixed top-0 left-0 z-40 "+S[5]+" h-screen"))&&d(a,"class",Te);let ke=Q;Q=Fe(S),Q===ke?se[Q].p(S,O):($(),C(se[ke],1,1,()=>{se[ke]=null}),ee(),q=se[Q],q?q.p(S,O):(q=se[Q]=Pe[Q](S),q.c()),A(q,1),q.m(ge.parentNode,ge))},i(S){Ie||(A(B.$$.fragment,S),A(q),Ie=!0)},o(S){C(B.$$.fragment,S),C(q),Ie=!1},d(S){S&&p(t),S&&p(n),S&&p(a),me(B),S&&p(ne),se[Q].d(S),S&&p(ge),je=!1,Ne(Ue)}}}function Ht(i){let t,e;return{c(){t=w("div"),e=G("wating")},l(r){t=y(r,"DIV",{});var l=v(t);e=M(l,"wating"),l.forEach(p)},m(r,l){z(r,t,l),m(t,e)},p:re,i:re,o:re,d(r){r&&p(t)}}}function Wt(i){let t,e,r,l,s,o,n,a,f=i[11]=="notebook"&&ct(i),c=i[11]=="notes"&&ut(i);return{c(){t=w("div"),e=w("div"),f&&f.c(),r=L(),c&&c.c(),this.h()},l(u){t=y(u,"DIV",{class:!0});var _=v(t);e=y(_,"DIV",{class:!0});var N=v(e);f&&f.l(N),r=j(N),c&&c.l(N),N.forEach(p),_.forEach(p),this.h()},h(){d(e,"class",l=i[7]+""),d(t,"class",s="min-h-screen p-4 "+i[6]+" inset-0")},m(u,_){z(u,t,_),m(t,e),f&&f.m(e,null),m(e,r),c&&c.m(e,null),o=!0,n||(a=[F(t,"keydown",i[21]),F(t,"click",i[22])],n=!0)},p(u,_){u[11]=="notebook"?f?(f.p(u,_),_&2048&&A(f,1)):(f=ct(u),f.c(),A(f,1),f.m(e,r)):f&&($(),C(f,1,1,()=>{f=null}),ee()),u[11]=="notes"?c?(c.p(u,_),_&2048&&A(c,1)):(c=ut(u),c.c(),A(c,1),c.m(e,null)):c&&($(),C(c,1,1,()=>{c=null}),ee()),(!o||_&128&&l!==(l=u[7]+""))&&d(e,"class",l),(!o||_&64&&s!==(s="min-h-screen p-4 "+u[6]+" inset-0"))&&d(t,"class",s)},i(u){o||(A(f),A(c),o=!0)},o(u){C(f),C(c),o=!1},d(u){u&&p(t),f&&f.d(),c&&c.d(),n=!1,Ne(a)}}}function ct(i){let t,e,r,l,s,o,n,a,f,c,u,_,N,b,g,k;return N=new ht({props:{mode:"0",token:i[0].token,pointer:i[7]}}),{c(){t=w("div"),e=w("div"),r=w("div"),l=w("div"),s=w("input"),o=L(),n=w("button"),a=w("p"),f=G("+"),c=L(),u=w("div"),_=L(),he(N.$$.fragment),this.h()},l(h){t=y(h,"DIV",{class:!0});var I=v(t);e=y(I,"DIV",{class:!0});var T=v(e);r=y(T,"DIV",{class:!0});var x=v(r);l=y(x,"DIV",{class:!0});var E=v(l);s=y(E,"INPUT",{class:!0,placeholder:!0}),E.forEach(p),o=j(x),n=y(x,"BUTTON",{class:!0});var D=v(n);a=y(D,"P",{});var B=v(a);f=M(B,"+"),B.forEach(p),D.forEach(p),x.forEach(p),c=j(T),u=y(T,"DIV",{}),v(u).forEach(p),T.forEach(p),_=j(I),pe(N.$$.fragment,I),I.forEach(p),this.h()},h(){d(s,"class","relative block w-full appearance-none rounded border border-gray-300 py-6 px-1 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"),d(s,"placeholder",Yt),d(l,"class",i[7]),d(n,"class","min-w-full hover:bg-blue-200 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white"),d(r,"class","mx-auto block max-w-sm min-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"),d(e,"class",""),d(t,"class","mx-auto grid min-w-full lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2")},m(h,I){z(h,t,I),m(t,e),m(e,r),m(r,l),m(l,s),ye(s,i[1]),m(r,o),m(r,n),m(n,a),m(a,f),m(e,c),m(e,u),m(t,_),_e(N,t,null),b=!0,g||(k=[F(s,"input",i[18]),F(n,"click",i[19])],g=!0)},p(h,I){I&2&&s.value!==h[1]&&ye(s,h[1]),(!b||I&128)&&d(l,"class",h[7]);const T={};I&1&&(T.token=h[0].token),I&128&&(T.pointer=h[7]),N.$set(T)},i(h){b||(A(N.$$.fragment,h),b=!0)},o(h){C(N.$$.fragment,h),b=!1},d(h){h&&p(t),me(N),g=!1,Ne(k)}}}function ut(i){let t,e,r,l,s,o,n,a,f;return o=new jt({props:{token:i[0].token,ids:i[10]}}),{c(){t=w("button"),e=w("p"),r=G("Go back"),s=L(),he(o.$$.fragment),this.h()},l(c){t=y(c,"BUTTON",{class:!0});var u=v(t);e=y(u,"P",{class:!0});var _=v(e);r=M(_,"Go back"),_.forEach(p),u.forEach(p),s=j(c),pe(o.$$.fragment,c),this.h()},h(){d(e,"class","border-2 px-2 rounded-md py-2"),d(t,"class",l="absolute top-5 right-5 z-0 "+i[8])},m(c,u){z(c,t,u),m(t,e),m(e,r),z(c,s,u),_e(o,c,u),n=!0,a||(f=F(t,"click",i[20]),a=!0)},p(c,u){(!n||u&256&&l!==(l="absolute top-5 right-5 z-0 "+c[8]))&&d(t,"class",l);const _={};u&1&&(_.token=c[0].token),u&1024&&(_.ids=c[10]),o.$set(_)},i(c){n||(A(o.$$.fragment,c),n=!0)},o(c){C(o.$$.fragment,c),n=!1},d(c){c&&p(t),c&&p(s),me(o,c),a=!1,f()}}}function qt(i){let t,e,r,l;const s=[Mt,Gt],o=[];function n(a,f){return a[4]==!0?0:1}return t=n(i),e=o[t]=s[t](i),{c(){e.c(),r=X()},l(a){e.l(a),r=X()},m(a,f){o[t].m(a,f),z(a,r,f),l=!0},p(a,[f]){let c=t;t=n(a),t===c?o[t].p(a,f):($(),C(o[c],1,1,()=>{o[c]=null}),ee(),e=o[t],e?e.p(a,f):(e=o[t]=s[t](a),e.c()),A(e,1),e.m(r.parentNode,r))},i(a){l||(A(e),l=!0)},o(a){C(e),l=!1},d(a){o[t].d(a),a&&p(r)}}}let Yt="Make a new notebook!";function Jt(i,t,e){let r,l,s,o,n;Y(i,oe,V=>e(25,l=V)),Y(i,De,V=>e(10,s=V)),Y(i,Se,V=>e(11,o=V)),Y(i,R,V=>e(26,n=V));let a=!1,f,c,{data:u}=t;P(R,n=u.responseNote,n),o&&a&&(window.sessionStorage.setItem("store",o),window.sessionStorage.setItem("id",s));let _=!1;dt(async()=>{e(2,f=window.sessionStorage.getItem("store")),e(3,c=window.sessionStorage.getItem("id")),a=!0,e(4,_=!0)}),R.subscribe(V=>{});let N=u.response.Data,b=[];for(const V in N)b.unshift([N[V].ID,N[V].Title,N[V].Description]);oe.set(b);let g="w-0",k="",h="",I="";function T(){e(5,g="w-64"),e(6,k="blur-sm"),e(7,h="pointer-events-none"),e(8,I="hidden")}function x(){e(5,g="w-0"),e(8,I=""),e(6,k=""),e(7,h="pointer-events-auto")}innerWidth=window.innerWidth,innerWidth<375&&T();const E=async V=>{const ie=new FormData;if(ie.append("id",V),(await(await fetch("http://localhost:81/notebooks/",{method:"DELETE",body:ie,headers:{Authorization:"Bearer "+u.token}})).json()).Status=="error")throw Le(302,"/logout");let ne=await(await fetch("http://localhost:81/notebooks/all",{method:"GET",headers:{Authorization:"Bearer "+u.token,"Content-Type":"application/json"}})).json(),Q=[];for(const q in ne)Q.unshift([ne[q].ID,ne[q].Title]);oe.set(b),P(oe,l=b,l)};let D="";oe.subscribe(V=>{e(15,b=V)});const B=()=>{T()},H=()=>{x()};function J(){D=this.value,e(1,D)}const le=()=>{r(),Ce.push("Notebook created!",{theme:{"--toastColor":"mintcream","--toastBackground":"rgba(72,187,120,0.9)","--toastBarBackground":"#2F855A"}})},K=()=>{P(De,s="0",s),P(Se,o="notebook",o),o&&window.sessionStorage.setItem("store",o),e(2,f=o),s&&window.sessionStorage.setItem("id",s),e(3,c=s)},U=()=>{x()},W=()=>{x()};return i.$$set=V=>{"data"in V&&e(0,u=V.data)},i.$$.update=()=>{i.$$.dirty&32771&&e(9,r=async()=>{const V=new FormData;V.append("Title",D),await fetch("http://localhost:81/notebooks",{method:"POST",body:V,headers:{Authorization:"Bearer "+u.token}});let Z=await(await fetch("http://localhost:81/notebooks/all",{method:"GET",headers:{Authorization:"Bearer "+u.token,"Content-Type":"application/json"}})).json(),ce=Z.Data.length-1;b.unshift([Z.Data[ce].ID,Z.Data[ce].Title]),oe.set(b)})},[u,D,f,c,_,g,k,h,I,r,s,o,T,x,E,b,B,H,J,le,K,U,W]}class eo extends ue{constructor(t){super(),fe(this,t,Jt,qt,de,{data:0,deleteNote:14})}get deleteNote(){return this.$$.ctx[14]}}export{eo as default};