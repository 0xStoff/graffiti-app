import React, { Component } from "react";
import { View, Image, ScrollView, Dimensions, Animated } from "react-native";

const { width } = Dimensions.get("window");

const photos = [
  {
    uri: "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg",
  },
  {
    uri: "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg",
  },
  {
    uri: "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg",
  },
  {
    uri: "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg",
  },
];

export default function Slideshow() {
  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width, height: width }}>
        <ScrollView
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: scrollX } } },
          ])}
          scrollEventThrottle={16}
        >
          {photos.map((source, i) => {
            return (
              <Image key={i} style={{ width, height: width }} source={source} />
            );
          })}
        </ScrollView>
      </View>

      <View style={{ flexDirection: "row" }}>
        {photos.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 10,
                width: 10,
                backgroundColor: "#595959",
                margin: 8,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}

// const Dots = ()=> {}
