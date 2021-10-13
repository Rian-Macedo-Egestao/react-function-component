import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario"
import { Stepper , StepLabel, Step, Typography } from "@mui/material";

function FormularioCadastro({enviar, validacoes}){
    const [estadoAtual, setEstadoAtual] = useState(0)
    const [dadosColetados, setDados] = useState("");
    const formularios = [
        <DadosUsuario enviar={coletarDados} validacoes={validacoes}/>,
        <DadosPessoais enviar={coletarDados} validacoes={validacoes}/>,
        <DadosEntrega enviar={coletarDados} validacoes={validacoes}/>,
        <Typography  variant="h4"  align="center">Cadastro Finalizado!</Typography>,
    ];
    
    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximaEtapa()
    }

    function proximaEtapa(){
        setEstadoAtual(estadoAtual+1)
    }

    useEffect(()=>{
        if(formularios.length-1 === estadoAtual){
            enviar(dadosColetados)
        }
    })

    
    return (
        <div>
            <Stepper color="success" activeStep={estadoAtual}>
                <Step color="success">
                <StepLabel>Email</StepLabel>
                </Step>
                <Step >
                <StepLabel>Dados Pessoais</StepLabel>
                </Step>
                <Step >
                <StepLabel>Localização</StepLabel>
                </Step>
                <Step >
                <StepLabel>Finalização</StepLabel>
                </Step>
            </Stepper>
            {formularios[estadoAtual]}
        </div>
        
    );
    
}
 
export default FormularioCadastro;