import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import UserContext from "../../auth/UserContext";
import colors from "../../config/colors";
import Badge from "../basic/Badge";
import Icon from "../basic/Icon";
import postsApi from "../../api/posts";

export default function Like({ postId, likes, styleIcon, styleBadge }) {
  const { user } = useContext(UserContext);

  const [liked, setLiked] = useState(likes);
  const hasUserLiked = liked.some((i) => i === user._id);

  const handleLike = async () => {
    const index = liked.indexOf(user._id);
    if (index === -1) setLiked((curr) => [...curr, user._id]);
    else setLiked((curr) => curr.filter((f) => f !== user._id));
    try {
      const res = await postsApi.likePost(
        {
          user: user._id,
        },
        { params: { id: postId } }
      );
      // console.log(res);
    } catch (error) {}
  };

  return (
    <>
      <Icon
        family="material"
        name="favorite"
        size={20}
        container={[styles.container, styleIcon]}
        onPress={handleLike}
        color={hasUserLiked > 0.5 ? colors.red : colors.white}
      />
      <Badge style={styleBadge} data={liked.length} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
