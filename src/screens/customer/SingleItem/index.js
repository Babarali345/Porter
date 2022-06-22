import { Icon, Radio } from "native-base";
import React, { useEffect, useRef, useState } from "react";

import StarRating from "react-native-star-rating";
import { RadioButton } from "react-native-paper";
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Platform,
  ScrollView,
} from "react-native";
import {
  COLORS,
  height,
  IMAGES,
  width,
  SIZES,
  FONTFAMILY,
  FONTS,
  STYLES,
  SCREENS,
} from "../../../constants";
import BackArrow from "../../../components/BackArrow";
import { getStatusBarHeight } from "react-native-status-bar-height";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";

export default function SingleItem({ navigation }) {
  const portionHeight = useRef(new Animated.Value(0)).current;
  const ingredientsHeight = useRef(new Animated.Value(0)).current;
  const [portionCollapsed, setPortionCollapsed] = useState(true);
  const [ingredientsCollapsed, setingredientsCollapseds] = useState(true);
  const [portionItem, setportionItem] = useState("");
  const [ingredientsItem, setingredientsItem] = useState("");
  const [portionCount, setportionCount] = useState(0);

  const RendorSizeOfPortion = ({ title }) => {
    return (
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SIZES.ten,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              height: SIZES.fifteen,
              width: SIZES.fifteen,
              borderRadius: SIZES.fifteen,
              borderWidth: 1,
              borderColor: COLORS.primary.cherry,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setportionItem(title);
            }}
          >
            <View
              style={{
                backgroundColor:
                  portionItem === title
                    ? COLORS.primary.cherry
                    : COLORS.normal.white,
                height: SIZES.ten - 3,
                width: SIZES.ten - 3,
                borderRadius: SIZES.ten - 3,
              }}
            />
          </TouchableOpacity>
          <Text
            style={[
              FONTS.lightFont12,
              {
                color: COLORS.normal.black,
                marginStart: SIZES.five,
              },
            ]}
          >
            {title}
          </Text>
        </View>
        <Text style={[FONTS.semiBoldFont10, { color: COLORS.primary.cherry }]}>
          $40.00
        </Text>
      </Animated.View>
    );
  };

  const RendorIngredients = ({ title, isChecked }) => {
    return (
      <Animated.View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SIZES.ten,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{
              height: SIZES.fifteen,
              width: SIZES.fifteen,
              borderRadius: SIZES.twenty,
              borderWidth: 1,
              borderColor: COLORS.primary.cherry,
              overflow: "hidden",
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setingredientsItem(title);
            }}
          >
            <View
              style={{
                backgroundColor:
                  ingredientsItem === title
                    ? COLORS.primary.cherry
                    : COLORS.normal.white,
                height: SIZES.ten - 3,
                width: SIZES.ten - 3,
                borderRadius: SIZES.twenty,
              }}
            />
          </TouchableOpacity>
          <Text
            style={[
              FONTS.lightFont12,
              {
                color: COLORS.normal.black,
                marginStart: SIZES.five,
              },
            ]}
          >
            {title}
          </Text>
        </View>
        <Text style={[FONTS.semiBoldFont10, { color: COLORS.primary.cherry }]}>
          $40.00
        </Text>
      </Animated.View>
    );
  };

  useEffect(() => {
    if (portionCollapsed) {
      portioncollapseView();
    } else {
      portionexpandView();
    }
  }, [portionCollapsed]);

  const portiontoggleCollapsed = () => {
    setPortionCollapsed(!portionCollapsed);
  };

  const portioncollapseView = () => {
    Animated.timing(portionHeight, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const portionexpandView = () => {
    Animated.timing(portionHeight, {
      duration: 700,
      toValue: 100,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (ingredientsCollapsed) {
      ingredientsollapseView();
    } else {
      ingredientsexpandView();
    }
  }, [ingredientsCollapsed]);

  const ingredientsToggle = () => {
    setingredientsCollapseds(!ingredientsCollapsed);
  };

  const ingredientsollapseView = () => {
    Animated.timing(ingredientsHeight, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const ingredientsexpandView = () => {
    Animated.timing(ingredientsHeight, {
      duration: 700,
      toValue: 100,
      useNativeDriver: false,
    }).start();
  };

  // console.log("portion item ====== ", portionItem);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={IMAGES.pizaImage}
        style={{
          width: width,
          height: height * 0.3,
          paddingRight: SIZES.fifteen,
        }}
      >
        <View
          style={{
            marginTop:
              Platform.OS === "android"
                ? SIZES.twentyFive * 1.5
                : getStatusBarHeight(true),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <BackArrow isBright style={{ paddingLeft: SIZES.fifteen }} />
            <MyTouchableOpacity
              onPress={() => {
                navigation.navigate(SCREENS.MyCart);
              }}
            >
              <Icon
                name={"ios-cart"}
                type={FONTFAMILY.Ionicons}
                style={{
                  fontSize: SIZES.fifteen * 2,
                  color: COLORS.normal.white,
                  marginLeft: SIZES.five * 0.25,
                }}
              />
            </MyTouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <ImageBackground
            source={IMAGES.triangleImage}
            style={{
              height: SIZES.twenty * 3.5,
              width: SIZES.twenty * 3.5,
              justifyContent: "center",
              alignItems: "center",
              bottom: -SIZES.twenty * 1.2,
            }}
          >
            <Icon
              type={FONTFAMILY.AntDesign}
              name="heart"
              style={{
                color: COLORS.primary.cherry,
                fontSize: SIZES.twenty * 1.2,
                right: 2,
              }}
            />
          </ImageBackground>
        </View>
      </ImageBackground>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
        }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={16}
      >
        <View style={{ paddingHorizontal: SIZES.fifteen }}>
          <Text style={[FONTS.boldFont20, { marginTop: SIZES.twenty }]}>
            Tandoori Chicken Pizza
          </Text>

          {/* ========================  RATINGS AND DOLLAR VIEW START======================== */}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: SIZES.ten,
            }}
          >
            <View>
              <StarRating
                disabled
                maxStars={5}
                fullStarColor={COLORS.primary.cherry}
                halfStarColor={COLORS.primary.cherry}
                emptyStarColor={COLORS.primary.cherry}
                starSize={SIZES.twenty}
                rating={3}
                starStyle={{ marginRight: SIZES.five }}
                containerStyle={{
                  width: SIZES.twenty * 2,
                }}
              />
              <Text
                style={[
                  FONTS.mediumFont12,
                  { color: COLORS.primary.cherry, marginTop: SIZES.five },
                ]}
              >
                4 Star Ratings
              </Text>
            </View>
            <View>
              <Text
                style={[FONTS.boldFont24, { color: COLORS.primary.cherry }]}
              >
                750$
              </Text>
              <Text style={[FONTS.regularFont10, { marginTop: SIZES.five }]}>
                / per Portion
              </Text>
            </View>
          </View>

          {/* ========================  RATINGS AND DOLLAR VIEW START======================== */}

          {/* ========================  DESCRIPTION VIEW START======================== */}

          <View style={{ marginVertical: SIZES.ten }}>
            <Text style={[FONTS.boldFont20]}>Description</Text>
            <Text
              style={[
                FONTS.mediumFont10,
                { textAlign: "justify", lineHeight: SIZES.fifteen },
              ]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
              leo non mollis id cursus. Eu euismod faucibus in leo malesuada
            </Text>
          </View>

          {/* ========================  DESCRIPTION VIEW END======================== */}

          <View style={[STYLES.horLine, {}]} />

          {/* ======================== CUSTOMIZE ORDER VIEW START ======================== */}

          <View style={{ marginTop: SIZES.twenty }}>
            <Text style={[FONTS.boldFont20]}>Customize Your Order</Text>

            {/* ======================== SIZE OF PORTION VIEW START ======================== */}

            <View
              style={{
                marginTop: SIZES.twenty,
                width: "100%",

                paddingHorizontal: SIZES.fifteen,
                // height: 60,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: SIZES.five,
              }}
            >
              <Text
                style={[
                  FONTS.lightFont16,
                  {
                    color: COLORS.normal.black,
                  },
                ]}
              >
                - Select the size of portion -
              </Text>
              <TouchableOpacity
                style={{}}
                activeOpacity={0.7}
                onPress={() => {
                  setPortionCollapsed(!portionCollapsed);
                }}
              >
                <Icon
                  name={portionCollapsed ? "right" : "down"}
                  type={FONTFAMILY.AntDesign}
                  style={{
                    color: portionCollapsed
                      ? COLORS.normal.charcoalGrey
                      : COLORS.normal.black,
                    fontSize: SIZES.fifteen,
                  }}
                />
              </TouchableOpacity>
            </View>

            {/* order detail View Using Collaps and expands Animation  */}

            <Animated.View
              style={{
                maxHeight: portionHeight,
                opacity: portionHeight,
                paddingHorizontal: SIZES.fifteen,
              }}
            >
              <RendorSizeOfPortion title="Large" />
              <RendorSizeOfPortion title="Medium " />
              <RendorSizeOfPortion title="Samll" />
            </Animated.View>
            {/* ======================== SIZE OF PORTION VIEW END ======================== */}

            {/* ======================== SSELECT INGREDIENTS VIEW START ======================== */}

            <View
              style={{
                marginTop: SIZES.twenty,
                width: "100%",

                paddingHorizontal: SIZES.fifteen,
                // height: 60,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: SIZES.five,
              }}
            >
              <Text
                style={[
                  FONTS.lightFont16,
                  {
                    color: COLORS.normal.black,
                  },
                ]}
              >
                - Select the ingredients -
              </Text>
              <TouchableOpacity
                style={{}}
                activeOpacity={0.7}
                onPress={() => {
                  ingredientsToggle();
                }}
              >
                <Icon
                  name={ingredientsCollapsed ? "right" : "down"}
                  type={FONTFAMILY.AntDesign}
                  style={{
                    color: ingredientsCollapsed
                      ? COLORS.normal.charcoalGrey
                      : COLORS.normal.black,
                    fontSize: SIZES.fifteen,
                  }}
                />
              </TouchableOpacity>
            </View>
            <Animated.View
              style={{
                maxHeight: ingredientsHeight,
                opacity: ingredientsHeight,
                paddingHorizontal: SIZES.fifteen,
              }}
            >
              <RendorIngredients title="Option1" />
              <RendorIngredients title="Option2" />
              <RendorIngredients title="Option3" />
              <RendorIngredients title="Option4" />
            </Animated.View>
            {/* ======================== SSELECT INGREDIENTS VIEW END ======================== */}
          </View>

          {/* ======================== NUMBER OF PORTION VIEW START ======================== */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: SIZES.twenty,
            }}
          >
            <Text style={[FONTS.boldFont20]}>Number of Portions</Text>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: COLORS.primary.cherry,
                  borderRadius: SIZES.ten,
                  paddingHorizontal: SIZES.ten,
                  paddingVertical: SIZES.five - 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onPress={() => {}}
              >
                <Icon
                  type={FONTFAMILY.AntDesign}
                  name="minus"
                  style={{ fontSize: SIZES.twenty, color: COLORS.normal.white }}
                />
              </TouchableOpacity>

              <View
                style={{
                  backgroundColor: COLORS.normal.white,
                  borderRadius: SIZES.ten,
                  paddingHorizontal: SIZES.ten,
                  paddingVertical: SIZES.five - 3,
                  borderWidth: 1,
                  borderColor: COLORS.primary.cherry,
                  marginHorizontal: SIZES.ten,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text style={[FONTS.lightFont10]}>{portionCount}</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {}}
                style={{
                  backgroundColor: COLORS.primary.cherry,
                  borderRadius: SIZES.ten,
                  paddingHorizontal: SIZES.ten,
                  paddingVertical: SIZES.five - 3,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Icon
                  type={FONTFAMILY.AntDesign}
                  name="plus"
                  style={{ fontSize: SIZES.twenty, color: COLORS.normal.white }}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* ======================== NUMBER OF PORTION VIEW END ======================== */}
        </View>

        {/* ======================== TOTAL PRICE VIEW START ======================== */}
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            marginTop: SIZES.twenty * 2.7,
            // backgroundColor: 'red',
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary.cherry,
              position: "absolute",
              height: SIZES.twenty * 9,
              width: "30%",
              borderTopRightRadius: SIZES.twenty * 2.5,
              borderBottomRightRadius: SIZES.twenty * 2.5,

              left: 0,
            }}
          />
          <View
            style={[
              STYLES.shadow,
              {
                backgroundColor: COLORS.normal.white,
                alignSelf: "center",
                width: "80%",
                paddingVertical: SIZES.fifteen,
                borderTopLeftRadius: SIZES.twenty * 1.2,
                borderTopRightRadius: SIZES.ten,
                borderBottomLeftRadius: SIZES.twenty * 1.2,
                borderBottomRightRadius: SIZES.ten,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <View>
              <Text style={[FONTS.boldFont20]}>Total Price</Text>
              <Text style={[FONTS.boldFont20, { marginVertical: SIZES.ten }]}>
                LKR 1500
              </Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: COLORS.primary.cherry,
                  paddingHorizontal: SIZES.twenty * 2,
                  paddingVertical: SIZES.ten,
                  borderRadius: SIZES.twenty,
                }}
                onPress={() => {
                  navigation.navigate(SCREENS.MyCart);
                }}
              >
                <Icon
                  name={"cart"}
                  type={FONTFAMILY.Ionicons}
                  style={{
                    color: COLORS.normal.white,
                    fontSize: SIZES.fifteen,
                    // marginRight: SIZES.twenty,
                    position: "absolute",
                    left: SIZES.ten,
                  }}
                />
                <Text
                  style={[FONTS.boldFont16, { color: COLORS.normal.white }]}
                >
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={[
                STYLES.shadow,
                {
                  backgroundColor: COLORS.normal.white,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: SIZES.ten,
                  borderRadius: SIZES.twentyFive,
                  position: "absolute",
                  right: -SIZES.fifteen,
                },
              ]}
            >
              <Icon
                name={"cart"}
                type={FONTFAMILY.Ionicons}
                style={{
                  color: COLORS.primary.cherry,
                  fontSize: SIZES.twentyFive,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* ======================== TOTAL PRICE VIEW END ======================== */}
    </View>
  );
}

const styles = StyleSheet.create({});
