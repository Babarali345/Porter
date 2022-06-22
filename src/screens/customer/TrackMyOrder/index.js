import React, { useRef, useState } from "react";
import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from "react-native";
import MapView from "react-native-maps";
import CartHeader from "../../../components/CartHeader";
import { COLORS, SCREENS } from "../../../constants";
import Maptheme from "../Home/Maptheme";
import {
  SIZES,
  width,
  height,
  IMAGES,
  FONTFAMILY,
} from "../../../constants/theme";
import { getStatusBarHeight } from "react-native-status-bar-height";
import StarRating from "react-native-star-rating";
import { Icon } from "native-base";
import RiderTrackingCard from "../../../components/RiderTrackingCard";

export default function TrackMyOrder({ navigation }) {
  const mapRef = useRef().current;
  const [region, setregion] = useState({
    latitude: 40.7579747,
    longitude: -73.9855426,
    longitudeDelta: 0.009,
    latitudeDelta: 0.0008,
  });
  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar
        barStyle={"dark-content"}
        translucent
        backgroundColor={COLORS.normal.transparent}
      /> */}

      <MapView
        ref={mapRef}
        mapType="standard"
        showsUserLocation={false}
        region={region}
        customMapStyle={Maptheme}
        showsCompass={true}
        loadingIndicatorColor={COLORS.primary.cherry}
        loadingBackgroundColor={COLORS.primary.navy}
        style={{ flex: 1 }}
      ></MapView>

      {/* ========================  HEADER VIEW START======================== */}

      <View
        style={{
          position: "absolute",
          marginTop:
            Platform.OS === "android"
              ? SIZES.twentyFive * 1.7
              : getStatusBarHeight(true),
          width: width,
          paddingHorizontal: SIZES.fifteen,
        }}
      >
        <CartHeader tittle={"Order Id #14212"} isBackArrow />
      </View>

      {/* ========================  HEADER VIEW END======================== */}

      <RiderTrackingCard
        onChatPress={() => {
          navigation.navigate(SCREENS.Chat);
        }}
        onCallPress={() => {
          Linking.openURL(`tel://0${3113516459}`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
