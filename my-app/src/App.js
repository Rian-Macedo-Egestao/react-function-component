import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import "@fontsource/roboto"
import {validarCpf, validarSenha} from './model/cadastro'

class App extends Component{
  render(){
    return (
      <div>
        <Container maxWidth="sm">
          <Typography color="" variant="h3" align="center">Formulário de cadastro</Typography>
          <FormularioCadastro enviar={onSubmit} validacoes={{cpf:validarCpf, senha:validarSenha}}/>
        </Container>
      </div>
    );
  }
}

function onSubmit(dados) {
  console.log(dados)
}
export default App;
