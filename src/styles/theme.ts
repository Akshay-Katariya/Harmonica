import { StyleSheet } from 'react-native'

const colors = {
  primary: '#00DEEB',
  secondary: '#00EAAE',
  black: '#262626',
  white: '#FFFFFF',
  gray: '#E7E7E7',
  gray2: '#888888'
}

const sizes = {
  // global sizes
  font: 14,
  radius: 16,
  padding: 24,
  margin: 20,

  // font sizes
  title: 18,
  header: 28,
  body: 14,
  caption: 12
}

const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding
  },
  title: {
    fontSize: sizes.header,
    fontWeight: 'bold'
  }
})

export { colors, sizes, commonStyles }
