import React from 'react';
import Navigation from './Navigation';
import UserCard from './UserCard';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  return (
    <>
      <section className={s.sidebar}>
        <Navigation />
        <UserCard />
      </section>
    </>
  );
};

export default Sidebar;
