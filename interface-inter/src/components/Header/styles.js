import styled from 'styled-components';
import theme from "../../styles/theme";

export const HeaderContainer = styled.head`
    width: 100%;
    height: 90px;
    background-color: ${theme.colors.background};

    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeaderWrapper = styled.div`
    width: 80%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 172px;
        height: 61px;
    }
`

export const UserInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  p, strong, a, div {
      width: auto;
      height: auto;
  }

  a {
      color: ${theme.colors.primary};
  }
`