import { Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS, FONTFAMILY, FONTS, SIZES } from "../constants";
import Card from "./Card";
import MyTouchableOpacity from "./MyTouchableOpacity";
import Row from "./Row";

export default function SearchBar(props) {
  return (
    <MyTouchableOpacity
      style={[
        props.style,
        {
          paddingHorizontal: SIZES.fifteen,
          paddingVertical: SIZES.five,
          borderWidth: 1,
          borderColor: `${COLORS.normal.charcoalGrey}30`,
          borderRadius: SIZES.twenty * 1.5,
          backgroundColor: COLORS.normal.white,
        },
      ]}
      activeOpacity={0.9}
      onPress={props.onPress}
    >
      <Row style={{ alignItems: "center" }}>
        <Icon
          name={"search1"}
          type={FONTFAMILY.AntDesign}
          style={{
            fontSize: SIZES.twentyWidth * 1.05,
            color: COLORS.primary.cherry,
          }}
        />
        <TextInput
          {...props}
          placeholder={"Search"}
          placeholderTextColor={COLORS.primary.cherry}
          selectionColor={COLORS.primary.cherry}
          style={[
            {
              color: COLORS.normal.black,
              flex: 1,
              height: 40,
              fontFamily: FONTFAMILY.Medium,
              padding: SIZES.five,
              marginLeft: SIZES.ten,
            },
          ]}
        />
        {/* <MyTouchableOpacity onPress={props.onFilterPress}>
            <Icon
              name={'options-outline'}
              type={FONTFAMILY.Ionicons}
              style={{fontSize: SIZES.twentyWidth * 1.05}}
            />
          </MyTouchableOpacity> */}
      </Row>
    </MyTouchableOpacity>
  );
}

const styles = StyleSheet.create({});
