import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import tasks from './tasks';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  tasks
})

export default todoApp