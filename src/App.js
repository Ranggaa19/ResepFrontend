import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Logout from './components/logout';
import Favorite from './components/favorite';
import Home from './components/home';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/logout" component={Logout} />
                <Route path="/favorites" component={Favorite} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
};

export default App;