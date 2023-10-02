"use strict";(self.webpackChunkimmer_website=self.webpackChunkimmer_website||[]).push([[836],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var m=n.createContext({}),l=function(e){var t=n.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(m.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,m=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(r),p=a,f=u["".concat(m,".").concat(p)]||u[p]||d[p]||s;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>m,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(3117),a=r(102),s=(r(7294),r(3905)),i=["components"],o={id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},m=void 0,l={unversionedId:"faq",id:"faq",title:"Frequently Asked Questions",description:"Q: How does Immer work?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/immer/faq",draft:!1,editUrl:"https://github.com/immerjs/immer/edit/main/website/docs/faq.md",tags:[],version:"current",frontMatter:{id:"faq",title:"Frequently Asked Questions",sidebar_label:"FAQ"},sidebar:"Immer",previous:{title:"External resources",permalink:"/immer/resources"},next:{title:"Pitfalls",permalink:"/immer/pitfalls"}},c={},u=[{value:"Q: How does Immer work?",id:"q-how-does-immer-work",level:2},{value:"Q: Does Immer use structural sharing? So that my selectors can be memoized and such?",id:"q-does-immer-use-structural-sharing-so-that-my-selectors-can-be-memoized-and-such",level:2},{value:"Q: Does Immer support deep updates?",id:"q-does-immer-support-deep-updates",level:2},{value:"Q: I can&#39;t rely on Proxies being present on my target environments. Can I use Immer?",id:"q-i-cant-rely-on-proxies-being-present-on-my-target-environments-can-i-use-immer",level:2},{value:"Q: Can I typecheck my data structures when using Immer?",id:"q-can-i-typecheck-my-data-structures-when-using-immer",level:2},{value:"Q: Can I store <code>Date</code> objects, functions etc in my state tree when using Immer?",id:"q-can-i-store-date-objects-functions-etc-in-my-state-tree-when-using-immer",level:2},{value:"Q: Can I use Maps and Sets?",id:"q-can-i-use-maps-and-sets",level:2},{value:"Q: Is it fast?",id:"q-is-it-fast",level:2},{value:"Q: Idea! Can Immer freeze the state for me?",id:"q-idea-can-immer-freeze-the-state-for-me",level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("center",null,(0,s.kt)("div",{"data-ea-publisher":"immerjs","data-ea-type":"image",className:"horizontal bordered"})),(0,s.kt)("h2",{id:"q-how-does-immer-work"},"Q: How does Immer work?"),(0,s.kt)("p",null,"Read the (second part of the) ",(0,s.kt)("a",{parentName:"p",href:"https://medium.com/@mweststrate/introducing-immer-immutability-the-easy-way-9d73d8f71cb3"},"introduction blog"),"."),(0,s.kt)("h2",{id:"q-does-immer-use-structural-sharing-so-that-my-selectors-can-be-memoized-and-such"},"Q: Does Immer use structural sharing? So that my selectors can be memoized and such?"),(0,s.kt)("p",null,"A: Yes"),(0,s.kt)("h2",{id:"q-does-immer-support-deep-updates"},"Q: Does Immer support deep updates?"),(0,s.kt)("p",null,"A: Yes"),(0,s.kt)("h2",{id:"q-i-cant-rely-on-proxies-being-present-on-my-target-environments-can-i-use-immer"},"Q: I can't rely on Proxies being present on my target environments. Can I use Immer?"),(0,s.kt)("p",null,"A: Yes - ",(0,s.kt)("a",{parentName:"p",href:"/immer/installation#immer-on-older-javascript-environments"},"view details")),(0,s.kt)("h2",{id:"q-can-i-typecheck-my-data-structures-when-using-immer"},"Q: Can I typecheck my data structures when using Immer?"),(0,s.kt)("p",null,"A: Yes"),(0,s.kt)("h2",{id:"q-can-i-store-date-objects-functions-etc-in-my-state-tree-when-using-immer"},"Q: Can I store ",(0,s.kt)("inlineCode",{parentName:"h2"},"Date")," objects, functions etc in my state tree when using Immer?"),(0,s.kt)("p",null,"A: Yes"),(0,s.kt)("h2",{id:"q-can-i-use-maps-and-sets"},"Q: Can I use Maps and Sets?"),(0,s.kt)("p",null,"A: Yes"),(0,s.kt)("h2",{id:"q-is-it-fast"},"Q: Is it fast?"),(0,s.kt)("p",null,"A: Yes"),(0,s.kt)("h2",{id:"q-idea-can-immer-freeze-the-state-for-me"},"Q: Idea! Can Immer freeze the state for me?"),(0,s.kt)("p",null,"A: Yes"))}p.isMDXComponent=!0}}]);