import styled from 'styled-components';
import theme from "../../styles/theme";

export const InputContainer = styled.div`
    width: 100%;
    height: 46px;
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
    border-radius: 10px;
    margin-bottom: 20px;

    display: flex;
    justify-content: center;

    z-index: 5000;

    input {
        font-size: 1rem;
        font-weight: 400;
        background: transparent;
        border: 0;
        width: 100%;
        margin: 0 20px;
    }

    input:focus {
        box-shadow: 0 0 0 0;
        outline: 0;
    }
`;

