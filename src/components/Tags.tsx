import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../styles/theme'
import getTagIcon from '../utils/IconUtil'

interface Props {
  text: string
  iconName: string
}
const Tags = (props: Props) => {
  const { iconName, text } = props
  return (
    <View style={styles.row}>
      {getTagIcon(iconName)}
      <Text style={styles.subTitle}>{text}</Text>
    </View>
  )
}
export default Tags

const styles = StyleSheet.create({
  subTitle: {
    marginVertical: 8,
    marginHorizontal: 8,
    color: colors.black
  },
  row: {
    borderWidth: 1,
    paddingHorizontal: 8,
    margin: 8,
    borderRadius: 20,
    borderColor: colors.gray2,
    alignItems: 'center',
    flexDirection: 'row'
  }
})
