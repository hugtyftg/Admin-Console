import { createSlice } from '@reduxjs/toolkit';
const enum Mode {
  DARK = 'dark',
  LIGHT = 'light',
}
const initialState = {
  mode: Mode.DARK,
};
const globalThemeSlice = createSlice({
  name: 'Theme',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === Mode.DARK ? Mode.LIGHT : Mode.DARK;
    },
  },
});

export const { setMode } = globalThemeSlice.actions;

export default globalThemeSlice.reducer;
