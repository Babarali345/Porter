import { Icon } from "native-base";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
  FlatList,
  ScrollView,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import StarRating from "react-native-star-rating";
import Modal from "react-native-modal";
import { useSelector, useDispatch } from "react-redux";

import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  FONTS,
  height,
  IMAGES,
  SCREENS,
  SIZES,
  STYLES,
  width,
} from "../../../constants";
import CartHeader from "../../../components/CartHeader";
import Row from "../../../components/Row";
import { Animations } from "../../../constants/Animations";
import { ScrollTabBar } from "../../../components/CustomTabBar";
import Card from "../../../components/Card";
import OrderDetailCompnanat from "../../../components/OrderDetailCompnanat";
import CircularImage from "../../../components/CircularImage";
import CustomButton from "../../../components/CustomButton";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";

export default function OrderDetail({ navigation }) {
  const [seletedTab, setSelectedTab] = useState("OrderStatus");

  const SELECTEDSECTION = useSelector(
    (state) => state.HomeScreenReducer.SelectedSection
  );

  console.log("SELECTEDSECTION", SELECTEDSECTION);
  var d = new Date();
  var dayName = d.toString().split(" ")[0];
  const [isLogoutModalVisible, setisLogoutModalVisible] = React.useState(false);
  const toggleModal = () => {
    setisLogoutModalVisible(!isLogoutModalVisible);
  };
  const animation = Animations[14];
  console.log(animation);

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [TabLoading, setTabLoading] = useState(false);

  const [routes] = useState([
    { key: "OrderStatus", title: "Order Status" },
    { key: "OrderSummary", title: "Order Summary" },
  ]);

  const renderScene = SceneMap({
    OrderStatus: () => (
      <View style={{ flex: 1, backgroundColor: COLORS.normal.white }}>
        <View style={{ marginTop: SIZES.twenty }}>
          <CustomOrderStatus
            title={"Send to the Restaurent"}
            descriptopn={"Good! Your order is being recieved"}
          />
          <CustomOrderStatus
            title={"Preparing Your Order"}
            descriptopn={"Relax! Your Order is preparing "}
          />
          <CustomOrderStatus
            title={"Order Ready"}
            descriptopn={"Relax! Waiting For Rider to pick up your order"}
          />
          <CustomOrderStatus
            title={"Picked up & Coming towards you"}
            descriptopn={"Your Rider Is on his way!"}
            track
          />
          <CustomOrderStatus
            title={"Your Rider is Arrived"}
            descriptopn={"Kindly collect your food"}
          />
          <CustomOrderStatus
            title={"Order Delivered"}
            descriptopn={"We are always here for you!"}
            islast
          />
        </View>
      </View>
    ),
    OrderSummary: () => (
      <ScrollView
        style={{}}
        contentContainerStyle={{
          backgroundColor: COLORS.normal.white,
          paddingHorizontal: SIZES.fifteen,
          paddingBottom: height * 0.1,
        }}
        scrollEventThrottle={16}
        bounces={false}
      >
        <CustomOrderSummary />
      </ScrollView>
    ),
  });

  const CustomOrderStatus = ({ title, descriptopn, track, islast }) => {
    return (
      <View
        style={{
          height: SIZES.fifty,
          flexDirection: "row",
          paddingHorizontal: SIZES.fifteen,
          alignItems: "center",
          //   backgroundColor: COLORS.normal.white,
        }}
      >
        <View style={{ alignItems: "center" }}>
          {!islast && (
            <View
              style={{
                height: "100%",
                width: 0.5,
                backgroundColor: COLORS.primary.cherry,
                position: "absolute",
              }}
            />
          )}

          <View
            style={{
              height: SIZES.ten,
              width: SIZES.ten,
              // borderRadius: SIZES.five,
              backgroundColor: "red",
            }}
          />
        </View>

        <View style={{ marginStart: SIZES.ten }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[FONTS.mediumFont16]}> {title}</Text>
            {track && (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  backgroundColor: COLORS.primary.cherry,
                  alignItems: "center",
                  justifyContent: "center",
                  paddingHorizontal: SIZES.ten,
                  paddingVertical: SIZES.five,
                  borderRadius: SIZES.ten,
                  marginLeft: SIZES.twenty * 2,
                }}
                onPress={() => {
                  navigation.navigate(SCREENS.TrackMyOrder);
                }}
              >
                <Text
                  style={[FONTS.mediumFont10, { color: COLORS.normal.white }]}
                >
                  Track
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <Text
            style={[FONTS.regularFont08, { color: COLORS.normal.charcoalGrey }]}
          >
            {"  "}
            {descriptopn}
          </Text>
        </View>
      </View>
    );
  };

  const CustomOrderSummary = ({ title, descriptopn, track }) => {
    return (
      <View style={{ marginTop: SIZES.twenty }}>
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <Text style={[FONTS.boldFont16, { color: COLORS.normal.black }]}>
            Total
          </Text>
          <Text style={[FONTS.boldFont24, { color: COLORS.primary.cherry }]}>
            $70
          </Text>
        </View>

        <View
          style={[
            STYLES.shadow,
            {
              marginTop: SIZES.fifteen,
              alignItems: "center",
              padding: SIZES.ten,
              borderRadius: SIZES.ten,
              borderWidth: 1,
              borderColor: `${COLORS.normal.brownGrey}50`,
            },
          ]}
        >
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <CircularImage
              uri={
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
              }
              imageStyle={{
                height: SIZES.twentyFive * 2,
                width: SIZES.twentyFive * 2,
                borderRadius: SIZES.twentyFive * 2,
                marginBottom: SIZES.five,
              }}
            />
            <Text
              style={[
                FONTS.mediumFont14,
                { marginTop: SIZES.five, color: COLORS.normal.charcoalGrey },
              ]}
            >
              Robert Johnson
            </Text>
            <StarRating
              disabled
              maxStars={5}
              fullStarColor={COLORS.normal.golden}
              halfStarColor={COLORS.normal.golden}
              emptyStarColor={COLORS.normal.golden}
              starSize={SIZES.twenty}
              rating={3}
              starStyle={{ marginRight: SIZES.five }}
              containerStyle={{
                //   width: SIZES.twenty * 2,
                marginVertical: SIZES.five,
              }}
            />
            <Text
              style={[
                FONTS.semiBoldFont08,
                { color: COLORS.normal.charcoalGrey },
              ]}
            >
              Delivery Boy
            </Text>
          </View>
          <Text
            style={[
              FONTS.mediumFont14,
              {
                marginTop: SIZES.five,
                color: COLORS.normal.charcoalGrey,
                marginVertical: SIZES.five,
              },
            ]}
          >
            Your Order Will At Your's Place In
          </Text>
          <Text
            style={[
              FONTS.semiBoldFont20,
              { marginTop: SIZES.five, color: COLORS.primary.cherry },
            ]}
          >
            02m 36s
          </Text>
        </View>
        <CustomButton
          label={"Cancel Order"}
          style={{ marginTop: SIZES.twenty, width: "80%", alignSelf: "center" }}
          onPress={() => {
            setisLogoutModalVisible(true);
          }}
        />
      </View>
    );
  };

  //   const renderItem = ({ item, index }) => (
  //     <CustomCard item={item} index={index} animation={animation} />
  //   );
  return (
    <View style={[STYLES.container, {}]}>
      <CartHeader tittle={"Orders Details"} isBackArrow noCart />

      {/* ======================== LOGO ADDRESS RATINGS VIEW START ======================== */}

      <Row
        style={{
          alignItems: "center",
          marginTop: SIZES.twenty,
          paddingHorizontal: SIZES.fifteen,
        }}
      >
        <Image source={IMAGES.PizaPieLogo} style={styles.restaurantImage} />
        <View style={{ marginLeft: SIZES.ten }}>
          <Text style={[FONTS.mediumFont18, { marginBottom: SIZES.ten * 0.6 }]}>
            Pizza Pie Me
          </Text>

          <Text
            style={[
              FONTS.mediumFont12,
              { color: COLORS.normal.brownGrey, marginVertical: SIZES.five },
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
                FONTS.mediumFont12,
                {
                  color: COLORS.normal.brownGrey,
                  marginLeft: SIZES.five * 0.3,
                },
              ]}
            >
              Deliver Time 25-30mins
            </Text>

            <Row style={{ alignItems: "center", marginStart: SIZES.twenty }}>
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
                  FONTS.mediumFont12,
                  { color: COLORS.normal.brownGrey, marginStart: SIZES.five },
                ]}
              >
                4.6
              </Text>
            </Row>
          </Row>
        </View>
      </Row>
      {/* ======================== LOGO ADDRESS RATINGS VIEW END ======================== */}

      <TabView
        renderTabBar={ScrollTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        style={{ width: width }}
        initialLayout={{ width: layout.width }}
      />

      {/* Start of Cancel Order Modal */}
      <Modal
        isVisible={isLogoutModalVisible}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
      >
        <View
          style={{
            backgroundColor: COLORS.normal.white,
            // padding: SIZES.ten * 2,
            borderRadius: SIZES.ten,
            borderWidth: 1.5,
            borderColor: COLORS.primary.cherry,
          }}
        >
          <View
            style={{
              backgroundColor: COLORS.primary.cherry,
              paddingVertical: SIZES.ten,
            }}
          >
            <Text
              style={[
                STYLES.headingText,
                {
                  color: COLORS.normal.white,
                  marginTop: SIZES.five,
                  textAlign: "center",
                },
              ]}
            >
              Cancel Order
            </Text>
          </View>
          <Text
            style={[
              STYLES.mediumText,
              { marginVertical: SIZES.twentyFive, textAlign: "center" },
            ]}
          >
            Are you sure you want to logout?
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              paddingVertical: SIZES.ten,
            }}
          >
            <MyTouchableOpacity
              onPress={() => {
                toggleModal();
                setTimeout(() => {
                  switch (SELECTEDSECTION) {
                    case CONSTANTS.FoodDelievery:
                      navigation.navigate(SCREENS.DelieveryStack);
                      break;

                    case CONSTANTS.PickUp:
                      navigation.navigate(SCREENS.PickUpStack);
                      break;
                    case CONSTANTS.Grocery:
                      navigation.navigate(SCREENS.GroceryStack);
                      break;
                  }
                }, 1000);
              }}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: "center",
                marginEnd: SIZES.five,
                backgroundColor: COLORS.primary.cherry,
                borderRadius: SIZES.ten,
              }}
            >
              <Text style={[STYLES.mediumText, { color: COLORS.normal.white }]}>
                Yes
              </Text>
            </MyTouchableOpacity>
            <MyTouchableOpacity
              onPress={() => toggleModal()}
              style={{
                padding: SIZES.ten,
                width: SIZES.fifty,
                alignItems: "center",
                marginStart: SIZES.five,
                backgroundColor: COLORS.primary.cherry,
                borderRadius: SIZES.ten,
              }}
            >
              <Text style={[STYLES.mediumText, { color: COLORS.normal.white }]}>
                No
              </Text>
            </MyTouchableOpacity>
          </View>
        </View>
      </Modal>
      {/* End of Cancel Order Modal */}
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,

    backgroundColor: COLORS.primary,
  },
  continerView: {
    flex: 1,
    backgroundColor: "#ebf2fa",
    // borderTopLeftRadius: SIZES.twenty,
    // borderTopRightRadius: SIZES.twenty,
    paddingHorizontal: SIZES.fifteen,
  },
  customButton: {
    backgroundColor: COLORS.white,
    marginHorizontal: SIZES.ten,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: SIZES.ten,
    borderColor: COLORS.primary,
    borderWidth: 1,
    paddingVertical: SIZES.ten,
    paddingHorizontal: SIZES.ten,
  },
  customCard: {
    // height: height * 0.25,
    backgroundColor: COLORS.white,
    margin: SIZES.ten,
    // paddingHorizontal: SIZES.ten,
    // paddingVertical: SIZES.ten,
    borderRadius: SIZES.ten,
    borderWidth: 0.82,
    borderColor: COLORS.primary,
  },
  orderNowButton: {
    backgroundColor: COLORS.primary,
    alignSelf: "flex-end",
    padding: SIZES.ten * 1.4,
    margin: SIZES.ten,
    borderRadius: SIZES.ten,
    // marginHorizontal: ,
  },
});

const Data = [
  {
    id: 1,
    status: "pending",
  },
  {
    id: 2,
    status: "completed",
  },
  {
    id: 3,
    status: "on the way",
  },
  {
    id: 1,
    status: "pending",
  },
  {
    id: 1,
    status: "cancelled",
  },
];

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
