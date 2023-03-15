import React, { useContext, useRef, useState } from "react";
import { StyleSheet, View, Animated, Keyboard } from "react-native";
import colors from "../../config/colors";
import UserContext from "../../auth/UserContext";
import EmojiSelector from "./EmojiSelector";
import Buttons from "./Buttons";
import AppTextInput from "../basic/AppTextInput";

export default function CommmentsInput({ input, setInput, handlePressSend }) {
  const [showEmojiSelector, setShowEmojiSelector] = useState(false);
  const fadeHeight = useRef(new Animated.Value(0)).current;

  const selectedEmoji = (emoji) => {
    setInput((curr) => curr + emoji);
  };

  const handleOpenEmjoiSelector = () => {
    Animated.timing(fadeHeight, {
      toValue: !showEmojiSelector ? 320 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setShowEmojiSelector(!showEmojiSelector);
  };

  const doSubmit = () => {
    if (showEmojiSelector) {
      setShowEmojiSelector(false);
      handleOpenEmjoiSelector();
    }
    handlePressSend();
  };
  return (
    <>
      <View style={styles.container}>
        <AppTextInput
          multiline={true}
          onChangeText={(e) => setInput(e)}
          value={input}
          placeholder="Type a comment..."
        />
        <Buttons
          handleOpenEmjoiSelector={handleOpenEmjoiSelector}
          showEmojiSelector={showEmojiSelector}
          onPressSend={doSubmit}
        />
      </View>
      <EmojiSelector fadeHeight={fadeHeight} onEmojiSelect={selectedEmoji} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingLeft: 40,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.backgroundMedium,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
