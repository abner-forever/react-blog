import { combineReducers } from 'redux'
import todos from './reducers/todos'
import visibilityFilter from './reducers/visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp