import React, { useState } from "react";
import { Icon } from "native-base";
import { StyleSheet, View } from "react-native";
import MyTouchableOpacity from "./MyTouchableOpacity";
import { COLORS, FONTFAMILY, SIZES, width } from "../constants";
import { useNavigation } from "@react-navigation/native";

export default function BackArrow({ style, isBright, arrowColor }) {
  const navigation = useNavigation();

  return (
    <View
      style={[
        style,
        {
          // borderColor: props.isBright ? COLORS.secondary : COLORS.black,
          // borderWidth: 1,
        },
      ]}
    >
      <MyTouchableOpacity
        style={{
          backgroundColor: isBright ? COLORS.normal.white : COLORS.transparent,
          alignSelf: "baseline",
          borderRadius: SIZES.fifty,
          padding: SIZES.five,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Icon
          type={FONTFAMILY.Ionicons}
          name={"chevron-back"}
          style={{
            fontSize: SIZES.twenty * 1.2,
            color: isBright
              ? COLORS.primary.cherry
              : COLORS.normal.black || arrowColor
              ? arrowColor
              : COLORS.normal.black,
          }}
        />
      </MyTouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  circularBG: {
    height: SIZES.fifty * 0.7,
    width: SIZES.fifty * 0.7,
    borderRadius: SIZES.fifty,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
});
