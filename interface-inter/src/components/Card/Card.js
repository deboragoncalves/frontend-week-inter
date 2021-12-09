import { CardContainer } from "./styles"

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