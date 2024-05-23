import styled from '@emotion/styled';
import { css } from '@emotion/react';

const S = {
  Sidebar: styled.div<{ theme: any; isSidebarOpen: boolean }>`
    height: 100%;
    display: ${(props) => (props.isSidebarOpen ? 'block' : 'none')};
    background-color: ${(props) => props.theme.palette.background.alt};
    color: ${(props) => props.theme.palette.secondary[200]};
    .t-menu-group__title {
      height: 2rem;
      margin: 0.5rem 0;
      line-height: 2rem;
      font-weight: bold;
    }
    .t-default-menu .t-menu__item {
      padding: 0 10px 0 20px;
      height: 2rem;
    }
  `,
  SidebarTitle: styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    height: 3rem;
    margin-top: 1rem;
    font-weight: bolder;
    > button {
      width: 25px;
      height: 25px;
    }
    .t-button--shape-circle .t-icon {
      font-size: 20px;
    }
  `,
  UserWrapper: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: pink;
  `,
  navItemCss: (isActive: boolean, theme: any) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 2rem;
    box-sizing: border-box;
    margin: 0.5rem 0;
    padding-left: 2rem;
    background-color: ${isActive
      ? theme.palette.secondary[300]
      : 'transparent'} !important;
    color: ${isActive
      ? theme.palette.primary[600]
      : theme.palette.secondary[100]} !important;
    :hover {
      background-color: ${isActive
        ? theme.palette.secondary[300]
        : theme.palette.primary[900]} !important;
    }
  `,
  rightIconCss: (isActive: boolean) => css`
    visibility: ${isActive ? 'visible' : 'hidden'};
  `,
};

export default S;
