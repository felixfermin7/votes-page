import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  const { person, thumbUp, thumbDown, voteAgain, loading } = props
  const percentUp = person ? Math.round((person.thumbs_up * 100) / (person.thumbs_up + person.thumbs_down)) : 0

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      <img width={'100%'} alt={person.name} src={person.image_url} />
      <div className='wrapper'>
        <Link to='/'>
          <div className='appName'>Rule of Thumb.</div>
        </Link>
        <div className='navbarOptions'>
          <Link to={'/past-trials'}>
            <div className={props.currentPath === '/past-trials' ? 'navbarSelectedOption' : 'navbarOption'}>
              <span>Past Trials</span>
            </div>
          </Link>

          <Link to={'/how-it-works'}>
            <div className={props.currentPath === '/how-it-works' ? 'navbarSelectedOption' : 'navbarOption'}>
              <span>How It Works</span>
            </div>
          </Link>
          <Link to={'/sign-in-sign-up'}>
            <div className={props.currentPath === '/sign-in-sign-up' ? 'navbarSelectedOption' : 'navbarOption'}>
              <span>Log In / Sign Up</span>
            </div>
          </Link>

          <Link to={'/search'}>
            <div className={props.currentPath === '/search' ? 'navbarSelectedOption' : 'navbarOption'}>
              <span>Search</span>
            </div>
          </Link>
        </div>
      </div>
      <div className='navbarPersonBox'>
        <br />
        What's you opinion on
        <div className='xxxLargeText'>{person.name}?</div>
        <br />
        <div className='navbarPersonBoxDescription'>{person.description}</div>
        <br />
        <br />
        {!person.voted ? (
          <div>
            <div className='navbarPersonBoxQuestion'>What's Your Veredict?</div>
            <button onClick={_ => thumbUp(person.id)}>Up</button>
            <button onClick={_ => thumbDown(person.id)}>Down</button>
          </div>
        ) : (
          <div>
            <div>Thank you for voting!</div>
            <div>Up: {percentUp} %</div>
            <div>Down: {100 - percentUp} %</div>
            <button onClick={_ => voteAgain(person.id)}>Vote Again</button>
          </div>
        )}
        <br />
      </div>
    </div>
  )
}
