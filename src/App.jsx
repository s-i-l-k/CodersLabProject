import React from 'react';
import {HashRouter, Route, Link, Switch, NavLink} from 'react-router-dom';
import Main from './Main';
import MainTemplate from "./MainTemplate";
import NotFound from "./NotFound";
import Navigation from "./Navigation";
import HelloYou from "./HelloYou";
import CheckAge from "./CheckAge";

class App extends React.Component {
    render() {
        return (
            <MainTemplate>
                <HashRouter>
                    <React.Fragment>
                        <Navigation/>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/hello/:name' component={HelloYou}/>
                            <Route path='/checkage/:age' component={CheckAge}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </React.Fragment>
                </HashRouter>
            </MainTemplate>
        );
    }
}

export default App;

