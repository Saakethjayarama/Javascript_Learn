import Axios from 'axios';
import React, { useState } from 'react'
import './Countries.css'
import Countries from './Countries';

const INITIAL_STATE = {
    employees : []
}

export default function All() {
    const [state, setState] = useState(INITIAL_STATE);

    const handleClick =() => {
        Axios.get(`http://localhost/CountryAll.php`)
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
            <Countries data={state.employees}/>
        </div>
    )
}
