/* global jest, expect */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';

import types from './actionTypes';
import actions from './actions';

describe('actions', () => {
  
  it('should create an action to create meal', () => {
      
    const payload = [ { "_id": "Palačinke" } ];
    const expectedAction = {
        type: types.CREATE_MEAL,
        payload
    };
    
    expect(actions.createMeal(payload)).toEqual(expectedAction);
    
  });
    
  it('should create an action to read meals', () => {
      
    const payload = [ { "_id": "Palačinke" } ];
    const expectedAction = {
        type: types.READ_MEALS,
        payload
    };
    
    expect(actions.readMeals(payload)).toEqual(expectedAction);
    
  });
  
  it('should create an action to update meal', () => {
      
    const payload = [ { "_id": "Palačinke" } ];
    const expectedAction = {
        type: types.UPDATE_MEAL,
        payload
    };
    
    expect(actions.updateMeal(payload)).toEqual(expectedAction);
    
  });
  
  it('should create an action to delete meal', () => {
      
    const payload = [ { "_id": "Palačinke" } ];
    const expectedAction = {
        type: types.DELETE_MEAL,
        payload
    };
    
    expect(actions.deleteMeal(payload)).toEqual(expectedAction);
    
  });
  
});

describe('async actions', () => {
    
    const middlewares = [thunk];
    const mockStore = configureMockStore(middlewares);
    
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('creates READ_MEALS when fetching meals is done', () => {
      
        axios.get = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve({ data: [ { "_id": "Palačinke" } ] });
            });
        });
    
        const expectedActions = [
          { type: types.READ_MEALS, payload: [ { "_id": "Palačinke" } ] }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.readMealsAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates API_ERROR when read meals returns error', () => {
      
        axios.get = jest.fn(() => {
            return new Promise((resolve, reject) => {
                reject("Create ERROR");
            });
        });
    
        const expectedActions = [
          { type: types.API_ERROR, payload: { "message": "Create ERROR" } }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.readMealsAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates UPDATE_MEAL when saving meals is done', () => {
      
        axios.post = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve({ data: [ { "_id": "Palačinke" } ] });
            });
        });
    
        const expectedActions = [
          { type: types.UPDATE_MEAL, payload: [ { "_id": "Palačinke" } ] }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.updateMealAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates API_ERROR when update meal returns error', () => {
      
        axios.post = jest.fn(() => {
            return new Promise((resolve, reject) => {
                reject("Create ERROR");
            });
        });
    
        const expectedActions = [
          { type: types.API_ERROR, payload: { "message": "Create ERROR" } }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.updateMealAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates CREATE_MEAL when saving meals is done', () => {
      
        axios.post = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve({ data: [ { "_id": "Palačinke" } ] });
            });
        });
    
        const expectedActions = [
          { type: types.CREATE_MEAL, payload: [ { "_id": "Palačinke" } ] }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.createMealAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates API_ERROR when create meal returns error', () => {
      
        axios.post = jest.fn(() => {
            return new Promise((resolve, reject) => {
                reject("Create ERROR");
            });
        });
    
        const expectedActions = [
          { type: types.API_ERROR, payload: { "message": "Create ERROR" } }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.createMealAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates DELETE_MEAL when saving meals is done', () => {
      
        axios.delete = jest.fn(() => {
            return new Promise((resolve, reject) => {
                resolve({ data: [ { "_id": "Palačinke" } ] });
            });
        });
    
        const expectedActions = [
          { type: types.DELETE_MEAL, payload: [ { "_id": "Palačinke" } ] }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.deleteMealAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
    it('creates API_ERROR when deleting meal returns error', () => {
      
        axios.delete = jest.fn(() => {
            return new Promise((resolve, reject) => {
                reject("Create ERROR");
            });
        });
    
        const expectedActions = [
          { type: types.API_ERROR, payload: { "message": "Create ERROR" } }
        ];
        
        const store = mockStore({ meals: [] });
        
        return store.dispatch(actions.deleteMealAsync()).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
        
    });
    
});
