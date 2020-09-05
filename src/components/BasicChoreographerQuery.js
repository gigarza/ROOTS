import React, { Component } from 'react'

class BasicQuery extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.choreographer.name}
        </div>
      </div>
    )
  }
}

export default BasicQuery
