import React from "react";
import { COLORS, FONTFAMILY, FONTS, SCREENS, SIZES } from "../constants";

import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import HomeCategory from "../screens/customer/Home/HomeCategory";

export default function DelieveryStack() {
  const DelieveryStack = createStackNavigator();

  return (
    <DelieveryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary.navy,
        },
        headerTitleStyle: {
          color: COLORS.normal.white,
          fontFamily: FONTFAMILY.Medium,
          fontSize: SIZES.body18,
          marginLeft: -SIZES.twentyFive,
        },
        headerTitleAlign: "left",
      }}
      initialRouteName={SCREENS.Startup}
    >
      <DelieveryStack.Screen
        name={SCREENS.BottomTab}
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </DelieveryStack.Navigator>
  );
}
