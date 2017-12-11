/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

//maybe should be moved back to store?
const initialState = {
  campuses: [],
  students: [],
  campus: {},
  newStudentFirstName: '',
  newStudentLastName: '',
  newStudentEmail: '',
  selectedCampusId: ''
}


const rootReducer = function(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_CAMPUS':
    return Object.assign({}, state, {campuses: [...state.campuses, action.campus]});
    case 'DELETE_CAMPUS':
    return Object.assign({}, state, {campuses: state.campuses.filter(campus => {
      return campus.id != action.campusId
    })});
    case 'SELECT_CAMPUS':
    return Object.assign({}, state, {selectedCampusId: action.selectedCampusId});
    case 'WRITE_STUDENT_FIRST_NAME':
    return Object.assign({}, state, {newStudentFirstName: action.newStudentFirstName});
    case 'WRITE_STUDENT_LAST_NAME':
    return Object.assign({}, state, {newStudentLastName: action.newStudentLastName});
    case 'WRITE_STUDENT_EMAIL':
    return Object.assign({}, state, {newStudentEmail: action.newStudentEmail});
    case 'CREATE_STUDENT':
    return Object.assign({}, state, {students: [...state.students, action.student]})
    case 'UPDATE_STUDENT':
    return Object.assign({}, state, {students: [...state.students.slice(0, action.student.index), action.student, ...state.students.slice(action.index)]})
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
