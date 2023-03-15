import React from "react";
import { Text, View, StyleSheet } from "react-native";
import colors from "../../config/colors";
import Badge from "../basic/Badge";
import { MaterialIcons } from "@expo/vector-icons";

export default function CommentsHeader({ onPressDown, onPressSort, length }) {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.text}>Comments </Text>
        <Badge
          data={length}
          style={{
            backgroundColor: colors.primary,
            padding: 2,
            borderRadius: 200,
          }}
        />
      </View>

      <View style={{ flexDirection: "row" }}>
        <MaterialIcons
          style={styles.icon}
          name="sort"
          size={25}
          color={colors.white}
          onPress={onPressSort}
        />
        <MaterialIcons
          style={styles.icon}
          name="arrow-drop-down"
          size={30}
          color={colors.white}
          onPress={onPressDown}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingVertical: 30,
    paddingLeft: 40,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundMedium,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    fontFamily: "FuturaStdBold",
    alignSelf: "center",
  },
  icon: {
    alignSelf: "flex-end",
    marginHorizontal: 3,
  },
});
