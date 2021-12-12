import styled from 'styled-components';
import theme from "../../styles/theme";

export const ButtonContainer = styled.div`
    width: 100%;
    height: 46px;
    color: ${theme.colors.background};
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.primary};
    border-radius: 10px;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;

    z-index: 5000;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.4;
    }

    button {
        font-size: 14px;
    }
`;