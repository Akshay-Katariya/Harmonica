import React, { useEffect } from 'react'
import { Image, LogBox, ScrollView, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Info from '../components/Info'
import Tags from '../components/Tags'
import { ApplicationState } from '../redux'
import { colors, sizes } from '../styles/theme'

const PROFILE_PIC = require('../assets/images/profilePic.jpg')

const HomeScreen = () => {
  const { user } = useSelector((state: ApplicationState) => state.UserReducer)
  const { name, age, job, location, home, bio, about } = user

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested'])
  }, [])

  return (
    <ScrollView style={styles.scrollViewStyle} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Card style={styles.picCardStyle}>
          <Image resizeMode='cover' style={styles.imageStyle} source={PROFILE_PIC} />
        </Card>
        <Info isProfileVerified name={name} age={age} job={job} location={location} home={home} />
        <Card style={styles.cardStyle}>
          <View style={styles.cardContainerStyle}>
            <Text style={styles.bioStyle}>{bio}</Text>
          </View>
        </Card>
        <Card style={styles.cardStyle}>
          <View style={styles.cardContainerStyle}>
            <Text style={styles.aboutStyle}>About</Text>
            <FlatList
              numColumns={2}
              columnWrapperStyle={styles.tagStyle}
              data={about}
              renderItem={({ item }) => <Tags iconName={item.iconName} text={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
        </Card>
      </View>
    </ScrollView>
  )
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: sizes.padding,
    backgroundColor: colors.gray
  },
  picCardStyle: {
    marginBottom: 12
  },
  scrollViewStyle: {
    flex: 1,
    backgroundColor: colors.gray
  },
  cardContainerStyle: {
    marginVertical: 24,
    marginHorizontal: 20
  },
  imageStyle: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: sizes.radius
  },
  bioStyle: {
    fontSize: 16
  },
  tagStyle: {
    flexWrap: 'wrap'
  },
  aboutStyle: {
    fontSize: 16,
    fontWeight: '900',
    alignSelf: 'center',
    marginBottom: 12
  },
  cardStyle: {
    marginTop: 20
  }
})
