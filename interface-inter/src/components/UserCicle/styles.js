import styled from 'styled-components';
import theme from "../../styles/theme";

export const CircleContainer = styled.div`
   width: 74px;
   height: 74px;
   border-radius: 50%;
   border: 1px solid ${theme.colors.primary};
   display: flex;
   align-items:center;
   justify-content: center;
   margin-right: 20px;
   color: ${theme.colors.primary};
   font-weight: 300;
   font-size: 2rem;
   padding: 13px;
`