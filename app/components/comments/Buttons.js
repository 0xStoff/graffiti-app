import React from "react";
import colors from "../../config/colors";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Buttons = ({
  showEmojiSelector,
  handleOpenEmjoiSelector,
  onPressSend,
}) => {
  return (
    <>
      <Ionicons
        onPress={onPressSend}
        name="send"
        color={colors.secondary}
        size={25}
      />
      <AntDesign
        onPress={handleOpenEmjoiSelector}
        name="smile-circle"
        color={showEmojiSelector ? "yellow" : colors.secondary}
        size={25}
      />
    </>
  );
};

export default Buttons;
