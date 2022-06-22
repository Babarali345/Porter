import { Icon } from "native-base";
import React, { useRef, useState } from "react";
import {
  ImageBackground,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { StarRating } from "react-native-star-rating";

import { getStatusBarHeight } from "react-native-status-bar-height";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import BackArrow from "../../../components/BackArrow";
import CustomizeOrderModal from "../../../components/modals/CustomizeOrderModal";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import Row from "../../../components/Row";
import { ScrollTabBar2 } from "../../../components/ScrollTabBar2";

import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SIZES,
  width,
  STYLES,
  SCREENS,
} from "../../../constants";

export default function ResturantMenu({ navigation }) {
  const [index, setIndex] = useState(0);
  const [isAddToCard, setIsAddToCard] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const [itemprice, setItemprice] = useState(0);

  const showCustomizeOrder = useRef(null);
  const [routes] = useState([
    { key: "first", title: "MOST SELLING" },
    { key: "second", title: "SALADS" },
    { key: "third", title: "SIDES" },
    { key: "fourth", title: "APPTIZERS" },
  ]);

  const renderScene = SceneMap({
    first: () => (
      <View style={{ flex: 1, backgroundColor: COLORS.normal.white }}>
        <FlatList
          data={OrderData}
          renderItem={rendorList}
          key={(item) => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.03,
            //   backgroundColor: "red",
            paddingHorizontal: SIZES.fifteen,
          }}
        />
      </View>
    ),

    second: () => (
      <View style={{ flex: 1, backgroundColor: COLORS.normal.white }}>
        <FlatList
          data={OrderData}
          renderItem={rendorList}
          key={(item) => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.03,
            //   backgroundColor: "red",
            paddingHorizontal: SIZES.fifteen,
          }}
        />
      </View>
    ),
    third: () => (
      <View style={{ flex: 1, backgroundColor: COLORS.normal.white }}>
        <FlatList
          data={OrderData}
          renderItem={rendorList}
          key={(item) => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.03,
            //   backgroundColor: "red",
            paddingHorizontal: SIZES.fifteen,
          }}
        />
      </View>
    ),
    fourth: () => (
      <View style={{ flex: 1, backgroundColor: COLORS.normal.white }}>
        <FlatList
          data={OrderData}
          renderItem={rendorList}
          key={(item) => item.id}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          bounces={false}
          contentContainerStyle={{
            paddingBottom: width * 0.03,
            //   backgroundColor: "red",
            paddingHorizontal: SIZES.fifteen,
          }}
        />
      </View>
    ),
  });

  const rendorList = () => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          marginTop: SIZES.twenty,
          alignItems: "center",
          justifyContent: "space-between",
        }}
        activeOpacity={0.85}
        onPress={() => {
          navigation.navigate(SCREENS.SingleItem);
        }}
      >
        <Image
          style={{
            backgroundColor: "red",
            width: SIZES.twenty * 4.5,
            borderRadius: SIZES.ten,
            backgroundColor: "red",
          }}
          source={IMAGES.piza2}
          resizeMode="cover"
        />
        <View
          style={{
            flex: 1,
            marginStart: SIZES.ten,
            // width: "55%",
          }}
        >
          <Text
            style={[
              FONTS.boldFont18,
              { color: COLORS.normal.black, marginBottom: SIZES.five - 2 },
            ]}
          >
            Barita
          </Text>
          <Text
            style={[FONTS.mediumFont10, { color: COLORS.normal.brownGrey }]}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text
            style={[FONTS.boldFont16, { color: COLORS.normal.charcoalGrey }]}
          >
            50$
          </Text>
          <MyTouchableOpacity
            onPress={() => {
              showCustomizeOrder.current.snapTo(0);
            }}
          >
            <Text
              style={[FONTS.mediumFont10, { color: COLORS.primary.cherry }]}
            >
              Customize Your Order
            </Text>
          </MyTouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: COLORS.primary.cherry,
            paddingHorizontal: SIZES.ten,
            paddingVertical: SIZES.five,
            borderRadius: SIZES.twenty,
          }}
          onPress={() => {
            setItemCount(itemCount + 1);
            setItemprice(itemprice + 50);
            setIsAddToCard(true);
          }}
        >
          <Icon
            name={"time-outline"}
            type={FONTFAMILY.Ionicons}
            style={{
              fontSize: SIZES.fifteen,
              color: COLORS.normal.white,
            }}
          />
          <Text style={[FONTS.semiBoldFont08, { color: COLORS.normal.white }]}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  const PlaceOrderCompopnanat = () => {
    return (
      <View
        style={{
          flex: 0.13,
          backgroundColor: COLORS.primary.cherry,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: SIZES.twentyFive,
          }}
        >
          <Text style={[FONTS.boldFont16, { color: COLORS.normal.white }]}>
            Place Order | {itemCount} items
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={[FONTS.boldFont16, { color: COLORS.normal.white }]}>
              {itemprice} USD
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                backgroundColor: COLORS.normal.white,
                flexDirection: "row",
                alignItems: "center",
                marginStart: SIZES.ten,
                paddingHorizontal: SIZES.five,
                borderRadius: SIZES.ten,
                paddingVertical: SIZES.five - 2,
              }}
              onPress={() => {
                navigation.navigate(SCREENS.MyCart);
              }}
            >
              <Icon
                name={"ios-cart"}
                type={FONTFAMILY.Ionicons}
                style={{
                  fontSize: SIZES.fifteen * 1.5,
                  color: COLORS.primary.cherry,
                }}
              />
              <Text
                style={[
                  FONTS.semiBoldFont10,
                  { color: COLORS.normal.charcoalGrey },
                ]}
              >
                View Cart
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  const layout = useWindowDimensions();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        translucent
        backgroundColor={COLORS.normal.transparent}
        barStyle={"light-content"}
      />
      <ImageBackground
        source={IMAGES.pizaImage}
        style={{
          width: width,
          height: height * 0.3,
          paddingHorizontal: SIZES.fifteen,
        }}
        blurRadius={0.7}
      >
        <View
          style={{
            marginTop:
              Platform.OS === "android"
                ? SIZES.twentyFive
                : getStatusBarHeight(true),
          }}
        >
          <BackArrow isBright />

          {/* ======================== RESUTRANT DETAIL VIEW  START ======================== */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.twenty * 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  height: SIZES.twenty * 3,
                  width: SIZES.twenty * 3,
                }}
                source={IMAGES.PizaPieLogo}
                resizeMode="contain"
              />

              {/* ======================== RESUTRANT NAME RATING AND DELIEVERY TIME VIEW  START ======================== */}

              <View style={{ marginStart: SIZES.ten }}>
                <Text
                  style={[FONTS.mediumFont18, { color: COLORS.normal.white }]}
                >
                  Pizza Pie Me
                </Text>
                <Text
                  style={[
                    FONTS.regularFont14,
                    {
                      color: COLORS.normal.white,
                    },
                  ]}
                >
                  Fast Food, Pizza Experts
                </Text>
                <Row
                  style={{
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Icon
                    name={"time-outline"}
                    type={FONTFAMILY.Ionicons}
                    style={{
                      fontSize: SIZES.fifteen,
                      color: COLORS.primary.cherry,
                    }}
                  />
                  <Text
                    style={[
                      FONTS.mediumFont10,
                      {
                        color: COLORS.normal.white,
                        marginLeft: SIZES.five * 0.3,
                      },
                    ]}
                  >
                    Deliver Time 25-30mins
                  </Text>

                  <Row style={{ alignItems: "center", marginStart: SIZES.ten }}>
                    <Icon
                      name={"star"}
                      type={FONTFAMILY.FontAwesome}
                      style={{
                        fontSize: SIZES.fifteen,
                        color: COLORS.normal.golden,
                      }}
                    />
                    <Text
                      style={[
                        FONTS.mediumFont10,
                        {
                          color: COLORS.normal.white,
                          marginStart: SIZES.five,
                        },
                      ]}
                    >
                      4.6
                    </Text>
                  </Row>
                </Row>
              </View>
            </View>
            <View
              style={{
                backgroundColor: COLORS.normal.trueGreen,
                padding: SIZES.five + 2,
                borderRadius: SIZES.five,
              }}
            >
              <Text
                style={[FONTS.regularFont12, { color: COLORS.normal.white }]}
              >
                open
              </Text>
            </View>
          </View>
          {/* ======================== RESUTRANT NAME RATING AND DELIEVERY TIME VIEW  END ======================== */}
          {/* ======================== RESUTRANT DETAIL VIEW  END ======================== */}
        </View>
      </ImageBackground>

      {/* ======================== MENUE DETAIL VIEW  START ======================== */}

      <TabView
        renderTabBar={ScrollTabBar2}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />

      {/* ======================== MENUE DETAIL VIEW  END ======================== */}

      {isAddToCard && <PlaceOrderCompopnanat />}
      <CustomizeOrderModal sheetRef={showCustomizeOrder} />
    </View>
  );
}

const styles = StyleSheet.create({});

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
