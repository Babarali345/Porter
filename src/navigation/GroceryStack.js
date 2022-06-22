import React from "react";
import { COLORS, FONTFAMILY, FONTS, SCREENS, SIZES } from "../constants";
import BottomTab from "./BottomTab";

import { createStackNavigator } from "@react-navigation/stack";

export default function GroceryStack() {
  const GroceryStack = createStackNavigator();

  return (
    <GroceryStack.Navigator
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
      <GroceryStack.Screen
        name={SCREENS.BottomTab}
        component={BottomTab}
        options={{
          headerShown: false,
        }}
      />
    </GroceryStack.Navigator>
  );
}
