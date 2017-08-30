import { combineReducers } from 'redux';
import { GET_MEALS, SET_MEAL, SAVE_MEAL, DELETE_MEAL } from 'actions/actions'; 

const mealsReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_MEALS:
            return { ...state, data: action.payload, saved: null, deleted: null };
        case SAVE_MEAL:
            return { ...state, saved: 'saved' };
        case SET_MEAL:
            return { ...state, saved: 'saved' };
        case DELETE_MEAL:
            return { ...state, deleted: 'deleted' };
        default:
            return state;
    }
}

const reducer = combineReducers({
    meals: mealsReducer
});



export default reducer;