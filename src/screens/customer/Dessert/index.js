import { Icon } from "native-base";
import React from "react";
import {
  FlatList,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CartHeader from "../../../components/CartHeader";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import SearchBar from "../../../components/SearchBar";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SIZES,
  STYLES,
  width,
} from "../../../constants";

export default function Dessert(props) {
  console.log("title===== ", props.route.params.title);
  const rendorItem = ({ item }) => {
    return (
      <MyTouchableOpacity>
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
              flex: 1,
              justifyContent: "flex-end",
              paddingHorizontal: SIZES.fifteen,
              paddingBottom: SIZES.twenty,
            }}
          >
            <Text style={[FONTS.boldFont18, { color: COLORS.normal.white }]}>
              French Apple Pie
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Icon
                  type={FONTFAMILY.Entypo}
                  name={"star"}
                  style={{
                    fontSize: SIZES.twenty,
                    color: COLORS.primary.cherry,
                  }}
                />
                <Text style={{ color: COLORS.primary.cherry }}>4.5</Text>
              </View>
              <Text
                style={[
                  FONTS.mediumFont10,
                  { color: COLORS.normal.white, marginStart: SIZES.five },
                ]}
              >
                Cakes by Tella Desserts
              </Text>
            </View>
          </View>
        </ImageBackground>
      </MyTouchableOpacity>
    );
  };
  return (
    <View style={[STYLES.container, {}]}>
      <View style={{ paddingHorizontal: SIZES.fifteen }}>
        <CartHeader tittle={props.route.params.title} isBackArrow />
        <SearchBar
          style={{
            marginTop: SIZES.twenty * 1.5,
            marginBottom: SIZES.twenty * 1.5,
          }}
        />
      </View>
      <FlatList
        scrollEventThrottle={16}
        bounces={false}
        overScrollMode="never"
        data={FavData}
        renderItem={rendorItem}
        key={(item) => item.id}
        contentContainerStyle={{
          paddingBottom: height * 0.01,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

const FavData = [
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
