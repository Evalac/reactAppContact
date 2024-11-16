import css from './TransctionTableBody.module.css';
import PropTypes from 'prop-types';

function TransactionTableBody({ type, amount, currency }) {
  return (
    <tr className={`${css.bodyRow} ${css.hoverRow}`}>
      <td className={css.bodyCell}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

TransactionTableBody.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export { TransactionTableBody };
