import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';

import {
  STYLES,
  COLORS,
  FONTS,
  SIZES,
  FONTFAMILY,
  SCREENS,
} from './../../../constants/theme';

import EditText from '../../../components/EditText';
import {Icon} from 'native-base';
import CustomButton from '../../../components/CustomButton';
import MyTouchableOpacity from '../../../components/MyTouchableOpacity';
import Row from '../../../components/Row';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default function SignUp({navigation}) {
  const [isCountryCodePickerVisible, setisCountryCodePickerVisible] =
    useState(false);
  const [countryCode, setCountryCode] = useState('1');
  const [countryFlag, setcountryFlag] = useState('US');

  const toggleIsCountryCodePickerVisible = () => {
    setisCountryCodePickerVisible(!isCountryCodePickerVisible);
  };

  const onSelect = country => {
    setCountryCode(country.callingCode[0]);
    setcountryFlag(country.cca2);
  };

  const [borderColor, setBorderColor] = useState(COLORS.normal.charcoalGrey);
  return (
    <ScrollView
      style={[
        {
          backgroundColor: COLORS.normal.white,
          flex: 1,
          paddingTop:
            Platform.OS === 'android'
              ? SIZES.twentyFive * 1.8
              : getStatusBarHeight(true),
        },
      ]}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingBottom: SIZES.twenty * 4,
        paddingHorizontal: SIZES.fifteen,
      }}>
      {/* ======================== HEADER HERE ======================== */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={[FONTS.boldFont22, {color: COLORS.primary.navy}]}>
            Sign Up
          </Text>

          <Text
            style={[
              FONTS.mediumFont14,
              {color: COLORS.normal.charcoalGrey, marginTop: SIZES.ten},
            ]}>
            Add your details to login
          </Text>
        </View>
        <MyTouchableOpacity>
          <Text
            style={[
              FONTS.mediumFont14,
              {color: COLORS.primary.cherry, marginTop: SIZES.ten},
            ]}>
            Register Your Resturant
          </Text>
        </MyTouchableOpacity>
      </View>

      {/* ======================== TEXTINPUTS HERE ======================== */}

      <View style={{marginTop: SIZES.twentyFive}}>
        <EditText placeholder="Name" />
      </View>

      <View style={{marginTop: SIZES.twentyFive}}>
        <EditText placeholder="Email" />
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          height: 60,
          borderRadius: SIZES.fifty,
          borderWidth: 1,
          borderColor: borderColor,
          justifyContent: 'space-between',
          marginTop: SIZES.fifteen * 1.3,
        }}
        activeOpacity={1}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => toggleIsCountryCodePickerVisible()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: SIZES.fifteen,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CountryPicker
              onSelect={onSelect}
              countryCode={countryFlag}
              visible={isCountryCodePickerVisible}
              withCallingCode
              theme={{
                fontFamily: FONTFAMILY.Medium,
                resizeMode: 'contain',
              }}
            />
            <Text style={[FONTS.mediumFont14, {color: COLORS.BLACK}]}>
              +{countryCode}
            </Text>
            <Icon
              type={FONTFAMILY.Ionicons}
              name={'chevron-down'}
              style={{
                color: COLORS.normal.black,
                fontSize: 20,
                marginLeft: SIZES.five,
              }}
            />
          </View>
        </TouchableOpacity>
        <TextInput
          selectionColor={COLORS.primary1}
          placeholderTextColor={COLORS.blackWithOpacity}
          placeholder="Enter Phone Number"
          style={[
            FONTS.mediumFont14,
            {
              flex: 1,
              color: COLORS.normal.black,
            },
          ]}
          onFocus={() => {
            setBorderColor(COLORS.primary.cherry);
          }}
          onBlur={() => {
            setBorderColor(COLORS.normal.charcoalGrey);
          }}
        />
      </View>

      <View style={{marginTop: SIZES.twentyFive}}>
        <EditText placeholder="Address" />
      </View>

      <View style={{marginTop: SIZES.twentyFive}}>
        <EditText placeholder="password" />
      </View>

      <View style={{marginTop: SIZES.twentyFive}}>
        <EditText placeholder="Confirm Password" />
      </View>

      <CustomButton
        label={'Sign Up'}
        style={{marginTop: SIZES.twentyFive}}
        onPress={() => {
          navigation.navigate(SCREENS.StartUpLocation);
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
          Already have an Account?
        </Text>
        <MyTouchableOpacity onPress={() => navigation.navigate(SCREENS.Login)}>
          <Text
            style={[
              FONTS.mediumFont12,
              {color: COLORS.primary.cherry, textAlign: 'center'},
            ]}>
            {' '}
            Log In
          </Text>
        </MyTouchableOpacity>
      </Row>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
