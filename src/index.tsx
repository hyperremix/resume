// eslint-disable-next-line
import 'symbol-observable';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { App } from 'app';
import { initDayjs } from 'i18n/initDayjs';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import reportWebVitals from 'reportWebVitals';
import 'sanitize.css/sanitize.css';
import { configureAppStore } from 'store/configureStore';
import { ThemeProvider } from 'theme/ThemeProvider';
import '../../resume/src/i18n/i18n';

const store = configureAppStore();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

initDayjs();

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </Provider>,
);

reportWebVitals();
