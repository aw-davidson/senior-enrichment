import React, { Component } from 'react'
import store, {deleteStudent } from '../store'
import { Link } from 'react-router-dom'


export class Students extends Component {
  constructor() {
    super()
    this.state = store.getState()

  }

  componentDidMount() {
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }

  handleDelete(studentId) {
    store.dispatch(deleteStudent(studentId))
  }


  render() {
    const students = this.state.students

    return (
      <div>
        <Link to='/students/addstudent'>Add Student</Link>
        {
          students.map((student) => {
            return (
              <div key={student.id}>
                <Link to={`/students/${student.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                  <h2>{student.name}</h2>
                  <h2>{student.campus.name}</h2>
                </Link>
                <button onClick={this.handleDelete.bind(this, student.id)}>&times;</button>
              </div>
            )
          })
        }
      </div>
    )
  }

}
