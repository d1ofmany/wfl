import axios from 'axios';

export const GET_MEALS = 'GET_MEALS';
export const SET_MEAL = 'SET_MEAL';
export const DELETE_MEAL = 'DELETE_MEAL';
export const SAVE_MEAL = 'SAVE_MEAL';

export const getMeals = (payload) => {
    return {
        type: GET_MEALS,
        payload
    }
}

export const getMealsAsync = () => {
    return (dispatch, getState) => {
        axios.get('https://d1ofmany-wfl-api.herokuapp.com/meals')
            .then(function (response) {
                dispatch(getMeals(response.data))
            })
            .catch(function (error) {
                console.log(error);
            });
    }    
}

export const saveMeal = (payload) => {
    return {
        type: SAVE_MEAL,
        payload
    }
}

export const saveMealAsync = (id, name) => {
    return (dispatch, getState) => {
        axios.post('https://d1ofmany-wfl-api.herokuapp.com/meal/' + id, {name})
        .then(function (response) {
                dispatch(saveMeal(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const setMeal = (payload) => {
    return {
        type: SET_MEAL,
        payload
    }
}

export const setMealAsync = (name) => {
    return (dispatch, getState) => {
        axios.post('https://d1ofmany-wfl-api.herokuapp.com/meal', {name})
        .then(function (response) {
                dispatch(setMeal(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

export const deleteMeal = (payload) => {
    return {
        type: DELETE_MEAL,
        payload
    }
}

export const deleteMealAsync = (id) => {
    return (dispatch, getState) => {
        axios.delete('https://d1ofmany-wfl-api.herokuapp.com/meal/' + id)
        .then(function (response) {
                dispatch(deleteMeal(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};



