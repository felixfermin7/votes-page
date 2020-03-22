//Libs
import React from 'react'
import { withRouter } from 'react-router'

// Components

export default withRouter(function HowItWorksPage(props) {
  const { loading } = props
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
          <div className='xxxLargeText'>How It Works</div>
        
      )}
    </div>
  )
})
