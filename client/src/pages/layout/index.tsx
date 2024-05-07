import routes from '@/router/routes';
import { useMediaQuery } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import S from './style';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { Navbar } from '@/components/Navbar';

export default function Layout() {
  const element = useRoutes(routes);

  /* 查询设备媒体类型 */
  const isNonMobile: boolean = useMediaQuery('(max-width: 600px)');
  /* sidebar面板状态 */
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  return (
    <S.LayoutContainer className="layout">
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
      />
      <S.MainContainer>
        <S.NavContainer>
          <Navbar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        </S.NavContainer>
        <S.ContentContainer>{element}</S.ContentContainer>
      </S.MainContainer>
    </S.LayoutContainer>
  );
}
