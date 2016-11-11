import React, { Component } from 'react'

import { Router, Route, hashHistory } from 'react-router'

// 页面组件
import Index from '../components/index'
import Page1 from '../components/page1'
import Page2 from '../components/page2'

export default class Routes extends Component {
	render () {
		return 	<Router history={hashHistory}>
			<Route path="/" component={Index}>
				<Route path="/Page1" component={Page1} />
				<Route path="/Page2" component={Page2} />
			</Route>
		</Router>
	}

}
