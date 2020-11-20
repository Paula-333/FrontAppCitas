
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/CompHeader';
import Register from './containers/Register/Register';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login'
import { useEffect, useState } from 'react';
import axios from 'axios';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){

      axios.get('http://localhost:3001/users/profile',{headers:{Authorization:token}})
      .then(res=>setUser(res.data))
    }
  }, [])
  return (
    <BrowserRouter>
      <Header user={user} setUser={setUser}/>
      <Switch>
        <Route path="/" component={Home} exact/>
        
        <Route path="/register" component={Register} exact/>
        <Route path="/login" children={<Login user={user} setUser={setUser}/>} exact/>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

