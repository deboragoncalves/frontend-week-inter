import { ButtonContainer } from "./styles";

export const Button = ({ children }) => {
    return (
        <>
            <ButtonContainer>
                { children }
            </ButtonContainer>
        </>
    )
}