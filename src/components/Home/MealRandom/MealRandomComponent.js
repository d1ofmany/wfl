import React, { Component } from 'react';

class MealRandomComponent extends Component {
    
    constructor (props) {
        super(props);

        this.state = {
            meal: {}
        };
        
        this.handleClick = this.handleClick.bind(this);
    }
    
    componentWillReceiveProps (nextProps) {
        const meal = this.mealRandom(nextProps.meals);
        this.setState({meal});
    }
    
    componentWillMount () {
        const meal = this.mealRandom(this.props.meals);
        this.setState({meal});
    }
    
    mealRandom (meals) {
        let meal;
        
        do {
            meal = meals.data.length > 0 ? meals.data[Math.floor(Math.random() * (meals.data.length))] : {}; 
        } while (meal === this.state.meal && meals.data.length !== 1) 
        
        return meal
    }
    
    handleClick (e) {
        const meal = this.mealRandom(this.props.meals);
        this.setState({meal});
    }
    
    render () {

        return (
                <div className="MealRandom">
                    <h2>Random meal: <span>{this.state.meal.name || 'Loading...'}</span></h2>
                    <button type="button" onClick={(e) => this.handleClick(e)}>Random</button>
                </div>
            );
    }
}

export default MealRandomComponent;