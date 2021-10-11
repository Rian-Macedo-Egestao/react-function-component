import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import "@fontsource/roboto"

function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <Typography color="" variant="h3" align="center">Formulário de cadastro</Typography>
        <FormularioCadastro/>
      </Container>
    </div>
  );
}
export default App;
