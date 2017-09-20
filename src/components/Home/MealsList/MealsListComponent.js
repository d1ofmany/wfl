import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MealsListComponent extends Component {
    componentDidMount () {
        this.props.readMeals();
    }
    
    render () {
        
        const Meals = !this.props.meals.data ? <li>No meals!</li> :
            this.props.meals.data.map((item) => (
                <li key={item._id}><Link to={`/meal/${item._id}`}>{item.name}</Link></li>)
                );
        
        return (
            <div className="MealsList">
                <ul>
                    {Meals}
                </ul>
            </div>
            );
    }
}

export default MealsListComponent;
