import axios from 'axios'
import React, { useEffect, useState } from 'react';


const Cita = props =>{
    
    const[cita,setCita] = useState([]);
    useEffect(()=>{
        const citas = async ()=>{
            const cit = props.match.params.citas;
                axios.get('https://clinia-dental-citas.herokuapp.com/cita/findCita', cit)
                .then(res => setCita(res.data))
                .catch(console.error)
            }
        
    },[])
    return <div className="Citas">
        Citas: 
        {cita.map(cita=>console.log(cita))}
    </div>
}


export default Cita;