import React from 'react';
import avatar from 'images/avatar.png';
import s from './UserCard.module.scss';

const UserCard: React.FC = () => {
  return (
    <div className={s.card}>
      <div className={s.card__avatarWrapper}>
        <img src={avatar} alt="user avatar" width="42" height="42" />
      </div>
      <div className={s.card__textWrapper}>
        <p className={s.card__name}>Evano</p>
        <p className={s.card__position}>Project Manager</p>
      </div>
    </div>
  );
};

export default UserCard;
