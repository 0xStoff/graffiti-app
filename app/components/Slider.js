import React, { useRef, useState } from "react";
import { Animated, View, StyleSheet, Image } from "react-native";
import colors from "../config/colors.js";

import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Badge from "./basic/Badge.js";

const windowWidth = Dimensions.get("window").width;

export default function Slider({ urls }) {
  const [imageIndex, setImageIndex] = useState(0);
  let imageUrl = "http://192.168.1.115:3000/uploads/" + urls[imageIndex];

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleImageSlide = (slide) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      if (imageIndex + slide == urls.length) setImageIndex(0);
      else setImageIndex(imageIndex + slide);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }, 400);
  };

  return urls.length === 1 ? (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
    </View>
  ) : (
    <AnimatedContainer fadeAnim={fadeAnim}>
      <Badge data={`${imageIndex + 1} / ${urls.length}`} style={styles.badge} />
      <ArrowIcons
        imageIndex={imageIndex}
        urls={urls}
        handleImageSlide={handleImageSlide}
      />
      <Image
        style={styles.image}
        source={{ uri: imageUrl }}
        resizeMode="cover"
      />
    </AnimatedContainer>
  );
}

const AnimatedContainer = ({ children, fadeAnim }) => (
  <Animated.View
    style={[
      styles.imageContainer,
      {
        opacity: fadeAnim,
      },
    ]}
  >
    {children}
  </Animated.View>
);

const ArrowIcons = ({ imageIndex, urls, handleImageSlide }) => (
  <>
    {imageIndex !== 0 && (
      <MaterialIcons
        onPress={() => handleImageSlide(-1)}
        name="arrow-left"
        size={25}
        style={[styles.icon, { left: 20 }]}
        color={colors.white}
      />
    )}
    {imageIndex + 1 !== urls.length && (
      <MaterialIcons
        onPress={() => handleImageSlide(1)}
        name="arrow-right"
        size={25}
        style={[styles.icon, { right: 20 }]}
        color={colors.white}
      />
    )}
  </>
);

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  badge: {
    position: "absolute",
    right: 20,
    top: 20,
    zIndex: 20,
    backgroundColor: colors.backgroundLight,
    padding: 3,
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    top: "50%",
    zIndex: 30,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    height: (windowWidth / 5) * 4,
  },
});
