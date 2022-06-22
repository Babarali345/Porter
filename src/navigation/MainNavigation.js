import React, { useEffect, useRef, useState } from "react";
import {
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Icon } from "native-base";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";
import { COLORS, FONTFAMILY, FONTS, SCREENS, SIZES } from "../constants";
import MyTouchableOpacity from "../components/MyTouchableOpacity";
import EditProfile from "../screens/customer/Profile/EditProfile";
import Notifications from "../screens/customer/Notifications";
import Chat from "../screens/customer/Chat/Chat";
import Balance from "../screens/customer/Balance/Balance";
import TermsAndConditions from "../screens/content/TermsAndCondition";
import Faqs from "../screens/content/Faqs";
import Settings from "../screens/customer/Settings";
import LocationNotFound from "../screens/LocationNotFound/LocationNotFound";
import PastOrders from "../screens/customer/Orders/PastOrders";
import NewOrder from "../screens/customer/Orders/NewOrders";
import Dessert from "../screens/customer/Dessert";
import HomeCategory from "../screens/customer/Home/HomeCategory";
import SingleItem from "../screens/customer/SingleItem";
import MyCart from "../screens/customer/Orders/MyCart";
import MyOrderDetail from "../screens/customer/Orders/MyOrderDetail";
import OrderDetail from "../screens/customer/Orders/OrderDetail";
import Inbox from "../screens/Inbox";
import CheckOut from "../screens/Checkout";
import TestMenu from "../screens/customer/ResturantMenu/ResturantMenu";
import Home from "../screens/customer/Home/Home";
import AuthStack from "./AuthStack";
import GroceryStack from "./GroceryStack";
import PickUpStack from "./PickUpStack";
import DelieveryStack from "./DelieveryStack";
import Filter from "../screens/customer/Filter";
import AboutUs from "../screens/content/AboutUs";
import ResturantMenu from "../screens/customer/ResturantMenu/ResturantMenu";
import PaymentDetail from "../screens/customer/PaymentDetail";
import TrackMyOrder from "../screens/customer/TrackMyOrder";
import AddLocation from "../screens/customer/MyAddresses/AddLocation";
import SelectAddress from "../screens/customer/MyAddresses/SelectAddress";
import ViewAllCategory from "../screens/customer/ViewAllCategory/index";

export default function MainNavigation(props) {
  const [showPermission, setShowPermission] = useState(false);
  const [reload, setReload] = useState("Allow Access");
  const Stack = createStackNavigator();

  const mNavigation = useRef();

  useEffect(() => {
    checkPlatfrom();
  }, []);

  const checkPlatfrom = async () => {
    if (Platform.OS === "ios") {
      getPermissionStatus();
    } else {
      androidLocationPermission();
    }
  };

  // Get permission status for iOS
  const getPermissionStatus = () => {
    check(PERMISSIONS.IOS.LOCATION_ALWAYS)
      .then((result) => {
        checkStatusForIos(result);
      })
      .catch((error) => {
        console.log("Get Permision status  =========>", error);
        console.log("Open Modal Setting Button =========>1");
        setShowPermission(true);
      });
  };

  // Check Permision Status if Granted then Get Location if Denied Again Put Request For Allow Location Permission
  const checkStatusForIos = async (result) => {
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log(
          "This feature is not available (on this device / in this context)"
        );
        setShowPermission(true);
        break;
      case RESULTS.DENIED:
        // console.log('The permission has not been requested / is denied but requestable');
        RequestPermission();
        break;
      case RESULTS.LIMITED:
        console.log("The permission is limited: some actions are possible");
        setShowPermission(true);
        break;
      case RESULTS.GRANTED:
        console.log("The permission is granted");
        // getUserAccessToken();

        console.log("open application");
        break;
      case RESULTS.BLOCKED:
        console.log("The permission is BLOCKED");
        console.log("Open Modal Setting Button =========>2");
        WhenInUseLocation();
        break;
    }
  };

  // Request For location Permision in Ios only
  const RequestPermission = async () => {
    request(PERMISSIONS.IOS.LOCATION_ALWAYS).then((result) => {
      console.log(result);
      checkStatusForIos(result);
    });
  };
  // Request For location Permision in Ios only
  const WhenInUseLocation = async () => {
    request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE).then((result) => {
      console.log(result);

      if (result === "granted") {
        checkStatusForIos(result);
      } else if (result === "blocked") {
        setShowPermission(true);
        console.log("Open Modal Setting Button =========>3");
      }
    });
  };

  // Request For location Permision in android only
  const androidLocationPermission = async () => {
    const locationGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    );
    console.log("permission status", locationGranted);
    if (locationGranted === "never_ask_again" || locationGranted === "denied") {
      console.log("Open Modal Setting Button =========>4");
      setShowPermission(true);
    } else {
    }
  };

  if (showPermission) {
    return (
      <View style={{ flex: 1 }}>
        <LocationNotFound />
      </View>
    );
  }

  return (
    <>
      {/* <StatusBar/> */}
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
        backgroundColor={COLORS.primary.cherry}
      />
      <NavigationContainer ref={mNavigation}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: {
              backgroundColor: COLORS.primary.navy,
            },
          }}
          initialRouteName={SCREENS.AuthStack}
        >
          <Stack.Screen name={SCREENS.AuthStack} component={AuthStack} />

          <Stack.Screen name={SCREENS.SingleItem} component={SingleItem} />

          <Stack.Screen
            name={SCREENS.Notifications}
            component={Notifications}
          />

          <Stack.Screen name={SCREENS.Chat} component={Chat} />
          <Stack.Screen name={SCREENS.GroceryStack} component={GroceryStack} />
          <Stack.Screen name={SCREENS.PickUpStack} component={PickUpStack} />
          <Stack.Screen
            name={SCREENS.DelieveryStack}
            component={DelieveryStack}
          />
          <Stack.Screen name={SCREENS.Dessert} component={Dessert} />
          <Stack.Screen name={SCREENS.Filter} component={Filter} />
          <Stack.Screen name={SCREENS.Home} component={Home} />

          <Stack.Screen name={SCREENS.MyCart} component={MyCart} />
          <Stack.Screen
            name={SCREENS.MyOrderDetail}
            component={MyOrderDetail}
          />
          <Stack.Screen name={SCREENS.OrderDetail} component={OrderDetail} />
          <Stack.Screen name={SCREENS.Inbox} component={Inbox} />
          <Stack.Screen name={SCREENS.CheckOut} component={CheckOut} />
          <Stack.Screen
            name={SCREENS.ViewAllCategory}
            component={ViewAllCategory}
          />

          <Stack.Screen
            name={SCREENS.EditProfile}
            component={EditProfile}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name={SCREENS.AboutUs}
            component={AboutUs}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name={SCREENS.Balance}
            component={Balance}
            options={{ title: "Your Balance" }}
          />

          <Stack.Screen
            name={SCREENS.ResturantMenu}
            component={ResturantMenu}
          />
          <Stack.Screen
            name={SCREENS.PaymentDetail}
            component={PaymentDetail}
          />
          <Stack.Screen name={SCREENS.TrackMyOrder} component={TrackMyOrder} />
          <Stack.Screen name={SCREENS.AddLocation} component={AddLocation} />
          <Stack.Screen
            name={SCREENS.SelectAddress}
            component={SelectAddress}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
