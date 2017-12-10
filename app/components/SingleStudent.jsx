import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StudentUpdate from './StudentUpdate'

import store, { fetchStudents } from '../store';

class SingleStudent extends React.Component {
  //dont know why state isnt being loaded on refresh
  constructor() {
    super()
    this.state = {
      showForm: false
    }
    this.showReplyForm = this.showReplyForm.bind(this)
  }
  showReplyForm () {
    if (this.state.showForm) {
      this.setState({showForm: false})
    } else {
       this.setState({showForm: true});
    }
  }


  render() {
    const studentId = this.props.match.params.studentId
    const student = this.props.students.filter(singleStudent => {
      return singleStudent.id == studentId
    })[0] || {campus: {}, name: ''}

    return (
      <div>
          <button onClick={this.showReplyForm}>Update {student.name.split(' ')[0] + "'s  " }info</button>
          {
            this.state.showForm && <StudentUpdate id={studentId} />
          }
        <h2>Student ID: {student.id}</h2>
        <h2>Name: {student.name}</h2>
        <h2>Email: {student.email}</h2>
        <h2>GPA: {student.gpa || 'N/A'}</h2>
        <h2>Campus:
        <Link to={`/campuses/${student.campus.id}`}>{student.campus.name}</Link>
        </h2>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  }
}



const SingleStudentContainer = connect(mapStateToProps)(SingleStudent);
export default SingleStudentContainer;
