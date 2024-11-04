import s from './FriendListItem.module.css';
import clsx from 'clsx';

const FriendListItem = ({isOnline, avatar, name}) => {
  return (
   
      <div>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={s.name}>{name}</p>
  <p className={clsx("s.status", isOnline ? "s.online" : "s.offline")}>{isOnline ? "Online" : "Offline"}</p>
</div>
  )
}

export default FriendListItem
