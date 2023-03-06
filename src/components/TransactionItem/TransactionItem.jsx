import PropTypes from 'prop-types';
import styles from '../TransactionItem/TransactionItem.module.css';

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency.replace(/\s/g, '/')}</td>
    </tr>
  );
};

TransactionItem.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionItem;
