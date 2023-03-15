import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import colors from "../config/colors.js";
import Avatar from "./basic/Avatar.js";
import Title from "./basic/Title.js";

import { useContext } from "react";
import UserContext from "../auth/UserContext";
import Slider from "./Slider.js";
import Badge from "./basic/Badge.js";
import Icon from "./basic/Icon.js";
import Like from "./comments/Like.js";

export default function Card({ onCardPress, onCommentPress, item }) {
  const { user } = useContext(UserContext);

  const [liked, setLiked] = useState(item.likes);

  const hasUserLiked = liked.some((i) => i === user._id);

  const handleLike = () => {
    const index = liked.indexOf(user._id);
    if (index === -1) setLiked((curr) => [...curr, user._id]);
    else setLiked((curr) => curr.filter((f) => f !== user._id));
  };
  return (
    <>
      <TouchableOpacity
        underlayColor="none"
        activeOpacity={0.85}
        onPress={onCardPress}
      >
        <CardView
          item={item}
          avatar={item.user[0].avatar}
          hasUserLiked={hasUserLiked}
          handleLike={handleLike}
          liked={liked}
          onCommentPress={onCommentPress}
        />
      </TouchableOpacity>
    </>
  );
}

const CardView = ({
  item,

  handleLike,
  avatar,
  onCommentPress,
  hasUserLiked,
  liked,
}) => (
  <View style={styles.container}>
    <View style={styles.titleContainer}>
      <Avatar source={avatar} container={{ alignSelf: "center", margin: 10 }} />
      <Title
        title={item.title}
        location={item.location}
        date={item.createdAt}
      />
    </View>
    <Text style={styles.description}>{item.description}</Text>
    <View style={styles.favoriteContainer}>
      <View style={{ flexDirection: "row" }}>
        <Like
          postId={item._id}
          likes={item.likes}
          styleIcon={styles.icon}
          styleBadge={styles.badge}
        />
      </View>
      <Icon
        container={styles.icon}
        family="font-awesome"
        style={{ transform: [{ rotateY: "180deg" }] }}
        name="comment"
        size={18}
        color={colors.white}
        onPress={onCommentPress}
      />
    </View>
    <Slider urls={item.imageUrls} />
  </View>
);

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.backgroundLight,
    padding: 8,
    borderRadius: 200,
  },
  badge: {
    backgroundColor: colors.backgroundLight,
    padding: 3,
    borderRadius: 10,
  },
  favoriteContainer: {
    width: "90%",
    position: "absolute",
    bottom: 20,
    left: 20,
    zIndex: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    width: "100%",
    alignSelf: "center",
    shadowOffset: { width: -1, height: -1 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 15,
    borderColor: "rgba(8,14,29,0.1)",
    borderWidth: 1,
    backgroundColor: colors.primary,
  },
  description: {
    color: colors.white,
    fontFamily: "FuturaStdMedium",
    fontSize: 15,
    paddingHorizontal: 15,
    lineHeight: 18,
  },

  titleContainer: {
    flexDirection: "row",
    paddingTop: 7,
  },
});
