import React, { useContext } from "react";
import { Image, StyleSheet, SafeAreaView, View } from "react-native";
import Avatar from "../basic/Avatar";
import UserContext from "../../auth/UserContext";
import Icon from "../basic/Icon";
import colors from "../../config/colors";
import PostsInput from "../form/PostsInput";

const logo = require("../../../assets/logo-white.png");

export default function Header({ props }) {
  const { user } = useContext(UserContext);

  if (!user) return null;
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.image} source={logo} />
      </View>
      <Avatar source={user.avatar} style={{ width: 50, height: 50 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cameraIconContainer: {
    // flex: 1,

    // marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: colors.primary,
    borderRadius: 15,
  },

  image: {
    width: 50,
    height: 50,
  },
});
