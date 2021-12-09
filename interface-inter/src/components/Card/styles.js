import styled from 'styled-components';
import theme from "../../styles/theme";

export const CardContainer = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    display: flex; 
    border-radius: 20px; 
    padding: 20px; 
    display: flex; 
    align-items: center; 
    flex-direction: column; 
    z-index: 5000; 
    background: ${theme.colors.background};
`;