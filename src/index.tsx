// eslint-disable-next-line
import 'symbol-observable';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { App } from 'app/pages';
import { ExperiencePage } from 'app/pages/ExperiencePage';
import { Home } from 'app/pages/Home';
import { Pdf } from 'app/pages/Pdf';
import { initDayjs } from 'i18n/initDayjs';
import { IKContext } from 'imagekitio-react';
import * as React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import 'sanitize.css/sanitize.css';
import { configureAppStore } from 'store/configureStore';
import { GlobalStyle } from 'styles/global-styles';
import { ThemeProvider } from 'theme/ThemeProvider';
import '../../resume/src/i18n/i18n';

const store = configureAppStore();
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
  {
    path: '/resume',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/resume/pdf',
        element: <Pdf />,
      },
      {
        path: '/resume/experiences/:experienceSlug',
        element: <ExperiencePage />,
      },
    ],
  },
]);

initDayjs();

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <ThemeProvider>
        <IKContext urlEndpoint="https://ik.imagekit.io/hyperremix/resume">
          <GlobalStyle />
          <RouterProvider router={router} />
        </IKContext>
      </ThemeProvider>
    </HelmetProvider>
  </Provider>,
);

reportWebVitals();
