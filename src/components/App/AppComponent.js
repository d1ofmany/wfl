import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from 'components/Home';
import Meal from 'components/Meal';

const App = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <h1>
                        <Link to="/">What's For Lunch</Link>
                    </h1>
                    <Switch>
                        <Route path="/meal" component={Meal} />
                        <Route path="/" component={Home} />
                    </Switch>
                </div>
            </Router>
        </Provider>
        );
};

export default App;
