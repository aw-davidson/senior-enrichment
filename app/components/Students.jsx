import React, { Component } from 'react'
import store, { gotStudents } from '../store'
import { Link } from 'react-router-dom'
import axios from 'axios'

export class Students extends Component {
  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    axios.get('api/students')
      .then(res => res.data)
      .then(students => {
        const action = gotStudents(students)
        store.dispatch(action)
      });

    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }
  render() {
    const students = this.state.students
    console.log("students: ", students)
    return (
      <div>
        <button>Add Student</button>
        {
          students.map((student) => {
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
