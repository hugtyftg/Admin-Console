import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { ChevronRightIcon } from 'tdesign-icons-react';
import { Menu, Button } from 'tdesign-react';
import navData, { NavGroup, NavItem, NavType } from './data';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, useTheme } from '@mui/material';
import S from './style';
import Divider from '@/components/Divider';
import UserInfo from '@/components/UserInfo';
import { SettingsOutlined } from '@mui/icons-material';

type SidebarPropType = {
  user: User;
  isNonMobile: boolean;
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({
  user,
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}: SidebarPropType) {
  const theme = useTheme();
  /* 收起侧导 */
  const collapseSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  /* 当前展示页面 */
  const [activePage, setActivePage] = useState<string>('');
  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  /* 路由切换 */
  const navigate = useNavigate();
  const selectNavItem = (itemTitle: string) => {
    return () => {
      try {
        navigate(`/${itemTitle.toLowerCase()}`);
      } catch (error) {
        console.error(error);
      }
    };
  };
  const { pathname } = useLocation();
  // location对象
  // {
  //   hash: "",
  //   key: "ah9nv6sz",
  //   pathname: "/login",
  //   search: "?name=zs&age=18",
  //   state: {a: 1, b: 2}
  // }
  useEffect(() => {
    setActivePage(pathname.substring(1));
  }, [pathname]);

  /* 渲染每个导航item */
  const renderNavItem = (datum: NavItem) => (
    <Menu.MenuItem
      key={datum.text}
      css={S.navItemCss(activePage === datum.text.toLowerCase(), theme)}
      icon={datum.icon}
      value={datum.text}
      onClick={selectNavItem(datum.text)}
    >
      {datum.text}
      <ChevronRightIcon
        css={S.rightIconCss(activePage === datum.text.toLowerCase())}
      />
    </Menu.MenuItem>
  );
  return (
    <>
      {!isNonMobile && isSidebarOpen && (
        <S.Sidebar theme={theme}>
          <S.SidebarTitle>
            <h3>ECOMVISION</h3>
            <Button
              shape="circle"
              variant="text"
              icon={<ChevronRightIcon />}
              onClick={collapseSidebar}
            />
          </S.SidebarTitle>
          <Menu>
            {navData.map((datum: NavItem | NavGroup) => {
              if (datum.type === NavType.GROUP) {
                return (
                  <Menu.MenuGroup title={datum.text} key={datum.text}>
                    {datum.children.map(renderNavItem)}
                  </Menu.MenuGroup>
                );
              }
              return renderNavItem(datum);
            })}
          </Menu>
          <Divider
            color="lightgray"
            padding={10}
            height={1}
            borderRadius={10}
          />
          <UserInfo
            user={user}
            showIcon={true}
            icon={
              <IconButton>
                <SettingsOutlined />
              </IconButton>
            }
          />
        </S.Sidebar>
      )}
    </>
  );
}
