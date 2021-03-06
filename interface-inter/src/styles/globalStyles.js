import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${theme.colors.background};
    }

    button {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;