import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import PhoneInput from 'react-native-phone-number-input'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../components/Button'
import { navigate } from '../navigation/Navigation'
import { colors, commonStyles } from '../styles/theme'

const OnboardingPhoneScreen = () => {
  const phoneInput = useRef<PhoneInput>(null)
  const [value, setValue] = useState<string>('')
  const [formattedValue, setFormattedValue] = useState<string>('')
  const [valid, setValid] = useState<boolean>(false)

  useEffect(() => {
    const checkValid = phoneInput.current?.isValidNumber(value)
    setValid(checkValid || false)
  }, [value])

  const sendCodeClickHandler = () => valid && navigate('OnboardingOtpScreen', { formattedValue })

  return (
    <SafeAreaView style={styles.container}>
      <Text style={commonStyles.title}>What`s your phone number?</Text>
      <PhoneInput
        containerStyle={styles.inputContainer}
        flagButtonStyle={styles.phoneInput}
        textContainerStyle={[styles.phoneInput, styles.textContainerStyle]}
        ref={phoneInput}
        defaultValue={value}
        defaultCode='EG'
        layout='first'
        onChangeText={setValue}
        onChangeFormattedText={setFormattedValue}
        autoFocus
      />
      <Button onPress={sendCodeClickHandler} text='Send Code' active={valid} />
    </SafeAreaView>
  )
}
export default OnboardingPhoneScreen

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    backgroundColor: colors.white,
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold'
  },
  phoneInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  textContainerStyle: {
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  inputContainer: {
    alignSelf: 'center'
  }
})
