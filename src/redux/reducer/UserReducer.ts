import { UserModel } from '../../model/UserModel'
import { ON_LOGIN, UserActions } from '../actions/UserActions'

const initialUser = {
  name: '',
  age: '',
  job: '',
  location: '',
  home: '',
  bio: '',
  about: []
}

interface InitialState {
  user: UserModel
}

const initialState: InitialState = {
  user: initialUser
}

export const UserReducer = (state = initialState, action: UserActions) => {
  switch (action.type) {
    case ON_LOGIN: {
      return {
        ...state,
        user: action.payload
      }
    }
    default: {
      return state
    }
  }
}
