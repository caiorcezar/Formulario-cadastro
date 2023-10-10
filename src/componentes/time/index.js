import Card from '../card'
import './time.css'

const Time = (props) => {
    return (
        props.card.length > 0 &&
        <section className='time' style={{ backgroundColor: props.corDeFundo }}>

            <h3 style={{ borderColor: props.corDaBorda }}>{props.nomeTime}</h3>

            <div className='flex-container'>
                {props.card.map(professor =>
                    <Card
                        imagemCard={professor.imagemProfessor}
                        key={professor.nomeProfessor}
                        nomeCard={professor.nomeProfessor}
                        especialidadeCard={professor.especialidadeProfessor}                      
                    />)}
            </div>

        </section>
    )
}

export default Time