import React from 'react';
import Dashboard from '@/pages/dashboard';
import { Navigate } from 'react-router-dom';
import Products from '@/pages/products';
import Customers from '@/pages/customers';
import Transactions from '@/pages/transactions';

enum RoutePath {
  DASHBOARD = '/dashboard',
  PRODUCTS = '/products',
  CUSTOMERS = '/customers',
  TRANSACTIONS = '/transactions',
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
    path: RoutePath.TRANSACTIONS,
    element: <Transactions />,
  },
  {
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.PRODUCTS} />,
  },
];

export default routes;
