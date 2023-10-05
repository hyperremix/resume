import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { Home } from './pages/Home';

export const App = () => {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet htmlAttributes={{ lang: i18n.language }} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};
