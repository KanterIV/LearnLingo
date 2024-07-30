import{u as c,j as e,r as s,b as m,d as g,B as y}from"./index-jCx6lKdR.js";import{S as l,h as u,F as f,T as v}from"./teacherFiltration-Ba4t6C2N.js";const j=c.section`
  background-color: var(--secondary-white);
  height: 100dvh;

  padding-top: 16px;
  padding-bottom: 96px;
`,b=c.div`
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
`,w=()=>e.jsxs(b,{children:[e.jsx("h2",{className:"empty-page-title",children:"Did you like one of our teachers? "}),e.jsx("p",{className:"empty-text",children:"Don't lose this contact - save all the data and have permanent access to it on the «Favorites» page."}),e.jsx("p",{className:"empty-text empty-text-question",children:"How do you do it ?"}),e.jsxs("ul",{className:"empty-page-list",children:[e.jsxs("li",{className:"empty-page-item",children:[e.jsx("div",{children:e.jsx("span",{className:"empty-accent-text",children:"Step 1: "})}),e.jsx("p",{className:"empty-item-text",children:"Click on the heart icon in the right corner of the teacher's card"}),e.jsxs("span",{className:"empty-item-icons",children:[e.jsx(l,{})," ⟷ ",e.jsx(l,{})]})]}),e.jsxs("li",{className:"empty-page-item",children:[e.jsx("span",{className:"empty-accent-text",children:"Step 2:"})," Enjoy =)"]})]})]}),N=()=>{const[i,p]=s.useState(4),[r,d]=s.useState([]),[n,h]=s.useState({languages:null,levels:null,price_per_hour:null}),t=m(g);s.useEffect(()=>{const a=u(t,n);d(a)},[t,n]);const o=r.length>0?r:t,x=()=>{p(a=>a+4)};return e.jsx(j,{children:e.jsxs("div",{className:"container favorite-container",children:[e.jsx(f,{setTeacherFilters:h}),t.length>0?e.jsx(v,{teachersArr:o.slice(0,i)}):e.jsx(w,{}),o.length>i&&e.jsx(y,{styledClass:"loadMoreBtn",buttonType:"button",onClickFunction:x,children:"Load more"})]})})};export{N as default};
