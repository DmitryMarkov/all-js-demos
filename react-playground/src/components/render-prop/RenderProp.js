import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const HasRenderChildren = props => {
  return (
    <div>
      <Link to="/">Back to index</Link>
      <Parent>
        {props => (
          <>
            <h1>Child Component as render prop</h1>
            <div>
              <strong>Props:</strong>
            </div>
            <code>{JSON.stringify(props)}</code>
          </>
        )}
      </Parent>
    </div>
  )
}

class Parent extends Component {
  state = { parentProp: 'parentProp' }
  render() {
    return this.props.children({
      parentProp: this.state.parentProp,
    })
  }
}

export default HasRenderChildren
