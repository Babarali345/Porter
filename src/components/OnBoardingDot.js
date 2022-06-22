import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { COLORS, SIZES } from "../constants";

const OnBoardingDot = ({ activeDotIndex, index }) => {
  console.log("activeDotIndex==========>>>>>>", activeDotIndex);
  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeDotIndex.value === index;

    console.log("isActive======>>>>>", index, isActive);
    return {
      backgroundColor: withTiming(
        isActive ? COLORS.normal.black : COLORS.normal.white,
        {
          duration: SIZES.fifty * 2.5,
        }
      ),
    };
  });

  return <Animated.View style={[styles.dot, rDotStyle]} />;
};

const styles = StyleSheet.create({
  dot: {
    width: SIZES.twenty,
    height: SIZES.twenty,
    marginHorizontal: SIZES.five,
    borderRadius: SIZES.ten,
    borderWidth: 1,
  },
});

export default OnBoardingDot;
