/* global jest, expect */

import React from 'react';
import { shallow } from 'enzyme';

import MealNewComponent from './MealNewComponent';


describe('MealNewComponent', () => {
    
    let shallowWrapper,
        changeEvent = { target: { value: "test" } },
        handleChangeSpy = jest.spyOn(MealNewComponent.prototype, "handleChange"),
        submitEvent = { preventDefault: jest.fn() },
        handleSubmitSpy = jest.spyOn(MealNewComponent.prototype, "handleSubmit");
    
    beforeEach(() => {
        shallowWrapper = shallow(<MealNewComponent />);
    });
    
    it('loads correctly', () => {
        expect(shallowWrapper.exists()).toEqual(true);
    });
    
    it('contains form', () => {
         expect(shallowWrapper.find('form').exists()).toEqual(true);
    });
    
    it('contains input field', () => {
        expect(shallowWrapper.find('input').exists()).toEqual(true);
    });
    
    it('contains submit button', () => {
        expect(shallowWrapper.find('button').exists()).toEqual(true);
    });
    
    it('handles submit on form submit', () => {
        shallowWrapper.find('form').simulate('submit', submitEvent);
        expect(handleSubmitSpy).toHaveBeenCalled();
    });
    
    it('handles submit on button click', () => {
        shallowWrapper.find('button').simulate('click', submitEvent);
        expect(handleSubmitSpy).toHaveBeenCalled();
    });
    
    it('handles input change', () => {
        shallowWrapper.find('input').simulate('change', changeEvent);
        expect(handleChangeSpy).toHaveBeenCalled();
    });
});