import{r as j,j as s,b as x}from"./index-D0bEWHP4.js";const u=({items:r,accordionContainerClass:c,headingDivClass:a,h3Class:o,contentClass:n,accordionContentClass:d})=>{console.log(c);const[t,m]=j.useState(null),i=l=>{m(t===l?null:l)};return s.jsx("div",{className:c,children:r.map((l,e)=>s.jsxs("div",{className:d,children:[s.jsx("div",{style:{cursor:"pointer"},onClick:()=>i(e),className:`${a} ${t===e?"open":"closed"}`,children:s.jsxs("h3",{className:`${o} `,children:[l.title,s.jsx("div",{style:{rotate:t===e?"180deg":"0deg"},children:s.jsx(x,{className:"text-[3rem] text-[#288173]"})})]})}),t===e&&s.jsx("div",{className:n,dangerouslySetInnerHTML:{__html:l.content}})]},e))})};export{u as A};
