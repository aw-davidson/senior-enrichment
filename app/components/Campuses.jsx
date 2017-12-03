import React, { Component } from 'react'
import axios from 'axios'
import { store } from '../store'

export class Campuses extends Component {

  constructor() {
    super()
    this.state = store.getState()
  }

  componentDidMount () {
    axios.get('api/campuses')
    .then(res => res.data)
    .then(console.log)
  }

  render () {
    return (
      <div>
        <h2>Campuses go here</h2>
      </div>
    )
  }
}
