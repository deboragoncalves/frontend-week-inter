import { createGlobalStyle } from "styled-components";
import theme from "./theme";

const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${theme.colors.background};
    }
`;

export default GlobalStyles;