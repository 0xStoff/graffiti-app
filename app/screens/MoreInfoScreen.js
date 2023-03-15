import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import Screen from "../components/basic/Screen";
import colors from "../config/colors";
import { MaterialIcons } from "@expo/vector-icons";
import routes from "../navigator/Routes";
import Avatar from "../components/basic/Avatar";
import Icon from "../components/basic/Icon";
import Badge from "../components/basic/Badge";
import Like from "../components/comments/Like";

// SAME IMAGE IN SLIDER -> OWN COMPONENT /also ICONS LIKE/COMMENT
// SAME HEADER AS IN COMMENTS

const windowWidth = Dimensions.get("window").width;

export default function MoreInfoScreen({ route, navigation }) {
  const details = route.params;

  let imageUrl = "http://192.168.1.115:3000/uploads/" + details.imageUrls[0];
  // adjustsFontSizeToFit={true}
  // numberOfLines={1}
  // console.log(details.imageUrls);

  return (
    <Screen style={{ backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Avatar
          source={details.user[0].avatar}
          style={styles.avatar}
          // container={{ width: 70, marginRight: 10 }}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{details.title}</Text>
          <Text style={styles.subTitle}>{details.location}</Text>
          <Text style={styles.subTitle}>
            {new Date(details.createdAt).toLocaleString()}
          </Text>
          <Text style={styles.subTitle}>von {details.user[0].username}</Text>
        </View>
        <MaterialIcons
          style={styles.icon}
          name="arrow-drop-down"
          size={30}
          color={colors.white}
          onPress={() => navigation.navigate(routes.HOME)}
        />
      </View>

      <View style={styles.favoriteContainer}>
        <View style={{ flexDirection: "row" }}>
          <Like
            likes={[1, 2, 3]}
            styleIcon={{
              backgroundColor: colors.backgroundLight,
              padding: 8,
              borderRadius: 200,
            }}
            styleBadge={{
              backgroundColor: colors.backgroundLight,
              padding: 3,
              borderRadius: 200,
            }}
          />
        </View>

        <Icon
          family="font-awesome"
          container={{
            backgroundColor: colors.backgroundLight,
            padding: 8,
            borderRadius: 200,
            transform: [{ rotateY: "180deg" }],
          }}
          name="comment"
          size={18}
          color={colors.white}
          onPress={() => navigation.navigate(routes.COMMENTS, details)}
        />
      </View>

      <FlatList
        data={details.imageUrls}
        ListHeaderComponent={
          <Text style={styles.text}>{details.description}</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: "http://192.168.1.115:3000/uploads/" + item }}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  // header: { backgroundColor: colors.background, flex: 1 },
  infoContainer: { marginLeft: 10, flex: 1 },
  avatar: {
    width: 70,
    height: 70,
    // borderRadius: 70,
    // marginBottom: 10,
    // marginTop: 50,
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
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    // marginTop: 50,
    height: (windowWidth / 5) * 4,
    // w
  },
  container: {
    backgroundColor: colors.backgroundMedium,
    // marginTop: 50,
    paddingTop: 30,
    paddingLeft: 20,
    paddingBottom: 20,
    // width: "0%",
    alignSelf: "center",
    flexDirection: "row",
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    // borderRadius: 15,
    // justifyContent: "space-evenly",
  },
  icon: {
    // alignSelf: "flex-end",
    // marginTop: -15,
    marginRight: 15,
    // position: "absolute",
    // right: 15,
    // top: 35,
  },
  title: {
    color: colors.white,
    fontFamily: "FuturaStdBold",
    fontSize: 20,
  },
  subTitle: {
    color: colors.secondary,
    paddingRight: 7,
    fontFamily: "FuturaStdRegular",
    fontSize: 10,
  },
  text: {
    paddingTop: 10,
    paddingLeft: 10,
    // hyphens: "auto",
    color: colors.white,
    fontFamily: "FuturaStdRegular",
    fontSize: 14,
  },
});
