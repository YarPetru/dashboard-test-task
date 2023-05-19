import React, { useState } from 'react';
import { ReactComponent as SearchIcon } from 'images/svg/search.svg';
import StatusBox from './StatusBox';
import PageElement from './PageElement';

import { useFilteredCustomers } from 'hooks/use-filtered-customers';

import s from './DataTable.module.scss';

const DataTable: React.FC = () => {
  const [currentFilter, setCurrentFilter] = useState<string>('');

  const filteredCustomers = useFilteredCustomers(currentFilter);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentFilter(e.currentTarget.value);
  };

  const renderedRows = filteredCustomers.map(customer => (
    <tr className={s.table__row} key={customer.email}>
      <td className={s.table__cell}>{customer.name}</td>
      <td className={s.table__cell}>{customer.company}</td>
      <td className={s.table__cell}>{customer.phoneNumber}</td>
      <td width="207" className={s.table__cell}>
        {customer.email}
      </td>
      <td className={s.table__cell}>{customer.country}</td>
      <td className={s.table__cell}>
        <StatusBox isActive={customer.isActive} />
      </td>
    </tr>
  ));

  return (
    <div className={s.table}>
      <header className={s.table__heading}>
        <div className={s.table__titleWrapper}>
          <h3 className={s.table__title}>All Customers</h3>
          <p className={s.table__subtitle}>Active Members</p>
        </div>
        <form name="search-form" className={s.table__search}>
          <input
            type="text"
            placeholder="Search"
            className={s.table__searchInput}
            value={currentFilter}
            onChange={handleInputChange}
          />
          <SearchIcon className={s.searchIcon} />
        </form>
      </header>

      <table className={s.table__data}>
        {filteredCustomers.length > 0 && (
          <>
            <thead>
              <tr className={s.table__headerRow}>
                <th scope="col" className={s.table__cell}>
                  Customer Name
                </th>
                <th scope="col" className={s.table__cell}>
                  Company
                </th>
                <th scope="col" className={s.table__cell}>
                  Phone Number
                </th>
                <th scope="col" className={s.table__cell}>
                  Email
                </th>
                <th scope="col" className={s.table__cell}>
                  Country
                </th>
                <th scope="col" className={s.table__cell}>
                  <span>Status</span>
                </th>
              </tr>
            </thead>
            <tbody>{renderedRows}</tbody>
          </>
        )}
      </table>

      {filteredCustomers.length === 0 && (
        <p className={s.table__noResultsText}>
          There no matches in the table for your search query. Please, try to
          search by another keyword
        </p>
      )}

      {filteredCustomers.length > 0 && (
        <footer className={s.table__footer}>
          <p>Showing data 1 to 8 of 256K entries</p>
          <div className={s.table__pagination}>
            <PageElement page="<" />
            <PageElement page="1" isCurrentPage />
            <PageElement page="2" />
            <PageElement page="3" />
            <PageElement page="4" />
            {'...'}
            <PageElement page="40" />
            <PageElement page=">" />
          </div>
        </footer>
      )}
    </div>
  );
};

export default DataTable;
