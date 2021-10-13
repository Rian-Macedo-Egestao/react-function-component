import React, {useState} from "react";
import { TextField } from "@mui/material/"
import {Button} from "@mui/material/"
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function DadosPessoais({enviar, validacoes}){
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [noticias, setNoticias] = useState(true);
    const [error, setError] = useState({cpf:{valido:true, texto:""}});

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...error}
        novoEstado[name] = validacoes[name](value);
        setError(novoEstado);
    }
    function verificarValidacao(){
        for(let campo in error){
            if(!error[campo].valido){
                return false
            }
        }
        return true
    }
    
    return (
        <form
        onSubmit={(event)=> {
            event.preventDefault();
            if(verificarValidacao()){
                enviar({nome, sobrenome, cpf, promocoes, noticias});
            }
        }}
        >
            <TextField id="nome" 
                value={nome}
                onChange={(event)=>{
                    setNome(event.target.value);
                    }}
               
                label="nome" 
                name="nome"
                required 
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <TextField id="sobrenome"
                value={sobrenome}
                onChange={(event)=>{
                        setSobrenome(event.target.value);
                    }} 
                label="sobrenome" 
                name="sobrenome"
                required 
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <TextField id="cpf" 
                value={cpf}
                onChange={(event)=>{
                    setCpf(event.target.value);
                    }}
                onFocus={(event) => 
                    setError({cpf:{valido:true, texto:""}})
                }
                onBlur={
                    validarCampos
                }
                name="cpf"
                error={!error.cpf.valido}
                helperText={error.cpf.texto}
                label="cpf" 
                required
                variant="outlined" 
                fullWidth 
                margin="normal"/>

            <FormControlLabel control={<Switch
            checked={promocoes} 
            onChange={(event)=> {
                setPromocoes(event.target.checked);
            }}
            color="success"  
            name="mailBox" />}
            label="Receber por email"/>

            <FormControlLabel control={<Switch 
            checked={noticias} 
            onChange={(event)=> {
                setNoticias(event.target.checked);
               
            }}
            color="success"  
            name="novidadesBox"/>}
            label="Receber novidades"/>

            <Button type="submit" color="success" variant="contained" size="medium">Medium</Button>

        </form> 
    );
}
 
export default DadosPessoais;