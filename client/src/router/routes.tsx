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
    element: lazyLoad('../pages/Dashboard'),
  },
  {
    path: RoutePath.PRODUCTS,
    element: lazyLoad('../pages/Products'),
  },
  {
    path: RoutePath.CUSTOMERS,
    element: lazyLoad('../pages/Customers'),
  },
  {
    path: RoutePath.TRANSACTIONS,
    element: lazyLoad('../pages/Transactions'),
  },
  {
    path: RoutePath.GEOGRAPHY,
    element: lazyLoad('../pages/Geography'),
  },
  {
    path: RoutePath.OVERVIEW,
    element: lazyLoad('../pages/Overview'),
  },
  {
    path: RoutePath.DAILY,
    element: lazyLoad('../pages/Daily'),
  },
  {
    path: RoutePath.MONTHLY,
    element: lazyLoad('../pages/Monthly'),
  },
  {
    path: RoutePath.BREAKDOWN,
    element: lazyLoad('../pages/Breakdown'),
  },
  {
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.PRODUCTS} />,
  },
];

export default routes;
