import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { colors } from '../styles/theme'

interface Props {
  text: string
  active: boolean
  onPress: () => void
}
const Button = (props: Props) => {
  const { text, active, onPress } = props

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {active ? (
        <LinearGradient
          colors={[colors.primary, colors.secondary]}
          style={styles.linearGradient}
          start={{ y: 0.0, x: 0.0 }}
          end={{ y: 0.0, x: 1.0 }}>
          <Text style={styles.buttonText}>{text}</Text>
        </LinearGradient>
      ) : (
        <View style={styles.disableButton}>
          <Text style={styles.buttonTextDisable}>{text}</Text>
        </View>
      )}
    </TouchableOpacity>
  )
}
export default Button

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 56
  },
  linearGradient: {
    flex: 1,
    borderRadius: 28,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.white,
    alignSelf: 'center'
  },
  disableButton: {
    width: '100%',
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.gray,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonTextDisable: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.gray2
  }
})
