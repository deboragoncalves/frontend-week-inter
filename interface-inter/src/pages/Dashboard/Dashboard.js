import { Header } from "../../components/Header/Header";
import { BodyContainer, DashboardBackground, InlineTitle, InlineContainer } from './styles';

const Dashboard = () => {
    return (
        <>
            <DashboardBackground>
                <Header></Header>
                <BodyContainer></BodyContainer>
            </DashboardBackground>
        </>
    )
}

export default Dashboard;