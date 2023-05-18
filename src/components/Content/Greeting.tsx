import React from 'react';

import s from './Greeting.module.scss';

const Greeting: React.FC = () => {
  return <h2 className={s.greeting}>Hello Evano 👋🏼,</h2>;
};

export default Greeting;
