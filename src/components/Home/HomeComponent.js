import React from 'react';
import { Link } from 'react-router-dom';

import MealsList from './MealsList';

const HomeComponent = ({children, title}) => {
    return (
        <div className="Home">
            <MealsList />
            <div>
                <Link to="/meal/add">Add new</Link>
            </div>
        </div>
        );
};

export default HomeComponent;