import React from 'react';
import Dashboard from '@/pages/dashboard';
import { Navigate } from 'react-router-dom';
interface RouteConfig {
  path: string;
  element: React.ReactNode;
  children?: RouteConfig[];
}

const routes: RouteConfig[] = [
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/',
    element: <Navigate to={'/dashboard'} />,
  },
];

export default routes;
