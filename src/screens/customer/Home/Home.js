import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import CartHeader from "../../../components/CartHeader";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import {
  COLORS,
  CONSTANTS,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../../constants";
import * as HomeAction from "../../../Store/Action/HomeScreenAction";

export default function Home({ navigation }) {
  const dispatcher = useDispatch();

  const handleSection = async (section, screen) => {
    await dispatcher(HomeAction.setSelectedSection(section));
    navigation.navigate(screen);
  };

  return (
    <View style={[STYLES.container, {}]}>
      <View style={{ paddingHorizontal: SIZES.fifteen }}>
        <CartHeader userName={"Anika"} />
      </View>

      <View
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          paddingHorizontal: SIZES.fifteen,
          paddingTop: SIZES.twenty,
        }}
      >
        <Text
          style={[FONTS.semiBoldFont22, { marginTop: SIZES.fifteen * 0.4 }]}
        >
          Choose Your{" "}
          <Text style={{ color: COLORS.primary.cherry }}>Preference</Text>
        </Text>
        <View
          style={{
            backgroundColor: COLORS.primary.cherry,
            position: "absolute",
            height: "70%",
            width: "30%",
            borderTopRightRadius: SIZES.twenty * 2.5,
            borderBottomRightRadius: SIZES.twenty * 2.5,
            top: 80,
            left: 0,
          }}
        />
        <View style={{ marginStart: SIZES.ten * 1.3 }}>
          {/* ======================== GROCERY DELIEVERY VIEW START ======================== */}

          <View
            style={{
              // backgroundColor: 'red',
              marginTop: SIZES.twenty * 3.6,
              // height: '40%',
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* ======================== GROCERY BOX VIEW START ======================== */}

            <MyTouchableOpacity
              style={[
                STYLES.shadow,
                {
                  backgroundColor: COLORS.normal.cranBerry,
                  alignSelf: "baseline",
                  alignItems: "center",
                  padding: SIZES.fifteen,
                  borderRadius: SIZES.ten,
                },
              ]}
              onPress={() => {
                handleSection(CONSTANTS.Grocery, SCREENS.GroceryStack);
              }}
            >
              <Text style={[FONTS.boldFont22, { color: COLORS.normal.white }]}>
                Grocery
              </Text>
              <Text
                style={[
                  FONTS.semiBoldFont16,
                  { color: COLORS.normal.white, marginTop: SIZES.five },
                ]}
              >
                Daily Purpose & More
              </Text>
              <Image
                style={{
                  height: SIZES.twenty * 5.5,
                  width: SIZES.twenty * 5,
                  bottom: -SIZES.twenty * 1.5,
                }}
                source={IMAGES.groceryImage}
                resizeMode="contain"
              />
            </MyTouchableOpacity>
            {/* ======================== GROCERY BOX VIEW END ======================== */}

            {/* ======================== DELIEVERY BOX VIEW START ======================== */}

            <MyTouchableOpacity
              style={[
                STYLES.shadow,
                {
                  backgroundColor: COLORS.normal.greenishBlack,
                  alignSelf: "baseline",
                  alignItems: "center",
                  padding: SIZES.fifteen,
                  borderRadius: SIZES.ten,
                  marginStart: SIZES.ten,
                },
              ]}
              onPress={() => {
                handleSection(CONSTANTS.FoodDelievery, SCREENS.DelieveryStack);
              }}
            >
              <Text style={[FONTS.boldFont22, { color: COLORS.normal.white }]}>
                Food Delievery
              </Text>
              <Text
                style={[
                  FONTS.semiBoldFont16,
                  { color: COLORS.normal.white, marginTop: SIZES.five },
                ]}
              >
                Daily Purpose & More
              </Text>
              <Image
                style={{
                  height: SIZES.twenty * 5.5,
                  width: SIZES.twenty * 6.5,
                  bottom: -SIZES.twenty * 1.5,
                  // right: SIZES.twenty *,
                }}
                source={IMAGES.foodDelievery}
                resizeMode="contain"
              />
            </MyTouchableOpacity>
            {/* ======================== DELIEVRY BOX VIEW END ======================== */}
          </View>
          {/* ======================== GROCERY DELIEVERY VIEW END ======================== */}

          {/* ======================== PICK UP FAST FOOD VIEW START ======================== */}

          <MyTouchableOpacity
            style={[
              STYLES.shadow,
              {
                backgroundColor: COLORS.normal.veryLightPink,
                // alignSelf: 'center',
                alignItems: "center",
                paddingHorizontal: SIZES.fifteen,
                paddingVertical: SIZES.twenty * 1.3,
                borderRadius: SIZES.ten,
                marginTop: SIZES.twenty * 3.5,
                flexDirection: "row",
              },
            ]}
            onPress={() => {
              handleSection(CONSTANTS.PickUp, SCREENS.PickUpStack);
            }}
          >
            <Image
              style={{
                height: SIZES.twenty * 6,
                width: SIZES.twenty * 9,
                bottom: -SIZES.twentyFive * 1.5,
              }}
              source={IMAGES.pickUpIcon}
              resizeMode="contain"
            />

            <View style={{ alignItems: "center" }}>
              <Text style={[FONTS.boldFont24, { color: COLORS.normal.black }]}>
                Pick-Up
              </Text>
              <Text
                style={[
                  FONTS.regularFont08,
                  { textAlign: "center", marginTop: SIZES.ten },
                ]}
              >
                Call us where ever you are &{"\n"} pick your by you pick up
                point
              </Text>
            </View>
          </MyTouchableOpacity>
        </View>
        {/* ======================== PICK UP FAST FOOD VIEW END ======================== */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
