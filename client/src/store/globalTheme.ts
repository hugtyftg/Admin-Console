import { Mode } from '@/types/theme';
import { createSlice } from '@reduxjs/toolkit';

export type GlobalStateType = {
  mode: Mode;
};

const initialState: GlobalStateType = {
  mode: Mode.DARK,
};

const globalThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    setMode: (state: GlobalStateType) => {
      state.mode = state.mode === Mode.DARK ? Mode.LIGHT : Mode.DARK;
    },
  },
});

export const { setMode } = globalThemeSlice.actions;
export default globalThemeSlice.reducer;
