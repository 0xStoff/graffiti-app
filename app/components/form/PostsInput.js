import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import colors from "../../config/colors";
import AppImagePicker from "../basic/ImagePicker";
// import { useFormikContext } from "formik";
import api from "../../api/client";
import UserContext from "../../auth/UserContext";
import Icon from "../basic/Icon";
import FormInputs from "./FormInputs";

navigator.geolocation = require("@react-native-community/geolocation");

export default function PostsInput({ flatlistRef }) {
  const { user, load } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);

  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);

  const addPost = async () => {
    const data = new FormData();
    data.append("user", user._id);
    data.append("title", inputs.title);
    data.append("description", inputs.description);
    data.append("location", inputs.location);

    images.forEach((image, index) => {
      data.append("images", {
        name: "image" + index,
        type: "image/*",
        uri: image,
      });
    });
    setShowForm(false);
    setInputs({});
    setImages([]);
    flatlistRef.current.scrollToOffset({ animated: true, offset: 0 });

    const result = await api.post("/api/posts/", data);

    load();
  };

  const iconProps = {
    family: "octicons",
    size: 35,
    container: styles.cameraIconContainer,
    color: colors.secondary,
  };

  return (
    <View style={styles.container}>
      {!showForm ? (
        <Icon name="plus" onPress={() => setShowForm(true)} {...iconProps} />
      ) : (
        <>
          <Icon
            name="x"
            onPress={() => {
              setShowForm(false);
              setImages([]);
            }}
            {...iconProps}
          />
          <FormInputs setInputs={setInputs} inputs={inputs} />
        </>
      )}
      {inputs.title && inputs.description && inputs.location && showForm && (
        <AppImagePicker images={images} setImages={setImages} />
      )}
      {images.length > 0 && (
        <Icon name="paper-airplane" onPress={addPost} {...iconProps} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  cameraIconContainer: {
    flex: 1,
    marginVertical: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: 90,
    height: 90,
    backgroundColor: colors.primary,
    borderRadius: 35,
  },
});
