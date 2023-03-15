import React, { useState } from "react";
import { StyleSheet } from "react-native";
import colors from "../../config/colors";
import AppTextInput from "../basic/AppTextInput";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

navigator.geolocation = require("@react-native-community/geolocation");

export default function FormInputs({ inputs, setInputs }) {
  return (
    <>
      <AppTextInput
        autofocus={true}
        onChangeText={(e) => setInputs((curr) => ({ ...curr, title: e }))}
        value={inputs.title}
        placeholder="Title"
        style={styles.input}
      />
      <AppTextInput
        multiline={true}
        onChangeText={(e) => setInputs((curr) => ({ ...curr, description: e }))}
        value={inputs.description}
        placeholder="Description"
        style={styles.input}
      />
      <GooglePlacesAutocomplete
        placeholder="Location"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          setInputs((curr) => ({
            ...curr,
            location: data.description || data.name,
          }));
          //   console.log(data);
          // console.log(data.description, details);
        }}
        currentLocation={true}
        currentLocationLabel="Current location"
        query={{
          key: "YOUR-API-KEY",
          language: "de",
          components: "country:ch",
        }}
        styles={{
          poweredContainer: { display: "none" },
          description: { color: colors.white },
          row: { backgroundColor: colors.primary },
        }}
        enableHighAccuracyLocation={true}
        textInputProps={{
          placeholderTextColor: colors.secondary,
          style: styles.input,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: colors.primary,
    color: colors.white,
    borderRadius: 5,
    paddingBottom: 25,
    paddingTop: 25,
    fontSize: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: "100%",
  },
});
