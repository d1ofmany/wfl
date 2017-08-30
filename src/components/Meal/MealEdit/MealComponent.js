import React, { Component } from 'react';

const ShowMeal = ({title, handleEdit}) => {
    return (
            <div className="Meal">
                <div>
                    {title}
                </div>
                <button type="button" onClick={handleEdit}>Edit</button>
            </div>
        );
}

const EditMeal = ({title, handleChange, handleSave, handleDelete}) => {
    return (
            <div className="Meal">
                <input type="text" value={title} onChange={handleChange} />
                <button type="button" onClick={handleSave}>Save</button>
                <button type="button" onClick={handleDelete}>Delete</button>
            </div>
        );
}

class MealComponent extends Component {
    constructor (props) {
        super(props);
        
        this.state = { type: 'display' };
        
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }
    
    componentWillMount () {
        this.props.getMeals();
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
        this.setState({...this.state, title: event.target.value})
    }
    
    handleDelete () {
        this.props.deleteMeal(this.props.match.params.id);
    }
    
    handleEdit () {
        this.setState({...this.state, type: 'edit'});
    }
    
    handleSave () {
        this.props.saveMeal(this.props.match.params.id, this.state.title);
    }
    
    render () {
        if (this.props.meals.data < 1) {
            return <div>Loading...</div>;
        }
        
        const meal = this.props.meals.data.filter((item) => item._id === this.props.match.params.id);
        
        const mealTitle = this.state.title || meal[0].name;

        return (
            <div className="Meal">
                {this.state.type === 'edit' ? <EditMeal title={mealTitle} handleChange={(event) => this.handleChange(event)} handleSave={this.handleSave} handleDelete={this.handleDelete} /> : <ShowMeal title={mealTitle} handleEdit={() => this.handleEdit()} />}
            </div>
            );
    }    
}

export default MealComponent;
