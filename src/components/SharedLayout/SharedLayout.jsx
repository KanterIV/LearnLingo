import Header from "../Header/Header";
import { LoginModal, RegisterModal } from "../../components";
import {
  selectLoginModal,
  selectRegisterModal,
} from "../../redux/modals/modalsSelectors";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const SharedLayout = () => {
  const isRegisterModalOpen = useSelector(selectRegisterModal);
  const isLoginModalOpen = useSelector(selectLoginModal);

  return (
    <>
      <Header />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut facere
          officia eius molestias fugit reprehenderit autem nesciunt, qui illo
          explicabo saepe harum maxime error obcaecati nemo sed! Ratione ducimus
          cumque voluptatem, necessitatibus atque hic accusamus rerum corrupti
          doloremque vero ullam sed voluptates expedita inventore eos beatae
          nisi illo? Autem id numquam dicta alias dolorem vero odit ut harum
          repellendus distinctio explicabo voluptates quos officiis obcaecati
          perspiciatis, nostrum ab possimus error architecto saepe deserunt
          atque quas dignissimos. Iure ea qui deserunt dolore ut! Ab autem nemo
          repudiandae exercitationem voluptatem quibusdam vero soluta veniam,
          vel quae distinctio dignissimos itaque doloremque iure harum. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Autem doloremque
          maiores earum consequatur hic sed? Velit maxime voluptatum dolor,
          laboriosam quidem culpa sapiente pariatur tempore dicta consequuntur
          consectetur officia voluptatibus.Lorem Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ut facere officia eius molestias fugit
          reprehenderit autem nesciunt, qui illo explicabo saepe harum maxime
          error obcaecati nemo sed! Ratione ducimus cumque voluptatem,
          necessitatibus atque hic accusamus rerum corrupti doloremque vero
          ullam sed voluptates expedita inventore eos beatae nisi illo? Autem id
          numquam dicta alias dolorem vero odit ut harum repellendus distinctio
          explicabo voluptates quos officiis obcaecati perspiciatis, nostrum ab
          possimus error architecto saepe deserunt atque quas dignissimos. Iure
          ea qui deserunt dolore ut! Ab autem nemo repudiandae exercitationem
          voluptatem quibusdam vero soluta veniam, vel quae distinctio
          dignissimos itaque doloremque iure harum. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Autem doloremque maiores earum
          consequatur hic sed? Velit maxime voluptatum dolor, laboriosam quidem
          culpa sapiente pariatur tempore dicta consequuntur consectetur officia
          voluptatibus.Lorem Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ut facere officia eius molestias fugit reprehenderit autem
          nesciunt, qui illo explicabo saepe harum maxime error obcaecati nemo
          sed! Ratione ducimus cumque voluptatem, necessitatibus atque hic
          accusamus rerum corrupti doloremque vero ullam sed voluptates expedita
          inventore eos beatae nisi illo? Autem id numquam dicta alias dolorem
          vero odit ut harum repellendus distinctio explicabo voluptates quos
          officiis obcaecati perspiciatis, nostrum ab possimus error architecto
          saepe deserunt atque quas dignissimos. Iure ea qui deserunt dolore ut!
          Ab autem nemo repudiandae exercitationem voluptatem quibusdam vero
          soluta veniam, vel quae distinctio dignissimos itaque doloremque iure
          harum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
          doloremque maiores earum consequatur hic sed? Velit maxime voluptatum
          dolor, laboriosam quidem culpa sapiente pariatur tempore dicta
          consequuntur consectetur officia voluptatibus.Lorem Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ut facere officia eius
          molestias fugit reprehenderit autem nesciunt, qui illo explicabo saepe
          harum maxime error obcaecati nemo sed! Ratione ducimus cumque
          voluptatem, necessitatibus atque hic accusamus rerum corrupti
          doloremque vero ullam sed voluptates expedita inventore eos beatae
          nisi illo? Autem id numquam dicta alias dolorem vero odit ut harum
          repellendus distinctio explicabo voluptates quos officiis obcaecati
          perspiciatis, nostrum ab possimus error architecto saepe deserunt
          atque quas dignissimos. Iure ea qui deserunt dolore ut! Ab autem nemo
          repudiandae exercitationem voluptatem quibusdam vero soluta veniam,
          vel quae distinctio dignissimos itaque doloremque iure harum. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Autem doloremque
          maiores earum consequatur hic sed? Velit maxime voluptatum dolor,
          laboriosam quidem culpa sapiente pariatur tempore dicta consequuntur
          consectetur officia voluptatibus.Lorem
        </p>
        <Outlet />
        {isRegisterModalOpen && <RegisterModal />}
        {isLoginModalOpen && <LoginModal />}
      </main>
    </>
  );
};

export default SharedLayout;
