import { useTheme } from '@mui/material';
import { S } from './style';

type HeaderPropsType = {
  title: string;
  subTitle: string;
};
export function Header({ title, subTitle }: HeaderPropsType) {
  const theme = useTheme();
  return (
    <S.HeaderWrapper>
      <S.TitleWrapper theme={theme}>{title}</S.TitleWrapper>
      <S.SubtitleWrapper theme={theme}>{subTitle}</S.SubtitleWrapper>
    </S.HeaderWrapper>
  );
}
