import S from './style';

type DividerPropsType = {
  width?: number;
  height: number;
  color: string;
  padding: number;
  borderRadius: number;
};
export default function Divider({
  width,
  height,
  color,
  padding,
  borderRadius,
}: DividerPropsType) {
  return (
    <S.Container padding={padding} width={width} height={height}>
      <S.Line color={color} borderRadius={borderRadius}></S.Line>
    </S.Container>
  );
}
