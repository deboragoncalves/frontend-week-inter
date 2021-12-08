import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

// ThemeProvider: tema padrão app

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Teste</h1>
    </ThemeProvider>
  );
}

export default App;
