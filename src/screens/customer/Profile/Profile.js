import { Icon } from "native-base";
import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { getStatusBarHeight } from "react-native-status-bar-height";
import CircularImage from "../../../components/CircularImage";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import Row from "../../../components/Row";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../../constants";

import ProfilehHeader from "../../../components/ProfileHeader";
export default function Profile({ navigation }) {
  const RenderProfileItems = ({ label, info }) => {
    return (
      <View
        style={{
          marginTop: SIZES.twenty,
        }}
      >
        <Text
          style={[
            FONTS.lightFont14,
            { color: COLORS.primary.cherry, marginBottom: SIZES.ten },
          ]}
        >
          {label}
        </Text>
        <Text
          style={[
            FONTS.mediumFont14,
            {
              color: COLORS.normal.black,
              marginTop: SIZES.five,
              marginBottom: SIZES.five,
            },
          ]}
        >
          {info}
        </Text>
        <View style={[STYLES.horLine, {}]} />
      </View>
    );
  };
  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}>
      {/* <StatusBar
        backgroundColor={COLORS.primary.navy}
        barStyle={'light-content'}
      /> */}
      <ProfilehHeader
        title={"Profile"}
        onEditeIconPressed={() => {
          navigation.navigate(SCREENS.EditProfile, {
            profileData: profileData,
          });
        }}
      />

      <View style={{ alignItems: "center" }}>
        <View>
          <CircularImage
            uri={
              "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
            imageStyle={{
              height: SIZES.twentyFive * 4,
              width: SIZES.twentyFive * 4,
              borderRadius: SIZES.twentyFive * 4,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <RenderProfileItems label={"Name"} info={profileData.Name} />
        <RenderProfileItems label={"Email"} info={profileData.Email} />
        <RenderProfileItems label={"Phone"} info={profileData.Phone} />
        <RenderProfileItems label={"Address"} info={profileData.Address} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});

const profileData = {
  Name: "Emilia Clarke",
  Email: "Rober.downy189@gmail.com",
  Phone: "+1(92) 935 354 314",
  Address: "New York, USA",
};
