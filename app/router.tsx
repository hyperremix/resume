import { localizedPathnames } from '@/i18n/routing';
import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

export const getRouter = () =>
  createRouter({
    routeTree,
    rewrite: localizedPathnames,
    scrollRestoration: true,
  });

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
