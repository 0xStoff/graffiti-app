import React, { useRef } from "react";
import { StyleSheet, Animated } from "react-native";
import Screen from "../basic/components/Screen";
import colors from "../config/colors";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import { generateData } from "./data";
import { getCloser } from "./utils";

const headerHeight = 58 * 2;

const Messages = () => {
  const data = generateData(25);
  const ref = useRef(null);
  const scrollY = useRef(new Animated.Value(0));

  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: { y: scrollY.current },
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const scrollYClamped = Animated.diffClamp(scrollY.current, 0, headerHeight);
  const translateY = scrollYClamped.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -(headerHeight / 2)],
  });
  const translateYNumber = useRef();
  translateY.addListener(({ value }) => {
    translateYNumber.current = value;
  });

  const handleSnap = ({ nativeEvent }) => {
    const offsetY = nativeEvent.contentOffset.y;
    if (
      !(
        translateYNumber.current === 0 ||
        translateYNumber.current === -headerHeight / 2
      )
    ) {
      if (ref.current) {
        // console.log(ref.current.scrollT);
        const halfHeader = headerHeight / 2;
        const difference = halfHeader + translateYNumber.current;

        ref.current.scrollToOffset({
          offset:
            getCloser(translateYNumber.current, -headerHeight / 2, 0) ===
            -headerHeight / 2
              ? offsetY + difference
              : offsetY - (halfHeader - difference),
        });
      }
    }
  };

  return (
    <Screen>
      {/* <StatusBar backgroundColor={colors.primary} style="light" /> */}
      <Animated.View style={[styles.header, { transform: [{ translateY }] }]}>
        <Header {...{ headerHeight }} />
      </Animated.View>

      <Animated.FlatList
        bounces={false}
        onMomentumScrollEnd={handleSnap}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: headerHeight }}
        ref={ref}
        data={data}
        renderItem={ListItem}
        keyExtractor={(item, index) => `list-item-${index}-${item.color}`}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    backgroundColor: colors.background,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1,
  },
  subHeader: {
    height: headerHeight / 2,
    width: "100%",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});

export default Messages;
