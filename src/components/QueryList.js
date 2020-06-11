import React, { Component } from 'react'
import BasicQuery from './BasicQuery'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
{
  allAuditionee {
    edges {
      node {
        id
        name
        email
        phone
        maxPieces
        number
      }
    }
  }
}
`

class QueryList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const auditoneesToRender = data.allAuditionee.edges

          return (
            <div>
              {auditoneesToRender.map(auditionee => <BasicQuery key={auditionee.node.id} auditionee={auditionee.node} />)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default QueryList
