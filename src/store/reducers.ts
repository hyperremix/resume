import { combineReducers } from '@reduxjs/toolkit';
import { InjectedReducersType } from 'utils/types/injector-typings';

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  if (Object.keys(injectedReducers).length === 0) {
    return (state) => state;
  }

  return combineReducers({
    ...injectedReducers,
  });
};
