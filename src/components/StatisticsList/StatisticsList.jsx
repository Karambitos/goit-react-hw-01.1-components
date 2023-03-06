import PropTypes from 'prop-types';
import styles from '../StatisticsList/StatisticsList.module.css';

const StatisticsList = ({ stats }) => {
  const statsRef = stats.reduce((acc, { label, id, percentage }) => {
    let temp = acc.find(el => label === el.label);
    if (!temp) {
      acc.push((temp = { id, label, percentage }));
    } else {
      temp.percentage = temp.percentage + percentage;
    }
    return acc;
  }, []);

  const colors = [
    '#091f8b',
    '#098b48',
    '#0000FF',
    '#7a3bba',
    '#9d1f29',
    '#9d741f',
    '#1f9d93',
  ];

  return (
    <ul className={styles.statisticsList}>
      {statsRef.map(elem => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        return (
          <li
            key={elem.id}
            style={{ background: randomColor }}
            className={styles.statisticsItem}
          >
            <span className={styles.label}>{elem.label}</span>
            <span className={styles.percentage}>{elem.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default StatisticsList;
