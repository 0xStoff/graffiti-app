import React, { useContext, useEffect, useRef, useState } from "react";
import { FlatList, Keyboard } from "react-native";
import Screen from "../components/basic/Screen";
import colors from "../config/colors";
import CommentsHeader from "../components/comments/CommentsHeader";
import Comment from "../components/comments/Comment";
import UserContext from "../auth/UserContext";
import CommmentsInput from "../components/comments/CommentsInput";
import postsApi from "../api/posts";

export default function CommentsScreen({ route, navigation }) {
  const details = route.params;

  const { user, load } = useContext(UserContext);

  const flatlistRef = useRef();
  const [comments, setComments] = useState(details.comments);
  const [sortOrder, setSortOrder] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    flatlistRef.current.scrollToEnd({ animated: true });
    // load();
  }, [comments]);

  const handlePressSort = () => {
    setSortOrder(!sortOrder);
    setComments((curr) => curr.reverse());
  };

  const handlePressSend = async () => {
    Keyboard.dismiss();

    setComments((curr) => [
      ...curr,
      {
        _id: Math.random(),
        user: [user],
        comment: input,
        date: Date.now(),
      },
    ]);

    setInput("");

    const res = await postsApi.postComment(
      {
        comment: input,
        date: Date.now(),
        user: user._id,
      },
      { params: { id: details._id } }
    );
    load();
  };

  return (
    <Screen style={{ backgroundColor: colors.primary, paddingTop: 0 }}>
      <CommentsHeader
        onPressDown={() => navigation.goBack()}
        onPressSort={handlePressSort}
        length={comments.length}
      />
      <FlatList
        // extraData={comments}
        scrollToOverflowEnabled={true}
        ref={flatlistRef}
        data={comments}
        keyExtractor={(data, index) => data._id + index}
        renderItem={({ item }) => <Comment item={item} setInput={setInput} />}
      />
      <CommmentsInput
        handlePressSend={handlePressSend}
        input={input}
        setInput={setInput}
      />
    </Screen>
  );
}
