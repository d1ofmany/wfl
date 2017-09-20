/* global jest, expect */
import React from 'react';
import { shallow } from 'enzyme';

import MealComponent from './MealComponent';

describe('MealComponent', () => {
    
    let shallowWrapper;
    
    beforeEach(() => {
        shallowWrapper = shallow(<MealComponent />);
    });
    
    it('loads correctly', () => {
        expect(shallowWrapper.exists()).toEqual(true);
    });
});