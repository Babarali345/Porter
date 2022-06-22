import { Icon } from "native-base";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CartHeader from "../../../components/CartHeader";
import CustomButton from "../../../components/CustomButton";
import PaymentCardComponant from "../../../components/PaymentCardComponant";
import {
  COLORS,
  FONTFAMILY,
  FONTS,
  height,
  SCREENS,
  SIZES,
  STYLES,
} from "../../../constants";

export default function PaymentDetail({ navigation }) {
  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}>
      <CartHeader tittle={"Payment Details"} isBackArrow />

      <View style={{ marginTop: SIZES.twenty }}>
        <Text style={[FONTS.boldFont18]}>Customize your payment method</Text>

        <View
          style={{
            height: 0.3,
            backgroundColor: COLORS.normal.brownGrey,
            marginTop: SIZES.twenty,
          }}
        />
        <PaymentCardComponant
          onCardPress={() => {
            navigation.navigate(SCREENS.CheckOut);
          }}
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary.cherry,

          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          borderRadius: SIZES.fifty,
          height: height * 0.07,
          position: "absolute",
          bottom: height * 0.08,
          left: SIZES.fifteen,
          right: SIZES.fifteen,
        }}
        activeOpacity={0.7}
      >
        <Icon
          name={"plus"}
          type={FONTFAMILY.Entypo}
          style={{
            color: COLORS.normal.white,
            fontSize: SIZES.twentyFive,
          }}
        />
        <Text
          style={[
            FONTS.boldFont20,
            {
              color: COLORS.normal.white,
              textAlign: "center",
            },
          ]}
        >
          Add another Credit/Debit Card
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
