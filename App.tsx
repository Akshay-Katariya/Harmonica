import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { navigationRef } from './src/navigation/Navigation'
import { RootStack } from './src/navigation/RootStack'
import { store } from './src/redux'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  )
}
export default App
