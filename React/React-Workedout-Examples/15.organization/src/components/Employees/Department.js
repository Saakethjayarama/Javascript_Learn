import Axios from 'axios';
import React, { useState } from 'react'
import './Employee.css'
import Employees from './Employees';

const INITIAL_STATE = {
    depts : {
        10 :false,
        20 :false,
        30 :false,
        40 :false,
        50 :false,
        60 :false
    },
    selected: [],
    data: []
}

export default function Department() {
    const [state, setState] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        setState({
            ...state,
            depts: {
                ...state.depts,
                [event.target.value]: event.target.checked
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault();

        let selectedDepts = [];
        for(const[key, value] of Object.entries(state.depts)){
            if(value === true) {
                selectedDepts.push(key)
            }
        }
        
        const data = {
            payload: selectedDepts
        }

        Axios.post(`http://localhost/EmployeesByDepartments.php`, data)
        .then(res => {
            setState({
                ...state,
                selected: selectedDepts,
                data: res.data
            })            
        })

    }

    
    return (
        <div className="Department">
          <input type="checkbox" value="10" onChange={handleChange} checked={state.depts[10]}/> Administration &nbsp;
          <input type="checkbox" value="20" onChange={handleChange} checked={state.depts[20]}/> Logistics &nbsp;
          <input type="checkbox" value="30" onChange={handleChange} checked={state.depts[30]}/> Production &nbsp;
          <input type="checkbox" value="40" onChange={handleChange} checked={state.depts[40]}/> Marketing &nbsp;
          <input type="checkbox" value="50" onChange={handleChange} checked={state.depts[50]}/> Finance &nbsp;
          <input type="checkbox" value="60" onChange={handleChange} checked={state.depts[60]}/> Customer Service &nbsp;

          <button onClick={handleClick}>Submit</button><br/><br/>
          <Employees data={state.data} />
        </div>
    )
}
