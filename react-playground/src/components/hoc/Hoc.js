import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function withExtra(Wrapped) {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        fromHOC: 'fromHOC',
      }
    }

    render() {
      return <Wrapped {...this.props} {...this.state} />
    }
  }
}

class SampleClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ownProp: 'own prop',
    }
  }
  render() {
    return (
      <div>
        <Link to="/">Back to index</Link>
        <h1>Wrapped component</h1>
        <div>
          <strong>State:</strong>
        </div>
        <code>{JSON.stringify(this.state)}</code>
        <div>
          <strong>Props:</strong>
        </div>
        <code>{JSON.stringify(this.props)}</code>
      </div>
    )
  }
}

export default withExtra(SampleClass)
