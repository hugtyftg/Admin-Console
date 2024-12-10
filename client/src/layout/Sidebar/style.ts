import styled from '@emotion/styled';
import { css } from '@emotion/react';

const S = {
  Sidebar: styled.div<{ theme: any }>`
    height: 100%;
    display: grid;
    column-gap: auto;
    padding: 20px 0 30px 0;
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
    .t-default-menu {
      background-color: transparent;
    }
    .t-default-menu__inner .t-menu-group__title {
      padding: 0;
      color: ${(props) => props.theme.palette.secondary[200]};
    }
    .t-default-menu .t-menu__item.t-is-active:not(.t-is-opened) .t-icon {
      color: ${(props) => props.theme.palette.primary[600]};
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
