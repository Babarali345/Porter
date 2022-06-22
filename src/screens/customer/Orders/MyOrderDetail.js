import { Icon } from "native-base";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CartHeader from "../../../components/CartHeader";
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

export default function MyOrderDetail({ navigation }) {
  const rendeorOrderDetail = () => {
    return (
      <MyTouchableOpacity
        style={[
          STYLES.shadow,
          {
            marginTop: SIZES.twenty,
            padding: SIZES.fifteen,
            borderRadius: SIZES.ten,
          },
        ]}
        onPress={() => {
          navigation.navigate(SCREENS.OrderDetail);
        }}
      >
        {/* ======================== LOGO ADDRESS RATINGS VIEW START ======================== */}

        <Row
          style={{
            // alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Row style={{}}>
            <Image
              source={IMAGES.PizaPieLogo}
              style={styles.restaurantImage}
              resizeMode={"contain"}
            />
            <View
              style={{
                marginStart: SIZES.ten,
              }}
            >
              <Text
                style={[FONTS.mediumFont16, { marginBottom: SIZES.ten * 0.9 }]}
              >
                Burger King
              </Text>
              <Row style={{ alignItems: "center" }}>
                {/* <Icon
                  name={"ios-location-outline"}
                  type={FONTFAMILY.Ionicons}
                  style={{
                    fontSize: SIZES.twenty,
                    color: COLORS.primary.cherry,
                  }}
                /> */}
                <Text
                  style={[
                    FONTS.mediumFont12,
                    {
                      color: COLORS.normal.brownGrey,
                    },
                  ]}
                >
                  Deal 1 23
                </Text>
              </Row>
            </View>
          </Row>
          <Text style={[FONTS.boldFont16, {}]}>$100.00</Text>
        </Row>
        {/* ======================== LOGO ADDRESS RATINGS VIEW END ======================== */}

        <Text
          style={[
            FONTS.lightFont08,
            {
              marginTop: SIZES.twenty,
              color: COLORS.normal.black,
              marginStart: SIZES.ten,
            },
          ]}
        >
          20/12/2021
        </Text>
      </MyTouchableOpacity>
    );
  };
  return (
    <View style={[STYLES.container, {}]}>
      <View style={{ paddingHorizontal: SIZES.fifteen }}>
        <CartHeader tittle={"My Orders"} isBackArrow noCart />
      </View>

      <FlatList
        data={OrderData}
        renderItem={rendeorOrderDetail}
        key={(item) => item.id}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        contentContainerStyle={{
          paddingBottom: 150,
          //   backgroundColor: "red",
          paddingHorizontal: SIZES.fifteen,
        }}
      />
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
