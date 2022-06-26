import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconBirthday from '../assets/icons/iconBirthday.svg'
import IconHome from '../assets/icons/iconHometown.svg'
import IconJob from '../assets/icons/iconJob.svg'
import IconLocation from '../assets/icons/iconLocation.svg'
import IconVerified from '../assets/icons/iconSelfieVerified.svg'
import { colors } from '../styles/theme'

interface Props {
  name: string
  isProfileVerified: boolean
  age?: string
  job?: string
  location?: string
  home?: string
}
const Info = (props: Props) => {
  const { name, isProfileVerified, age, job, location, home } = props
  return (
    <View>
      <View style={styles.nameContainer}>
        <Text style={styles.nameStyle}>{name}</Text>
        {isProfileVerified ? <IconVerified /> : null}
      </View>
      {age && (
        <View style={styles.row}>
          <IconBirthday />
          <Text style={styles.subTitle}>{`${age} years old`}</Text>
        </View>
      )}
      {job && (
        <View style={styles.row}>
          <IconJob />
          <Text style={styles.subTitle}>{job}</Text>
        </View>
      )}
      {location && (
        <View style={styles.row}>
          <IconLocation />
          <Text style={styles.subTitle}>{`Lives in ${location}`}</Text>
        </View>
      )}
      {home && (
        <View style={styles.row}>
          <IconHome />
          <Text style={styles.subTitle}>{home}</Text>
        </View>
      )}
    </View>
  )
}
Info.defaultProps = {
  age: '',
  job: '',
  location: '',
  home: ''
}
export default Info

const styles = StyleSheet.create({
  nameStyle: {
    fontSize: 28,
    fontWeight: '900',
    marginRight: 5,
    color: colors.black
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  subTitle: {
    fontSize: 16,
    marginVertical: 8,
    marginHorizontal: 8,
    color: colors.black
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row'
  }
})
