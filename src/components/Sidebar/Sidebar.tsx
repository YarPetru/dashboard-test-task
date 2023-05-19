import React from 'react';

import useMatchMedia from 'hooks/use-match-media';
import Navigation from './Navigation';
import UserCard from './UserCard';
import s from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const { isMobile, isTabletMedium } = useMatchMedia();

  return (
    <>
      <section className={s.sidebar}>
        <Navigation />
        {!isTabletMedium && !isMobile && <UserCard />}
      </section>
    </>
  );
};

export default Sidebar;
