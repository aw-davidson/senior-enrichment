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
    this.unsubscribeFromStore = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromStore();
  }

  render() {
    const campuses = this.state.campuses
    return (
      <div className="row">
        {
          campuses.map((campus) => {
            return (
              <div className="col-sm-4" key={campus.id}>
                <Link to={`/campuses/${campus.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                  <h2 >{campus.name}</h2>
                <img src={campus.imageUrl} />
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}
