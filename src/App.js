import { useState } from 'react';
import './App.css'
import Banner from "./componentes/banner/Banner";
import Formulario from "./componentes/formulario";
import Rodape from './componentes/rodape';
import Time from './componentes/time';


function App() {

  const times = [
    {
      nome: "Alimentos",
      corClara: "#ebfaeb",
      corEscura: "#29a329",
    },
    {
      nome: "Elétrica",
      corClara: "#fffae6",
      corEscura: " #e6b800",
    },
    {
      nome: "Mecânica",
      corClara: "#ffebe6",
      corEscura: "#e62e00",
    },
    {
      nome: "Tecnologia",
      corClara: "#f2e6ff",
      corEscura: "#7300e6",
    },
    {
      nome: "Logística",
      corClara: "#e6f7ff",
      corEscura: "#0099e6",
    }
  ]

  const [professores, NovoProfessor] = useState([])

  const adicionarProfessor = (professor) => {
    console.log(professor)
    NovoProfessor([...professores, professor])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario
        times={times.map(time => time.nome)}
        aoCadastrarNovoProfessor={professor => adicionarProfessor(professor)} />
      {times
        .map(time =>
          <Time
            nomeTime={time.nome}
            key={time.nome}
            corDeFundo={time.corClara}
            corDaBorda={time.corEscura}
            card={professores.filter(professor => professor.areaProfessor === time.nome)}
          />
        )}
      <Rodape texto="Desenvolvido por " textoDestaque="Sala 15 Manhã" />
    </div>
  );
}

export default App;
