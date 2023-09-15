import { useState } from "react";
import { Container } from "./components/Container";
import { Edit } from "./components/Edit";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Toast } from "./components/Toast";

function App() {
  const [modal, setModal] = useState(false);
  const [toastText, setToastText] = useState("");

  return (
    <Container>
      <Modal open={modal} children={<Edit setModal={setModal} />} />
      <Toast text={toastText} setToastText={setToastText} />
      <Header />
      <Main setToastText={setToastText} />
      <Footer setModal={setModal} />
    </Container>
  );
}

export default App;
