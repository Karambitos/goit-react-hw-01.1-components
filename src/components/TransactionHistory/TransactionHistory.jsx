import PropTypes from 'prop-types';
import styles from '../TransactionHistory/TransactionHistory.module.css';
import TransactionItem from 'components/TransactionItem/TransactionItem';

const TransactionHistory = ({ items }) => {
  return (
    <div className="tableWrapper contentMaxWidth">
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {items.map(item => {
            return (
              <TransactionItem
                key={item.id}
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
