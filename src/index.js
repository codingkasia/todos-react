import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Goals from './components/Goals'
import ThingsToKnow from './components/ThingsToKnow'
import NotFound from './components/NotFound'
import Reservation from './components/Reservation'

// import * as serviceWorker from './serviceWorker'
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/goals'>Goals</Link>
        </li>
        <li>
          <Link to='/thingstoknow'>ThingsToKnow</Link>
        </li>
        <li>
          <Link to='/reservation'>Reservation</Link>
        </li>

      </ul>
      <Switch>
        <Route exact='/' component={App} />
        <Route path='/goals' component={Goals} />
        <Route path='/thingstoknow' component={ThingsToKnow} />
        <Route path='/reservation' component={Reservation} />
        <Route component={NotFound} />

      </Switch>

    </div>
  </Router>
)

ReactDOM.render(
//   <App />, document.getElementById('root'))
  routing, document.getElementById('root'))
