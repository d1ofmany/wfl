import React, { Component } from 'react';

class MealNewComponent extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            name: ''
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentWillReceiveProps (nextProps) {
      if (nextProps.meals.saved  === 'saved') {
        this.props.history.push('/');
      }
    }
    
    handleSubmit (event) {
        event.preventDefault();
        if (this.state.name !== '') {
            this.props.createMeal(this.state.name);
        }
    }
    
    handleChange (event) {
        this.setState({name: event.target.value});
    }
    
    render () {
        return (
                <div>
                    <h2>New meal</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" onChange={this.handleChange} value={this.state.name} />
                        </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
            );
    }
};

export default MealNewComponent;