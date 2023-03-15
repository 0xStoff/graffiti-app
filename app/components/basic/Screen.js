import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";
import Constants from "expo-constants";
import colors from "../../config/colors";

export default function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: Constants.statusBarHeight,
  },
  view: {
    flex: 1,
  },
});
