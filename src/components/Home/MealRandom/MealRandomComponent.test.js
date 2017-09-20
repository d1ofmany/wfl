/* global jest,expect */

import React from 'react';
import { shallow, mount } from 'enzyme';

import MealRandomComponent from './MealRandomComponent';


describe('MealRandomComponent', () => {
    
    afterEach(() => {
        jest.clearAllMocks()
    });

    describe('inital render', () => {
        let shallowWrapper,
            props = { meals: { data: []} };
        
        beforeEach(() => {
            shallowWrapper = shallow(<MealRandomComponent {...props} />);
        });
        
        it('loads correctly', () => {
            expect(shallowWrapper.hasClass('MealRandom')).toEqual(true);
        });
            
        it('shows "Loading..." on first load', () => {
            expect(shallowWrapper.find('span').text()).toEqual('Loading...');
        });
        
        it('doesn\'t change internal state on button click', () => {
            shallowWrapper.find('button').simulate('click');
            expect(shallowWrapper.find('span').text()).toEqual('Loading...');
        });
    });
    
    describe('on meals received', () => {
        let mountWrapper, 
            props = { meals: { data: [ { "_id" :  "123", "name": "Palačinke" }, { "_id" :  "124", "name": "Police" } ]} },
            handleClickSpy = jest.spyOn(MealRandomComponent.prototype, "handleClick"),
            mealRandomSpy = jest.spyOn(MealRandomComponent.prototype, "mealRandom");
        
        beforeEach(() => {
            mountWrapper = mount(<MealRandomComponent {...props} />);
        });
        
        it('mealRandom is called', () => {
            expect(mealRandomSpy).toHaveBeenCalled();
        });
        
        it('handleClick is called', () => {
            expect(handleClickSpy).not.toHaveBeenCalled();
            mountWrapper.find('button').simulate('click');
            expect(handleClickSpy).toHaveBeenCalled();
        });
        
        it('shows random meal', () => {
            let mealName = mountWrapper.find('span').text();
            expect(props.meals.data.filter(item => item.name === mealName).length).toEqual(1);
        });
        
        it('changes display on button click', () => {
            let previousMeal = mountWrapper.find('span').text();
            mountWrapper.find('button').simulate('click');
            let currentMeal = mountWrapper.find('span').text();
            expect(props.meals.data.filter(item => item.name === currentMeal).length).toEqual(1);
            expect(currentMeal).not.toEqual(previousMeal);
        });
    });
});