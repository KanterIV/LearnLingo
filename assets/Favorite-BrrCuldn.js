import{u as h,r as t,b as p,d as x,j as e,B as f}from"./index-D64_p6f6.js";import{h as v,F,T as g}from"./teacherFiltration-BMolE5Px.js";const m=h.section`
  background-color: var(--secondary-white);

  padding-top: 16px;
  padding-bottom: 96px;
`,j=()=>{const[a,l]=t.useState(4),[o,i]=t.useState([]),[n,d]=t.useState({languages:null,levels:null,price_per_hour:null}),r=p(x);t.useEffect(()=>{const s=v(r,n);i(s)},[r,n]);const c=o.length>0?o:r,u=()=>{l(s=>s+4)};return e.jsx(m,{children:e.jsxs("div",{className:"container favorite-container",children:[e.jsx(F,{setTeacherFilters:d}),e.jsx(g,{teachersArr:c.slice(0,a)}),c.length>a&&e.jsx(f,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:u,children:"Load more"})]})})};export{j as default};
