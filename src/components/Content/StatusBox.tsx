import React from 'react';

import s from './StatusBox.module.scss';

interface IStatusBox {
  isActive: boolean;
}

const StatusBox: React.FC<IStatusBox> = ({ isActive }) => {
  return (
    <div
      className={
        isActive ? `${s.box} ${s.activeBox}` : `${s.box} ${s.inactiveBox}`
      }
    >
      {isActive ? 'Active' : 'Inactive'}
    </div>
  );
};

export default StatusBox;
