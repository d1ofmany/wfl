import axios from 'axios';

import types from './actionTypes';

export const apiError = (payload) => {
    return {
        type: types.API_ERROR,
        payload
    };
};

export const readMeals = (payload) => {
    return {
        type: types.READ_MEALS,
        payload
    };
};

export const readMealsAsync = () => {
    return (dispatch, getState) => {
        return axios.get('https://d1ofmany-wfl-api.herokuapp.com/meals')
            .then(function (response) {
                dispatch(readMeals(response.data));
            })
            .catch(function (error) {
                dispatch(apiError({ message: error }));
            });
    };    
};

export const updateMeal = (payload) => {
    return {
        type: types.UPDATE_MEAL,
        payload
    };
};

export const updateMealAsync = (id, name) => {
    return (dispatch, getState) => {
        return axios.post('https://d1ofmany-wfl-api.herokuapp.com/meal/' + id, {name})
            .then(function (response) {
                dispatch(updateMeal(response.data));
            })
            .catch(function (error) {
                dispatch(apiError({ message: error }));
            });
    };
};

export const createMeal = (payload) => {
    return {
        type: types.CREATE_MEAL,
        payload
    };
};

export const createMealAsync = (name) => {
    return (dispatch, getState) => {
        return axios.post('https://d1ofmany-wfl-api.herokuapp.com/meal', {name})
            .then(function (response) {
                dispatch(createMeal(response.data));
            })
            .catch(function (error) {
                dispatch(apiError({ message: error }));
            });
    };
};

export const deleteMeal = (payload) => {
    return {
        type: types.DELETE_MEAL,
        payload
    };
};

export const deleteMealAsync = (id) => {
    return (dispatch, getState) => {
        return axios.delete('https://d1ofmany-wfl-api.herokuapp.com/meal/' + id)
            .then(function (response) {
                dispatch(deleteMeal(response.data));
            })
            .catch(function (error) {
                dispatch(apiError({ message: error }));
            });
    };
};

export const actions = {
    apiError,
    readMeals,
    readMealsAsync,
    updateMeal,
    updateMealAsync,
    createMeal,
    createMealAsync,
    deleteMeal,
    deleteMealAsync
};

export default actions;
