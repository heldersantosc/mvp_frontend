import { useState } from "react";
import { Container } from "./components/Container";
import { Edit } from "./components/Edit";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Toast } from "./components/Toast";

function App() {
  const [toastText, setToastText] = useState("");

  return (
    <Container>
      <Modal children={<Edit />} />
      <Toast text={toastText} setToastText={setToastText} />
      <Header />
      <Main setToastText={setToastText} />
      <Footer />
    </Container>
  );
}

export default App;
