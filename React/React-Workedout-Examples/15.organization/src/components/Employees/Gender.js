import Axios from 'axios'
import React, { useState } from 'react'
import './Employee.css'
import Employees from './Employees'

const INITIAL_STATE = {
    gender: "",
    selected: "",
    data: []
}

export default function Gender() {

    const [state, setState] = useState(INITIAL_STATE)

    const handleClick = () => {
        Axios.get(`http://localhost/EmployeesByGender.php?gender=${state.gender}`)
        .then(res => {
            setState({
                ...state,
                selected: state.gender,
                data: res.data
            })
        })
    }

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="Gender">
            <input type="radio" name="gender" value="M" onChange={handleChange}/>Male &nbsp;&nbsp;     
            <input type="radio" name="gender" value="F" onChange={handleChange}/>Female &nbsp;&nbsp;
            <button onClick={handleClick}>Submit</button><br/><br/>
            {state.selected === "" ? "": <Employees data={state.data} projections={['gender']}/>}

        </div>
    )
}
