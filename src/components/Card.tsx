import React from 'react'
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native'
import IconHeart from '../assets/icons/iconHeart.svg'
import { colors, sizes } from '../styles/theme'

interface Props {
  children: React.ReactNode[] | React.ReactNode
  style?: ViewStyle
  onHeartPress?: () => void
}

const Card = (props: Props) => {
  const { children, onHeartPress, style } = props
  return (
    <View style={[styles.container, style]}>
      {children}
      <TouchableOpacity activeOpacity={0.8} style={styles.heartContainer} onPress={onHeartPress}>
        <View style={styles.circle}>
          <IconHeart />
        </View>
      </TouchableOpacity>
    </View>
  )
}

Card.defaultProps = {
  style: {},
  onHeartPress: () => {}
}

export default Card

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 156,
    backgroundColor: colors.white,
    borderRadius: sizes.radius
  },
  heartContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8
  },
  circle: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 48 / 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
})
