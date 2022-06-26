import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { colors } from '../styles/theme'

interface Props {
  isLoading: boolean
}
const Loader = (props: Props) => {
  const { isLoading } = props
  return <View style={styles.container}>{isLoading ? <ActivityIndicator size='large' color={colors.gray2} /> : null}</View>
}
export default Loader

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
