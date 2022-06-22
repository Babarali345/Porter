import { Icon } from "native-base";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import { COLORS, FONTFAMILY, FONTS, IMAGES, SIZES, STYLES } from "../constants";
import CustomButton from "./CustomButton";
import MyTouchableOpacity from "./MyTouchableOpacity";
import Row from "./Row";

export default function OrderDetailCompnanat({ style, buttontxt, onPress }) {
  return (
    <View style={[style, { marginTop: SIZES.twenty }]}>
      {/* ======================== LOGO ADDRESS RATINGS VIEW START ======================== */}

      <Row style={{ alignItems: "center", marginTop: SIZES.twenty }}>
        <Image source={IMAGES.PizaPieLogo} style={styles.restaurantImage} />
        <View style={{ marginLeft: SIZES.ten }}>
          <Text style={[FONTS.mediumFont16, { marginBottom: SIZES.ten * 0.6 }]}>
            Burger King
          </Text>
          <Row style={{ alignItems: "center" }}>
            <Icon
              name={"star"}
              type={FONTFAMILY.FontAwesome}
              style={{
                fontSize: SIZES.fifteen,
                color: COLORS.primary.cherry,
              }}
            />
            <Text
              style={[
                FONTS.mediumFont12,
                { color: COLORS.primary.cherry, marginStart: SIZES.five },
              ]}
            >
              4.6
            </Text>
            <Text
              style={[
                FONTS.mediumFont12,
                { color: COLORS.normal.brownGrey, marginStart: SIZES.five },
              ]}
            >
              (124 ratings)
            </Text>
          </Row>
          <Text
            style={[
              FONTS.mediumFont12,
              { color: COLORS.normal.brownGrey, marginVertical: SIZES.five },
            ]}
          >
            Western Food
          </Text>
          <Row style={{ alignItems: "center" }}>
            <Icon
              name={"ios-location-outline"}
              type={FONTFAMILY.Ionicons}
              style={{
                fontSize: SIZES.twenty,
                color: COLORS.primary.cherry,
              }}
            />
            <Text
              style={[
                FONTS.mediumFont12,
                {
                  color: COLORS.normal.brownGrey,
                  marginLeft: SIZES.five * 0.3,
                },
              ]}
            >
              No 03, 4th Lane, Newyork
            </Text>
          </Row>
        </View>
      </Row>
      {/* ======================== LOGO ADDRESS RATINGS VIEW END ======================== */}

      <View>
        {/* ======================== ORDER ITEM LIST START  ======================== */}

        {OrderData.map((item) => {
          return (
            <View>
              <View
                style={{
                  // backgroundColor: 'red',
                  marginTop: SIZES.ten,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={[FONTS.boldFont16, { color: COLORS.normal.black }]}
                >
                  {item.Item}
                </Text>
                <Text
                  style={[FONTS.boldFont16, { color: COLORS.normal.black }]}
                >
                  {item.price}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: COLORS.normal.brownGrey,
                  height: 1,
                  marginTop: SIZES.ten,
                }}
              />
            </View>
          );
        })}

        {/* ======================== ORDER ITEM LIST START  END ======================== */}

        {/* ======================== DELIEVERY INSTRUCTION VIEW START  ======================== */}

        <View style={{ marginTop: SIZES.ten }}>
          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.ten,
            }}
          >
            <Text style={[FONTS.boldFont16, { color: COLORS.primary.cherry }]}>
              Promo Code
            </Text>
            <MyTouchableOpacity>
              <Text
                style={[FONTS.mediumFont14, { color: COLORS.primary.cherry }]}
              >
                Apply Code
              </Text>
            </MyTouchableOpacity>
          </Row>

          <Row
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.twenty,
            }}
          >
            <Text style={[FONTS.boldFont16, { color: COLORS.normal.black }]}>
              Delivery Instrusctions
            </Text>
            <MyTouchableOpacity>
              <Text
                style={[FONTS.mediumFont16, { color: COLORS.primary.cherry }]}
              >
                <Text
                  style={[FONTS.boldFont20, { color: COLORS.primary.cherry }]}
                >
                  +
                </Text>{" "}
                Add Notes
              </Text>
            </MyTouchableOpacity>
          </Row>
          <View
            style={{
              backgroundColor: COLORS.normal.brownGrey,
              height: 1,
              marginTop: SIZES.fifteen,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.fifteen,
            }}
          >
            <Text style={[FONTS.boldFont16, { color: COLORS.normal.black }]}>
              Sub Total
            </Text>
            <Text style={[FONTS.boldFont16, { color: COLORS.primary.cherry }]}>
              $68
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.twenty,
            }}
          >
            <Text style={[FONTS.boldFont16, { color: COLORS.normal.black }]}>
              Delivery Cost
            </Text>
            <Text style={[FONTS.boldFont16, { color: COLORS.primary.cherry }]}>
              $68
            </Text>
          </View>

          <View
            style={{
              backgroundColor: COLORS.normal.brownGrey,
              height: 1,
              marginTop: SIZES.fifteen,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.ten,
            }}
          >
            <Text style={[FONTS.boldFont16, { color: COLORS.normal.black }]}>
              Total
            </Text>
            <Text style={[FONTS.boldFont24, { color: COLORS.primary.cherry }]}>
              $70
            </Text>
          </View>
        </View>
        {/* ======================== DELIEVERY INSTRUCTION VIEW END  ======================== */}

        <CustomButton
          label={buttontxt}
          style={{ marginTop: SIZES.twentyFive * 1.2 }}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  restaurantImage: {
    height: SIZES.fifty * 1.15,
    width: SIZES.fifty * 1.15,
    borderRadius: SIZES.fifteen,
  },
});

const OrderData = [
  {
    id: "1",
    Item: "Beef Burger x1",
    price: "$16",
  },
  {
    id: "2",
    Item: "Classic Burger x1",
    price: "$14",
  },
  {
    id: "3",
    Item: "Cheese Chicken Burger x1",
    price: "",
  },
  {
    id: "4",
    Item: "Chicken Legs Basket x1",
    price: "$17",
  },
  {
    id: "5",
    Item: "French Fries Large x1",
    price: "$15",
  },
];
