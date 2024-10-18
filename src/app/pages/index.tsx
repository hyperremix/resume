import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Outlet />
      <ScrollRestoration getKey={(location) => location.pathname} />
    </>
  );
};
