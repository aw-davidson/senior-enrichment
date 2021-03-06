import React from 'react';
import Dropdown from 'react-dropdown'
import { writeStudentFirstName, writeStudentLastName, writeStudentEmail, selectCampus, postStudent } from '../store'
import { connect } from 'react-redux'


function NewStudentEntry(props) {

  const { firstNameChange, lastNameChange, submitStudent, emailChange, onSelect, campuses, selectedCampusId } = props

  const options = campuses.map(campus => {
    return campus.name
  })
  const defaultOption = 'Campuses options'

  return (
    <form onSubmit={submitStudent.bind(this, selectedCampusId)} style={{ marginTop: '20px' }}>
      <fieldset >
        <legend>Add a new student </legend>
        <div className="form-group">
          <label>First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            placeholder="first name"
            onChange={firstNameChange}
          />
        </div>
        <label>Last Name</label>
        <input
          className="form-control"
          name="lastName"
          placeholder="Last name"
          onChange={lastNameChange}
        />
        <label>Email Name</label>
        <input
          className="form-control"
          name="email"
          placeholder="email"
          onChange={emailChange}
        />
        <label>Select a campus:
        <Dropdown
            options={options} value={defaultOption} placeholder="Select an option" onChange={onSelect.bind(this, campuses)}
          />
        </label>
        <div className="form-group">
          <button type="submit" className="btn btn-default" >submit</button>
        </div>
      </fieldset>
    </form>
  );
}


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    submitStudent: function (campusId, event) {
      event.preventDefault()
      const newStudent = {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value,
        email: event.target.email.value,
        campusId: campusId
      }
      dispatch(postStudent(newStudent))
      ownProps.history.push('/students')
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
    },
    onSelect: function (campuses, option) {
      const selectedCampusId = campuses.filter(campus => {
        return campus.name == option.value
      })[0].id
      dispatch(selectCampus(selectedCampusId))
    }
  };
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses,
    newStudentFirstName: state.newStudentFirstName,
    newStudentLastName: state.newStudentLastName,
    newStudentEmail: state.newStudentEmail,
    selectedCampusId: state.selectedCampusId
  };
};

const NewStudentEntryContainer = connect(mapStateToProps, mapDispatchToProps)(NewStudentEntry);


export default NewStudentEntryContainer;
