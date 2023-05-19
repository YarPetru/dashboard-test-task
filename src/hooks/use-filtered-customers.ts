import { customers } from 'utils/customers';
import { ICustomerData } from 'types/types';

export const useFilteredCustomers = (currentFilterValue: string) => {
  return customers?.filter((customer: ICustomerData) => {
    if (!currentFilterValue) {
      return customers;
    } else {
      return (
        customer.name
          .toLowerCase()
          .includes(currentFilterValue.toLocaleLowerCase()) ||
        customer.company
          .toLowerCase()
          .includes(currentFilterValue.toLocaleLowerCase()) ||
        customer.phoneNumber
          .toLowerCase()
          .includes(currentFilterValue.toLocaleLowerCase()) ||
        customer.email
          .toLowerCase()
          .includes(currentFilterValue.toLocaleLowerCase()) ||
        customer.country
          .toLowerCase()
          .includes(currentFilterValue.toLocaleLowerCase())
      );
    }
  });
};
