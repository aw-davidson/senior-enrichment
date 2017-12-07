import React from 'react';
import Dropdown from 'react-dropdown'
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail } from '../store'
import { connect } from 'react-redux'


function NewStudentEntry(props) {

  const { firstNameChange, lastNameChange, submitStudent, emailChange, campuses} = props
  const options = campuses.map(campus => {
    return campus.name
  })
  const defaultOption = options[0]

  return (
    <form onSubmit={submitStudent} style={{ marginTop: '20px' }}>
      <fieldset className="form-group">
        <legend>Add a new student </legend>
        <input
          className="form-control"
          type="text"
          name="firstName"
          placeholder="first name"
          onChange={firstNameChange.bind(this)}
        />
        <input
          className="form-control"
          name="lastName"
          placeholder="Last name"
          onChange={lastNameChange.bind(this)}
        />
        <input
          className="form-control"
          name="email"
          placeholder="email"
          onChange={emailChange.bind(this)}
        />
        <label>Select a campus:  </label>
        <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
        <div className="form-group">
          <button type="submit" className="btn btn-default">submit</button>
        </div>
      </fieldset>
    </form>
  );
}


const mapDispatchToProps = function (dispatch) {
  return {
    submitStudent: function (event, firstName, lastName, email) {
      event.preventDefault()
    },
    firstNameChange: function (event) {
      event.preventDefault()
      dispatch(writeStudentFirstName(event.target.value));
    },
    lastNameChange: function (event) {
      event.preventDefault()
      dispatch(writeStudentLastName(event.target.value));
    },
    emailChange: function (event) {
      event.preventDefault()
      dispatch(writeStudentEmail(event.target.value));
    }
  };
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry);


export default NewStudentEntryContainer;
