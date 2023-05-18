import React from 'react';
import s from './Title.module.scss';

const Title: React.FC = () => {
  return (
    <div className={s.title}>
      <h1 className={s.title__text}>Dashboard</h1>
      <p className={s.title__version}>v.01</p>
    </div>
  );
};

export default Title;
