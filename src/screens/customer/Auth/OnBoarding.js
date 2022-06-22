import React, { useCallback } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import Page, { PAGES, PAGE_WIDTH } from "../../../components/Page";
// import {AntDesign} from '@expo/vector-icons';
import OnBoardingDots from "../../../components/OnBoardingDot";
import { Icon } from "native-base";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import { COLORS, SCREENS, SIZES } from "../../../constants";
import { CommonActions } from "@react-navigation/native";

export const BACKGROUND_COLOR = "#F1F1F1";

export default function OnBoarding(props) {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      translateX.value = event.contentOffset.x;
    },
  });

  const activeIndex = useDerivedValue(() => {
    // console.log(
    //   'Math.round(translateX.value / PAGE_WIDTH) ========>>>>',
    //   Math.round(translateX.value / PAGE_WIDTH),
    // );
    return Math.round(translateX.value / PAGE_WIDTH);
  });

  const scrollRef = useAnimatedRef();

  const onIconPress = useCallback(() => {
    if (activeIndex.value === PAGES.length - 1) {
      props.navigation.dispatch(
        CommonActions.reset({
          routes: [
            {
              name: SCREENS.Home,
            },
          ],
        })
      );
    } else {
      scrollRef.current?.scrollTo({ x: PAGE_WIDTH * (activeIndex.value + 1) });
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.normal.white}
      />
      <Animated.ScrollView
        ref={scrollRef}
        style={{ flex: 1 }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        {PAGES.map((page, index) => (
          <Page
            key={index.toString()}
            page={page}
            translateX={translateX}
            index={index}
          />
        ))}
      </Animated.ScrollView>
      <View style={styles.footer}>
        {/* Paginator */}
        <View style={[styles.fillCenter, { flexDirection: "row" }]}>
          {PAGES.map((_, index) => {
            console.log("iiiiiiiiiiiii ======= >>>>>>> ", _);
            return (
              <OnBoardingDots
                key={index.toString()}
                index={index}
                activeDotIndex={activeIndex}
              />
            );
          })}
        </View>
        {/* Text Container */}
        <View style={styles.fillCenter}>
          {/* <Text style={styles.text}></Text> */}
        </View>
        {/* iconContainer */}
        <MyTouchableOpacity style={[styles.fillCenter]} onPress={onIconPress}>
          {/* <AntDesign
            name="arrowright"
            size={24}
            color="black"
            onPress={onIconPress}
          /> */}
          <Icon
            name="arrowright"
            type="AntDesign"
            style={{
              fontSize: SIZES.twentyFive * 2,
              color: COLORS.primary.navy,
            }}
          />
        </MyTouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
  },
  footer: {
    height: 50,
    marginBottom: SIZES.twentyFive * 1.6,
    flexDirection: "row",
    alignItems: "center",
  },
  fillCenter: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    textTransform: "uppercase",
    letterSpacing: 1.7,
    fontWeight: "500",
  },
});
