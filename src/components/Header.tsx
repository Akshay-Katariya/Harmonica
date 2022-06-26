import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import IconRight from '../assets/icons/iconMore.svg'
import IconLeft from '../assets/icons/iconPreferences.svg'
import { colors, sizes } from '../styles/theme'

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <IconLeft />
      <IconRight />
    </SafeAreaView>
  )
}
export default Header

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.gray,
    paddingHorizontal: sizes.padding
  }
})
