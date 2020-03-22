//Libs
import React from 'react'
import { withRouter } from 'react-router'

// Components

export default withRouter(function PastTrialsPage(props) {
  const { loading } = props
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
          <div className='xxxLargeText'>Past Trials</div>
        
      )}
    </div>
  )
})
