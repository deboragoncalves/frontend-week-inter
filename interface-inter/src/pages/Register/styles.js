import styled from 'styled-components';
import theme from "../../styles/theme";

export const LoginContainer = styled.main`
    width: 100%;
    height 100%;
    position: relative;
    display: flex;
    align-items: center; 
    justify-content: center;
`;

// Constante background recebendo uma imagem como parâmetro

export const Background = styled.div`
    position: absolute;
    width: 100%;
    top: 0; 
    left: 0; 
    height: 50%;
    background-image: url(${(props) => props.image});
    background-size: cover;
    z-index: 1;
`;

export const ContainerInput = styled.div`
    margin-top: 67px;
    width: 90%;
    flex: 1;
`;

// Encadear estilos igual ao SASS

export const ContainerButton = styled.div`
    margin-top: 20px;
    width: 90%;
    
    display: flex; 
    align-items: center;
    flex-direction: column;

    p {
        font-size 0.75rem;
        font-weight: 400; 
        color: ${theme.colors.secondary};
    }

    a {
        font-size: 1rem;
        font-weight: 700;
    }
`;