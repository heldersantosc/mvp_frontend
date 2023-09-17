import './styles.css';

import { Fragment } from 'react';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDateTime } from '../../utils/formatDateTime';

export const ExpenseList = ({ option, setOption, setModal, selectExpense, expenses, total }) => {
  const buttonsOptionMapping = {
    edit: (
      <div className="edit-icon" onClick={() => setModal(true)}>
        <span className="material-symbols-rounded">edit_square</span>
      </div>
    ),
    delete: (
      <div className="delete-icon" onClick={() => setModal(true)}>
        <span className="material-symbols-rounded">delete</span>
      </div>
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
            <div className="edit-remove-warning">
              Cancelar
              <span className="material-symbols-rounded" onClick={() => setOption('read')}>
                close
              </span>
            </div>
          ) : null}

          <ul className="list">
            {expenses.map((expense, index) => {
              const { id, description, value, date_time } = expense;
              return (
                <Fragment key={`expense-${index}`}>
                  <li onClick={() => selectExpense(id, description, formatCurrency(String(value)))}>
                    <div className="item">
                      <div>
                        <h5>{description}</h5>
                        <small>{formatDateTime(date_time)}</small>
                      </div>
                      <h4 className="value">{formatCurrency(String(value))}</h4>
                      {buttonsOptionMapping[option]}
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
