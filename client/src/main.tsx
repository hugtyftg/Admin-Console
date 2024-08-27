import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import './index.css';
import 'tdesign-react/es/style/index.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';
import enConfig from 'tdesign-react/es/locale/en_US';
import { ConfigProvider } from 'tdesign-react';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* tdesign 国际化配置 */}
      <ConfigProvider globalConfig={enConfig}>
        {/* 全局store react-redux */}
        <Provider store={store}>
          <App />
        </Provider>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
