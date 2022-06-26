import { combineReducers } from 'redux'
import { UserReducer } from './UserReducer'

const rootReducer = combineReducers({
  UserReducer
  // some more reducer will come here
})

export default rootReducer

export type ApplicationState = ReturnType<typeof rootReducer>
