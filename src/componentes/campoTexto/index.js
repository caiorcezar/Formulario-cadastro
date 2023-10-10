import { useState } from 'react'
import './campoTexto.css'

const CampoTexto = (props) => {

    //let valor = ""

    //const [valor, AlterarValor] = useState("")

    

    const aoDigitar = (digitando) => {
        props.AlterarValor(digitando.target.value)
    }

    return(
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input 
                placeholder={props.placeholder} 
                required={props.obrigatorio}
                onChange={aoDigitar}
                value={props.valor}
            />
        </div>
    )
}
export default CampoTexto