import React, { lazy, Suspense, ComponentType } from 'react';
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

// 1. 静态获取所有页面组件 (构建时分析)
const pageModules = import.meta.glob('../Pages/**/index.tsx') as Record<
  string,
  () => Promise<{ default: ComponentType }>
>;

// 2. 安全加载函数
const lazyLoad = (pageName: string) => {
  const modulePath = `../Pages/${pageName}/index.tsx`;
  const moduleLoader = pageModules[modulePath];

  // 3. 处理找到和未找到模块的情况
  const Component = moduleLoader
    ? lazy(moduleLoader)
    : lazy(() => import('../Pages/NotFound/index.tsx'));

  return (
    <Suspense fallback={<h3>Loading...</h3>}>
      <Component />
    </Suspense>
  );
};

// 4. 类型定义
interface RouteConfig {
  path: RoutePath | string;
  element: React.JSX.Element;
  children?: RouteConfig[];
}

// 5. 路由配置
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
    element: <Navigate to={RoutePath.PRODUCTS} />,
  },
  // 6. 添加通配符路由处理未匹配路径
  {
    path: '/*',
    element: lazyLoad('NotFound'),
  },
];

export default routes;
