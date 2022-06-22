import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { CommonActions } from "@react-navigation/native";
import ButtonRadius10 from "../../../components/CustomButton";
import EditText from "../../../components/EditText";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import Row from "../../../components/Row";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../../constants";
import SocialButton from "../../../components/SocialButton";
import CustomButton from "../../../components/CustomButton";
import { getStatusBarHeight } from "react-native-status-bar-height";

export default function Login(props) {
  return (
    <ScrollView
      style={[
        {
          backgroundColor: COLORS.normal.white,
          flex: 1,
          paddingTop:
            Platform.OS === "android"
              ? SIZES.twentyFive * 1.8
              : getStatusBarHeight(true) + 10,
        },
      ]}
      contentContainerStyle={{
        paddingBottom: SIZES.twenty * 2,
        paddingHorizontal: SIZES.fifteen,
      }}
    >
      {/* <StatusBar
        hidden={false}
        barStyle={"dark-content"}
        backgroundColor={COLORS.normal.white}
      /> */}

      {/* ======================== HEADER HERE ======================== */}
      <View
        style={
          {
            // justifyContent: 'center',
            // alignItems: 'center',
          }
        }
      >
        <Text style={[FONTS.boldFont22, { color: COLORS.primary.navy }]}>
          Login
        </Text>

        <Text
          style={[
            FONTS.mediumFont14,
            { color: COLORS.normal.charcoalGrey, marginTop: SIZES.ten },
          ]}
        >
          Add your details to login
        </Text>
      </View>

      {/* ======================== TEXTINPUTS HERE ======================== */}
      <View style={{}}>
        <View style={{ marginTop: SIZES.twentyFive }}>
          <EditText
            placeholder="Enter Email"
            hasIcon
            name="mail"
            type={FONTFAMILY.AntDesign}
          />
        </View>
        <View style={{ marginTop: SIZES.fifteen }}>
          <EditText
            placeholder="Enter password"
            password
            hasIcon
            name="lock-open"
            type={FONTFAMILY.SimpleLineIcons}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          style={{ alignSelf: "center" }}
          onPress={() => props.navigation.navigate(SCREENS.ResetPassword)}
        >
          <Text
            style={[
              FONTS.mediumFont14,
              { color: COLORS.primary.navy, marginVertical: SIZES.twenty },
            ]}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      {/* ======================== BUTTONS HERE ======================== */}
      <View style={{}}>
        <CustomButton
          label={"Login In"}
          style={{ marginTop: SIZES.ten }}
          onPress={() =>
            props.navigation.dispatch(
              CommonActions.reset({
                routes: [
                  {
                    name: SCREENS.Home,
                  },
                ],
              })
            )
          }
        />
        <MyTouchableOpacity
        // onPress={() => props.navigation.navigate(SCREENS.SignUp)}
        >
          <Row
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: SIZES.twentyFive * 1.5,
            }}
          >
            <Text
              style={[
                FONTS.mediumFont12,
                { color: COLORS.brownGrey, textAlign: "center" },
              ]}
            >
              or Continue with
            </Text>
          </Row>
        </MyTouchableOpacity>

        <SocialButton
          label={"Continue with Facebook"}
          iconType={FONTFAMILY.FontAwesome}
          iconName={"facebook"}
          bgColor={"#0037c1"}
          style={{ marginVertical: SIZES.twenty, color: COLORS.normal.white }}
        />
        <SocialButton
          iconType={FONTFAMILY.Ionicons}
          label={"Continue with Google"}
          iconName={"ios-logo-google"}
          iconType={FONTFAMILY.Ionicons}
          bgColor={"#eb4335"}
          style={{ marginVertical: SIZES.five }}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: SIZES.twenty,
        }}
      >
        <Text style={[FONTS.mediumFont16]}>Don't Have Account </Text>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            props.navigation.navigate(SCREENS.SignUp);
          }}
        >
          <Text style={[FONTS.mediumFont16, { color: COLORS.primary.cherry }]}>
            SignUp
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
