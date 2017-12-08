import React, { Component } from 'react';
import { NavBar } from './NavBar'
import { Campuses } from './Campuses';
import { Students } from './Students';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import SingleStudent from './SingleStudent';
import { SingleCampus } from './SingleCampus';
import { Home } from './Home';
import  NewStudentEntry  from './NewStudentEntry'
import store, { fetchStudents, fetchCampuses } from '../store'

export default class Root extends Component {

  componentDidMount() {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/students' component={Students} />
            <Route exact path='/students/addstudent' component={NewStudentEntry} />
            <Route exact path='/students/:studentId' component={SingleStudent} />
            <Route exact path='/campuses/:campusId' component={SingleCampus} />
            <Route exact path='/campuses' component={Campuses} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </Router>
    )
  }
}
