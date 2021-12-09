import { Background, LoginContainer } from "./styles";
import backgroundInter from '../../images/background.jpg';
import logoInter from '../../images/logo.png';
import { Card } from "../../components/Card/Card";
import { InputContainer } from "../../components/Input/styles";
import { ButtonContainer } from "../../components/Button/styles";
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate("/dashboard");
    }

    return (
        <>
            <LoginContainer>
                <Background image={backgroundInter}></Background>
                <Card width="403px">
                    <img src={logoInter} alt="Logo Inter" />
                    <InputContainer>
                        <input placeholder="Nome" type="text"></input>
                    </InputContainer>
                    <InputContainer>
                        <input placeholder="Sobrenome" type="password"></input>
                    </InputContainer>
                    <InputContainer>
                        <input placeholder="Email" type="text"></input>
                    </InputContainer>
                    <InputContainer>
                        <input placeholder="Senha" type="password"></input>
                    </InputContainer>
                    <InputContainer>
                        <input placeholder="Confirmar senha" type="password"></input>
                    </InputContainer>
                    <ButtonContainer>
                        <button type="button" onClick={navigateToDashboard}>Entrar</button>
                    </ButtonContainer>
                    <p>Já tem uma conta? <Link to="/"> Entre já!</Link></p>
                </Card>
            </LoginContainer>
        </>
    )
}

export default Register;