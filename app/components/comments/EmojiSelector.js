import React from "react";
import { Animated, Dimensions } from "react-native";
import colors from "../../config/colors";
import EmojiModal from "react-native-emoji-modal";

const { width } = Dimensions.get("window");

const EmojiSelector = ({ fadeHeight, onEmojiSelect }) => (
  <Animated.View
    style={[
      {
        height: fadeHeight,
      },
    ]}
  >
    <EmojiModal
      shortcutColor={colors.secondary}
      activeShortcutColor={colors.white}
      columns={7}
      emojiSize={width / 10}
      headerStyle={{
        color: colors.secondary,
        fontFamily: "FuturaStdBold",
      }}
      searchStyle={{
        backgroundColor: colors.background,
        color: colors.white,
        fontFamily: "FuturaStdMedium",
      }}
      backgroundStyle={{ backgroundColor: colors.primary }}
      containerStyle={{
        flex: 1,
        backgroundColor: colors.primary,
      }}
      onEmojiSelected={(emoji) => {
        onEmojiSelect(emoji);
      }}
    />
  </Animated.View>
);

export default EmojiSelector;
