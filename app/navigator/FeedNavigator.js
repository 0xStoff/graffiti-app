import React, { useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import colors from "../config/colors";
import HomeScreen from "../screens/HomeScreen";
import MoreInfoScreen from "../screens/MoreInfoScreen";
import { StyleSheet, View } from "react-native";
import CommentsScreen from "../screens/CommentsScreen";
import CustomStatusBar from "../components/header/CustomStatusBar";

const Stack = createStackNavigator();

export default function FeedNavigator({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: true,
        headerTintColor: colors.white,
        header: (props) => <CustomStatusBar />,
        headerTitleStyle: { display: "none" },
        headerMode: "screen",
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="More"
        component={MoreInfoScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    backgroundColor: colors.background,
    left: 0,
    right: 0,
    paddingVertical: 10,

    width: "100%",
    zIndex: 1,
  },
});
