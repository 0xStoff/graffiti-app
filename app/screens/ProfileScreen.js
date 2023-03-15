import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Screen from "../components/basic/Screen";
import colors from "../config/colors";

export default function ProfileScreen({ navigation, routes }) {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Text style={styles.text}>Profile</Text>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: { paddingTop: 30, paddingHorizontal: 10 },

  text: { fontFamily: "FuturaStdBold", color: colors.white, fontSize: 50 },
});
