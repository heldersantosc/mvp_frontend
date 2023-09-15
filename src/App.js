import { useState } from "react";
import { Container } from "./components/Container";
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
      <div className="footer"></div>
    </Container>
  );
}

export default App;
