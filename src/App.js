import { useEffect, useState } from "react";
import { CardAction } from "./components/CardAction";
import { ConfirmAction } from "./components/ConfirmAction";
import { Container } from "./components/Container";
import { ExpenseList } from "./components/ExpenseList";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { Toast } from "./components/Toast";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

function App() {
  const [modal, setModal] = useState(false);
  const [toastText, setToastText] = useState("");
  const [expenses, setExpense] = useState([]);
  const [id, setId] = useState(0);
  const [total, setTotal] = useState(0.0);
  const [value, setValue] = useState(0.0);
  const [description, setDescription] = useState("");
  const [option, setOption] = useState("read");

  const getData = async () => {
    await getTotal();
    await getExpenses();
    clearInput();
    setModal(false);
    setOption("read");
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

  const handleAction = async (event) => {
    switch (option) {
      case "edit":
        await editExpense(event);
        break;
      case "delete":
        await deleteExpense(event);
        break;
      default:
        await createExpense(event);
        break;
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
      const response = await fetch(`${baseUrl}/expense`, options);
      const responseJson = await response?.json();
      if (responseJson.error) throw new Error(responseJson.error);
      await getData();
      setToastText(responseJson.message);
    } catch (error) {
      setToastText(error.message);
    }
  };

  const editExpense = async (event) => {
    event.preventDefault();

    try {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description, value }),
      };
      const response = await fetch(`${baseUrl}/expense/${id}`, options);
      const responseJson = await response?.json();
      if (responseJson.error) throw new Error(responseJson.error);
      getData();
      setToastText(responseJson.message);
    } catch (error) {
      setToastText(error.message);
    }
  };

  const deleteExpense = async () => {
    try {
      const options = { method: "DELETE" };
      const response = await fetch(`${baseUrl}/expense/${id}`, options);
      const responseJson = await response?.json();
      if (responseJson.error) throw new Error(responseJson.error);
      getData();
      setToastText(responseJson.message);
    } catch (error) {
      setToastText(error.message);
    }
  };

  const selectExpense = async (id, description, value) => {
    setId(id);
    setValue(value);
    setDescription(description);
  };

  const clearInput = () => {
    setValue("");
    setDescription("");
  };

  const handleCloseClick = () => {
    setModal(false);
    clearInput();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Modal open={modal}>
        <ConfirmAction
          visible={option === "delete"}
          handleAction={handleAction}
          handleCloseClick={handleCloseClick}
        />
        <CardAction
          visible={option === "edit" || option === "read"}
          value={value}
          description={description}
          setValue={setValue}
          setDescription={setDescription}
          handleAction={handleAction}
          handleCloseClick={handleCloseClick}
        />
      </Modal>
      <Toast text={toastText} setToastText={setToastText} />
      <Header />
      <ExpenseList
        option={option}
        setModal={setModal}
        setOption={setOption}
        selectExpense={selectExpense}
        expenses={expenses}
        total={total}
      />
      <Footer setModal={setModal} setOption={setOption} />
    </Container>
  );
}

export default App;
