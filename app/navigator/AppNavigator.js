import React from "react";

import { Platform, StyleSheet } from "react-native";
import colors from "../config/colors";
import { Octicons } from "@expo/vector-icons";
import FeedNavigator from "./FeedNavigator";
import ProfileScreen from "../screens/ProfileScreen";

import CameraScreen from "../components/camera/Camera";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

export default function AppNavigator() {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      tabBarPosition="bottom"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIndicatorStyle: { display: "none" },
        tabBarContentContainerStyle: {
          minHeight: Platform.OS === "ios" ? 70 : 0,
        },
        tabBarItemStyle: { marginTop: Platform.OS === "ios" ? -15 : 0 },
        tabBarStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.white,
          shadowRadius: 2,
        },
        tabBarActiveTintColor: colors.light,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ size = 25, color }) => (
            <Octicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size = 25, color }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ size = 25, color }) => (
            <Octicons name="device-camera" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = ({ size, color }) =>
  StyleSheet.create({
    icon: {
      width: size,
      height: size,
      borderRadius: size,
      backgroundColor: color,
    },
  });
