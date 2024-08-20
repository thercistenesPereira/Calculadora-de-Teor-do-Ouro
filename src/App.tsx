import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import PriceGold from './components/PriceGold';

function App() {


  return (
    <>
      <PriceGold />
      <Title onTitle="Calculadora de Teor do Ouro" />
      <Form />
    </>
  )
}

export default App
