import React, { Component } from 'react'
import './Student.css';

function FunStudent(props) {

    const entries = [];

    for(const [key, value] of Object.entries(props.data)){
        entries.push(<tr key={key}><th>{key}</th><td>{value}</td></tr>)
    }

    return (
        <div className="student">
            <table>
                <tbody>
                    {entries}   
                </tbody>
            </table>
        </div>
    )
}


class ClassStudent extends Component {
    
    render() {
        const entries = [];
    
        for(const [key, value] of Object.entries(this.props.data)){
            entries.push(<tr key={key}><th>{key}</th><td>{value}</td></tr>)
        }
        return (
            <div className="student">
                <table>
                    <tbody>
                        {entries}   
                    </tbody>
                </table>
            </div>
        )
    }
}


export default ClassStudent;
