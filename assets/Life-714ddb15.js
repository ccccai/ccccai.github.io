import{_ as x}from"./BannerBox.vue_vue_type_style_index_0_lang-9ad8039e.js";import{_ as B}from"./time-dd149834.js";import{h as m,i as D}from"./index-e6042a59.js";import{d as b,t as v,b as l,c as s,e as N,w as $,u as n,f as t,g as S,l as f,h,m as E,_ as C,i as r,F as y,j as z,p as U,a as k,r as A,n as I,o as P}from"./index-3c344512.js";const j={class:"list-desc"},V={class:"desc-title"},T={class:"desc-subtitle"},M={class:"desc-date"},R=t("img",{class:"date-icon",src:B},null,-1),q={class:"date"},G={class:"desc-text"},H=b({__name:"NoteItem",props:{data:{default:()=>({})},year:{default:""}},setup(e){const c=e,{id:_,cover:u,title:p,subTitle:i,authorAvatar:o,createDate:d,description:a}=v(c.data);return(g,L)=>{const F=l("a-avatar"),w=l("router-link");return s(),N(w,{to:`/article/life/${g.year}/${n(_)}`,class:"note-list-box"},{default:$(()=>[t("div",{class:"list-img",style:S({backgroundImage:`url(${n(u)})`})},null,4),t("div",j,[t("div",V,f(n(p)),1),t("div",T,f(n(i)),1),t("div",M,[h(F,{size:"small",src:n(o)},null,8,["src"]),R,t("span",q,f(n(E)(n(d)).format("LL")),1)]),t("div",G,f(n(a)),1)])]),_:1},8,["to"])}}});const J=b({name:"NotesList",components:{NoteItem:H},props:{list:{type:Array,default:[]},total:{type:Number,default:0},pageSize:{type:Number,default:10},pageNo:{type:Number,default:1},onPageChange:{type:Function,default:()=>{}},bannerUrl:{type:String,default:""}}});const K={class:"notes-content"},O={class:"list-year"},Q={class:"list-box-info"},W={class:"pager-content"},X={key:1};function Y(e,c,_,u,p,i){const o=l("note-item"),d=l("a-pagination");return s(),r("div",K,[t("div",{class:"notes-list",style:S({backgroundImage:`url(${e.bannerUrl})`})},[(s(!0),r(y,null,z(e.list,(a,g)=>(s(),r("div",{key:g},[a.list.length?(s(),r(y,{key:0},[t("div",O,f(a.date),1),t("div",Q,[(s(!0),r(y,null,z(a.list,L=>(s(),N(o,{year:a.date,data:L},null,8,["year","data"]))),256))])],64)):U("",!0)]))),128))],4),t("div",W,[e.total?(s(),N(d,{key:0,"show-total":a=>`Total ${a} article`,"page-size":e.pageSize,current:e.pageNo,total:e.total,"on-change":e.onPageChange},null,8,["show-total","page-size","current","total","on-change"])):(s(),r("span",X,"这个作者很懒，什么都没有写~~"))])])}const Z=C(J,[["render",Y]]),ee=b({ame:"Life",components:{BannerBox:x,NoteList:Z},setup(){const e=k({total:0,pageSize:10,pageNo:1}),c=A(""),_=k({articleList:[]}),u=I.findIndex(i=>i.title_en==="LIFE");u>-1&&(c.value=I[u].bannerImgUrl),P(()=>{p(1,10)});const p=async(i,o)=>{e.pageSize=o,e.pageNo=i,(!m().list.length||o!==Number(m().pageSize))&&await D(e),m().$patch({pageNo:e.pageNo,pageSize:e.pageSize}),_.articleList=m().list[e.pageNo-1],e.total=m().total};return{...v(_),...v(e),bannerImgUrl:c,handlePage:p}}}),te={class:"life-content"};function ae(e,c,_,u,p,i){const o=l("banner-box"),d=l("note-list"),a=l("a-col"),g=l("a-row");return s(),r(y,null,[h(o,{title:"Life Notes","banner-url":e.bannerImgUrl},null,8,["banner-url"]),h(g,{justify:"center"},{default:$(()=>[h(a,{xs:22,sm:22,lg:22,xl:18,xxl:16,class:"life-box"},{default:$(()=>[t("div",te,[h(d,{list:e.articleList,total:e.total,"page-size":e.pageSize,"page-no":e.pageNo,"on-page-change":e.handlePage},null,8,["list","total","page-size","page-no","on-page-change"])])]),_:1})]),_:1})],64)}const ie=C(ee,[["render",ae]]);export{ie as default};
