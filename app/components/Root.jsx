import React, { Component } from 'react';
import { NavBar } from './NavBar'
import { Campuses } from './Campuses';
import { Students } from './Students';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import { SingleStudent } from './SingleStudent';
import { SingleCampus } from './SingleCampus';
import { Home } from './Home';

export default class Root extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/students' component={Students} />
            <Route exact path='/students/:studentId' component={SingleStudent} />
            <Route exact path='/campuses/:campusId' component={SingleCampus} />
            <Route exact path='/campuses' component={Campuses}/>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
      </Router>
    )
  }
}
