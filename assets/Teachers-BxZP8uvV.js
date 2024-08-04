import{u as f,r,b as g,s as x,c as T,g as m,j as e,B as j}from"./index-DOdtxXhU.js";import{h as A,F,T as S,a as b}from"./teacherFiltration-Cng4bdLK.js";const v=f.section`
  background-color: var(--secondary-white);

  padding-top: 16px;
  padding-bottom: 96px;
`,E=()=>{const[c,h]=r.useState(4),[s,u]=r.useState([]),[l,n]=r.useState({languages:null,levels:null,price_per_hour:null}),t=g(x),o=T(),d=()=>{h(a=>a+4)},p=()=>{n({languages:null,levels:null,price_per_hour:null})};r.useEffect(()=>{t.length===0&&o(m())},[o,t]),r.useEffect(()=>{const a=A(t,l);u(a)},[t,l]);const i=s&&s.length>0?s:t;return e.jsx(v,{children:e.jsxs("div",{className:"container teachers-container",children:[e.jsx(F,{teacherfilters:l,setTeacherFilters:n}),s!==null?e.jsx(S,{teachersArr:i.slice(0,c),filterLevel:l.levels}):e.jsx(b,{handleResetFilters:p}),s&&i.length>c&&e.jsx(j,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:d,children:"Load more"})]})})};export{E as default};
