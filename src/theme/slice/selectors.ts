import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state?: RootState) => state?.theme || initialState;

export const selectTheme = createSelector([selectSlice], (state) => state);
