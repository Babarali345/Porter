import React, { useEffect, useState, useContext } from "react";
import { COLORS, FONTFAMILY, FONTS, SIZES } from "../constants";
import { View, Text, Dimensions, Platform } from "react-native";
import { TabBar, TabBarItem } from "react-native-tab-view";
import { Icon } from "native-base";

const { width, height } = Dimensions.get("window");

export function ScrollTabBar2(props) {
  return (
    <TabBar
      {...props}
      scrollEnabled={false}
      pressOpacity={0.85}
      indicatorStyle={{
        backgroundColor: COLORS.primary.cherry,

        marginLeft: SIZES.ten * 2.5,
      }}
      style={{ backgroundColor: COLORS.normal.white }}
      pressColor={COLORS.primary.cherry}
      renderTabBarItem={(tabProps) => {
        return (
          <>
            {tabProps.key === "first" && (
              <View
                style={{
                  backgroundColor: COLORS.primary.cherry,
                  // position: "absolute",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: SIZES.ten,
                }}
              >
                <Icon
                  type={FONTFAMILY.FontAwesome5}
                  name="concierge-bell"
                  style={{ color: COLORS.normal.white }}
                />
              </View>
            )}
            <TabBarItem {...tabProps} />
          </>
        );
      }}
      activeColor={COLORS.primary.cherry}
      inactiveColor={COLORS.normal.brownGrey}
      labelStyle={FONTS.mediumFont14}
      renderLabel={({ route, focused, color }) => (
        <Text
          style={[
            {
              fontFamily: FONTFAMILY.Medium,
              fontSize: SIZES.body10,
              color: focused
                ? COLORS.primary.cherry
                : COLORS.normal.charcoalGrey,
              textTransform: "capitalize",
            },
          ]}
        >
          {route.title}
        </Text>
      )}
    />
  );
}
