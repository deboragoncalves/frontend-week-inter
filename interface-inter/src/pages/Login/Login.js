import { Background, LoginContainer } from "./styles";
import backgroundInter from '../../images/background.jpg';
import { Card } from "../../components/Card/Card";

const Login = () => {
    return (
        <>
            <LoginContainer>
                <Background image={backgroundInter}></Background>
                <Card width="403px"></Card>
            </LoginContainer>
        </>
    )
}

export default Login;