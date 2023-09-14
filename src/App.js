import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <div className="footer"></div>
    </Container>
  );
}

export default App;
