import Axios from 'axios';
import React, { useState } from 'react'
import './Employee.css'
import Employees from './Employees';

const INITIAL_STATE = {
    name: "",
    current: "",
    data: []
}

export default function Search() {

    const [state, setState] = useState(INITIAL_STATE);
    
    const handleClick = () => {
        Axios.get(`http://localhost/EmployeesByName.php?name=${state.name}`)
        .then(res => {
            setState({
                ...state,
                current: state.name,
                data: res.data
            })
        })
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    console.log(state);
    return (
        <div className="Search">
            <input type="text" name="name" onChange={handleChange} value={state.name}/>&nbsp;&nbsp;
            <button onClick={handleClick}>Submit</button>
            {state.current === ""? "": <Employees data={state.data}/> }
        </div>
    )
}
