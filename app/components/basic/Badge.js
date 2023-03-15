import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../config/colors";

export default function Badge({ data, style, styleText }) {
  return (
    <View style={[styles.badgeContainer, style]}>
      <Text style={[styles.badge, styleText]}>{data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    fontFamily: "FuturaStdMedium",
    color: colors.white,
    fontSize: 9,
    paddingHorizontal: 5,
    // zIndex: 100,
  },
  badgeContainer: {
    // backgroundColor: "red",
    // marginLeft: 1,
    alignItems: "center",
    alignSelf: "center",
  },
});
