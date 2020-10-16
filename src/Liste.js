import React from 'react';

export default class Liste extends React.Component {
    render() {
        return (


            <li className={`border d-flex justify-content-between align-items-center ${this.props.validate === true ? "bg-success" : "bg-light"}`} >
                <p >{this.props.value}</p>
                <div>
                <button className="button1 bg-success" onClick={this.props.valider}><i className="fas fa-check"></i></button>
                <button className="button1 bg-warning" onClick={this.props.edit}><i className="fas fa-edit"></i></button>
                <button className="button1 bg-danger" onClick={this.props.remove}><i className="fas fa-trash-alt"></i></button>

                </div>
            </li>
        )
    }
}