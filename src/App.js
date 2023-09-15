import { useState } from "react";
import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Toast } from "./components/Toast";

function App() {
  const [toastText, setToastText] = useState("");

  return (
    <Container>
      <Toast text={toastText} setToastText={setToastText} />
      <Header />
      <Main setToastText={setToastText} />
      <Footer />
    </Container>
  );
}

export default App;
