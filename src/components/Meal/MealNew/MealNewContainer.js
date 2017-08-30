import { connect } from 'react-redux';

import MealNewComponent from './MealNewComponent';

import { setMealAsync } from 'actions/actions';

const mapStateToProps = (state, ownProps) => {
  return {
      meals: state.meals
  }  
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setMeal: (name) => dispatch(setMealAsync(name))
    };
};

const MealNewContainer = connect(mapStateToProps, mapDispatchToProps)(MealNewComponent);

export default MealNewContainer;