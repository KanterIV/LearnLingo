import{r as t,u as d,b as f,j as e,B as F}from"./index-DaI2CTUn.js";import{h as m,F as p,T as x}from"./teacherFiltration-DgltoEnu.js";const j=()=>{const[a,n]=t.useState(4),[l,i]=t.useState([]),[o,u]=t.useState({languages:null,levels:null,price_per_hour:null}),r=d(f);t.useEffect(()=>{const s=m(r,o);i(s)},[r,o]);const c=l.length>0?l:r,h=()=>{n(s=>s+4)};return e.jsxs(e.Fragment,{children:[e.jsx(p,{setTeacherFilters:u}),e.jsx(x,{teachersArr:c.slice(0,a)}),c.length>a&&e.jsx(F,{styledClass:"load-more-btn",buttonType:"button",onClickFunction:h,children:"Load more"})]})};export{j as default};