import React from 'react';

import s from './PageElement.module.scss';

interface IPageElement {
  page: string;
  isCurrentPage?: boolean;
}

const PageElement: React.FC<IPageElement> = ({
  page,
  isCurrentPage = false,
}) => {
  return (
    <button
      className={
        isCurrentPage
          ? `${s.pageButton} ${s.pageButton__current}`
          : `${s.pageButton}`
      }
      type="button"
    >
      {page}
    </button>
  );
};

export default PageElement;
