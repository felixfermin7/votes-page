//Libs
import React from 'react'
import { withRouter } from 'react-router'

// Components
import PersonCard from '../commons/components/PersonCard'

export default withRouter(function MainPage(props) {
  const { loading, people } = props
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className='xxxLargeText'>Votes</div>
          <br />
          <div className='squareWrapper'>
            {people.map((person, i) => (
              <PersonCard key={i} person={person} {...props} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
})
