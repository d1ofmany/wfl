import { connect } from 'react-redux';

import { readMealsAsync, deleteMealAsync, updateMealAsync } from 'actions/actions';

import MealEditComponent from './MealEditComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        readMeals: () => dispatch(readMealsAsync()),
        updateMeal: (id, name) => dispatch(updateMealAsync(id, name)),
        deleteMeal: (id) => dispatch(deleteMealAsync(id)) 
    };
};

const MealEditContainer = connect(mapStateToProps, mapDispatchToProps)(MealEditComponent);

export default MealEditContainer;