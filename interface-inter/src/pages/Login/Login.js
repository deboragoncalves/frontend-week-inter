import { Background, LoginContainer } from "./styles";
import backgroundInter from '../../images/background.jpg';
import logoInter from '../../images/logo.png';
import { Card } from "../../components/Card/Card";
import { InputContainer } from "../../components/Input/styles";
import { ButtonContainer } from "../../components/Button/styles";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
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
                        <input placeholder="Email" type="text"></input>
                    </InputContainer>
                    <InputContainer>
                        <input placeholder="Senha" type="password"></input>
                    </InputContainer>
                    <ButtonContainer>
                        <button type="button" onClick={navigateToDashboard}>Entrar</button>
                    </ButtonContainer>
                    <p>Ainda não é cadastrado? <Link to="/register"> Cadastre-se já!</Link></p>
                </Card>
            </LoginContainer>
        </>
    )
}

/* Navigate: método que recebe como parâmetro a rota (string)
Link/Navigate: navega para o componente sem recarregar a página. Link tem como atributo to, que recebe
como parâmetro a rota (string)
TODO: Melhorar layout input
TODO: validações input onClick
*/

export default Login;