import React, { Component } from 'react';

import ShowMeal from './ShowMeal';
import EditMeal from './EditMeal';

class MealEditComponent extends Component {
    constructor (props) {
        super(props);
        
        this.state = { type: 'display' };
        
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    
    componentWillMount () {
        this.props.readMeals();
    }
    
    componentWillReceiveProps (nextProps) {
      if (nextProps.meals.deleted  === 'deleted') {
        this.props.history.push('/');
      }
      
      if (nextProps.meals.saved  === 'saved') {
        this.setState({...this.state, type: 'display'});
      }
    }
    
    handleChange (event) {
        this.setState({...this.state, title: event.target.value});
    }
    
    handleDelete () {
        this.props.deleteMeal(this.props.match.params.id);
    }
    
    handleEdit () {
        this.setState({...this.state, type: 'edit'});
    }
    
    handleSave () {
        this.props.updateMeal(this.props.match.params.id, this.state.title);
    }
    
    render () {
        if (this.props.meals.data.length < 1) {
            return <div className="Loading">Loading...</div>;
        }
        
        const meal = this.props.meals.data.filter((item) => item._id === this.props.match.params.id);
        
        const mealTitle = this.state.title || meal[0].name;
        
        const content = this.state.type === 'edit' ? <EditMeal title={mealTitle} handleChange={(event) => this.handleChange(event)} handleSave={this.handleSave} handleDelete={this.handleDelete} /> : <ShowMeal title={mealTitle} handleEdit={() => this.handleEdit()} />;

        return (
            <div className="Meal">
                {content}
            </div>
            );
    }    
}

export default MealEditComponent;
