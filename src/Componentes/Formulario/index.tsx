import './Formulario.css'
import React, { useState } from "react";
import { Dados } from "../Dados";

export function Formulario(){

    const objetivos = [
        'Perder peso',
        'Manter dieta',
        'Ganhar massa'
    ]

    const [nome,setNome] = useState('')
    const [peso,setPeso] = useState('')
    const [altura,setAltura] = useState('')
    const [objetivo,setObjetivo] = useState('')
    const [imc,setImc] = useState(Number()/(Number()*Number()))
    
    function Calcular(evento:React.FormEvent<HTMLElement>){
        evento.preventDefault();
        setImc(Number(peso)/(Number(altura)*Number(altura)))
    }

    return(
        <form onSubmit={Calcular}>

            <h1>Calcule seu IMC</h1>
            <div className="contentForm">

                <label htmlFor="nome">Nome</label>
                <input
                    required
                    id="nome"
                    onChange={nome => setNome(nome.target.value)}
                />

                <div className="contentPesoAltura">
                    <div style={{
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <label htmlFor="peso">Peso</label>
                        <input
                            required
                            id="peso"
                            onChange={peso => setPeso(peso.target.value)}
                        />
                    </div>
                    
                    <div style={{
                        display:'flex',
                        flexDirection:'column'
                    }}>
                        <label htmlFor="altura">Altura</label>
                        <input
                            required
                            id="altura"
                            onChange={altura => setAltura(altura.target.value)}
                        />
                    </div>
                    
                </div>

                <label htmlFor="lista">Defina sua meta</label>
                <select 
                    required
                    onChange={objetivo => setObjetivo(objetivo.target.value)}>
                    <option></option>
                    {objetivos.map((objetivo,index) =>(
                        <option key={index}>
                            {objetivo}
                        </option>
                    ))}

                </select>

            </div>
            
            <button>Calcular</button>
            
            {imc > 1 ? 
                <Dados
                    nome={nome}
                    imc={imc}
                    objetivo={objetivo}
                /> 
            : ''}

        </form>
    )
}