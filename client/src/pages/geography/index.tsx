import { useTheme } from '@mui/material';
import { S } from './style';

export default function Geography() {
  const theme = useTheme();
  return (
    <S.Container theme={theme}>
      <S.Title>Geography</S.Title>
    </S.Container>
  );
}
