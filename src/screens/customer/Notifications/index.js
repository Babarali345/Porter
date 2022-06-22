import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Icon } from "native-base";

import Row from "../../../components/Row";
import CircularImage from "../../../components/CircularImage";
import { COLORS, FONTFAMILY, FONTS, SIZES, STYLES } from "../../../constants";
import CartHeader from "../../../components/CartHeader";

export default function Notifications() {
  const [notifications, setNotifications] = useState(DATA);

  const renderNotificationsItem = ({ item }) => {
    return (
      <View
        style={{
          // alignItems: 'center',
          // backgroundColor: 'red',
          marginTop: SIZES.ten,
          paddingVertical: SIZES.ten,
        }}
      >
        <View
          style={{
            flex: 1,
            marginHorizontal: SIZES.ten,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: SIZES.ten * 1.3,
              width: SIZES.ten * 1.3,
              borderRadius: SIZES.ten * 1.3,
              backgroundColor: COLORS.primary.cherry,
            }}
          />
          <View style={{ marginLeft: SIZES.twentyFive }}>
            <Text
              style={[
                FONTS.semiBoldFont16,
                {
                  color: COLORS.normal.black,
                },
              ]}
            >
              Your orders has been picked up
            </Text>
            <Text
              style={[
                FONTS.mediumFont10,
                {
                  color: COLORS.normal.brownGrey,
                  marginTop: SIZES.ten,
                },
              ]}
            >
              Now
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}>
      <CartHeader tittle={"Notifications"} isBackArrow />
      <FlatList
        data={notifications}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationsItem}
        scrollEventThrottle={16}
        bounces={false}
        ItemSeparatorComponent={() => <View style={STYLES.horLine} />}
        contentContainerStyle={{ paddingVertical: SIZES.twenty }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

const DATA = [
  {
    id: "1",
  },
  {
    id: "2",
  },
  {
    id: "3",
  },
  {
    id: "4",
  },
  {
    id: "5",
  },
  {
    id: "6",
  },
  {
    id: "7",
  },
  {
    id: "8",
  },
  {
    id: "9",
  },
  {
    id: "10",
  },
  {
    id: "11",
  },
  {
    id: "12",
  },
  {
    id: "13",
  },
  {
    id: "14",
  },
  {
    id: "15",
  },
  {
    id: "16",
  },
  {
    id: "17",
  },
  {
    id: "18",
  },
  {
    id: "19",
  },
  {
    id: "20",
  },
];
