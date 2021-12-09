import { Background, LoginContainer } from "./styles";
import backgroundInter from '../../images/background.jpg';
import logoInter from '../../images/logo.png';
import { Card } from "../../components/Card/Card";
import { InputContainer } from "../../components/Input/styles";
import { ButtonContainer } from "../../components/Button/styles";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <LoginContainer>
                <Background image={backgroundInter}></Background>
                <Card width="403px">
                    <img src={logoInter} alt="Logo Inter" />
                    <InputContainer>
                        <input placeholder="Email" type="text"></input>
                    </InputContainer>
                    <InputContainer>
                        <input placeholder="Senha" type="password"></input>
                    </InputContainer>
                    <ButtonContainer>
                        <button type="button">Entrar</button>
                    </ButtonContainer>
                    <p>Ainda não é cadastrado? <Link to="/register"> Cadastre-se já!</Link></p>
                </Card>
            </LoginContainer>
        </>
    )
}

// Link: navega para o componente sem recarregar a página
// TODO: Melhorar input

export default Login;