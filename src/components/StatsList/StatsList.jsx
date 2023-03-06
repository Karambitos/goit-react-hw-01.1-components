import styles from '../StatsList/StatsList.module.css';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const StatsList = ({ stats }) => {
  return (
    <ul className={styles.stats}>
      {Object.entries(stats).map(([key, value]) => {
        return (
          <li key={uuidv4()} className={styles.statsItem}>
            <span className={styles.label}>{key}</span>
            <span className={styles.quantity}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};

StatsList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default StatsList;
