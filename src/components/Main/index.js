import "./styles.css";

import { Fragment, useEffect, useState } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDateTime } from "../../utils/formatDateTime";

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export const Main = ({ setToastText }) => {
  const [total, setTotal] = useState(0.0);
  const [expenses, setExpense] = useState([]);

  useEffect(() => {
    async function getTotal() {
      try {
        const response = await fetch(baseUrl + "/expense/total");
        const responseJson = await response?.json();

        if (responseJson.total) {
          setTotal(responseJson.total);
        }
        if (responseJson.error) {
          throw new Error(responseJson.error);
        }
      } catch (error) {
        setToastText(error.message);
      }
    }

    async function getExpenses() {
      try {
        const response = await fetch(baseUrl + "/expense");
        const responseJson = await response?.json();

        if (responseJson.data) {
          setExpense(responseJson.data);
        }
        if (responseJson.error) {
          throw new Error(responseJson.error);
        }
      } catch (error) {
        setToastText(error.message);
      }
    }

    getTotal();
    getExpenses();
  }, [setToastText]);

  return (
    <main>
      <article>
        <section className="expense-section-total">
          <div className="group">
            <h4 className="title">Despesa total</h4>
            <h3 className="total">{formatCurrency(total)}</h3>
          </div>
        </section>

        <hr />

        <section className="expense-section-list">
          <div className="group">
            <h4 className="title"> Lista de despesas</h4>
          </div>

          <ul className="list">
            {expenses.map((expense, index) => {
              return (
                <Fragment key={`expense-${index}`}>
                  <li>
                    <div className="item">
                      <span class="material-symbols-rounded">send_money</span>
                      <div>
                        <h5>{expense.description}</h5>
                        <small>{formatDateTime(expense.date_time)}</small>
                      </div>
                      <h5 className="value">{formatCurrency(expense.value)}</h5>
                    </div>
                  </li>
                  <hr />
                </Fragment>
              );
            })}
          </ul>
        </section>
      </article>
    </main>
  );
};
