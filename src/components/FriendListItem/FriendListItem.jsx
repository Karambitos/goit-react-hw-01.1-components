import PropTypes from 'prop-types';
import styles from '../FriendListItem/FriendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${isOnline && styles.isOnline} `}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
