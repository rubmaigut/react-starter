import React from 'react'
import { Provider } from 'react-redux'
import {combineReducers, configureStore } from '@reduxjs/toolkit'

import artists from './reducer/artists'

import Container from './component/Container'

const reducer = combineReducers({
  artists: artists.reducer
})

const store = configureStore({reducer})

export const App = () => {
  return (
    <Provider store={store}>
      <Container/>
    </Provider>
     
  )
}
