import { ButtonContainer } from "../../components/Button/styles";
import { Card } from "../../components/Card/Card";
import { Header } from "../../components/Header/Header";
import { InputContainer } from "../../components/Input/styles";
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
                lastName: "Gonçalves"
            },
            value: 300,
            typePayment: "receive",
            updatedAt: new Date()
        }
    ];

    console.log(statements);

    return (
        <>
            <DashboardBackground>
                <Header></Header>
                <BodyContainer>
                    <div>
                        <Card width="90%">
                            <InlineTitle>
                                <h2>Saldo atual</h2>
                            </InlineTitle>
                            <InlineContainer>
                                <h3>
                                    { wallet.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }) }
                                </h3>
                            </InlineContainer>
                        </Card>
                        <Card width="90%">
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

                            <p>Pix Copia e Cola</p>
                            <p>5943dfjrg</p>
                        </Card>
                        <Card width="90%">
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
                        <Card width="90%">
                            <InlineTitle>
                                <h2>Extrato da Conta</h2>
                            </InlineTitle>
                            <InlineContainer>
                                <StatementContainer>
                                    { 
                                        statements.map(statement => {
                                            <StatementItemContainer>
                                                <p>Oi</p>
                                                <StatementItemImage typePayment={statement.typePayment}></StatementItemImage>
                                                <StatementItemInfo>
                                                    <p>{ statement.value.toLocaleString("pt-BR", {
                                                        style: 'currency',
                                                        currency: 'BRL'
                                                    })} </p>
                                                    <p>
                                                        { statement.typePayment === "pay" ? "Pago a" : "Recebido de" }
                                                        <strong>{ statement.user.firstName } { statement.user.lastName }</strong>
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

export default Dashboard;