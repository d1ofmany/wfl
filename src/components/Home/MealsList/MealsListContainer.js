import { connect } from 'react-redux';

import MealsListComponent from './MealsListComponent';
import { getMealsAsync } from 'actions/actions';

const mapStateToProps = (state, ownProps) => {
    return {
        meals: state.meals
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getMealsAsync: () => dispatch(getMealsAsync())
    };
};

const MealsListContainer = connect(mapStateToProps, mapDispatchToProps)(MealsListComponent);

export default MealsListContainer;