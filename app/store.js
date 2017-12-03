import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggingMiddleware))

const initialState = {
  campuses: [],
  students: []
}

//action types
const CREATE_CAMPUS = 'CREATE_CAMPUS'
const DELETE_CAMPUS = 'DELETE_CAMPUS'
const CREATE_STUDENT = 'CREATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

//action creators
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

const createStudent = (student) => {
  return {
    type: CREATE_STUDENT,
    campus: student
  }
}

const deleteStudent = (student) => {
  return {
    type: DELETE_STUDENT,
    campus: student
  }
}

