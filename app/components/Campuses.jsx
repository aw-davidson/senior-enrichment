import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import store, { gotCampuses } from '../store'

export class Campuses extends Component {

  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount() {
    axios.get('api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = gotCampuses(campuses)
        store.dispatch(action)
      });

    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }

  render() {
    console.log("state", this.state)
    const campuses = this.state.campuses
    return (
      <div>
        {
          campuses.map((campus) => {
            return (
              <Link to={`/campuses/${campus.id}`} key={campus.id}>
                <h2 >{campus.name}</h2>
              </Link>
            )
          })
        }
      </div>
    )
  }
}
