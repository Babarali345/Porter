import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SIZES, IMAGES, FONTFAMILY, COLORS, FONTS } from "../constants/theme";
import StarRating from "react-native-star-rating";
import { Icon } from "native-base";
export default function RiderTrackingCard({ onChatPress, onCallPress }) {
  return (
    <View>
      {/* ========================  RIDER CARD VIEW START======================== */}

      <View
        style={{
          position: "absolute",
          bottom: SIZES.twenty,
          right: 0,
          left: 0,
          padding: SIZES.fifteen,
        }}
      >
        <Icon
          type={FONTFAMILY.Ionicons}
          name="time"
          style={{
            color: COLORS.primary.cherry,
            fontSize: SIZES.twenty * 2,
            right: 2,
            paddingBottom: SIZES.ten,
          }}
        />

        {/* ========================  RIDER NAME RATINGS IMAGE VIEW START======================== */}

        <View
          style={{
            backgroundColor: COLORS.primary.cherry,
            padding: SIZES.fifteen,
            borderRadius: SIZES.ten,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={{ height: SIZES.twenty * 3, width: SIZES.twenty * 3 }}
                source={IMAGES.piza2}
              />
              <View style={{ marginStart: SIZES.ten }}>
                <Text
                  style={[FONTS.boldFont18, { color: COLORS.normal.white }]}
                >
                  Robert Johnson
                </Text>

                <Text
                  style={[FONTS.regularFont10, { color: COLORS.normal.white }]}
                >
                  Delivery Boy
                </Text>
                <Text
                  style={[
                    FONTS.regularFont08,
                    { color: COLORS.normal.white, marginVertical: SIZES.five },
                  ]}
                >
                  Average Delivery Time 20m
                </Text>
                <StarRating
                  disabled
                  maxStars={5}
                  fullStarColor={COLORS.normal.golden}
                  halfStarColor={COLORS.normal.golden}
                  emptyStarColor={COLORS.normal.golden}
                  starSize={SIZES.fifteen - 3}
                  rating={3}
                  starStyle={{ marginRight: SIZES.five }}
                  containerStyle={{
                    width: SIZES.twenty * 2,
                  }}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: COLORS.normal.cranBerry,
                  padding: SIZES.ten,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: SIZES.ten,
                }}
                onPress={onCallPress}
              >
                <Icon
                  type={FONTFAMILY.Ionicons}
                  name="call-outline"
                  style={{
                    color: COLORS.normal.white,
                    fontSize: SIZES.twenty * 1.2,
                    right: 2,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: COLORS.normal.cranBerry,
                  padding: SIZES.ten,
                  marginStart: SIZES.five,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: SIZES.ten,
                }}
                onPress={onChatPress}
              >
                <Icon
                  type={FONTFAMILY.Ionicons}
                  name="chatbubble-outline"
                  style={{
                    color: COLORS.normal.white,
                    fontSize: SIZES.twenty * 1.2,
                    right: 2,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* ========================  RIDER NAME RATINGS IMAGE VIEW START======================== */}
          <View
            style={{
              height: 0.3,
              width: "100%",
              backgroundColor: COLORS.normal.white,
              marginVertical: SIZES.twenty,
            }}
          />
          {/* ========================  DELIEVERY TIME CURRENT CITY  VIEW START======================== */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type={FONTFAMILY.Ionicons}
                name="ios-timer-outline"
                style={{
                  color: COLORS.normal.white,
                  fontSize: SIZES.twenty * 2,
                  right: 2,
                }}
              />
              <View style={{ marginStart: SIZES.ten }}>
                <Text
                  style={[FONTS.boldFont18, { color: COLORS.normal.white }]}
                >
                  8:45 PM
                </Text>
                <Text
                  style={[
                    FONTS.lightFont12,
                    { color: COLORS.normal.white, marginTop: SIZES.five },
                  ]}
                >
                  Delivery Time
                </Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Icon
                type={FONTFAMILY.Ionicons}
                name="location-outline"
                style={{
                  color: COLORS.normal.white,
                  fontSize: SIZES.twenty * 2,
                  right: 2,
                }}
              />
              <View style={{ marginStart: SIZES.ten }}>
                <Text
                  style={[FONTS.boldFont18, { color: COLORS.normal.white }]}
                >
                  Gaurav City
                </Text>
                <Text
                  style={[
                    FONTS.lightFont12,
                    { color: COLORS.normal.white, marginTop: SIZES.five },
                  ]}
                >
                  Delivery Address
                </Text>
              </View>
            </View>
          </View>

          {/* ========================  DELIEVERY TIME CURRENT CITY  VIEW START======================== */}
        </View>
      </View>

      {/* ========================  RIDER CARD VIEW END ======================== */}
    </View>
  );
}

const styles = StyleSheet.create({});
