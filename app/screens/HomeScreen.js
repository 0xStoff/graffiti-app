import * as React from "react";

import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/basic/Screen";
import Card from "../components/Card";

import routes from "../navigator/Routes";
import { useContext, useRef } from "react";
import UserContext from "../auth/UserContext";
import PostsInput from "../components/form/PostsInput";
import colors from "../config/colors";

export default function HomeScreen({ navigation }) {
  const { data } = useContext(UserContext);

  const flatlistRef = useRef();

  return (
    <Screen>
      <FlatList
        ref={flatlistRef}
        data={data}
        ListHeaderComponent={<PostsInput flatlistRef={flatlistRef} />}
        keyExtractor={(data) => data._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.padding}>
            <Card
              item={item}
              onCardPress={() => navigation.navigate(routes.MORE, item)}
              onCommentPress={() => navigation.navigate(routes.COMMENTS, item)}
            />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  padding: { paddingTop: 15, paddingHorizontal: 10 },
});
