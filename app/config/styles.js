import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    fontSize: 11,
    // fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontFamily: "Open Sans",
    color: colors.dark,
  },
};
