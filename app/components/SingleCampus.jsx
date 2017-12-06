import React, { Component } from 'react'
import axios from 'axios'
import store, { fetchCampus, fetchCampuses } from '../store'
import { Link } from 'react-router-dom'

export class SingleCampus extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    store.dispatch(fetchCampus(this.props.match.params.campusId))
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    });
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
          }).map((student, index) => {
            return (
              <Link to={`/students/${student.id}`} key={student.id} style={{ textDecoration: 'none', color: 'black' }}>
                <h2>{`${index + 1} - ` + student.name}</h2>
              </Link>
            )
          })
        }
      </div>
    )
  }
}

