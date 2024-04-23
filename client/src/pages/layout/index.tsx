import routes from '@/router/routes';
import { Box } from '@mui/material';
import { useRoutes } from 'react-router-dom';
import S from './style';
import Navbar from '@/components/NavBar';

export default function Layout() {
  const element = useRoutes(routes);

  return (
    <div className="layout">
      <Box css={S.boxCss}>
        <Navbar />
        {element}
      </Box>
    </div>
  );
}
