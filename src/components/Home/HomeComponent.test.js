/* global expect */

import React from 'react';
import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';
import HomeComponent from './HomeComponent';


import MealsList from './MealsList';
import MealRandom from './MealRandom';

describe('HomeComponent', () => {
    const initialState = { meals: {} };
    let wrapper;
    
    beforeEach(() => {
        wrapper = shallow(<HomeComponent />);
    });
     
    it('has correct class', () => {
        expect(wrapper.hasClass('Home')).toEqual(true);
    });
    
    it('contains MealRandom component', () => {
        expect(wrapper.contains(<MealRandom />)).toEqual(true);
    });
    
    it('contains MealsList component', () => {
        expect(wrapper.contains(<MealsList />)).toEqual(true);
    });
    
    it('has "Add new" link', () => {
        expect(wrapper.contains(<Link to="/meal/add">Add new</Link>)).toEqual(true);
    });
});