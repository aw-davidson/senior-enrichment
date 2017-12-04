/* combineReducers is not currently used, but eventually should be for modular code :D */
import { combineReducers } from 'redux'

const initialState = {
  campuses: [],
  students: [],
  campus: {}
}

const rootReducer = function(state = initialState, action) {
  switch(action.type) {
    case 'CREATE_CAMPUS':
    return Object.assign({}, state, {campuses: [...state.campus, action.campus]});
    case 'DELETE_CAMPUS':
    return Object.assign({}, state, {campuses: action.campus});
    case 'CREATE_STUDENT':
    return Object.assign({}, state, {students: [...state.student, action.student]});
    case 'DELETE_STUDENT':
    return Object.assign({}, state, {campus: action.campus});
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
