/* global jest, expect */

import React from 'react';
import { shallow, mount } from 'enzyme';

import MealEditComponent from './MealEditComponent';
import ShowMeal from './ShowMeal';
import EditMeal from './EditMeal';

describe('MealEditComponent', () => {
    
    let shallowWrapper,
        props= {
            readMeals: jest.fn(),
            match: { params: { id: "123" } },
            meals: { data: [ { _id: "123", name: "Riba" } ] }
        },
        propsInitial = {
            readMeals: jest.fn(),
            match: { params: { id: "123" } },
            meals: { data: [] }
        };
    
    afterEach(() => {
        jest.clearAllMocks();
    });
        
    describe('before props receivedr', () => {
        beforeEach(() => {
            shallowWrapper = shallow(<MealEditComponent {...propsInitial} />);
        });
        
        it('shows "Loading..." on first load', () => {
            expect(shallowWrapper.find('.Loading').text()).toEqual('Loading...');
        });
    });
    
    describe('after props receivedr', () => {
        props ;
        
        describe('view mode', () => {
            beforeEach(() => {
                shallowWrapper = shallow(<MealEditComponent {...props} />);
            });
            
            it('loads correctly', () => {
                expect(shallowWrapper.exists()).toEqual(true);
            });
            
            it('contains ShowMeal', () => {
                expect(shallowWrapper.find('ShowMeal').length).toEqual(1);
            });
        });
        
        describe('edit mode', () => {
            beforeEach(() => {
                shallowWrapper = shallow(<MealEditComponent {...props} />);
                shallowWrapper.setState({ type: 'edit' });
            });

            it('loads correctly', () => {
                expect(shallowWrapper.exists()).toEqual(true);
            });
            
            it('contains EditMeal', () => {
                expect(shallowWrapper.find('EditMeal').length).toEqual(1);
            });
        });
    });
});