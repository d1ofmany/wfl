import { connect } from 'react-redux';
import MealRandomComponent from './MealRandomComponent';

const mapStateToProps = (state, ownProps) => {
    return {
        meals: state.meals
    };
};

const MealRandomContainer = connect(mapStateToProps)(MealRandomComponent);

export default MealRandomContainer;