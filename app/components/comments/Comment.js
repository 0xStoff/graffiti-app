import React from "react";
import { Text, StyleSheet, View } from "react-native";
import colors from "../../config/colors";
import Avatar from "../basic/Avatar";
import moment from "moment";
import Icon from "../basic/Icon";
import Like from "./Like";

export default function Comment({ item, setInput }) {
  const { avatar, username, loginname } = item.user[0];
  const { _id, comment, createdAt } = item;
  const hasUserLiked = Math.random();

  return (
    <CommentView
      avatar={avatar}
      username={username}
      loginname={loginname}
      comment={comment}
      date={moment(createdAt).fromNow()}
      id={_id}
      hasUserLiked={hasUserLiked}
      onPressReply={() => setInput("@" + username)}
      onPressLike={() => console.log("liked")}
    />
  );
}

const CommentView = ({
  avatar,
  comment,
  username,
  loginname,
  id,
  onPressLike,
  onPressReply,
  hasUserLiked,
  date,
}) => (
  <View
    style={[
      styles.container,
      {
        backgroundColor:
          id < 1 ? "rgba(250,250,250,0.3)" : "rgba(250,250,250,0.05)",
      },
    ]}
  >
    <Avatar source={avatar} />
    <View style={styles.textContainer}>
      <View style={styles.row}>
        <Text style={styles.title}>{username}</Text>
        <Text style={[styles.subTitle, { alignSelf: "center", padding: 2 }]}>
          {loginname}
        </Text>
      </View>
      <Text style={styles.text}>{comment}</Text>
      <View style={[styles.row, { paddingTop: 5 }]}>
        <Text style={styles.subTitle}> {date}</Text>
        <Text style={styles.subTitle} onPress={onPressReply}>
          Reply
        </Text>
        <Like likes={[1, 2, 3]} styleIcon={styles.iconContainer} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(250,250,250,0.05)",
    padding: 20,
    paddingVertical: 25,
    borderRadius: 15,
    marginVertical: 10,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
  },
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  row: { flexDirection: "row" },
  textContainer: { paddingLeft: 10, paddingRight: 5, flex: 1 },

  title: {
    color: colors.white,
    fontFamily: "FuturaStdBold",
    fontSize: 12,
  },
  subTitle: {
    color: colors.secondary,
    paddingRight: 7,
    fontFamily: "FuturaStdRegular",
    fontSize: 10,
  },
  text: {
    color: colors.white,
    fontFamily: "FuturaStdRegular",
    fontSize: 12,
  },
});
