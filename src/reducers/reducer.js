import { combineReducers } from 'redux';
import types from 'actions/actionTypes'; 

export const mealsReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case types.READ_MEALS:
            return { ...state, data: action.payload, saved: null, deleted: null };
        case types.UPDATE_MEAL:
            return { ...state, saved: 'saved' };
        case types.CREATE_MEAL:
            return { ...state, saved: 'saved' };
        case types.DELETE_MEAL:
            return { ...state, deleted: 'deleted' };
        default:
            return state;
    }
};

const reducer = combineReducers({
    meals: mealsReducer
});

export default reducer;
