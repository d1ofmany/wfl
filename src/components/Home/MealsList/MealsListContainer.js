import { connect } from 'react-redux';

import MealsListComponent from './MealsListComponent';
import { readMealsAsync } from 'actions/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        readMeals: () => dispatch(readMealsAsync())
    };
};

const MealsListContainer = connect(mapStateToProps, mapDispatchToProps)(MealsListComponent);

export default MealsListContainer;