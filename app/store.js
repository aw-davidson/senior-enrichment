import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunkMiddleware, loggingMiddleware))
import axios from 'axios'


//action types
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME'
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME'
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL'
const SELECT_CAMPUS = 'SELECT_CAMPUS'
const POST_STUDENT ='POST_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'
const CREATE_STUDENT = 'CREATE_STUDENT'
const GOT_CAMPUSES = 'GOT_CAMPUSES'
const GOT_STUDENTS = 'GOT_STUDENTS'
const GOT_CAMPUS = 'GOT_CAMPUS'



//action creators
const gotCampus = (campus) => {
  return {
    type: GOT_CAMPUS,
    campus
  }
}
const createCampus = (campus) => {
  return {
    type: CREATE_CAMPUS,
    campus: campus
  }
}

const deleteCampus = (campus) => {
  return {
    type: DELETE_CAMPUS,
    campus: campus
  }
}

const selectCampus = (selectedCampusId) => {
  return {
    type: SELECT_CAMPUS,
    selectedCampusId
  }
}

const writeStudentFirstName = (newStudentFirstName) => {
  return {
    type: WRITE_STUDENT_FIRST_NAME,
    newStudentFirstName
  }
}

const writeStudentLastName = (newStudentLastName) => {
  return {
    type: WRITE_STUDENT_LAST_NAME,
    newStudentLastName
  }
}

const writeStudentEmail = (newStudentEmail) => {
  return {
    type: WRITE_STUDENT_EMAIL,
    newStudentEmail
  }
}


const deletedStudent = (studentId) => {
  return {
    type: DELETE_STUDENT,
    studentId
  }
}

const gotCampuses = (campuses) => {
  return {
    type: GOT_CAMPUSES,
    campuses: campuses
  }
}

const gotStudents = (students) => {
  return {
    type: GOT_STUDENTS,
    students: students
  }
}

const createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    student
  }
}

const updateStudent = (student) => {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

//thunk creators

const fetchStudents = () => {
  return function studentsThunk (dispatch) {
    return axios.get('api/students')
    .then(res => res.data)
    .then(students => {
      const action = gotStudents(students)
      dispatch(action)
    })
  }
}

const fetchCampuses = () => {
  return function campusesThunk (dispatch) {
    return  axios.get('api/campuses')
    .then(res => res.data)
    .then(campuses => {
      const action = gotCampuses(campuses)
      dispatch(action)
    });
  }
}

const fetchCampus = (campusId) => {
  return function campusThunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => {
      dispatch(gotCampus(campus))
    })
  }
}

const postStudent = (newStudent) => {
  return function postStudentThunk (dispatch) {
    return axios.post('api/students', newStudent)
    .then(res => res.data)
    .then(student => {
      dispatch(createStudent(student))
    })
  }
}

const putStudent = (student) => {
  return function putStudentThunk (dispatch) {
    return axios.put(`api/students/${student.id}`, student)
    .then(() => {
      dispatch(updateStudent(student))
    })
  }
}

const deleteStudent = (studentId) => {
  return function deleteStudentThunk (dispatch) {
    return axios.delete(`/api/students/${studentId}`)
    .then(() => {
      dispatch(deletedStudent(studentId))
    })
  }
}

export { gotCampuses, gotStudents, gotCampus, fetchStudents, fetchCampuses, fetchCampus, deleteStudent, writeStudentFirstName, writeStudentLastName, writeStudentEmail, selectCampus, postStudent, putStudent }



