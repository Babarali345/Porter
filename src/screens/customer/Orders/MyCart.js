import { Icon } from "native-base";
import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Platform,
} from "react-native";
import CartHeader from "../../../components/CartHeader";
import OrderDetail from "../../../components/OrderDetailCompnanat";
import QRCode from "react-native-qrcode-svg";
import { COLORS, SCREENS, SIZES, STYLES } from "../../../constants";

export default function MyCart({ navigation }) {
  return (
    <View style={[STYLES.container, { paddingHorizontal: SIZES.fifteen }]}>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
        backgroundColor={COLORS.primary.cherry}
      />
      <CartHeader tittle={"My Cart"} isBackArrow noCart />
      <ScrollView
        contentContainerStyle={{ marginTop: SIZES.twenty }}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        bounces={false}
      >
        <OrderDetail
          buttontxt={"Check Out"}
          onPress={() => {
            navigation.navigate(SCREENS.PaymentDetail);
          }}
        />

        {/* <QRCode value="http://awesome.link.qr" /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
