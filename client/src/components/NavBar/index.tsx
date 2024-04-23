import {
  AppBar,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from '@mui/material';
import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';
import S from './style';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { Mode } from '@/types/theme';
import { setMode } from '@/store/globalTheme';

export default function Navbar() {
  const theme = useTheme();
  const dispatch: AppDispatch = useDispatch();
  const changeMode = () => dispatch(setMode());

  return (
    <AppBar className="navbar">
      <Toolbar css={S.toolbarCss}>
        <S.LeftContainer>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <S.InputWrapper backgroundColor={theme.palette.background.paper}>
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </S.InputWrapper>
        </S.LeftContainer>
        <S.RightContainer>
          <IconButton onClick={changeMode}>
            {theme.palette.mode === Mode.DARK ? (
              <DarkModeOutlined />
            ) : (
              <LightModeOutlined />
            )}
          </IconButton>
          <IconButton>
            <SettingsOutlined />
          </IconButton>
        </S.RightContainer>
      </Toolbar>
    </AppBar>
  );
}
