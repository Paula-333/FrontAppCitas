import axios from 'axios'
import React from 'react';
import './Citas.scss'
//import { useHistory } from 'react-router-dom';

export default class Cita extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrCitas: []
        };
    }

    componentDidMount() {
        this.findCita();
    }

    findCita() {
        const user = localStorage.getItem('user')
        axios.get('https://clinia-dental-citas.herokuapp.com/cita/findCita',user)
            .then(res => {
                console.log(res)
                this.setState({
                    arrCitas: res.data
                });
            })
            .catch(error => (error))
    }
    render() {
        return (
            <div>
                <h1>Citas pendientes</h1>
                { this.state.arrCitas.map((cita) => {
                    return (
                        <div>
                            <p>Fecha: {cita.fechaCita} </p>
                            <p>Hora: {cita.horaCita}</p>
                            <p>Sala: {cita.sala}</p>
                            <p>Precio: {cita.precio}</p>
                        </div>
                        
                        
                    );
                })
                }
            </div>);
    }
}

