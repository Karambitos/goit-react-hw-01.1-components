import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    friends.length > 0 && (
      <ul className={`${styles.list} contentMaxWidth-small`}>
        {friends.map(elem => {
          return (
            <FriendListItem
              key={elem.id}
              isOnline={elem.isOnline}
              avatar={elem.avatar}
              name={elem.name}
            />
          );
        })}
      </ul>
    )
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
