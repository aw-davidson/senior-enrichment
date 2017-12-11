import React from 'react';
import { connect } from 'react-redux'
import { postCampus } from '../store'

function NewCampus(props) {
  return (
    <div>
      <form onSubmit={props.submitCampus.bind(this)}>
        <label> Campus Name </label>
        <input
        className="form-control"
        type="text"
        name="campusName"
        placeholder="campus name"
        />
        <button type="submit" className="btn btn-default" >submit</button>
      </form>
    </div>
  )
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    submitCampus: function (event) {
      event.preventDefault()
       const newCampus = {
         name: event.target.campusName.value,
        }
      dispatch(postCampus(newCampus))
      ownProps.history.push('/campuses')
    }
  }
}

const NewCampusContainer = connect(undefined, mapDispatchToProps)(NewCampus);


export default NewCampusContainer;

