import Axios from 'axios';
import React, { useState } from 'react'
import './Countries.css'
import Countries from './Countries';

const INITIAL_STATE = {
    selected: 'AF',
    result: '',
    data: []
}

export default function Department() {
    const [state, setState] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (event) => {
        event.preventDefault();

        Axios.get(`http://localhost/CountryByContinentCode.php?cc=${state.selected}`)
        .then(res => {
            setState({
                ...state,
                result: state.selected,
                data: res.data
            })            
        })
    }

    
    return (
        <div className="Department">
          <select name="selected" onChange={handleChange} value={state.selected}>
              <option value="AF">Africa</option>
              <option value="AN">Antartica</option>
              <option value="AS">Asia</option>
              <option value="AU">Australia</option>
              <option value="EU">Europe</option>
              <option value="NA">North America</option>
              <option value="SA">South America</option>
          </select>

          <button onClick={handleClick}>Submit</button><br/><br/>
          <Countries data={state.data} />
        </div>
    )
}
