import{f as J,a as K,b as P,c as Q,d as W,e as X}from"./index-f00ca8fb.js";import{d as Y,r as Z,n as A,a as w,t as I,o as tt,b as l,c as r,e as f,w as s,f as t,g as p,h as c,i as x,j as h,k as L,l as _,u as n,F as v,m as et}from"./index-6fe4bf51.js";import{_ as st}from"./InfoBox.vue_vue_type_style_index_0_lang-24033e70.js";const at=t("div",{class:"box-title"},[t("div",{class:"title-content"},[t("div",{class:"text"},"Recent Articles")]),t("div",{class:"gap"})],-1),ct=["href"],ot=t("div",{class:"box-title"},[t("div",{class:"title-content"},[t("div",{class:"text"},"Blog Info")]),t("div",{class:"gap"})],-1),nt=t("div",{class:"box-title"},[t("div",{class:"title-content"},[t("div",{class:"text"},"Featured Articles")]),t("div",{class:"gap"})],-1),lt=["href"],rt={class:"box-description"},it={class:"tag-content"},dt={class:"title"},_t={class:"default description"},ut={class:"bottom-line"},ft=t("span",{class:"memo"},"by ",-1),gt={class:"default"},mt=t("span",{class:"gary-gap"},null,-1),pt={class:"memo"},bt=Y({__name:"Home",setup(xt){const y=Z(""),b=A.findIndex(e=>e.title_en==="HOME");b>-1&&(y.value=A[b].bannerImgUrl);const i=w({count:{articles:0,tags:0,categories:0},categories:[],tags:[],featuredArticles:[],recentArticles:[]}),g=w({nickName:"",description:""}),{count:$,categories:C,tags:N,featuredArticles:j,recentArticles:B}=I(i),{nickName:D,description:R}=I(g),F=async()=>{const e=await J();e&&(g.nickName=e==null?void 0:e.nickName,g.description=e==null?void 0:e.description)},T=async()=>{const e=await K();e&&(i.tags=e)},H=async()=>{const e=await P();e&&(i.categories=e)},V=async()=>{const e=await Q();e&&(i.count=e)},E=async()=>{const e=await W()||[];e&&(i.featuredArticles=e.map(o=>(o.createDate&&(o.year=o.createDate.split("-")[0]),o)))},M=async()=>{const e=await X()||[];e&&(i.recentArticles=e.map(o=>(o.createDate&&(o.year=o.createDate.split("-")[0]),o)))};return tt(()=>{T(),H(),V(),F(),E(),M()}),(e,o)=>{const S=l("a-card-meta"),k=l("a-card"),d=l("a-col"),u=l("a-row"),U=l("a-tag"),z=l("a-avatar"),O=l("base-layout");return r(),f(O,{class:"home"},{default:s(()=>[t("div",{class:"home-top-bg",style:p({backgroundImage:`url(${y.value})`})},null,4),c(u,{justify:"center",class:"home-content"},{default:s(()=>[c(d,{xs:22,sm:20,md:17,lg:20,xl:19,xxl:16,class:"home-box"},{default:s(()=>[at,c(u,{class:"box-content",justify:"space-between",gutter:[{xs:8,sm:8,md:24,xl:24,xxl:24},20]},{default:s(()=>[(r(!0),x(v,null,h(n(B),(a,m)=>(r(),f(d,{key:"dd"+m,xs:24,sm:24,md:24,lg:8,xl:8,class:"card-box"},{default:s(()=>[t("a",{href:`/article?t=tech&y=${a.year}&id=${a.id}`},[c(k,{class:"card-item"},{cover:s(()=>[t("div",{class:"cover-img",style:p({height:"200px",backgroundImage:`url(${a.cover})`})},null,4)]),default:s(()=>[c(S,{class:"box-bottom-title",title:a.title},{description:s(()=>[L(_(a.subTitle),1)]),_:2},1032,["title"])]),_:2},1024)],8,ct)]),_:2},1024))),128))]),_:1})]),_:1}),c(d,{xs:24,sm:22,md:20,lg:20,xl:19,xxl:16},{default:s(()=>[c(u,{justify:"center",gutter:40},{default:s(()=>[c(d,{xs:22,sm:22,md:20,lg:10,xl:10,xxl:10,class:"home-box"},{default:s(()=>[ot,c(st,{"nick-name":n(D),description:n(R),categories:n(C),tags:n(N),count:n($)},null,8,["nick-name","description","categories","tags","count"])]),_:1}),c(d,{xs:22,sm:22,md:20,lg:14,xl:14,xxl:14,class:"home-box"},{default:s(()=>[nt,c(u,{justify:"space-around",class:"box-content",gutter:[0,40]},{default:s(()=>[(r(!0),x(v,null,h(n(j),(a,m)=>(r(),f(d,{key:"card"+m,span:24,class:"card-box"},{default:s(()=>[t("a",{href:`/article?t=tech&y=${a.year}&id=${a.id}`},[c(k,{class:"card-item"},{cover:s(()=>[t("div",{class:"cover-img",style:p({height:"250px",backgroundImage:`url(${a.cover})`})},null,4)]),default:s(()=>[t("div",rt,[t("div",it,[(r(!0),x(v,null,h(a.tagList,(q,G)=>(r(),f(U,{key:"tag"+G,color:"cyan"},{default:s(()=>[L(_(q.name),1)]),_:2},1024))),128))]),t("h1",dt,_(a.title||""),1),t("p",_t,_(a.description),1),t("div",ut,[c(z,{src:a.authorAvatar},null,8,["src"]),ft,t("span",gt,_(a.author),1),mt,t("span",pt,_(n(et)(a.createDate).format("LL")),1)])])]),_:2},1024)],8,lt)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});export{bt as default};
