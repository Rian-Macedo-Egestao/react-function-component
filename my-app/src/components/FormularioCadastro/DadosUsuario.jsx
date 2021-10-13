import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

function DadosUsuario({enviar}){
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return(
        <form
            onSubmit={(event)=> {
            event.preventDefault();
            enviar({email, senha});
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
            required 
            variant="outlined" 
            fullWidth 
            margin="normal" />
            <Button type="submit" color="success" variant="contained" size="medium">Enviar</Button>
        </form>
    );
}

export default DadosUsuario;