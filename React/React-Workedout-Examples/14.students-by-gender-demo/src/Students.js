import React, {Component} from 'react'
import './student.css';

function FunStudents(props) {

    let rows = []

    props.data.forEach((element, ind) => {
        rows.push(<tr key={ind}><td>{element.usn}</td><td>{element.name}</td></tr>)
    });

    return (
        <div className="Student">
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    )
}


class ClassStudents extends Component {
    render() {

        let rows = []

        this.props.data.forEach((element, ind) => {
            rows.push(<tr key={ind}><td>{element.usn}</td><td>{element.name}</td></tr>)
        });

        return (
            <div className="Student">
                <table>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        )
    }
}



export default FunStudents;
