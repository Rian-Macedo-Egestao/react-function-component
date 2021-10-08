import React, { Component } from "react";
import { TextField } from "@mui/material/"
import {Button} from "@mui/material/"

class FormularioCadastro extends Component {
    render() { 
        return (
            <form>
                <TextField id="nome" label="nome" variant="outlined" fullWidth margin="normal"/>
                <TextField id="sobrenome" label="sobrenome" variant="outlined" fullWidth margin="normal"/>
                <TextField id="mail" label="email" variant="outlined" fullWidth margin="normal"/>
                <TextField id="senha" label="senha" variant="outlined" fullWidth margin="normal"/>
                <Button variant="contained" size="medium">Medium</Button>

            </form> 
        );
    }
}
 
export default FormularioCadastro;