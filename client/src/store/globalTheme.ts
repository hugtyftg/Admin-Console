import { Mode } from '@/types/theme';
import { createSlice } from '@reduxjs/toolkit';

export type GlobalStateType = {
  mode: Mode;
  // 16位用户id
  userId: string;
};

const initialState: GlobalStateType = {
  mode: Mode.DARK,
  userId: '63701cc1f03239b7f700000e',
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
