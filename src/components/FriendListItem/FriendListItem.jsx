import s from './FriendListItem.module.css';

const FriendListItem = ({isOnline, avatar, name}) => {
  return (
   
      <div className={s.card}>
  <img src={avatar} alt="Avatar" width="48" />
  <p className={s.name}>{name}</p>
  <p className={s.status}>
    {isOnline ? (<span className={s.online}>Online</span>) : (<span className={s.offline}>Offline</span>)}</p>
</div>
  )
}

export default FriendListItem
