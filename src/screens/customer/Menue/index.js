import { Icon } from "native-base";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CartHeader from "../../../components/CartHeader";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import SearchBar from "../../../components/SearchBar";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
} from "../../../constants";

export default function Menue({ navigation }) {
  const CategoryType = ({ name }) => {
    return (
      <MyTouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.Dessert, {
            title: name,
          });
        }}
        style={[
          STYLES.shadow,
          {
            backgroundColor: COLORS.normal.white,
            marginTop: SIZES.twenty,
            width: "80%",
            paddingVertical: SIZES.fifteen,
            borderTopLeftRadius: SIZES.twenty * 1.2,
            borderTopRightRadius: SIZES.ten,
            borderBottomLeftRadius: SIZES.twenty * 1.2,
            borderBottomRightRadius: SIZES.ten,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          },
        ]}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            style={[
              STYLES.shadow,
              {
                height: SIZES.twenty * 3,
                width: SIZES.twenty * 3,
                borderRadius: SIZES.twenty * 3,
                zIndex: 1,
                right: SIZES.twenty * 1.6,
              },
            ]}
            source={IMAGES.pizaBackground}
          />
          <View style={{}}>
            <Text style={[FONTS.boldFont20]}>{name}</Text>
            <Text
              style={[FONTS.mediumFont14, { color: COLORS.normal.brownGrey }]}
            >
              120 Items
            </Text>
          </View>
        </View>
        <View
          style={[
            STYLES.shadow,
            {
              backgroundColor: COLORS.normal.white,
              zIndex: 1,
              left: SIZES.twenty,
              padding: SIZES.five,
              borderRadius: SIZES.twenty,
            },
          ]}
        >
          <Icon
            type={FONTFAMILY.Entypo}
            name={"chevron-right"}
            style={{
              fontSize: SIZES.twentyFive,
              color: COLORS.primary.cherry,
            }}
          />
        </View>
      </MyTouchableOpacity>
    );
  };
  return (
    <View style={[STYLES.container, {}]}>
      <View style={{ paddingHorizontal: SIZES.fifteen }}>
        <CartHeader tittle={"Menue"} />
        <SearchBar
          style={[
            STYLES.shadow,
            { marginTop: SIZES.fifteen, paddingHorizontal: 10 },
          ]}
        />
      </View>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          paddingHorizontal: SIZES.fifteen,
        }}
      >
        <View
          style={{
            backgroundColor: COLORS.primary.cherry,
            position: "absolute",
            height: "70%",
            width: "30%",
            borderTopRightRadius: SIZES.twenty * 2.5,
            borderBottomRightRadius: SIZES.twenty * 2.5,
            top: 50,
            left: 0,
          }}
        />
        <View
          style={{
            // backgroundColor: 'red',
            alignItems: "center",
            marginTop: SIZES.twenty * 3.5,
            // height: '40%',
            justifyContent: "space-between",
          }}
        >
          <CategoryType name={"Food"} />
          <CategoryType name={"Beverages"} />
          <CategoryType name={"Desserts"} />
          <CategoryType name={"Promotions"} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
