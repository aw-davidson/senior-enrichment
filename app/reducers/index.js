/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

const initialState = {
  campuses: [],
  students: [],
  campus: {},
  newStudentFirstName: '',
  newStudentLastName: '',
  newStudentEmail: ''
}

const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_CAMPUS':
    return Object.assign({}, state, {campuses: [...state.campus, action.campus]});
    case 'DELETE_CAMPUS':
    return Object.assign({}, state, {campuses: action.campus});
    case 'WRITE_STUDENT_FIRST_NAME':
    return Object.assign({}, state, {newStudentFirstName: action.newStudentFirstName});
    case 'WRITE_STUDENT_LAST_NAME':
    return Object.assign({}, state, {newStudentLastName: action.newStudentLastName});
    case 'WRITE_STUDENT_EMAIL':
    return Object.assign({}, state, {newStudentEmail: action.newStudentEmail});
    case 'DELETE_STUDENT':
    return Object.assign({}, state, {students: state.students.filter(student => {
      return student.id !== action.studentId
    })});
    case 'GOT_CAMPUSES':
    return Object.assign({}, state, {campuses: action.campuses});
    case 'GOT_STUDENTS':
    return Object.assign({}, state, {students: action.students});
    case 'GOT_CAMPUS':
    return Object.assign({}, state, {campus: action.campus});
    default: return state
  }
};

export default rootReducer
