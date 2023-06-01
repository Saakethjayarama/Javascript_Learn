import Axios from 'axios';
import React, { useState } from 'react'
import './Employee.css'
import Employees from './Employees';

const INITIAL_STATE = {
    employees : []
}

export default function All() {
    const [state, setState] = useState(INITIAL_STATE);

    const handleClick =() => {
        Axios.get(`http://localhost/EmployeeAll.php`)
        .then(res => {
            const data = res.data;
            setState({
                ...state,
                employees: data
            })
        })
    }


    return (
        <div className="All">
            <div className="btn">
                <button onClick={handleClick}>Load</button>
            </div><br/><br/>
            <Employees data={state.employees}/>
        </div>
    )
}
