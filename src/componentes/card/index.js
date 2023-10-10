import './card.css'

const Card = (props) => {
    return(
        <div className='card'>
            <div className='cabecalho-card'>
                <img src={props.imagemCard} alt={props.nomeCard}/>
            </div>
            <div className='rodape-card'>
                <h4>{props.nomeCard}</h4>
                <h5>{props.especialidadeCard}</h5>
            </div>
        </div>
    )
}

export default Card