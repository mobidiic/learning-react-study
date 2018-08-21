import React from 'react'
import { render } from 'react-dom'

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './pages'

window.React = React

render(
  <HashRouter>
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Redirect from="/history" to="/about/history" />
        <Redirect from="/services" to="/about/services" />
        <Redirect from="/location" to="/about/location" />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} /> //위의 경로에 없을 때, Whoops404 컴포넌트를 렌더링한다.
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('react-container')
)
