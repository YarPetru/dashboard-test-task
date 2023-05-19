import React from 'react';

import useMatchMedia from 'hooks/use-match-media';

import Title from './Title';
import UserCard from './UserCard';
import { ReactComponent as Logo } from 'images/svg/logo.svg';
import { ReactComponent as Chevron } from 'images/svg/chevron-right.svg';
import { ReactComponent as DashboardIcon } from 'images/svg/key-square.svg';
import { ReactComponent as ProductIcon } from 'images/svg/3d-square.svg';
import { ReactComponent as CustomerIcon } from 'images/svg/user-square.svg';
import { ReactComponent as IncomeIcone } from 'images/svg/wallet-money.svg';
import { ReactComponent as PromoteIcon } from 'images/svg/discount-shape.svg';
import { ReactComponent as HelpIcon } from 'images/svg/message-question.svg';

import s from './Navigation.module.scss';

const Navigation: React.FC = () => {
  const { isMobile, isTabletMedium } = useMatchMedia();

  return (
    <nav className={s.navigation}>
      <div className={s.navigation__headingWrapper}>
        <a href="/" className={s.navigation__heading}>
          <Logo />
          <Title />
        </a>
        {(isMobile || isTabletMedium) && <UserCard />}
      </div>
      <ul className={s.navigation__list}>
        <li className={s.navigation__item}>
          <a href="/" className={s.navigation__link}>
            <DashboardIcon />
            <span>Dashboard</span>
          </a>
        </li>
        <li className={s.navigation__item}>
          <a href="/" className={s.navigation__link}>
            <ProductIcon />
            <span>Product</span>
            <Chevron className={s.chevron} />
          </a>
        </li>
        <li className={`${s.navigation__item} ${s.navigation__activeItem}`}>
          <a href="/" className={s.navigation__link}>
            <CustomerIcon />
            <span>Customers</span>
            <Chevron className={s.chevron} />
          </a>
        </li>
        <li className={s.navigation__item}>
          <a href="/" className={s.navigation__link}>
            <IncomeIcone />
            <span>Income</span>
            <Chevron className={s.chevron} />
          </a>
        </li>
        <li className={s.navigation__item}>
          <a href="/" className={s.navigation__link}>
            <PromoteIcon />
            <span>Promote</span>
            <Chevron className={s.chevron} />
          </a>
        </li>
        <li className={s.navigation__item}>
          <a href="/" className={s.navigation__link}>
            <HelpIcon />
            <span>Help</span>
            <Chevron className={s.chevron} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
