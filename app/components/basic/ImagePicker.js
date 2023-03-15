import React, { useState } from "react";
import { Image, View, Dimensions, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "./Icon";
import colors from "../../config/colors";
import { TouchableOpacity } from "react-native";

const windowWidth = Dimensions.get("window").width;

export default function AppImagePicker({ images, setImages }) {
  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // const requestPermission = async () => {
  //   const { granted } = await Imagepicker.requestMediaLibraryPermissionsAsync();
  //   if (!granted) alert("You need to enable permissions to access the library");
  // };

  const pickImage = async (uri) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
    });

    if (!result.cancelled) {
      if (uri)
        setImages((curr) => [
          ...curr.filter((imageUri) => imageUri !== uri),
          result.uri,
        ]);
      else setImages((curr) => [...curr, result.uri]);
    }
  };

  const removeImage = (uri) =>
    setImages((curr) => curr.filter((imageUri) => imageUri !== uri));

  return (
    <View style={styles.container}>
      {!images.length && (
        <Icon
          onPress={pickImage}
          family="octicons"
          name="device-camera"
          size={40}
          container={styles.cameraIconContainer}
          color={colors.secondary}
        />
      )}
      {images.map((uri, index) => (
        <TouchableOpacity
          key={uri + index}
          activeOpacity={0.8}
          onPress={() => pickImage(uri)}
        >
          <Icon
            onPress={() => removeImage(uri)}
            family="octicons"
            name="x"
            size={15}
            container={styles.closeIconContainer}
            color={colors.secondary}
          />
          {images.length === index + 1 && (
            <Icon
              onPress={pickImage}
              family="octicons"
              name="plus"
              size={15}
              container={styles.addIconContainer}
              color={colors.secondary}
            />
          )}

          <Image source={{ uri }} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // flexDirection: "row",
  },
  closeIconContainer: {
    position: "absolute",
    zIndex: 20,
    right: 15,
    top: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  addIconContainer: {
    position: "absolute",
    zIndex: 20,
    right: 50,
    top: 20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 25,
    height: 25,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  cameraIconContainer: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    backgroundColor: colors.primary,
    borderRadius: 35,
  },
  image: {
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
    height: (windowWidth / 5) * 4,
  },
});
