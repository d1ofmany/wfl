/* global jest,expect */

import React from 'react';
import { StaticRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import MealsListComponent from './MealsListComponent';

describe('MealsListComponent', () => {
    
    describe('on initialState', () => {
        const initialState = { meals: {} };
        let wrapper;
        
        beforeEach(() => {
            wrapper = shallow(<MealsListComponent {...initialState} />);
        });
        
        it('loads correctly', () => {
            expect(wrapper.hasClass('MealsList')).toEqual(true);
        });
         
        it('Initial state is No meals!', () => {
            const noMeals = <li>No meals!</li>;
            expect(wrapper.contains(noMeals)).toEqual(true);
        });
    });
    
    describe('on fetched state', () => {
        const props = {
            readMeals: jest.fn(),
            meals: { data: [ { "_id" :  "123", "name": "Palačinke" }, { "_id" :  "124", "name": "Police" } ] } 
        };
        let wrapper;
        
        beforeEach(() => {
            wrapper = mount(
                <StaticRouter context={{}}>
                    <MealsListComponent {...props} />
                </StaticRouter>
            );
        });
        
        it('readMeals is called', () => {
            expect(props.readMeals).toHaveBeenCalled();
        });
         
        it('has corrent number list of elements', () => {
            expect(wrapper.find('li').length).toEqual(2);
        });
        
        it('contains Link elements', () => {
            expect(wrapper.contains(<Link to={'/meal/123'}>{'Palačinke'}</Link>)).toEqual(true);
            expect(wrapper.contains(<Link to={'/meal/124'}>{'Police'}</Link>)).toEqual(true);
        });
    });
    
});
