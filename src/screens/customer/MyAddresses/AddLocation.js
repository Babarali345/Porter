import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
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
import { useNavigation } from "@react-navigation/native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Icon, Image } from "native-base";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MapView, { PROVIDER_GOOGLE, Circle, Marker } from "react-native-maps";
import MapThem from "../Home/Maptheme";

import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";

export default function AddLocation() {
  const [placeHolder, setplaceHolder] = useState("Enter Location");
  const navigation = useNavigation();
  const mapRef = useRef();
  const [Selected, setSelected] = useState(null);
  const dispatcher = useDispatch();

  const [region, setregion] = useState({
    latitude: 40.7579747,
    longitude: -73.9855426,
    longitudeDelta: 0.009,
    latitudeDelta: 0.0008,
  });

  const renderRow = (data, index) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: COLORS.normal.white,
        }}
      >
        <Icon
          type={FONTFAMILY.Ionicons}
          name={"ios-pin-outline"}
          style={{ color: COLORS.primary, fontSize: 28, fontWeigth: "bold" }}
        />
        <View style={{ alignItems: "baseline", marginLeft: SIZES.ten }}>
          <Text style={[FONTS.mediumFont18, { color: COLORS.black }]}>
            {/* {data.description} */}
          </Text>
          <Text style={[FONTS.lightFont14, { color: COLORS.normal.black }]}>
            {data["structured_formatting"]["secondary_text"]}
          </Text>
        </View>
      </View>
    );
  };
  const GooglePlacesInput = (props) => {
    return (
      <GooglePlacesAutocomplete
        placeholder={placeHolder}
        keyboardKeyType={"search"}
        onPress={(data, details = null) => {
          setplaceHolder(data.description);
          setregion({
            latitude: details?.geometry.location.lat,
            longitude: details?.geometry.location.lng,
            longitudeDelta: 0.009,
            latitudeDelta: 0.0008,
          });
          mapRef.current.animateToRegion(
            {
              latitude: details?.geometry.location.lat,
              longitude: details?.geometry.location.lng,
              longitudeDelta: 0.009,
              latitudeDelta: 0.0008,
            },
            2000
          );
        }}
        query={{
          key: "AIzaSyC-MPat5umkTuxfvfqe1FN1ZMSafBpPcpM",
          language: "en",
          types: "",
        }}
        enablePoweredByContainer={false}
        minLength={2}
        keyboardKeyType={"search"}
        fetchDetails={true}
        GooglePlacesSearchQuery={{ rankby: "distance" }}
        GooglePlacesDetailsQuery={{ fields: ["formatted_address", "geometry"] }}
        renderDescription={(row) => row.description}
        currentLocation={true}
        currentLocationLabel="Current location"
        nearbyPlacesAPI="GooglePlacesSearch"
        predefinedPlaces={[]}
        debounce={200}
        google
        renderRow={renderRow}
        renderDescription={(row) => row.description}
        renderRightButton={() => (
          <MyTouchableOpacity
            style={{
              backgroundColor: COLORS.primary.cherry,
              flex: 0.13,
              padding: SIZES.ten,
              height: SIZES.twenty * 2.5,
              borderRadius: SIZES.ten,
              alignItems: "center",
              justifyContent: "center",
              right: -5,
            }}
            onPress={() => {
              navigation.navigate(SCREENS.SelectAddress);
            }}
          >
            <Icon
              type={FONTFAMILY.AntDesign}
              name={"edit"}
              style={{
                color: COLORS.normal.white,
                fontSize: SIZES.twenty + 5,
              }}
            />
          </MyTouchableOpacity>
        )}
        renderLeftButton={() => (
          <Icon
            type={FONTFAMILY.EvilIcons}
            name={"search"}
            style={{
              color: COLORS.normal.black,
              fontSize: SIZES.twenty + 5,
              paddingLeft: SIZES.five,
            }}
          />
        )}
        styles={{
          container: {
            backgroundColor: COLORS.white,
            overflow: "hidden",
          },
          row: {
            backgroundColor: COLORS.transparent,
          },
          textInputContainer: {
            backgroundColor: "white",
            alignItems: "center",
            borderRadius: SIZES.ten,
            paddingHorizontal: SIZES.five,
            overflow: "hidden",
          },
          textInput: [
            {
              color: COLORS.normal.black,
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              flex: 1,
              fontFamily: FONTFAMILY.Bold,
              fontSize: SIZES.h18,
              textTransform: "capitalize",
              marginLeft: SIZES.ten,
            },
          ],
          listView: {
            backgroundColor: COLORS.normal.transparent,
          },
          separator: {
            borderColor: COLORS.normal.brownGrey,
            borderBottomWidth: 0.8,
            backgroundColor: COLORS.normal.transparent,
          },
          description: {
            backgroundColor: COLORS.transparent,
          },
        }}
      />
    );
  };

  const AddressType = ({ title, icon, type, onPress, selected }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={{
          backgroundColor:
            Selected === selected ? COLORS.primary.cherry : COLORS.normal.white,
          paddingVertical: SIZES.fifteen,
          paddingHorizontal: SIZES.twenty * 1.5,
          borderRadius: SIZES.ten,
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor:
            Selected === selected ? COLORS.primary.cherry : COLORS.normal.black,
        }}
      >
        <Icon
          type={type}
          name={icon}
          style={{
            color:
              Selected === selected ? COLORS.normal.white : COLORS.normal.black,
            fontSize: SIZES.body12,
          }}
        />
        <Text
          style={{
            fontSize: SIZES.body12,
            fontFamily: FONTFAMILY.Medium,
            marginTop: SIZES.five,
            marginLeft: SIZES.five,
            color:
              Selected === selected ? COLORS.normal.white : COLORS.normal.black,
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

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
        customMapStyle={MapThem}
        showsCompass={true}
        loadingIndicatorColor={COLORS.primary}
        loadingBackgroundColor={COLORS.RGBprimary}
        style={{ flex: 1 }}
      ></MapView>

      {/* ========================  HEADER VIEW START======================== */}

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          alignSelf: "center",
          position: "absolute",
          top:
            Platform.OS === "android" ? SIZES.twenty : getStatusBarHeight(true),
        }}
      >
        <Icon
          name="my-location"
          type={FONTFAMILY.MaterialIcons}
          style={{ fontSize: SIZES.twenty * 1.2 }}
        />
        <Text style={[FONTS.semiBoldFont20, { marginStart: SIZES.ten }]}>
          Selelect Address
        </Text>
      </View>
      {/* ========================  HEADER VIEW END======================== */}

      {/* ======================== GOOGLE AUTOCOMPLETE VIEW START======================== */}

      <View style={styles.header}>
        {/* <HeaderOne title={"Add Locations"} /> */}
        <View
          style={{
            backgroundColor: COLORS.normal.white,

            margin: SIZES.twenty,
            borderRadius: SIZES.ten,
            overflow: "hidden",
          }}
        >
          <GooglePlacesInput />
        </View>
      </View>

      {/* ======================== GOOGLE AUTOCOMPLETE VIEW START======================== */}

      {/* ======================== BOTTOM SHEET VIEW START======================== */}

      <View
        style={[
          STYLES.shadow,
          {
            position: "absolute",
            bottom: 0,
            width: "100%",
            paddingHorizontal: SIZES.ten,
            backgroundColor: COLORS.normal.white,
            padding: SIZES.twenty,
            borderTopLeftRadius: SIZES.twenty * 1.5,
            borderTopRightRadius: SIZES.twenty * 1.5,
          },
        ]}
      >
        <Text
          style={[
            FONTS.semiBoldFont18,
            { paddingLeft: SIZES.ten, marginVertical: SIZES.fifteen },
          ]}
        >
          {placeHolder}
        </Text>

        <View
          style={{ height: 0.3, backgroundColor: COLORS.normal.brownGrey }}
        />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.ten,
            paddingVertical: SIZES.fifteen,
            justifyContent: "space-between",
          }}
        >
          <AddressType
            title="Home"
            icon="home"
            type={FONTFAMILY.Ionicons}
            selected={0}
            onPress={() => {
              setSelected(0);
            }}
          />

          <AddressType
            title="Work"
            icon="briefcase"
            type={FONTFAMILY.Ionicons}
            selected={1}
            onPress={() => {
              setSelected(1);
            }}
          />
          <AddressType
            title="other"
            icon="question"
            type={FONTFAMILY.FontAwesome}
            selected={2}
            onPress={() => {
              setSelected(2);
            }}
          />
        </View>

        <CustomButton
          label={"Confirm Address"}
          style={{
            backgroundColor: COLORS.primary.navy,
            borderRadius: SIZES.ten,
            marginVertical: SIZES.twenty,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>

      {/* ======================== BOTTOM SHEET VIEW END======================== */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    width: "100%",
    top:
      Platform.OS === "android"
        ? SIZES.twenty * 2.5
        : getStatusBarHeight(true) + SIZES.twenty * 1.5,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.twenty,
    width: "80%",
    height: height * 0.05,
  },
  markerFixed: {
    position: "absolute",
    top: "50%",
    bottom: "50%",
    alignSelf: "center",
    justifyContent: "center",
  },
});

const Restaurant = [
  {
    latitude: "37.784",
    longitude: "-122.405857",
  },
  {
    latitude: "37.78984",
    longitude: "-122.40517",
  },
  {
    latitude: "37.7884",
    longitude: "-122.409117",
  },
  {
    latitude: "37.78184",
    longitude: "-122.40897",
  },
];
