import { Icon } from "native-base";
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import CustomButton from "../../../components/CustomButton";
import MyTouchableOpacity from "../../../components/MyTouchableOpacity";
import {
  COLORS,
  CONSTANTS,
  FONTFAMILY,
  FONTS,
  SCREENS,
  SIZES,
  STYLES,
} from "../../../constants";

export default function SelectAddress({ navigation }) {
  const SELECTEDSECTION = useSelector(
    (state) => state.HomeScreenReducer.SelectedSection
  );
  const RendorAddress = ({ iconName, iconType, onPress }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        style={[
          STYLES.shadow,
          {
            backgroundColor: COLORS.normal.white,
            marginTop: SIZES.twenty,
            borderRadius: SIZES.ten,
            overflow: "hidden",
            borderColor: `${COLORS.normal.charcoalGrey}30`,
            borderWidth: 1,
          },
        ]}
      >
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              backgroundColor: COLORS.primary.cherry,
              padding: SIZES.ten,
            }}
          >
            <Icon
              name={iconName}
              type={iconType}
              style={{
                color: COLORS.normal.white,
                fontSize: SIZES.twenty,
              }}
            />
          </View>
          <Text
            numberOfLines={2}
            style={[
              FONTS.regularFont12,
              { flex: 1, marginStart: SIZES.ten, marginTop: SIZES.five },
            ]}
          >
            Consortium for Common Food Names 2107 Suite 600 Arlington, VA
            22201-3061 USA
          </Text>
        </View>

        <View style={STYLES.horLine} />

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: SIZES.ten,
          }}
        >
          <Icon
            name={"checkcircleo"}
            type={FONTFAMILY.AntDesign}
            style={{
              color: COLORS.primary.cherry,
              fontSize: 20,
            }}
          />
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MyTouchableOpacity>
              <Icon
                name={"edit"}
                type={FONTFAMILY.AntDesign}
                style={{
                  color: COLORS.primary.cherry,
                  fontSize: 20,
                }}
              />
            </MyTouchableOpacity>
            <MyTouchableOpacity>
              <Icon
                name={"cross"}
                type={FONTFAMILY.Entypo}
                style={{
                  color: COLORS.primary.cherry,
                  fontSize: 20,
                  marginStart: SIZES.ten,
                }}
              />
            </MyTouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={STYLES.container}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <Icon
          name="address-book"
          type={FONTFAMILY.FontAwesome}
          style={{ fontSize: SIZES.twenty * 1.2 }}
        />
        <Text style={[FONTS.semiBoldFont20, { marginStart: SIZES.ten }]}>
          Selelect Address
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.fifteen,

          marginTop: SIZES.twenty,
        }}
      >
        <RendorAddress
          iconName={"home"}
          iconType={FONTFAMILY.FontAwesome}
          onPress={() => {
            if (SELECTEDSECTION === CONSTANTS.FoodDelievery) {
              navigation.navigate(SCREENS.DelieveryStack);
            } else {
              navigation.navigate(SCREENS.OnBoarding);
            }
          }}
        />
        <RendorAddress
          iconName={"office-building"}
          iconType={FONTFAMILY.MaterialCommunityIcons}
          onPress={() => {
            if (SELECTEDSECTION === CONSTANTS.FoodDelievery) {
              navigation.navigate(SCREENS.DelieveryStack);
            } else {
              navigation.navigate(SCREENS.OnBoarding);
            }
          }}
        />
        <RendorAddress
          iconName={"work"}
          iconType={FONTFAMILY.MaterialIcons}
          onPress={() => {
            if (SELECTEDSECTION === CONSTANTS.FoodDelievery) {
              navigation.navigate(SCREENS.DelieveryStack);
            } else {
              navigation.navigate(SCREENS.OnBoarding);
            }
          }}
        />
      </View>

      <View
        style={{
          flex: 0.5,
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: SIZES.fifteen,
        }}
      >
        <CustomButton
          label={"Add New Address"}
          style={{
            backgroundColor: COLORS.primary.navy,
            borderRadius: SIZES.ten,
          }}
          onPress={() => {
            navigation.navigate(SCREENS.AddLocation);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
const Data = [
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
