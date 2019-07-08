import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                <input 
                type="text"
                name="title" 
                placeholder="Add Todo ..."
                style={{flex: '10', padding: '5px' }}
                value={this.state.title}
                onChange={this.onChange}
                />
                <input 
                type="submit" 
                value="Submit" 
                className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4" 
                style={{flex: '1'}}
                />
            </form>
        )
    }
}
// PropType
AddTodo.protoTypes = {
    addTodo: PropTypes.func.isRequired
}


export default AddTodo