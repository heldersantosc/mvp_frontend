import "./styles.css";

import { Fragment, useEffect, useState } from "react";
import expenseIcon from "../../assets/expense.png";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDateTime } from "../../utils/formatDateTime";

export const Main = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getExpenseList() {
      try {
        const response = await fetch("http://localhost:5000/expense");
        const { data } = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    }
    getExpenseList();
  }, []);

  return (
    <main>
      <article>
        <section className="expense-section-total">
          <div className="group">
            <h5 className="title">Despesa total</h5>
            <h3 className="total">R$ 216,00</h3>
          </div>
        </section>

        <hr />

        <section className="expense-section-list">
          <div className="group">
            <h4 className="title"> Lista de despesas</h4>
          </div>

          <ul className="list">
            {data.map((expense, index) => {
              return (
                <Fragment key={`expense-${index}`}>
                  <li>
                    <div className="item">
                      <img className="icon" src={expenseIcon} alt="carteira" />
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
