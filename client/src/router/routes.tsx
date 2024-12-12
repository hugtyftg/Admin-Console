import React, { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';

enum RoutePath {
  DASHBOARD = '/dashboard',
  PRODUCTS = '/products',
  CUSTOMERS = '/customers',
  TRANSACTIONS = '/transactions',
  GEOGRAPHY = '/geography',
  OVERVIEW = '/overview',
  DAILY = '/daily',
  MONTHLY = '/monthly',
  BREAKDOWN = '/breakdown',
  ADMIN = '/admin',
  PERFORMANCE = '/performance',
  ROOT = '/',
}

const lazyLoad = (path: string) => {
  // vite中动态引入资源
  // https://github.com/rollup/plugins/tree/master/packages/dynamic-import-vars#limitations
  const Component = lazy(() => import(`../Pages/${path}/index.tsx`));
  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Component />
    </Suspense>
  );
};

interface RouteConfig {
  path: RoutePath;
  element: React.JSX.Element;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: RoutePath.DASHBOARD,
    element: lazyLoad('Dashboard'),
  },
  {
    path: RoutePath.PRODUCTS,
    element: lazyLoad('Products'),
  },
  {
    path: RoutePath.CUSTOMERS,
    element: lazyLoad('Customers'),
  },
  {
    path: RoutePath.TRANSACTIONS,
    element: lazyLoad('Transactions'),
  },
  {
    path: RoutePath.GEOGRAPHY,
    element: lazyLoad('Geography'),
  },
  {
    path: RoutePath.OVERVIEW,
    element: lazyLoad('Overview'),
  },
  {
    path: RoutePath.DAILY,
    element: lazyLoad('Daily'),
  },
  {
    path: RoutePath.MONTHLY,
    element: lazyLoad('Monthly'),
  },
  {
    path: RoutePath.BREAKDOWN,
    element: lazyLoad('Breakdown'),
  },
  {
    path: RoutePath.ADMIN,
    element: lazyLoad('Admin'),
  },
  {
    path: RoutePath.PERFORMANCE,
    element: lazyLoad('Performance'),
  },
  {
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.DASHBOARD} />,
  },
];

export default routes;
