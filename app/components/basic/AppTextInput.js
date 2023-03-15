import React from "react";
import { StyleSheet, TextInput } from "react-native";
import colors from "../../config/colors";

const AppTextInput = ({ ...props }) => (
  <TextInput
    // autoFocus={true}
    // multiline={true}
    placeholderTextColor={colors.secondary}
    style={styles.input}
    {...props}
  />
);

const styles = StyleSheet.create({
  input: {
    color: colors.white,
    width: "80%",
    fontFamily: "FuturaStdMedium",
  },
});

export default AppTextInput;
