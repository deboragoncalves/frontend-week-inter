import { CardContainer } from "./styles"

// Width="100%" - valor padrão caso não esteja definido

export const Card = ({
    children, 
    width="100%",
    height="auto"
}) => {
    return (
        <>
            <CardContainer width={width} height={height}>
                { children }
            </CardContainer>
        </>
    )
}