import './botao.css'

const Botao = (props) => {
    return(
        <button className='btn'>{props.valor}</button>
    )
}
export default Botao