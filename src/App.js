import "./App.scss"

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import React from 'react'

import { Presentation } from './views/Presentation';
import { configureStore } from './redux/configureStore';

const store = configureStore()

export default () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Presentation} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
