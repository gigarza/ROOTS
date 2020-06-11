import React, { Component } from 'react'

class BasicQuery extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.auditionee.name} ({this.props.auditionee.number})
        </div>
      </div>
    )
  }
}

export default BasicQuery
