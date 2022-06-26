import Mock from '../../utils/Mock'

export const ON_LOGIN = 'ON_LOGIN'

export type UserAction = {
  type: typeof ON_LOGIN
  payload: null
}

export const onLogin = {
  type: ON_LOGIN,
  payload: Mock.DATA
}

export type UserActions = UserAction
