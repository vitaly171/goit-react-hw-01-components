import styles from './Friends.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        return (
          <FriendItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

function FriendItem({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}>{isOnline}</span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`img of ${name}`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

