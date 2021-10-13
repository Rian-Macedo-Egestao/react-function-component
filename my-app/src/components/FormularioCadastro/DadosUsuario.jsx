import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import ValidacoesCadastro from "../../context/ValidacoesCadastro";

function DadosUsuario({enviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [error, setError] = useState({senha:{valido:true, texto:""}});

    const validacoes = useContext(ValidacoesCadastro)

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

    return(
        <form
            onSubmit={(event)=> {
            event.preventDefault();
            if (verificarValidacao()){
                enviar({email, senha});
            }
            
        }}>
            <TextField 
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            id="email" 
            label="email" 
            type="email" 
            name="email"
            required 
            variant="outlined" 
            fullWidth 
            margin="normal" />
            <TextField
            value={senha}
            onChange={(event)=>{
                setSenha(event.target.value)
            }}
            id="senha" 
            label="senha" 
            type="password" 
            name="senha"
            onBlur={validarCampos}
            error={!error.senha.valido}
            helperText={error.senha.texto}
            required 
            variant="outlined" 
            fullWidth 
            margin="normal" />
            <Button type="submit" color="success" variant="contained" size="medium">Enviar</Button>
        </form>
    );
}

export default DadosUsuario;