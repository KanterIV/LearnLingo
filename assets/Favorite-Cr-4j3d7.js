import{u as p,j as e,r as i,b as g,d as u,B as y}from"./index-mTh8H_n_.js";import{S as c,h as f,F as v,T as j,a as b}from"./teacherFiltration-DAn3Exj3.js";const F=p.section`
  background-color: var(--secondary-white);
  height: 100dvh;

  padding-top: 16px;
  padding-bottom: 96px;
`,w=p.div`
  padding: 50px 15px;
  background-color: var(--primary-white);
  border-radius: 14px;

  .empty-page-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    margin-bottom: 14px;
    text-align: center;
  }

  .empty-text {
    margin-bottom: 20px;
    font-size: 18px;
    line-height: 1.37;
    letter-spacing: -0.02em;
  }

  .empty-text-question {
    font-weight: 500;
    margin-bottom: 30px;
  }

  .empty-page-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .empty-page-item {
    display: flex;
    align-items: flex-start;
    gap: 8px;

    font-size: 18px;
    line-height: 1.37;
    letter-spacing: -0.02em;
  }

  .empty-accent-text {
    display: block;
    width: 68px;

    font-weight: 600;
    font-style: italic;
    position: relative;
    z-index: var(--main-z-index);
    padding: 0px 4px;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 60%;
      background-color: var(--secondary-accent-color);
      border-radius: 4px;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: var(--lowest-z-index);
    }
  }

  .empty-item-icons {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 18px;

    & svg {
      width: 22px;
      height: 22px;

      @media screen and (min-width: 1440px) {
        width: 26px;
        height: 26px;
      }
    }
  }

  & svg:last-child {
    path {
      stroke: var(--accent-color);
      fill: var(--accent-color);
    }
  }
`,S=()=>e.jsxs(w,{children:[e.jsx("h2",{className:"empty-page-title",children:"Did you like one of our teachers? "}),e.jsx("p",{className:"empty-text",children:"Don't lose this contact - save all the data and have permanent access to it on the «Favorites» page."}),e.jsx("p",{className:"empty-text empty-text-question",children:"How do you do it ?"}),e.jsxs("ul",{className:"empty-page-list",children:[e.jsxs("li",{className:"empty-page-item",children:[e.jsx("div",{children:e.jsx("span",{className:"empty-accent-text",children:"Step 1: "})}),e.jsx("p",{className:"empty-item-text",children:"Click on the heart icon in the right corner of the teacher's card"}),e.jsxs("span",{className:"empty-item-icons",children:[e.jsx(c,{})," ⟷ ",e.jsx(c,{})]})]}),e.jsxs("li",{className:"empty-page-item",children:[e.jsx("span",{className:"empty-accent-text",children:"Step 2:"})," Enjoy =)"]})]})]}),z=()=>{const[n,d]=i.useState(4),[t,h]=i.useState([]),[s,l]=i.useState({languages:null,levels:null,price_per_hour:null}),a=g(u);i.useEffect(()=>{const r=f(a,s);h(r)},[a,s]);const o=t&&t.length>0?t:a,x=()=>{d(r=>r+4)},m=()=>{l({languages:null,levels:null,price_per_hour:null})};return e.jsx(F,{children:e.jsxs("div",{className:"container favorite-container",children:[e.jsx(v,{teacherfilters:s,setTeacherFilters:l}),a.length>0?t!==null?e.jsx(j,{teachersArr:o.slice(0,n),filterLevel:s.levels}):e.jsx(b,{handleResetFilters:m}):e.jsx(S,{}),t&&o.length>n&&e.jsx(y,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:x,children:"Load more"})]})})};export{z as default};
