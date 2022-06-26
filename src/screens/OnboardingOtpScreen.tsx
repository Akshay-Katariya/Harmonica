import { RouteProp } from '@react-navigation/core'
import React, { useState } from 'react'
import { Alert, StyleSheet, Text } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import Loader from '../components/Loader'
import { resetNavigation } from '../navigation/Navigation'
import { onLogin } from '../redux'
import { colors, commonStyles, sizes } from '../styles/theme'

interface NavigationParams {
  formattedValue: string
}
interface Props {
  route: RouteProp<Record<string, NavigationParams>, 'RouteParam'>
}

const OnboardingOtpScreen = (props: Props) => {
  const dispatch = useDispatch()

  const OTP_LENGTH = 4
  const { route } = props
  const [, setOtp] = useState<string>('')
  const [showLoader, setShowLoader] = useState<boolean>(false)
  const otpHandler = (code: string) => {
    if (code.length === OTP_LENGTH) {
      setOtp(code)
      setShowLoader(true)
      setTimeout(() => {
        // send otp to server validate and navigate to HomePage
        dispatch(onLogin)
        setShowLoader(false)
        resetNavigation('HomeScreen')
      }, 3000)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Loader isLoading={showLoader} />
      <Text style={commonStyles.title}>What’s the verification code</Text>
      <Text style={styles.phoneNumberStyle}>{`Code sent to ${route.params.formattedValue}`}</Text>
      <Text onPress={() => Alert.alert('Call resend code API')} style={styles.resendStyle}>
        Resend code
      </Text>
      <OtpInputs
        keyboardType='phone-pad'
        autofillFromClipboard={false}
        handleChange={otpHandler}
        numberOfInputs={OTP_LENGTH}
        inputStyles={styles.otpInputStyle}
        style={styles.otpContainerStyle}
        secureTextEntry
      />
    </SafeAreaView>
  )
}
export default OnboardingOtpScreen

const styles = StyleSheet.create({
  container: {
    ...commonStyles.container,
    backgroundColor: colors.white
  },
  phoneNumberStyle: {
    marginTop: sizes.margin,
    fontSize: 16,
    color: colors.gray2,
    fontWeight: '700'
  },
  resendStyle: {
    marginTop: sizes.margin,
    fontSize: 14,
    color: colors.primary,
    fontWeight: '700'
  },
  otpInputStyle: {
    borderColor: colors.gray2,
    borderBottomWidth: 1,
    borderRadius: 5,
    margin: 10,
    width: 50,
    textAlign: 'center',
    fontSize: 22
  },
  otpContainerStyle: {
    marginTop: 150,
    alignSelf: 'center',
    flexDirection: 'row'
  }
})
