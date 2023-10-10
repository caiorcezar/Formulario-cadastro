import './rodape.css'

const Rodape = (props) => {
    return(
        <footer className='rodape'>
            <h4>{props.texto}<span>{props.textoDestaque}</span></h4>
        </footer>
    )
}

export default Rodape