import { connect } from 'react-redux';

import MealNewComponent from './MealNewComponent';

import { createMealAsync } from 'actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
      meals: state.meals
  }  
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createMeal: (name) => dispatch(createMealAsync(name))
    };
};

const MealNewContainer = connect(mapStateToProps, mapDispatchToProps)(MealNewComponent);

export default MealNewContainer;