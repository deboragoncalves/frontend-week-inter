import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

// ThemeProvider: tema padrão app

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Login />}></Route>
            <Route exact path='/register' element={<Register />}></Route>
            <Route exact path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
