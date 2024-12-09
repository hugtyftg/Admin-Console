import styled from '@emotion/styled';

const S = {
  Container: styled.div<{
    padding: number;
    width?: number;
    height: number;
  }>`
    width: ${(props) => (props.width ? props.width + 'px' : '100%')};
    height: ${(props) => props.height}px;
    padding: 0 ${(props) => props.padding}px;
  `,
  Line: styled.div<{ color: string; borderRadius: number }>`
    background-color: ${(props) => props.color};
    width: 100%;
    height: 100%;
    border-radius: ${(props) => props.borderRadius}px;
  `,
};

export default S;
