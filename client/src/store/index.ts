import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './globalTheme';
import { api } from './api';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
  reducer: {
    // 不通过网络请求获取的数据
    global: globalReducer,
    // 通过网络请求获取的全局数据
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
