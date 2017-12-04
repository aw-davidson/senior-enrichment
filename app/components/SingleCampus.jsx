import React, { Component } from 'react'
import axios from 'axios'
import store, { gotCampus, gotStudents } from '../store'
import { Link } from 'react-router-dom'

export class SingleCampus extends Component {
  constructor () {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    axios.get(`/api/campuses/${this.props.match.params.campusId}`)
    .then(res => res.data)
    .then(campus => {
      store.dispatch(gotCampus(campus))
    })
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    });
    axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      store.dispatch(gotStudents(students))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }

  render() {
    const students = this.state.students
    return (
      <div>
        <h2>{this.state.campus.name} Campus</h2>
        {
          students.filter((student) => {
            return student.campus.id == this.props.match.params.campusId
          }).map((student) => {
            return (
              <Link to={`/students/${student.id}`} key={student.id}>
                <h2>{student.name}</h2>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

