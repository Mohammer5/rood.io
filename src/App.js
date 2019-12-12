import "./App.scss"

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import React from 'react'

import { Presentation } from './views/Presentation';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Presentation} />
      </Switch>
    </BrowserRouter>
  )
}
