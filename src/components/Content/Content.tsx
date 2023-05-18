import React from 'react';

import Greeting from './Greeting';
import DataTable from './DataTable';

import s from './Content.module.scss';

const Content: React.FC = () => {
  return (
    <section className={s.content}>
      <Greeting />
      <DataTable />
    </section>
  );
};

export default Content;
