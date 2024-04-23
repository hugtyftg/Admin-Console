import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalTheme';

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

export default store;

// 从store本身推断出 RootState 和 AppDispatch 类型
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispach = AppStore['dispatch'];
