import React, { useState } from "react";
import { Icon } from "native-base";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CircularImage from "../../../components/CircularImage";
import EditText from "../../../components/EditText";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import Row from "../../../components/Row";
import MultiDropdownPicker from "../../../components/MultiDropDownPicker";
import MessageEditText from "../../../components/MessageEditText";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  IMAGES,
  SIZES,
  STYLES,
} from "../../../constants";
import { getStatusBarHeight } from "react-native-status-bar-height";
import CartHeader from "../../../components/CartHeader";
import CustomButton from "../../../components/CustomButton";
import Card from "../../../components/Card";
import UploadPhotoModal from "../../../components/modals/UploadPhotoModal";

export default function EditProfile({ route, navigation }) {
  const [identity, setIdentity] = useState();
  const [visibility, setVisibility] = useState(false);
  const [image, setImage] = useState(" ");
  const { Name, Address, Email, Phone } = route.params.profileData;

  console.log("Image ======= ", image);
  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}>
      {/* <StatusBar
        backgroundColor={COLORS.primary.navy}
        barStyle={"dark-content"}
      /> */}
      <CartHeader tittle={"Profile Edit"} isBackArrow noCart />
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View style={{}}>
          <CircularImage
            uri={
              image === " "
                ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                : image
            }
            imageStyle={{
              height: SIZES.twentyFive * 4,
              width: SIZES.twentyFive * 4,
              borderRadius: SIZES.twentyFive * 4,
            }}
          />

          <TouchableOpacity
            style={[
              STYLES.shadow,
              {
                height: SIZES.fifty * 0.4,
                width: SIZES.fifty * 0.4,
                borderRadius: SIZES.fifty * 0.4,
                position: "absolute",
                bottom: 2.5,
                right: 2.5,
                backgroundColor: COLORS.primary.cherry,
                alignItems: "center",
                justifyContent: "center",
              },
            ]}
            onPress={() => {
              setVisibility(true);
            }}
            activeOpacity={0.7}
          >
            <Icon
              name={"camera"}
              type={FONTFAMILY.EvilIcons}
              style={{
                fontSize: SIZES.twenty,
                color: COLORS.normal.white,
              }}
            />
          </TouchableOpacity>
        </View>
        <Text style={[FONTS.mediumFont14, { marginTop: SIZES.five }]}>
          Hi there Emilia!
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
        contentContainerStyle={{
          paddingTop: SIZES.ten,
          paddingBottom: 150,
        }}
      >
        <View style={{}}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.normal.black,
                marginLeft: SIZES.fifteen * 0.6,
                marginBottom: SIZES.five,
              },
            ]}
          >
            Name
          </Text>
          <EditText placeholder="Name" value={Name} />
        </View>

        <View style={{ marginTop: SIZES.twenty }}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.normal.black,
                marginLeft: SIZES.fifteen * 0.6,
                marginBottom: SIZES.five,
              },
            ]}
          >
            Email Address
          </Text>
          <EditText placeholder="Email Address" value={Email} />
        </View>
        <View style={{ marginTop: SIZES.twenty }}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.normal.black,
                marginBottom: SIZES.five,
                marginLeft: SIZES.fifteen * 0.6,
              },
            ]}
          >
            phone
          </Text>
          <EditText placeholder="Phone Number" value={Phone} />
        </View>
        <View style={{ marginTop: SIZES.twenty }}>
          <Text
            style={[
              FONTS.mediumFont12,
              {
                color: COLORS.normal.black,
                marginBottom: SIZES.five,
                marginLeft: SIZES.fifteen * 0.6,
              },
            ]}
          >
            Address
          </Text>
          <EditText placeholder=" Address" value={Address} />
        </View>

        <CustomButton
          label={"Save"}
          style={{ marginTop: SIZES.twenty * 2 }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </ScrollView>

      <UploadPhotoModal
        visibility={visibility}
        setVisibility={setVisibility}
        isCircle
        onImageSelected={(image) => {
          setImage(image);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

const identities = [
  { id: 1, name: "something" },
  { id: 2, name: "something1" },
  { id: 3, name: "something2" },
];
