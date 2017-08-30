import { connect } from 'react-redux';

import { getMealsAsync, deleteMealAsync, saveMealAsync } from 'actions/actions';

import MealComponent from './MealComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMeals: () => dispatch(getMealsAsync()),
        saveMeal: (id, name) => dispatch(saveMealAsync(id, name)),
        deleteMeal: (id) => dispatch(deleteMealAsync(id)) 
    };
};

const MealContainer = connect(mapStateToProps, mapDispatchToProps)(MealComponent);

export default MealContainer;