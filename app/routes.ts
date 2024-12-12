import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./pages/home.tsx'),
  route('/pdf', './pages/pdf.tsx'),
  route('/experiences/:experienceSlug', './pages/experience.tsx'),
] satisfies RouteConfig;
