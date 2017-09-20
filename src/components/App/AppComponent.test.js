/* global ,jest,expect */
import React from 'react';
import { shallow } from 'enzyme';

import AppComponent from './';

describe('AppComponent', () => {
    
    let shallowWrapper,
        store = { 
            subscribe: jest.fn(),
            dispatch: jest.fn(),
            getState: jest.fn()
        };
    
    beforeEach(() => {
        shallowWrapper = shallow(<AppComponent store={store}/>);
    });
    
    it('loads correctly', () => {
        expect(shallowWrapper.find('.App').length).toEqual(1);
    });
});