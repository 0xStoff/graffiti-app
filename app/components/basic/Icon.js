import React from "react";
import { View, TouchableWithoutFeedback, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  EvilIcons,
  FontAwesome,
  Octicons,
} from "@expo/vector-icons";

export default function Icon({
  name,
  family,
  size,
  color,
  onPress,
  style,
  container,
  activeOpacity = 0.85,
}) {
  return (
    <TouchableOpacity
      style={container}
      activeOpacity={activeOpacity}
      onPress={onPress}
    >
      {/* <View style={container}> */}
      {family === "evil" && (
        <EvilIcons style={style} name={name} size={size} color={color} />
      )}

      {family === "material" && (
        <MaterialIcons style={style} name={name} size={size} color={color} />
      )}
      {family === "font-awesome" && (
        <FontAwesome style={style} name={name} size={size} color={color} />
      )}
      {family === "octicons" && (
        <Octicons style={style} name={name} size={size} color={color} />
      )}
      {/* </View> */}
    </TouchableOpacity>
  );
}
