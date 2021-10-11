import './App.css';
import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import {Container} from '@mui/material';
import Typography from '@mui/material/Typography';
import "@fontsource/roboto"

class App extends Component{
  render(){
    return (
      <div>
        <Container maxWidth="sm">
          <Typography color="" variant="h3" align="center">Formulário de cadastro</Typography>
          <FormularioCadastro enviar={onSubmit} validar={validarCpf}/>
        </Container>
      </div>
    );
  }
}

function onSubmit(dados) {
  console.log(dados)
}

function validarCpf(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"o cpf deve ter 11 digitos"}
  }
  else {
    return {valido:true, texto:""}
  }
}
export default App;
