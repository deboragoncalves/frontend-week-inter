import styled from 'styled-components';
import theme from "../../styles/theme";

export const DashboardBackground = styled.main`
    width: 100%;
    height: 100vh;
    display:flex;
    align-items: center;
    flex-direction: column;
    background-color: ${theme.colors.backgroundLight};
`

export const BodyContainer = styled.main`
    width: 80%;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    > div {
        flex: 1;
        & > div {
            margin-bottom: 20px;
        }
        
        &:nth-child(2){
            display: flex;
            justify-content: flex-end;
        }
    }
`

export const InlineTitle = styled.div`
    display: flex;
    width: 100%;

    h2 {
        font-size: 18px;
        margin: 0;
        padding: 0;
    }
`

export const InlineContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 100%;

    div {
        flex: 4;
        margin-right: 20px
    }
    
    button {
        flex: 1;
    }

    h3 {
        font-size: 35px;
        margin: -20px 0 0 0;
        padding: 0;
    }

    input {
        width: 250px;
    }
`

export const StatementContainer = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`

export const StatementItemContainer = styled.div`
    display: flex;
    width: 65%;
`

export const StatementItemInfo = styled.div`

    p {
        margin-top: 5px;
        margin-bottom: 2px;
        width: 200px;
        height: auto;
        text-transform: uppercase;
        text-align: start;
        font-size: 13px;
    }
`

export const StatementItemImage = styled.div`
    width: 40px;
    height: 50px;
    margin-right: 20px;
    color: ${theme.colors.background};
    border-radius: 10px;
    margin-bottom: 20px;
    background-color: ${(props => props.typePayment === 'pay' ? theme.colors.red : theme.colors.green )};
`;

// StatementItemImage é uma div que recebe propriedade tipo pagamento
// If ternário - background dinâmico de acordo com tipo do pagamento
