import {
  DashboardIcon,
  CartIcon,
  UsergroupIcon,
  FileExportIcon,
  EarthIcon,
  CalendarEventIcon,
  Calendar1Icon,
  SystemSettingIcon,
  TrendingUpIcon,
  DataBaseIcon,
  CollageIcon,
} from 'tdesign-icons-react';
import React from 'react';

export enum NavType {
  GROUP = 'group',
  ITEM = 'item',
}

export interface NavGroup {
  text: string;
  children: NavItem[];
  type: NavType.GROUP;
}

export interface NavItem {
  text: string;
  icon: React.ReactElement;
  type: NavType.ITEM;
}

const navData: Array<NavItem | NavGroup> = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    type: NavType.ITEM,
  },
  {
    text: 'Client Facing',
    type: NavType.GROUP,

    children: [
      {
        text: 'Products',
        icon: <CartIcon />,
        type: NavType.ITEM,
      },
      {
        text: 'Customers',
        type: NavType.ITEM,
        icon: <UsergroupIcon />,
      },
      {
        text: 'Transactions',
        type: NavType.ITEM,
        icon: <FileExportIcon />,
      },
      {
        text: 'Geography',
        type: NavType.ITEM,
        icon: <EarthIcon />,
      },
    ],
  },

  {
    text: 'Sales',
    type: NavType.GROUP,

    children: [
      {
        text: 'Overview',
        type: NavType.ITEM,
        icon: <DataBaseIcon />,
      },
      {
        text: 'Daily',
        type: NavType.ITEM,
        icon: <CalendarEventIcon />,
      },
      {
        text: 'Monthly',
        type: NavType.ITEM,
        icon: <Calendar1Icon />,
      },
      {
        text: 'Breakdown',
        type: NavType.ITEM,
        icon: <CollageIcon />,
      },
    ],
  },

  {
    text: 'Management',
    type: NavType.GROUP,
    children: [
      {
        text: 'Admin',
        type: NavType.ITEM,
        icon: <SystemSettingIcon />,
      },
      {
        text: 'Performance',
        type: NavType.ITEM,
        icon: <TrendingUpIcon />,
      },
    ],
  },
];

export default navData;
