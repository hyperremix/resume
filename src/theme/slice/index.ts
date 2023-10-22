import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { ThemeState } from './types';

export const initialState: ThemeState = {
  darkMode: true,
  typographySize: 'regular',
};

const slice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setDarkMode(state, { payload }: PayloadAction<boolean>) {
      state.darkMode = payload;
    },
    setTypographySize(state, { payload }: PayloadAction<'regular' | 'pdf'>) {
      state.typographySize = payload;
    },
  },
});

export const { actions: themeActions } = slice;

export const useThemeSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
