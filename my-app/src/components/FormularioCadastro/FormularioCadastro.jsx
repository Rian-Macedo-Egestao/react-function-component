import React, { Component } from "react";
import { TextField } from "@mui/material/"
import {Button} from "@mui/material/"
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

class FormularioCadastro extends Component {
    render() { 
        return (
            <form>
                <TextField id="nome" label="nome" variant="outlined" fullWidth margin="normal"/>
                <TextField id="sobrenome" label="sobrenome" variant="outlined" fullWidth margin="normal"/>
                <TextField id="mail" label="email" variant="outlined" fullWidth margin="normal"/>
                <TextField id="senha" label="senha" variant="outlined" fullWidth margin="normal"/>
                <FormControlLabel control={<Switch color="success" defaultChecked  name="mailBox" />}label="Receber por email"/>
                <FormControlLabel control={<Switch color="success" defaultChecked  name="novidadesBox" />}label="Receber novidades"/>
                <Button  color="success" variant="contained" size="medium">Medium</Button>

            </form> 
        );
    }
}
 
export default FormularioCadastro;