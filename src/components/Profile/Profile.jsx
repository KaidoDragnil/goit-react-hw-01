import s from './Profile.module.css';

const Profile = ({image, name, tag, location, stats}) => {

  return (
  <div className={s.wrapper}>
 <div className={s.card}>
  <img
   className={s.avatar}
   src={image}
   alt="User avatar"
  />
  <p className={s.name}>{name}</p>
  <p>@{tag}</p>
  <p>{location}</p>
 </div>

 <ul className={s.stats}>
  <li>
   <span>Followers</span>
   <span className={s.number}>{stats.followers}</span>
  </li>
  <li>
   <span>Views</span>
   <span className={s.number}>{stats.views}</span>
  </li>
  <li>
   <span>Likes</span>
   <span className={s.number}>{stats.likes}</span>
  </li>
 </ul>
</div>);   

};
export default Profile;