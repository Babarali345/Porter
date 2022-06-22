import { Icon } from "native-base";
import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import CartHeader from "../../../components/CartHeader";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import { useNavigation } from "@react-navigation/native";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  height,
  width,
} from "../../../constants";

export default function ViewAllCategory({ route }) {
  const navigation = useNavigation();

  console.log(route.params);

  const rendorPapularResturant = ({ item }) => {
    return (
      <MyTouchableOpacity
        onPress={() => {
          navigation.navigate(SCREENS.ResturantMenu);
        }}
      >
        <Image
          style={{
            height: Platform.OS === "android" ? height * 0.3 : height * 0.23,
            width: width,
            marginTop: SIZES.five,
          }}
          source={{ uri: item.image }}
          resizeMode="cover"
        />

        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            paddingHorizontal: SIZES.fifteen,
            paddingVertical: SIZES.ten,
          }}
        >
          <Text style={[FONTS.semiBoldFont18, { color: COLORS.normal.black }]}>
            French Apple Pie
          </Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
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
      </MyTouchableOpacity>
    );
  };

  return (
    <View style={STYLES.container}>
      <View
        style={{ paddingHorizontal: SIZES.fifteen, marginBottom: SIZES.twenty }}
      >
        <CartHeader tittle={route.params.from} isBackArrow />
      </View>
      <FlatList
        scrollEventThrottle={16}
        bounces={false}
        overScrollMode="never"
        data={FavData2}
        renderItem={rendorPapularResturant}
        key={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: SIZES.twenty,
        }}
        showsVerticalScrollIndicator={false}
      />
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
