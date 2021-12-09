import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";
import logoInter from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';

export const Header = ({ children }) => {
    return (
        <>
            <HeaderContainer>
                { children }
            </HeaderContainer>
        </>
    )
}