import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import logoInter from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { UserCicle } from "../UserCicle/UserCicle";

export const Header = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/");
    }
    
    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <img src={logoInter} alt="Logo Inter" />
                    <UserInfo>
                        <UserCicle initialsName="DG"></UserCicle>
                        <div>
                            <p>Olá, <span>Débora</span></p>
                            <strong>987642</strong>
                            <p><a onClick={navigateToHome}>Sair</a></p>
                        </div>
                    </UserInfo>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    )
}