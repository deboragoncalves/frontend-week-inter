import { ButtonContainer } from "../../components/Button/styles";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { InputContainer } from "../../components/Input/styles";
import colors from "../../styles/colors";
import { 
    BodyContainer, 
    DashboardBackground, 
    InlineTitle, 
    InlineContainer, 
    StatementContainer,
    StatementItemContainer, 
    StatementItemImage, 
    StatementItemInfo 
} from './styles';
import { format } from 'date-fns'

const Dashboard = () => {

    const wallet = 1000;

    // Lista fixa extrato

    const statements = [
        {
            user: {
                firstName: "Débora",
                lastName: "Gonçalves"
            },
            value: 500,
            typePayment: "pay",
            updatedAt: new Date()
        },
        {
            user: {
                firstName: "Ana",
                lastName: "Oliveira"
            },
            value: 300,
            typePayment: "receive",
            updatedAt: new Date()
        }
    ];

    return (
        <>
            <DashboardBackground>
                <Header></Header>
                <BodyContainer>
                    <div>
                        <Card width="80%" height="80px">
                            <InlineTitle>
                                <h2>Saldo atual</h2>
                            </InlineTitle>
                            <InlineContainer>
                                <h3>
                                    { wallet.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }
                                </h3>
                            </InlineContainer>
                        </Card>
                        <Card width="80%" height="80px">
                            <InlineTitle>
                                <h2>Receber PIX</h2>
                            </InlineTitle>
                            <InlineContainer>
                                <InputContainer>
                                    <input placeholder="Valor"/>
                                </InputContainer>
                                <ButtonContainer>
                                    <button>Gerar Código</button>
                                </ButtonContainer>
                            </InlineContainer>
                        </Card>
                        <Card width="80%" height="80px">
                            <InlineTitle>
                                <h2>Pagar PIX</h2>
                            </InlineTitle>
                            <InlineContainer>
                                <InputContainer>
                                    <input placeholder="Insira a chave"/>
                                </InputContainer>
                                <ButtonContainer>
                                    <button>Pagar PIX</button>
                                </ButtonContainer>
                            </InlineContainer>
                        </Card>
                    </div>
                    <div>
                        <Card width="100%" height="80px">
                            <InlineTitle>
                                <h2>Extrato da Conta</h2>
                            </InlineTitle>
                            <InlineContainer>
                                <StatementContainer>
                                    { 
                                        statements.map(statement => {
                                            return <StatementItemContainer>
                                                <StatementItemImage typePayment={statement.typePayment}></StatementItemImage>
                                                <StatementItemInfo>
                                                    <p style={{ color: colors.PRIMARY, fontWeight: "bold" }}>{ statement.value.toLocaleString("pt-BR", {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })} </p>
                                                    <p>
                                                        { statement.typePayment === "pay" ? "Pago a" : "Recebido de" }
                                                        <strong> { statement.user.firstName } { statement.user.lastName }</strong>
                                                    </p>
                                                    <p style={{ color: colors.PRIMARY, fontWeight: "bold" }}>
                                                        { format(statement.updatedAt, 'dd/MM/yyyy HH:mm')}
                                                    </p>
                                                </StatementItemInfo>
                                            </StatementItemContainer>
                                        })
                                    }
                                </StatementContainer>
                            </InlineContainer>
                        </Card>
                    </div>
                </BodyContainer>

            </DashboardBackground>
        </>
    )
}

// toLocaleString: formatação
// Date-fns: lib para formatação de data

export default Dashboard;