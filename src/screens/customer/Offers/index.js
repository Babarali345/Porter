import { Icon } from "native-base";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CartHeader from "../../../components/CartHeader";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  SIZES,
  STYLES,
  width,
} from "../../../constants";

export default function Offers() {
  const rendorLatestOffers = ({ item }) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <ImageBackground
          style={{
            height: Platform.OS === "android" ? height * 0.3 : height * 0.23,
            width: width,
            marginTop: SIZES.five,
          }}
          source={{ uri: item.image }}
          resizeMode="cover"
        >
          <View
            style={{
              backgroundColor: COLORS.primary.cherry,
              alignSelf: "flex-end",
              height: SIZES.twenty * 2.9,
              width: SIZES.twenty * 2.9,
              borderRadius: SIZES.twenty * 2.9,
              justifyContent: "center",
              alignItems: "center",
              right: SIZES.ten,
              top: SIZES.ten,
              transform: [{ rotate: "335deg" }],
            }}
          >
            <Text style={[FONTS.regularFont12, { color: COLORS.normal.white }]}>
              25%
            </Text>
            <Text style={[FONTS.regularFont12, { color: COLORS.normal.white }]}>
              Off
            </Text>
          </View>
        </ImageBackground>

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: SIZES.fifteen,
            paddingVertical: SIZES.ten,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={[FONTS.semiBoldFont18, { color: COLORS.normal.black }]}
            >
              Minute by tuk tuk
            </Text>

            <Text
              style={[
                FONTS.mediumFont10,
                { color: COLORS.normal.brownGrey, marginStart: SIZES.ten },
              ]}
            >
              25% Overall Menu
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.ten,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: SIZES.five,
              }}
            >
              <Icon
                type={FONTFAMILY.Entypo}
                name={"star"}
                style={{
                  fontSize: SIZES.fifteen,
                  color: COLORS.primary.cherry,
                }}
              />
              <Text
                style={[
                  FONTS.regularFont12,
                  { color: COLORS.primary.cherry, marginStart: SIZES.five - 2 },
                ]}
              >
                4.5
              </Text>
            </View>
            <Text
              style={[
                FONTS.mediumFont10,
                { color: COLORS.normal.brownGrey, marginStart: SIZES.ten },
              ]}
            >
              Cakes by Tella Desserts
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[STYLES.container, {}]}>
      <View
        style={{
          paddingHorizontal: SIZES.fifteen,
          paddingBottom: SIZES.fifteen,
        }}
      >
        <CartHeader tittle={"Latest Offers"} />
        <Text
          style={[
            FONTS.mediumFont14,
            { color: COLORS.normal.brownGrey, marginTop: SIZES.ten },
          ]}
        >
          {" "}
          Find discounts, Offers special meals and more!
        </Text>
      </View>
      {/* ========================   LATES OFFERS FLATLIS VIEW START ======================== */}
      <FlatList
        scrollEventThrottle={16}
        bounces={false}
        overScrollMode="never"
        data={FavData2}
        renderItem={rendorLatestOffers}
        key={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: SIZES.twenty * 4,
        }}
        showsVerticalScrollIndicator={false}
      />

      {/* ========================   LATES OFFERS FLATLIS VIEW END ======================== */}
    </View>
  );
}

const styles = StyleSheet.create({});

const FavData2 = [
  {
    id: 1,
    title: "French Apple Pie",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/23/2021/01/07/Best-romantic-desserts-2000.jpg",
    isSelected: true,
  },
  {
    id: 2,
    title: "French Apple Pie",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",
    isSelected: false,
  },
  {
    id: 3,
    title: "French Apple Pie",
    image:
      "https://merriam-webster.com/assets/mw/images/gallery/gal-global-footer-recirc/dessert-words-sundae-5950-749e035682593e91328c62b6630c94b1@1x.jpg",
    isSelected: false,
  },
  {
    id: 4,
    title: "French Apple Pie",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",
    isSelected: false,
  },
  {
    id: 5,
    title: "French Apple Pie",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",
    isSelected: false,
  },
];
