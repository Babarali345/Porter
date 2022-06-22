import { Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../constants";
import BackArrow from "./BackArrow";
import MyTouchableOpacity from "./MyTouchableOpacity";
import { useNavigation } from "@react-navigation/native";

export default function CartHeader({
  tittle,
  userName,
  isBackArrow,
  noCart,
  style,
}) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        style,
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
      ]}
    >
      {tittle && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {isBackArrow && <BackArrow />}
            <Text
              style={[FONTS.semiBoldFont20, { color: COLORS.normal.black }]}
            >
              {tittle}
            </Text>
          </View>
        </View>
      )}

      {userName && (
        <TouchableOpacity
          style={{ flexDirection: "row", flex: 0.8, alignItems: "center" }}
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate(SCREENS.Profle);
          }}
        >
          <View
            style={[
              STYLES.shadow,
              {
                borderRadius: SIZES.twenty * 3,
                borderColor: COLORS.primary.cherry,
                borderWidth: 1,
                elevation: 10,
              },
            ]}
          >
            <Image
              style={[
                {
                  height: SIZES.twenty * 2.5,
                  width: SIZES.twenty * 2.5,
                },
              ]}
              source={IMAGES.user1}
            />
          </View>
          <View style={{ marginStart: SIZES.ten }}>
            <Text style={[FONTS.mediumFont14]}>Good Morning , {userName}!</Text>
            <Text
              style={[
                FONTS.regularFont10,
                { color: COLORS.normal.charcoalGrey, marginTop: SIZES.five },
              ]}
            >
              Night-owl, huh? there are many restaurants in your area
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {!noCart && (
        <MyTouchableOpacity
          onPress={() => {
            navigation.navigate(SCREENS.MyCart);
          }}
        >
          <Icon
            name={"ios-cart"}
            type={FONTFAMILY.Ionicons}
            style={{
              fontSize: SIZES.fifteen * 2,
              color: COLORS.primary.cherry,
              marginLeft: SIZES.five * 0.25,
            }}
          />
        </MyTouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  style: {
    backgroundColor: "red",
  },
});
