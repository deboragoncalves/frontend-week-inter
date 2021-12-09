// Circulo com as iniciais - parâmetro centralizadas

import { CircleContainer } from "./styles";

export const UserCicle = ({ initialsName }) => {
    return (
        <>
            <CircleContainer>
                { initialsName }
            </CircleContainer>
        </>
    )
}