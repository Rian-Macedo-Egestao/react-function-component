import React  from "react";
import { TextField } from "@mui/material/"
import {Button} from "@mui/material/"
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function FormularioCadastro(){
    let nome = "";
    
    return (
        <form>
            <TextField id="nome" onChange={(event)=>{console.log(event.target.value)}} label="nome" variant="outlined" fullWidth margin="normal"/>
            <TextField id="sobrenome" label="sobrenome" variant="outlined" fullWidth margin="normal"/>
            <TextField id="mail" label="email" variant="outlined" fullWidth margin="normal"/>
            <TextField id="senha" label="senha" variant="outlined" fullWidth margin="normal"/>
            <FormControlLabel control={<Switch color="success" defaultChecked  name="mailBox" />}label="Receber por email"/>
            <FormControlLabel control={<Switch color="success" defaultChecked  name="novidadesBox" />}label="Receber novidades"/>
            <Button  color="success" variant="contained" size="medium">Medium</Button>

        </form> 
    );
    
}
 
export default FormularioCadastro;