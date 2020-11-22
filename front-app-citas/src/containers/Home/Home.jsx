/* eslint-disable no-useless-constructor */
import React from "react";
import './Home.scss'

const Home = (props) =>{

    const titulo = "BIENVENIDOS A NUESTRA CLINICA DENTAL";
    const descrip = "¡Logueate y mira tus citas pendientes!"
    const descrip2 = "Si no tienes cuenta registrate ;)"
    let foto = {photo:'./dental.jpg'}
    
   
        return(
            <div className="Home">
                <h1 className="h1">{titulo}</h1>
                <h2 className="h2">{descrip}</h2>
                <h3 className="h3">{descrip2}</h3>
                <img src={foto.photo} alt="Dientes" className="foto"/>               
            </div>
        );
    
}



export default Home;
