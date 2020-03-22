//Libs
import React from 'react'
import { withRouter } from 'react-router'

// Components

export default withRouter(function SearchPage(props) {
  const { loading } = props
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
          <div className='xxxLargeText'>Search</div>
        
      )}
    </div>
  )
})
