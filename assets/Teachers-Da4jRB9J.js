import{r as e,u as f,s as p,a as T,g,j as s,B as x}from"./index-DaI2CTUn.js";import{h as A,F as m,T as F}from"./teacherFiltration-DgltoEnu.js";const b=()=>{const[a,i]=e.useState(4),[l,h]=e.useState([]),[c,u]=e.useState({languages:null,levels:null,price_per_hour:null}),t=f(p),n=T(),d=()=>{i(r=>r+4)};e.useEffect(()=>{n(g())},[n]),e.useEffect(()=>{const r=A(t,c);h(r)},[t,c]);const o=l.length>0?l:t;return s.jsxs(s.Fragment,{children:[s.jsx(m,{setTeacherFilters:u}),s.jsx(F,{teachersArr:o.slice(0,a)}),o.length>a&&s.jsx(x,{styledClass:"registerBtn",buttonType:"button",onClickFunction:d,children:"Load more"})]})};export{b as default};
