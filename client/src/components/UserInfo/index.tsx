import { useTheme } from '@mui/material';
import Avatar from '../Avatar';
import S from './style';
import React from 'react';

type UserInfoPropsType = {
  user: User;
  showIcon: boolean;
  icon: React.JSX.Element;
};
export default function UserInfo({ user, showIcon, icon }: UserInfoPropsType) {
  const theme = useTheme();
  return (
    <S.UserInfoWrapper>
      <Avatar size={36} />
      <S.TextWrapper>
        <S.UserName theme={theme}>{user?.name}</S.UserName>
        <S.UserOccupation theme={theme}>{user?.occupation}</S.UserOccupation>
      </S.TextWrapper>
      {showIcon && icon}
    </S.UserInfoWrapper>
  );
}
