//Libs
import React, { useState, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

//Data
import { people as peopleData } from './config'

//Pages
import MainPage from './models/MainPage'
import PastTrialsPage from './models/PastTrialsPage'
import HowItWorksPage from './models/HowItWorksPage'
import SearchPage from './models/SearchPage'
import SignPage from './models/SignPage'

//Components
import NavBar from './commons/components/NavBar'

//Const
const routes = [{ route: '/', component: MainPage }]

export default function Router(props) {
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(_ => {
    let _people = localStorage.getItem('ourPeople')
    _people = _people ? JSON.parse(_people) : peopleData
    setPeople(_people)
    setLoading(false)
  }, [])

  useEffect(
    _ => {
      localStorage.setItem('ourPeople', JSON.stringify(people))
    },
    [people]
  )

  const thumbUp = id => {
    const newPeople = people.map(person => {
      return person.id === id
        ? {
            ...person,
            thumbs_up: person.thumbs_up + 1,
            voted: true,
          }
        : person
    })
    setPeople(newPeople)
  }

  const thumbDown = id => {
    const newPeople = people.map(person => {
      return person.id === id
        ? {
            ...person,
            thumbs_down: person.thumbs_down + 1,
            voted: true,
          }
        : person
    })
    console.log(newPeople)
    setPeople(newPeople)
  }

  const voteAgain = id => {
    const newPeople = people.map(person => {
      return person.id === id
        ? {
            ...person,
            voted: false,
          }
        : person
    })
    setPeople(newPeople)
  }

  return (
    <div>
      <div className='navbar'>
        <NavBar
          loading={loading}
          person={people.find(p => p.is_banner)}
          currentPath={props.location.pathname}
          routes={routes}
          thumbUp={thumbUp}
          thumbDown={thumbDown}
          voteAgain={voteAgain}
        />
      </div>
      <div className='content'>
        <Switch>
          <Route
            exact
            path={'/'}
            render={props => (
              <MainPage
                {...props}
                loading={loading}
                people={people.filter(p => !p.is_banner)}
                thumbUp={thumbUp}
                thumbDown={thumbDown}
                voteAgain={voteAgain}
              />
            )}
          />
          <Route
            exact
            path={'/past-trials'}
            render={props => <PastTrialsPage {...props} />}
          />

          <Route
            exact
            path={'/how-it-works'}
            render={props => <HowItWorksPage {...props} />}
          />

          <Route
            exact
            path={'/sign-in-sign-up'}
            render={props => <SignPage {...props} />}
          />

        <Route
            exact
            path={'/search'}
            render={props => <SearchPage {...props} />}
          />

          <Redirect to={'/'} />
        </Switch>
      </div>
    </div>
  )
}
