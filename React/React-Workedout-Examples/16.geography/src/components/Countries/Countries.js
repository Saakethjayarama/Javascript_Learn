import React from 'react'
import './Countries.css'

export default function Countries(props) {
    let data = props.data;
    let projections = props.projections;

    if(!projections){
        projections= [];
    }

    if(!data) {
        data = [];
    }
    
    let heading = [];
    if(data.length > 0){
        const row1 = data[0]
        for(const[key] of Object.entries(row1)){

            if(!projections.includes(key))
                heading.push(<th>{key}</th>);
        }
    }
    
    let rows = [];
    data.forEach(emp => {
        let cols = [];
        for(const[key, value] of Object.entries(emp)){
            if(!projections.includes(key)){
                cols.push(<td>{value}</td>)
            }
        }
        rows.push(<tr>{cols}</tr>)
    });

    return (
        <table>
            <thead>
                {heading}
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    );
}
