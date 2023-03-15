import React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import Header from "./Header";
import colors from "../../config/colors";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

const CustomStatusBar = () => (
  <View style={styles.container}>
    <MyStatusBar backgroundColor={colors.background} barStyle="light-content" />
    <View style={[styles.header]}>
      <Header />
    </View>
  </View>
);

export default CustomStatusBar;

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  container: {},
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: "#79B45D",
  },
  content: {
    flex: 1,
    backgroundColor: "#33373B",
  },
  header: {
    height: 70,
    backgroundColor: colors.background,
    paddingVertical: 10,
  },
});
