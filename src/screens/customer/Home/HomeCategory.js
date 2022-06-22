import { Icon } from "native-base";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import CartHeader from "../../../components/CartHeader";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import SearchBar from "../../../components/SearchBar";
import {
  COLORS,
  FONTS,
  SIZES,
  STYLES,
  height,
  width,
  FONTFAMILY,
  CONSTANTS,
  SCREENS,
} from "../../../constants";

export default function HomeCategory({ navigation }) {
  const SELECTEDSECTION = useSelector(
    (state) => state.HomeScreenReducer.SelectedSection
  );

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

  const rendorRecentItems = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          //   backgroundColor: 'red',
          marginTop: SIZES.ten,
          paddingHorizontal: SIZES.fifteen,
        }}
      >
        <View
          style={{
            height: SIZES.twenty * 4,
            width: SIZES.twenty * 4,
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: SIZES.ten,
            }}
            source={{ uri: item.image }}
            // resizeMode="contain"
          />
        </View>

        <View style={{ marginStart: SIZES.twenty }}>
          <Text style={[FONTS.semiBoldFont18, { color: COLORS.normal.black }]}>
            French Apple Pie
          </Text>
          <Text
            style={[
              FONTS.mediumFont10,
              { color: COLORS.normal.brownGrey, marginVertical: SIZES.five },
            ]}
          >
            Café Western Food
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
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
              (124 Ratings)
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const rendorMostPapolarHorizantal = ({ item }) => {
    return (
      <MyTouchableOpacity
        style={{
          marginRight: SIZES.fifteen,
          width: SIZES.twenty * 9,
          //   backgroundColor: 'red',
        }}
      >
        <View
          style={{
            width: SIZES.twenty * 9,
            height: SIZES.twenty * 5.5,
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
              borderRadius: SIZES.ten,
            }}
            source={{ uri: item.image }}
            // resizeMode="contain"
          />
        </View>
        <View style={{ marginTop: SIZES.five }}>
          <Text style={[FONTS.semiBoldFont18, { color: COLORS.normal.black }]}>
            French Apple Pie
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.five,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Icon
                type={FONTFAMILY.Entypo}
                name={"star"}
                style={{
                  fontSize: SIZES.ten,
                  color: COLORS.primary.cherry,
                }}
              />
              <Text
                style={[
                  FONTS.regularFont08,
                  { color: COLORS.primary.cherry, marginStart: SIZES.five - 3 },
                ]}
              >
                4.5
              </Text>
            </View>
            <Text
              style={[
                FONTS.mediumFont10,
                { color: COLORS.normal.brownGrey, marginStart: SIZES.five - 2 },
              ]}
              numberOfLines={1}
            >
              Café Western Food
            </Text>
          </View>
        </View>
      </MyTouchableOpacity>
    );
  };

  const rendorTopHorizantal = ({ item, index }) => {
    return (
      <MyTouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginRight: FavData.length - 1 === index ? 0 : SIZES.fifteen * 1.3,
        }}
      >
        <View
          style={{
            height: SIZES.twenty * 5,
            width: SIZES.twenty * 5,

            borderRadius: SIZES.ten,
            overflow: "hidden",
          }}
        >
          <Image
            style={{
              height: "100%",
              width: "100%",
            }}
            source={{ uri: item.image }}
            // resizeMode="contain"
          />
        </View>
        <Text style={[FONTS.boldFont16, { marginTop: SIZES.five }]}>
          {item.title}
        </Text>
      </MyTouchableOpacity>
    );
  };

  const MostRecentListComponat = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: SIZES.fifteen,
            paddingBottom: SIZES.fifteen,
          }}
        >
          <Text style={[FONTS.boldFont18]}>Recent Items</Text>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.ViewAllCategory, {
                from: "Most Recent ",
              });
            }}
          >
            <Text
              style={[FONTS.mediumFont12, { color: COLORS.primary.cherry }]}
            >
              View all
            </Text>
          </MyTouchableOpacity>
        </View>

        <FlatList
          scrollEventThrottle={16}
          bounces={false}
          overScrollMode="never"
          data={FavData2}
          renderItem={rendorRecentItems}
          key={(item) => item.id}
          contentContainerStyle={{
            paddingBottom: SIZES.twenty * 5,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  const TopHorizantalListComponant = () => {
    return (
      <View>
        <FlatList
          data={FavData}
          scrollEventThrottle={16}
          bounces={false}
          horizontal
          renderItem={rendorTopHorizantal}
          key={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.twenty,
            paddingHorizontal: SIZES.fifteen,
          }}
        />

        {/* ========================   PAPOLAR RESTURANT VIEW START ======================== */}
        <View
          style={{
            marginTop: SIZES.twenty,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.fifteen,
              paddingBottom: SIZES.fifteen,
            }}
          >
            <Text style={[FONTS.boldFont18]}>Popular Restaurents</Text>
            <MyTouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.ViewAllCategory, {
                  from: "Papolar Resturant",
                });
              }}
            >
              <Text
                style={[FONTS.mediumFont12, { color: COLORS.primary.cherry }]}
              >
                View all
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
        {/* ========================   PAPOLAR RESTURANT VIEW END ======================== */}
      </View>
    );
  };
  const MostPapolarListComponant = () => {
    return (
      <View>
        {/* ========================   MOSTPAPOLAR RESTURANT VIEW START ======================== */}
        <View
          style={{
            marginTop: SIZES.twenty,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: SIZES.fifteen,
              paddingBottom: SIZES.fifteen,
            }}
          >
            <Text style={[FONTS.boldFont18]}>Most Popular</Text>
            <MyTouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.ViewAllCategory, {
                  from: "Most Papular",
                });
              }}
            >
              <Text
                style={[FONTS.mediumFont12, { color: COLORS.primary.cherry }]}
              >
                View all
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
        <FlatList
          data={FavData}
          scrollEventThrottle={16}
          bounces={false}
          horizontal
          renderItem={rendorMostPapolarHorizantal}
          key={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: SIZES.ten,
            paddingHorizontal: SIZES.fifteen,
            marginBottom: SIZES.twenty,
          }}
        />
      </View>
    );
  };

  const DelieverToComponant = () => {
    return (
      <View>
        <Text
          style={[
            FONTS.mediumFont12,
            {
              color: COLORS.normal.charcoalGrey,
              marginVertical: SIZES.ten,
            },
          ]}
        >
          Deliever To{" "}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={[FONTS.boldFont20]}>Current Location</Text>
          <MyTouchableOpacity
            onPress={() => {
              navigation.navigate(SCREENS.AddLocation);
            }}
          >
            <Text
              style={[FONTS.semiBoldFont08, { color: COLORS.primary.cherry }]}
            >
              Change{" "}
            </Text>
          </MyTouchableOpacity>
        </View>
      </View>
    );
  };

  const TitleDescriptionForPickUpandGrocery = () => {
    return (
      <View>
        <Text style={[FONTS.semiBoldFont20]}>
          {SELECTEDSECTION === CONSTANTS.PickUp ? "Pick Up" : "Grocery"}
        </Text>
        <Text
          numberOfLines={2}
          style={[
            FONTS.mediumFont14,
            { color: COLORS.normal.brownGrey, marginTop: SIZES.ten },
          ]}
        >
          Find discounts, Offers special discount and more!
        </Text>
      </View>
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
        <CartHeader userName={"Anika!"} />
      </View>

      <ScrollView
        overScrollMode="never"
        scrollEventThrottle={16}
        bounces={false}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={{ height: height, width: width }}
      >
        {/* ======================== DELIEVER TO  START ======================== */}
        <View
          style={{
            paddingHorizontal: SIZES.fifteen,
          }}
        >
          {SELECTEDSECTION === CONSTANTS.FoodDelievery ? (
            <DelieverToComponant />
          ) : (
            <TitleDescriptionForPickUpandGrocery />
          )}

          <SearchBar style={{ marginVertical: SIZES.fifteen }} />
        </View>
        {/* ======================== DELIEVER TO  END ======================== */}

        {/* ========================   HORIZANTAL FLATELIST START ======================== */}
        {SELECTEDSECTION === CONSTANTS.FoodDelievery && (
          <TopHorizantalListComponant />
        )}

        {/* ========================   HORIZANTAL FLATELIST END ======================== */}

        {/* ========================   PAPOLAR RESTURANT FLATLIS VIEW START ======================== */}
        <FlatList
          scrollEventThrottle={16}
          bounces={false}
          overScrollMode="never"
          data={FavData2}
          renderItem={rendorPapularResturant}
          key={(item) => item.id}
          contentContainerStyle={{
            paddingBottom:
              SELECTEDSECTION === CONSTANTS.FoodDelievery
                ? 0
                : SIZES.twenty * 5,
          }}
          showsVerticalScrollIndicator={false}
        />

        {/* ========================   PAPOLAR RESTURANT FLATLIS VIEW END ======================== */}

        {/* ======================== MOST FLATELIST START ======================== */}
        {SELECTEDSECTION === CONSTANTS.FoodDelievery && (
          <MostPapolarListComponant />
        )}

        {/* ========================   MOST FLATELIST END ======================== */}

        {/* ========================   RECENT ITEM START ======================== */}
        {SELECTEDSECTION === CONSTANTS.FoodDelievery && (
          <MostRecentListComponat />
        )}

        {/* ========================   RECENT ITEM END ======================== */}
      </ScrollView>
      <MyTouchableOpacity
        style={{
          position: "absolute",
          bottom: SIZES.twenty * 5,
          right: 10,
          padding: SIZES.twenty,
          borderRadius: SIZES.twenty * 2,
          backgroundColor: COLORS.primary.navy,
        }}
        onPress={() => {
          navigation.navigate(SCREENS.Filter);
        }}
      >
        <Icon
          name="equalizer"
          type={FONTFAMILY.Fontisto}
          style={{ fontSize: SIZES.twenty, color: COLORS.normal.white }}
        />
      </MyTouchableOpacity>
      {/* ========================   MOSTPAPOLAR RESTURANT VIEW START ======================== */}
    </View>
  );
}

const styles = StyleSheet.create({});
const FavData = [
  {
    id: 1,
    title: "Offers",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/23/2021/01/07/Best-romantic-desserts-2000.jpg",
    isSelected: true,
  },
  {
    id: 2,
    title: "Sri Lankan",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",
    isSelected: false,
  },
  {
    id: 3,
    title: "Italian",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",

    isSelected: false,
  },
  {
    id: 4,
    title: "Indian",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",
    isSelected: false,
  },
  {
    id: 5,
    title: "Pakistani",
    image:
      "https://peekaboo.guru/blog/wp-content/uploads/2019/06/Optimized-max-panama-AWFYboL6BE4-unsplash-e1605788495679-1024x535.jpg",
    isSelected: false,
  },
];

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
