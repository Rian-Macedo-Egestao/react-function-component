import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

function DadosEntrega({enviar}){
    
    const [cep, setCep] = useState("");
    const [numero, setNumero] = useState("");
    const [endereco, setEndereco] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");

    return(

        <form
            onSubmit={(event)=> {
                event.preventDefault();
                enviar({cep, numero, endereco, estado, cidade});
            }}
        >
            <TextField 
            value={cep}
            onChange={(event)=>{
                setCep(event.target.value);
            }}
            id="cep"         
            label="CEP" 
            type="number"
            name="cep"
            required 
            variant="outlined"  
            margin="normal" />
            <TextField 
            value={numero}
            onChange={(event)=>{
                setNumero(event.target.value);
            }}
            id="numero"      
            label="numero" 
            type="number" 
            name="numero"
            required 
            variant="outlined"  
            margin="normal" />
            <TextField 
            value={endereco}
            onChange={(event)=>{
                setEndereco(event.target.value);
            }}
            id="endereco"    
            label="endereço" 
            type="text" 
            name="endereco"
            required 
            variant="outlined" 
            fullWidth 
            margin="normal" />
            <TextField 
            value={estado}
            onChange={(event)=>{
                setEstado(event.target.value);
            }}
            id="estado"      
            label="estado" 
            type="text" 
            name="estado"
            required 
            variant="outlined"  
            margin="normal" />
            <TextField 
            value={cidade}
            onChange={(event)=>{
                setCidade(event.target.value);
            }}
            id="cidade"      
            label="cidade" 
            type="text" 
            name="cidade"
            required 
            variant="outlined"  
            margin="normal" />
            

            <Button type="submit" color="success" variant="contained" size="medium" fullWidth>Enviar</Button>

        </form>
    );
}
export default DadosEntrega;