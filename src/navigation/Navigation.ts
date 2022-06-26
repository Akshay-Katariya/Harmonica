// eslint-disable-next-line no-unused-vars
import { NavigationContainerRef } from '@react-navigation/core'
import React from 'react'

export const navigationRef = React.createRef<NavigationContainerRef>()

export function navigate(name: string, params?: object) {
  navigationRef.current?.navigate(name, params)
}
export const resetNavigation = (routeName: string) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{ name: routeName }]
  })
}
export function goBack() {
  navigationRef.current?.goBack()
}

export default { goBack, navigate }
