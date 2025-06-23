import { S } from './style.ts';
import { useTheme } from '@mui/material';
import { SearchErrorIcon } from 'tdesign-icons-react';

export default function Admin() {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      <S.ImageBox>
        <SearchErrorIcon />
      </S.ImageBox>
      <S.Title>Not Found 404</S.Title>
    </S.Container>
  );
}
