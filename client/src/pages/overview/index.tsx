import { S } from './style';
import { useTheme } from '@mui/material';
export default function Overview() {
  const theme = useTheme();

  return (
    <S.Container theme={theme}>
      <S.Title>OVERVIEW</S.Title>
      <S.Graph theme={theme}></S.Graph>
    </S.Container>
  );
}
