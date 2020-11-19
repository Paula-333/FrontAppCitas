
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Header from './components/CompHeader';

function App() {
  const titulo = "¡BIENVENIDOS A NUESTRA CLINICA DENTAL!"
  let dientes = {photo: './dientesD.jpg'}
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      
    </BrowserRouter>
    <h1>{titulo}</h1>
    <img src={dientes.photo} alt="fotodientes"/>


    </div>
  );
}

export default App;
