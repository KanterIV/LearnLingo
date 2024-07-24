import{u as p,r as e,b as f,s as x,c as T,g,j as s,B as m}from"./index-B8bu9Xin.js";import{h as A,F as b,T as j}from"./teacherFiltration-BwS02Xx4.js";const S=p.section`
  background-color: var(--secondary-white);

  padding-top: 16px;
  padding-bottom: 96px;
`,F=()=>{const[l,i]=e.useState(4),[c,h]=e.useState([]),[t,u]=e.useState({languages:null,levels:null,price_per_hour:null}),r=f(x),o=T(),d=()=>{i(a=>a+4)};e.useEffect(()=>{o(g())},[o]),e.useEffect(()=>{const a=A(r,t);h(a)},[r,t]);const n=c.length>0?c:r;return s.jsx(S,{children:s.jsxs("div",{className:"container teachers-container",children:[s.jsx(b,{setTeacherFilters:u}),s.jsx(j,{teachersArr:n.slice(0,l),filterLevel:t.levels}),n.length>l&&s.jsx(m,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:d,children:"Load more"})]})})};export{F as default};
