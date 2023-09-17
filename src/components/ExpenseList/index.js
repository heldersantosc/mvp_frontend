import './styles.css';

import { Fragment } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/formatDateTime';

export const ExpenseList = ({ option, setOption, setModal, selectExpense, expenses, total }) => {
  const buttonsOptionMapping = {
    edit: (
      <span className="material-symbols-rounded" onClick={() => setModal(true)}>
        edit_square
      </span>
    ),
    delete: (
      <span className="material-symbols-rounded" onClick={() => setModal(true)}>
        delete
      </span>
    ),
  };

  return (
    <main>
      <article>
        <section className="expense-section-total">
          <div className="group">
            <h4 className="title">Despesa total</h4>
            <h3 className="total">{formatCurrency(String(total))}</h3>
          </div>
        </section>

        <hr />

        <section className="expense-section-list">
          <div className="group">
            <h4 className="title"> Lista de despesas</h4>
          </div>

          {option !== 'read' ? (
            <span className="material-symbols-rounded" onClick={() => setOption('read')}>
              close
            </span>
          ) : null}

          <ul className="list">
            {expenses.map((expense, index) => {
              const { id, description, value, date_time } = expense;
              return (
                <Fragment key={`expense-${index}`}>
                  <li onClick={() => selectExpense(id, description, formatCurrency(String(value)))}>
                    <div className="item">
                      {buttonsOptionMapping[option]}
                      <div>
                        <h5>{description}</h5>
                        <small>{formatDateTime(date_time)}</small>
                      </div>
                      <h5 className="value">{formatCurrency(String(value))}</h5>
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
