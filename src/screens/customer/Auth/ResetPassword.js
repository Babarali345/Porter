import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import CustomButton from '../../../components/CustomButton';
import EditText from '../../../components/EditText';
import {COLORS, FONTFAMILY, FONTS, SCREENS, SIZES} from '../../../constants';

export default function ResetPassword({navigation}) {
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
      {/* ======================== HEADER HERE ======================== */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={[FONTS.boldFont22, {color: COLORS.primary.navy}]}>
          Reset Password
        </Text>

        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.normal.charcoalGrey,
              marginTop: SIZES.ten,
              textAlign: 'center',
              lineHeight: SIZES.twentyFive,
            },
          ]}>
          Please enter your email to receive a link to create a new password via
          email
        </Text>
      </View>

      <View style={{marginTop: SIZES.twentyFive * 2}}>
        <EditText placeholder=" Email" />
      </View>
      <CustomButton
        label={'Send'}
        style={{
          marginTop: SIZES.twentyFive * 2,
        }}
        onPress={() => {
          navigation.navigate(SCREENS.OtpVerification);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
