import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from '../data/recipes'


window.React = react

render(
  <Menu recipes={data} />,
  document.getElementById("react-container")
)
