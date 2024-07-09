import{u as p,r as e,b as x,s as T,c as f,g,j as s,B as m}from"./index-D64_p6f6.js";import{h as A,F as b,T as j}from"./teacherFiltration-BMolE5Px.js";const S=p.section`
  background-color: var(--secondary-white);

  padding-top: 16px;
  padding-bottom: 96px;
`,v=()=>{const[a,i]=e.useState(4),[c,h]=e.useState([]),[l,u]=e.useState({languages:null,levels:null,price_per_hour:null}),t=x(T),o=f(),d=()=>{i(r=>r+4)};e.useEffect(()=>{o(g())},[o]),e.useEffect(()=>{const r=A(t,l);h(r)},[t,l]);const n=c.length>0?c:t;return s.jsx(S,{children:s.jsxs("div",{className:"container teachers-container",children:[s.jsx(b,{setTeacherFilters:u}),s.jsx(j,{teachersArr:n.slice(0,a)}),n.length>a&&s.jsx(m,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:d,children:"Load more"})]})})};export{v as default};
