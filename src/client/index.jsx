// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

const container = document.querySelector(APP_CONTAINER_SELECTOR)

if (container) {
  ReactDOM.render(<App />, container)
}
