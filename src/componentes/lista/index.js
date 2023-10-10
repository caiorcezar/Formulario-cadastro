import { useState } from 'react'
import './lista.css'

const Lista = (props) => {

  
    
    return(
        <div className='lista'>
            <label>{props.label}</label>
            <select
                value={props.value}
                onChange={evento =>  props.AlterarValor(evento.target.value)}
                >
               {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Lista