import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import AddTask from './components/AddTask'

let store = createStore(todoApp);

// const Root = ({ store }) => (
// 	<Provider store={store}>
// 		<Router history={hashHistory}>		
// 			<Route name="Timesheet" path="/" component={App}>
// 				<IndexRoute component={App} />
// 				<Route name="Add Task" path="add-task" component={AddTask} />
// 			</Route>
// 		</Router>
// 	</Provider>
// );

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>		
			<Route name="Timesheet" path="/" component={App}>
				<IndexRoute component={App} />
				<Route name="Add Task" path="add-task" component={AddTask} />
			</Route>
		</Router>
	</Provider>
	, document.getElementById('root'));
