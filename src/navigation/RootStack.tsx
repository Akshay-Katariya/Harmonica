import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Header from '../components/Header'
import HomeScreen from '../screens/HomeScreen'
import OnboardingOtpScreen from '../screens/OnboardingOtpScreen'
import OnboardingPhoneScreen from '../screens/OnboardingPhoneScreen'

const StackRoot = createStackNavigator()
const StackHome = createStackNavigator()

const RootStack = () => {
  return (
    <StackRoot.Navigator headerMode='none'>
      <StackRoot.Screen name='OnboardingPhoneScreen' component={OnboardingPhoneScreen} />
      <StackRoot.Screen name='OnboardingOtpScreen' component={OnboardingOtpScreen} />
      <StackRoot.Screen name='HomeScreen' component={HomeStack} />
    </StackRoot.Navigator>
  )
}

const HomeStack = () => {
  return (
    <StackHome.Navigator screenOptions={{ header: () => <Header /> }}>
      <StackHome.Screen name='HomeScreen' component={HomeScreen} />
    </StackHome.Navigator>
  )
}

export { RootStack, HomeScreen }
