import React from 'react';
import { Link } from 'react-router-dom';

import MealRandom from './MealRandom';
import MealsList from './MealsList';

const HomeComponent = () => {
    return (
        <div className="Home">
            <MealRandom />
            <MealsList />
            <div>
                <Link to="/meal/add">Add new</Link>
            </div>
        </div>
        );
};

export default HomeComponent;