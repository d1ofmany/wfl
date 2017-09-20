/* global expect */

import { mealsReducer } from './reducer';
import types from 'actions/actionTypes';

describe ('mealsReducer reducer', () => {
    
    it('should handle READ_MEALS', () => {
        expect(mealsReducer(undefined, { type: types.CREATE_MEAL })).toEqual({ data: [], saved: 'saved'});
    });
    
    it('should handle CREATE_MEAL', () => {
        expect(mealsReducer(undefined, { payload: [], type: types.READ_MEALS })).toEqual({ data: [], saved: null, deleted: null });
    });
    
    it('should handle UPDATE_MEAL', () => {
        expect(mealsReducer(undefined, { type: types.UPDATE_MEAL })).toEqual({ data: [], saved: 'saved' });
    });
    
    it('should handle DELETE_MEAL', () => {
        expect(mealsReducer(undefined, { type: types.DELETE_MEAL })).toEqual({ data: [], deleted: 'deleted' });
    });
    
});