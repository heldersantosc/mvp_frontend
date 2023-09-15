import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { Edit } from "./components/Edit";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Modal } from "./components/Modal";
import { Toast } from "./components/Toast";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [modal, setModal] = useState(false);
  const [toastText, setToastText] = useState("");
  const [expenses, setExpense] = useState([]);
  const [total, setTotal] = useState(0.0);
  const [value, setValue] = useState(0.0);
  const [description, setDescription] = useState("");

  const getData = async () => {
    await getTotal();
    await getExpenses();
  };

  const getTotal = async () => {
    try {
      const response = await fetch(baseUrl + "/expense/total");
      const responseJson = await response?.json();
      if (responseJson.total) setTotal(responseJson.total);
      if (responseJson.error) throw new Error(responseJson.error);
    } catch (error) {
      setToastText(error.message);
    }
  };

  const getExpenses = async () => {
    try {
      const response = await fetch(baseUrl + "/expense");
      const responseJson = await response?.json();
      if (responseJson.data) setExpense(responseJson.data);
      if (responseJson.error) throw new Error(responseJson.error);
    } catch (error) {
      setToastText(error.message);
    }
  };

  const createExpense = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("value", value);
    formData.append("description", description);
    formData.append("date_time", new Date().toISOString());

    try {
      const options = { method: "POST", body: formData };
      const response = await fetch(baseUrl + "/expense", options);
      const responseJson = await response?.json();
      if (responseJson.error) throw new Error(responseJson.error);
      getData();
      clearInput();
      setModal(false);
      setToastText(responseJson.message);
    } catch (error) {
      setToastText(error.message);
    }
  };

  const clearInput = () => {
    setValue("");
    setDescription("");
  };

  useEffect(() => {
    getData();
  }, [setToastText]);

  return (
    <Container>
      <Modal open={modal}>
        <Edit
          value={value}
          description={description}
          setModal={setModal}
          setValue={setValue}
          setDescription={setDescription}
          clearInput={clearInput}
          createExpense={createExpense}
        />
      </Modal>
      <Toast text={toastText} setToastText={setToastText} />
      <Header />
      <Main expenses={expenses} total={total} />
      <Footer setModal={setModal} />
    </Container>
  );
}

export default App;
