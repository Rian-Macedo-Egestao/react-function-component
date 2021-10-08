import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@mui/material'
function App() {
  return (
    <div>
      <Container maxWidth="sm">
        <h1>
          Formulario de Cadastro
        </h1>
        <FormularioCadastro/>
      </Container>
    </div>
  );
}

export default App;
