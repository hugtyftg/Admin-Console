import React from 'react';
import Dashboard from '@/pages/dashboard';
import { Navigate } from 'react-router-dom';
import Products from '@/pages/products';
import Customers from '@/pages/customers';

enum RoutePath {
  DASHBOARD = '/dashboard',
  PRODUCTS = '/products',
  CUSTOMERS = '/customers',
  ROOT = '/',
}

interface RouteConfig {
  path: RoutePath;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: RoutePath.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: RoutePath.PRODUCTS,
    element: <Products />,
  },
  {
    path: RoutePath.CUSTOMERS,
    element: <Customers />,
  },
  {
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.PRODUCTS} />,
  },
];

export default routes;
