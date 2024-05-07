import React, { Dispatch, SetStateAction } from 'react';
import S from './style';
import { IconButton, InputBase, useTheme } from '@mui/material';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { Mode } from '@/types/theme';
import { setMode } from '@/store/globalTheme';
import {
  DarkModeOutlined,
  LightModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
} from '@mui/icons-material';

type NavbarPropType = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
};
export function Navbar({ isSidebarOpen, setIsSidebarOpen }: NavbarPropType) {
  const theme = useTheme();
  const dispatch: AppDispatch = useDispatch();
  const changeMode = () => dispatch(setMode());

  return (
    <S.Container>
      <S.LeftContainer>
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
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
    </S.Container>
  );
}
