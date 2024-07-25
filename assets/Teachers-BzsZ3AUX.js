import{u as p,r as s,b as f,s as g,c as x,g as T,j as t,B as m}from"./index-DuoD5hnN.js";import{h as A,F as b,T as j}from"./teacherFiltration-C2r5r4V3.js";const S=p.section`
  background-color: var(--secondary-white);

  padding-top: 16px;
  padding-bottom: 96px;
`,F=()=>{const[l,i]=s.useState(4),[c,h]=s.useState([]),[r,u]=s.useState({languages:null,levels:null,price_per_hour:null}),e=f(g),o=x(),d=()=>{i(a=>a+4)};s.useEffect(()=>{e.length===0&&o(T())},[o,e]),s.useEffect(()=>{const a=A(e,r);h(a)},[e,r]);const n=c.length>0?c:e;return t.jsx(S,{children:t.jsxs("div",{className:"container teachers-container",children:[t.jsx(b,{setTeacherFilters:u}),t.jsx(j,{teachersArr:n.slice(0,l),filterLevel:r.levels}),n.length>l&&t.jsx(m,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:d,children:"Load more"})]})})};export{F as default};
