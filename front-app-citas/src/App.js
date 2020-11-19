
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/CompHeader';
import Register from './containers/Register/Register';
import Home from './containers/Home';


function App() {
  const titulo = "¡BIENVENIDOS A NUESTRA CLINICA DENTAL!"
  let dientes = {photo: './dientesD.jpg'}
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/register" component={Register} exact/>
        
        
      </Switch>
    </BrowserRouter>
    <h1>{titulo}</h1>
    <img src={dientes.photo} alt="fotodientes"/>


    </div>
  );
}

export default App;
