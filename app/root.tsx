import { IKContext } from 'imagekitio-react';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './index.css';

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Fredrik Pettersson</title>
      <Meta />
      <Links />
    </head>
    <body className="bg-zinc-200 dark:bg-zinc-950 min-h-screen px-1">
      {children}
      <ScrollRestoration getKey={(location) => location.pathname} />
      <Scripts />
    </body>
  </html>
);

const Root = () => (
  <IKContext urlEndpoint="https://ik.imagekit.io/hyperremix/resume">
    <Outlet />
  </IKContext>
);

export default Root;
