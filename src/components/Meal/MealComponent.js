import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MealNew from './MealNew';
import Meal from './MealEdit';

const MealComponent = () => {
    return (
            <Switch>
                <Route path="/meal/add" component={MealNew} />
                <Route path="/meal/:id" component={Meal} />
            </Switch>
        );
};

export default MealComponent;
