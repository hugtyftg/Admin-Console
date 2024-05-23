import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalTheme';
import { api } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  /* todo */
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
/* todo */
setupListeners(store.dispatch);

export default store;

// 从store本身推断出 RootState 和 AppDispatch 类型
export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = AppStore['dispatch'];
