import PropTypes from "prop-types";
import styles from './Profile.module.css';

function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className ={styles.avatarContainer}>
          <img 
            src={avatar}
            alt="Аватар пользователя"
            className={styles.avatar}
            width="150"
          />
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

