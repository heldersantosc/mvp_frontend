import "./styles.css";

import { Fragment } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { formatDateTime } from "../../utils/formatDateTime";

export const Main = ({ expenses, total }) => {
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
