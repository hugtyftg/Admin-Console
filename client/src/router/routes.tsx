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
  ROOT = '/',
}

const lazyLoad = (path: string) => {
  const Component = lazy(() => import(path));
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
    element: lazyLoad('../pages/dashboard'),
  },
  {
    path: RoutePath.PRODUCTS,
    element: lazyLoad('../pages/products'),
  },
  {
    path: RoutePath.CUSTOMERS,
    element: lazyLoad('../pages/customers'),
  },
  {
    path: RoutePath.TRANSACTIONS,
    element: lazyLoad('../pages/transactions'),
  },
  {
    path: RoutePath.GEOGRAPHY,
    element: lazyLoad('../pages/geography'),
  },
  {
    path: RoutePath.OVERVIEW,
    element: lazyLoad('../pages/overview'),
  },
  {
    path: RoutePath.DAILY,
    element: lazyLoad('../pages/daily'),
  },
  {
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.PRODUCTS} />,
  },
];

export default routes;
