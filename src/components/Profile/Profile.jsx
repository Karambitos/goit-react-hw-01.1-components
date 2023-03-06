import PropTypes from 'prop-types';
import StatsList from '../StatsList/StatsList';
import styles from '../Profile/Profile.module.css';

const Profile = ({ user }) => {
  const { avatar, username, tag, location, stats } = user;
  return (
    <div className={`${styles.profile} contentMaxWidth-small`}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <StatsList stats={stats} />
    </div>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }),
};

export default Profile;
