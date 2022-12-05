import { useState } from 'react';
import Banner from './components/Banner/Banner';
import Formulario from './components/Formulario';
import Rodape from './components/Rodape';
import Time from './components/Time';

function App() {

  const times = [
    {
        nome: 'Programação',
        corPrimaria: '#D9F7E9',
        corSecundaria: '#57C278',
    },
    {
        nome: 'Front-End',
        corPrimaria: '#E8F8FF',
        corSecundaria: '#E8F8FF',
    },
    {
        nome: 'Data Sciense',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2',
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8',
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#D86EBF',
        corSecundaria: '#FA95F5',
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FEBA05',
        corSecundaria: '#FFF5D9',
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF',
    }
]

  const [colaboradores,setColaboradores] = useState([])

  const aoColaboradorCadastrado = (novoColaborador) =>{
    debugger
    setColaboradores([...colaboradores, novoColaborador])
  }


  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={novoColaborador => aoColaboradorCadastrado(novoColaborador)}/>

      {times.map(time => <Time key={time.nome}

      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}

      />
      )}

      <Rodape/>
    </div>
  );
}

export default App;
