//  Import types
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE
} from './types';

//  Create and export actions
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  console.log(name, phone, shift);
};
