import { Icon } from "native-base";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartHeader from "../../components/CartHeader";
import CustomButton from "../../components/CustomButton";
import ThankyouModal from "../../components/modals/ThankyouModal";
import {
  STYLES,
  FONTFAMILY,
  COLORS,
  SIZES,
  FONTS,
  IMAGES,
  SCREENS,
} from "../../constants/theme";

export default function CheckOut({ navigation }) {
  const [payOption, setpayOption] = useState("onCash");
  const [showModal, setshowModal] = useState(false);

  const RendorRow = ({ color, fonts, rightText, leftText, style }) => {
    return (
      <View
        style={[
          style,
          {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          },
        ]}
      >
        <Text style={[fonts ? fonts : FONTS.mediumFont16]}>{leftText}</Text>
        <Text
          style={[
            FONTS.boldFont16,
            { color: color ? color : COLORS.normal.black },
          ]}
        >
          {rightText}
        </Text>
      </View>
    );
  };

  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}>
      <CartHeader tittle={"Check Out"} noCart isBackArrow />

      <View style={{ flex: 1 }}>
        <Text
          style={[
            FONTS.mediumFont12,
            { color: COLORS.normal.brownGrey, marginTop: SIZES.twenty },
          ]}
        >
          Delivery Address
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <Text
            style={[
              FONTS.semiBoldFont18,
              { flex: 1, color: COLORS.normal.black },
            ]}
          >
            653 Nostrand Ave., Brooklyn, NY 11216
          </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => {
              navigation.navigate(SCREENS.AddLocation);
            }}
          >
            <Text
              style={[FONTS.semiBoldFont16, { color: COLORS.primary.cherry }]}
            >
              Change
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <Text
            style={[FONTS.mediumFont14, { color: COLORS.normal.charcoalGrey }]}
          >
            Payment method
          </Text>

          <TouchableOpacity activeOpacity={0.7}>
            <Text
              style={[FONTS.semiBoldFont16, { color: COLORS.primary.cherry }]}
            >
              + Add Card
            </Text>
          </TouchableOpacity>
        </View>

        {/* ========================  CASH ON DELIEVERY VIEW START======================== */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <View>
            <Text style={[FONTS.mediumFont14]}>Cash on delivery</Text>
            <Text
              style={[
                FONTS.semiBoldFont10,
                { color: COLORS.normal.charcoalGrey, marginTop: SIZES.five },
              ]}
            >
              order amount cannot exceed 20 $
            </Text>
          </View>
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
              setpayOption("onCash");
            }}
          >
            <View
              style={{
                backgroundColor:
                  payOption === "onCash"
                    ? COLORS.primary.cherry
                    : COLORS.normal.transparent,
                height: SIZES.ten - 3,
                width: SIZES.ten - 3,
                borderRadius: SIZES.ten - 3,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* ========================  CASH ON DELIEVERY VIEW END======================== */}

        {/* ========================  CASH ON VISA CARD VIEW START======================== */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={IMAGES.visalogo}
              style={{ height: SIZES.twenty * 2, width: SIZES.twenty * 2 }}
              resizeMode="contain"
            />
            <Text style={[FONTS.mediumFont12]}>**** **** **** 2187</Text>
          </View>
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
              setpayOption("visa");
            }}
          >
            <View
              style={{
                backgroundColor:
                  payOption === "visa"
                    ? COLORS.primary.cherry
                    : COLORS.normal.white,
                height: SIZES.ten - 3,
                width: SIZES.ten - 3,
                borderRadius: SIZES.ten - 3,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* ========================  CASH ON VISA CARD VIEW END======================== */}

        {/* ========================  CASH ON PAY PALL VIEW START======================== */}

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: SIZES.twenty,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              source={IMAGES.paypal}
              style={{ height: SIZES.twenty * 2, width: SIZES.twenty * 2 }}
              resizeMode="contain"
            />
            <Text style={[FONTS.mediumFont12]}>johndoe@email.com</Text>
          </View>
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
              setpayOption("payPall");
            }}
          >
            <View
              style={{
                backgroundColor:
                  payOption === "payPall"
                    ? COLORS.primary.cherry
                    : COLORS.normal.transparent,
                height: SIZES.ten - 3,
                width: SIZES.ten - 3,
                borderRadius: SIZES.ten - 3,
              }}
            />
          </TouchableOpacity>
        </View>
        {/* ========================  CASH ON PAY PALL VIEW END======================== */}

        <RendorRow
          fonts={FONTS.mediumFont14}
          leftText={"Sub Total"}
          rightText={"$68"}
          style={{ marginTop: SIZES.twenty }}
        />
        <RendorRow
          fonts={FONTS.mediumFont14}
          leftText={"Delivery Cost"}
          rightText={"$2"}
          style={{ marginTop: SIZES.ten }}
        />
        <RendorRow
          fonts={FONTS.mediumFont14}
          leftText={"Discount"}
          rightText={"$2"}
          style={{ marginTop: SIZES.ten }}
        />
        <RendorRow
          fonts={FONTS.mediumFont14}
          color={COLORS.normal.black}
          leftText={"Total"}
          rightText={"-$66"}
          style={{ marginTop: SIZES.twenty }}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CustomButton
          label={"Send order"}
          onPress={() => {
            setshowModal(true);
          }}
        />
      </View>

      <ThankyouModal
        onClose={() => {
          setshowModal(false);
        }}
        visible={showModal}
        onOpen={() => {
          setshowModal(true);
        }}
        onBackToHome={() => {
          setshowModal(false);
          setTimeout(() => {
            navigation.navigate(SCREENS.Home);
          }, 1000);
        }}
        onTrackMyOrder={() => {
          setshowModal(false);
          setTimeout(() => {
            navigation.navigate(SCREENS.TrackMyOrder);
          }, 1000);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
