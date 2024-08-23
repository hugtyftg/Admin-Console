import React from 'react';
import Dashboard from '@/pages/dashboard';
import { Navigate } from 'react-router-dom';
import Products from '@/pages/products';
import Customers from '@/pages/customers';
import Transactions from '@/pages/transactions';
import Geography from '@/pages/geography';
import Overview from '@/pages/overview';

enum RoutePath {
  DASHBOARD = '/dashboard',
  PRODUCTS = '/products',
  CUSTOMERS = '/customers',
  TRANSACTIONS = '/transactions',
  GEOGRAPHY = '/geography',
  OVERVIEW = '/overview',
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
    path: RoutePath.GEOGRAPHY,
    element: <Geography />,
  },
  {
    path: RoutePath.OVERVIEW,
    element: <Overview />,
  },
  {
    path: RoutePath.ROOT,
    element: <Navigate to={RoutePath.PRODUCTS} />,
  },
];

export default routes;
