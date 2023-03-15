import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import routes from "../../navigator/Routes";

export default function Avatar({ source, style, container }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.container, container]}
      onPress={() => navigation.navigate(routes.PROFILE)}
    >
      <Image
        style={[styles.avatar, style]}
        source={{
          uri: `http://192.168.1.115:3000/uploads/${source}`,
        }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 35,
    borderColor: "aliceblue",
    borderWidth: 2,
  },
});
