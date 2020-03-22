//Libs
import React, { useState } from 'react'
import moment from 'moment'

//Const
import { categories } from '../../config'

export default function PersonCard(props) {
  const [checkedUp, setCheckedUp] = useState(true)
  const { person, thumbUp, thumbDown, voteAgain } = props
  const categoryName = categories.find(c => c.id === person.category).name
  const percentUp = Math.round((person.thumbs_up * 100) / (person.thumbs_up + person.thumbs_down))

  return (
    <div>
      <img className='squareImage' alt={person.name} src={person.image_url} />
      <div className='square'>
        <div style={{ display: 'flex' }}>
          <div className={person.thumbs_up >= person.thumbs_down ? 'up-text' : 'down-text'}> {person.thumbs_up >= person.thumbs_down ? 'Up' : 'Down'}</div>
          &nbsp;&nbsp;
          <div style={{ fontSize: 'x-large' }}>{person.name}</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ fontWeight: 'bold' }}>{moment(person.date_added).fromNow()}</div> 
          &nbsp;
          <div>in {categoryName}</div>
        </div>
        <br />
        <div>Up: {percentUp} %</div>
        <div>Down: {100 - percentUp} %</div>
        {!person.voted ? (
          <div>
            <div>
              <label>
                <input type='checkbox' checked={checkedUp} onChange={_ => setCheckedUp(!checkedUp)} />
                Up
              </label>
              <label>
                <input type='checkbox' checked={!checkedUp} onChange={_ => setCheckedUp(!checkedUp)} />
                Down
              </label>
            </div>
            <button onClick={_ => (checkedUp ? thumbUp(person.id) : thumbDown(person.id))}>Vote now</button>
          </div>
        ) : (
          <div>
            <div>Thank you for voting!</div>
            <button
              onClick={_ => {
                voteAgain(person.id)
                setCheckedUp(true)
              }}
            >
              Vote Again
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
