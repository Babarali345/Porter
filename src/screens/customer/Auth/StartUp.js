import React from "react";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  COLORS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../../constants";
import CustomButton from "../../../components/CustomButton";

export default function Startup({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.normal.white }}>
      <View style={{ flex: 1 }}>
        {/* <StatusBar
          barStyle={"light-content"}
          translucent
          backgroundColor={COLORS.normal.transparent}
        /> */}
        <ImageBackground
          style={{
            flex: 0.8,
            backgroundColor: COLORS.primary.cherry,
            alignItems: "center",
            justifyContent: "flex-end",
            borderBottomLeftRadius: SIZES.twenty,
            borderBottomRightRadius: SIZES.twenty,
          }}
          source={IMAGES.backgroundObject}
          imageStyle={
            {
              // borderBottomLeftRadius: SIZES.twenty,
              // borderBottomRightRadius: SIZES.twenty,
            }
          }
        >
          <View
            style={{
              height: SIZES.twenty * 4,
              width: SIZES.twenty * 8,
              borderTopLeftRadius: SIZES.twenty * 10,
              borderTopRightRadius: SIZES.twenty * 10,
              borderBottomtRadius: SIZES.ten * 3,
              borderBottomRadius: SIZES.ten * 3,

              backgroundColor: COLORS.normal.white,
            }}
          ></View>
        </ImageBackground>
        <View style={{ paddingHorizontal: SIZES.fifteen }}>
          <Image
            style={{
              height: SIZES.twenty * 9,
              width: SIZES.twenty * 9,
              bottom: SIZES.twenty,
              alignSelf: "center",
            }}
            source={IMAGES.PorterMainLogo}
            resizeMode="contain"
          />

          <Text
            style={[
              FONTS.mediumFont14,
              {
                textAlign: "center",
                color: COLORS.normal.charcoalGrey,
                lineHeight: SIZES.twenty,
              },
            ]}
          >
            Discover the best foods from over 1,000 restaurants and fast
            delivery to your doorstep
          </Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.3,

          justifyContent: "space-evenly",
          paddingHorizontal: SIZES.twenty,
        }}
      >
        <CustomButton
          label="login"
          onPress={() => {
            navigation.navigate(SCREENS.Login);
          }}
        />
        <CustomButton
          label="Create an Account"
          style={styles.customBtnStyle}
          lableColor={COLORS.primary.cherry}
          onPress={() => {
            navigation.navigate(SCREENS.SignUp);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
  },
  customBtnStyle: {
    backgroundColor: COLORS.normal.white,
    borderColor: COLORS.primary.cherry,

    borderWidth: 1,
  },
});
