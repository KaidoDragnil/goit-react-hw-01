import FriendListItem from "../FriendListItem/FriendListItem"
import s from './FriendList.module.css'

const FriendList = ({friends}) => {
		

  return (
<ul className={s.friendList}>
{friends.map(item => {return (
<li className={s.listItem} key={item.id}>
	<FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
	</li>)}
	)}
</ul>

  )
}

export default FriendList;
