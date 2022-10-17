import './Dados.css'

type dadosProps = {
    nome:string,
    imc:number,
    objetivo:string
}

export function Dados(props:dadosProps){
    return(
        <div className='dadosContent'>
            <h3 className='nome'>
                {props.nome}
            </h3>

            <div className='contentImcObjetivo'>
                <span className='imc'>
                    IMC: {props.imc.toFixed(1)}
                </span>

                <span className='objetivo'>
                    Objetivo: {props.objetivo}
                </span>
            </div>
            
        </div>
    )
}