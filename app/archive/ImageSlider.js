import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";

const { width } = Dimensions.get("window");

const ImageSlider = ({ imageUrls }) => {
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  return (
    // <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <View
      style={[
        styles.imageContainer,
        { width, height: width, borderRadius: 15 },
      ]}
    >
      <ScrollView
        style={styles.image}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        {imageUrls.map((source, i) => (
          <Image
            key={i}
            style={[{ width, height: width, borderRadius: 15 }]}
            source={source}
          />
        ))}
      </ScrollView>
    </View>
    // </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    height: (width / 5) * 4,
  },
});
