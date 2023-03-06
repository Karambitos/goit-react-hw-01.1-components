import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import styles from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <div className={`${styles.statistics} contentMaxWidth-small`}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {stats.length > 0 && <StatisticsList stats={stats} />}
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
