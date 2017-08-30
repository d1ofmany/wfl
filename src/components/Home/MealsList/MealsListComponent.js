import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MealsListComponent extends Component {
    componentDidMount () {
        this.props.getMealsAsync();
    }
    
    render () {
        
        const Meals = !this.props.meals.data ? <div>No meals!</div> :
            this.props.meals.data.map((item) => (
                <li key={item._id}><Link to={`/meal/${item._id}`}>{item.name}</Link></li>)
                );
        
        return (
            <div>
                <ul>
                    {Meals}
                </ul>
            </div>
            );
    }
}

export default MealsListComponent;
