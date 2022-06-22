import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
  STYLES,
  FONTS,
  COLORS,
  SIZES,
  FONTFAMILY,
  SCREENS,
} from '../../../constants';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomButton from '../../../components/CustomButton';
import Row from '../../../components/Row';
import MyTouchableOpacity from '../../../components/MyTouchableOpacity';

export default function Verification({navigation}) {
  const [code, setCode] = useState('');
  return (
    <View
      style={[
        {
          backgroundColor: COLORS.normal.white,
          flex: 1,
          paddingTop:
            Platform.OS === 'android'
              ? SIZES.twentyFive * 1.8
              : getStatusBarHeight(true) + 10,
          paddingHorizontal: SIZES.fifteen,
        },
      ]}>
      <Text
        style={[
          FONTS.boldFont24,
          {
            color: COLORS.primary.navy,
            textAlign: 'center',
            lineHeight: SIZES.twentyFive * 1.3,
          },
        ]}>
        We have sent an OTP to your Mobile
      </Text>

      <Text
        style={[
          FONTS.semiBoldFont16,
          {
            color: COLORS.normal.charcoalGrey,
            textAlign: 'center',
            lineHeight: SIZES.twentyFive,
            marginTop: SIZES.ten,
          },
        ]}>
        Please check your mobile number 071*****12 continue to reset your
        password
      </Text>
      <View
        style={{
          marginTop: SIZES.twentyFive * 1.5,
          paddingHorizontal: SIZES.twentyFive,
        }}>
        <OTPInputView
          style={{
            width: '100%',
            height: SIZES.twenty * 5,
          }}
          pinCount={4}
          code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={code => {
            setCode(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            // console.log(`Code is ${code}, you are good to go!`);
          }}
        />
      </View>

      <CustomButton
        label={'Next'}
        style={{marginTop: SIZES.twentyFive}}
        onPress={() => {
          navigation.navigate(SCREENS.NewPassword);
        }}
      />

      <Row
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: SIZES.twentyFive * 1.5,
        }}>
        <Text
          style={[
            FONTS.mediumFont12,
            {color: COLORS.normal.charcoalGrey, textAlign: 'center'},
          ]}>
          Didn't Recieve?
        </Text>
        <MyTouchableOpacity
        // onPress={() => props.navigation.navigate(SCREENS.SignUp)}
        >
          <Text
            style={[
              FONTS.mediumFont12,
              {color: COLORS.primary.cherry, textAlign: 'center'},
            ]}>
            {' '}
            Click here
          </Text>
        </MyTouchableOpacity>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  underlineStyleBase: {
    width: SIZES.fifty,
    height: SIZES.fifty,
    borderWidth: 2,
    borderRadius: SIZES.twentyFive,
    borderColor: COLORS.normal.brownGrey,
    fontSize: SIZES.twentyFive,
    color: COLORS.normal.black,
    fontFamily: FONTFAMILY.Light,
  },
  underlineStyleHighLighted: {
    width: SIZES.fifty,
    height: SIZES.fifty,
    borderWidth: 2,
    borderRadius: SIZES.twentyFive,
    borderColor: COLORS.primary.cherry,
    fontSize: SIZES.twentyFive,
    fontFamily: FONTFAMILY.Light,
  },
});
