import React from "react";
import { Text, View, StyleSheet } from "react-native";
import moment from "moment";
import colors from "../../config/colors.js";

export default function Title({ title, location, date }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.location}>
        {`${location} | ${moment(date).fromNow()}`}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flexShrink: 1,
    alignSelf: "center",
  },

  title: {
    color: colors.white,
    paddingRight: 7,
    fontFamily: "FuturaStdBold",
    fontSize: 15,
    paddingBottom: 3,
  },
  location: {
    color: colors.secondary,
    fontFamily: "FuturaStdMedium",
    fontSize: 10,
  },
});
