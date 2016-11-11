require('./style.scss');
import React, {Component} from 'react'
import { render } from 'react-dom'
import Routes from './routes/index'
render(
  <Routes />,
  document.getElementById('app')
);