import { Text, View, StyleSheet } from "react-native";
//* 1 import { Link } from "expo-router";
//* 2 import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          imgSource={PlaceholderImage}
          selectedImage={selectedImage}
        />
        {/* //* 2 <Image source={PlaceholderImage} style={styles.image} /> */}
      </View>
      {/* //* 1 <Link href="/about" style={styles.button}>
        //* Go to About screen
      //* </Link> */}
      <View style={styles.footerContainer}>
        <Button
          theme="primary"
          label="Choose a photo"
          onPress={pickImageAsync}
        />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  imageContainer: {
    flex: 1,
  },

  //* 2
  // image: {
  //   width: 320,
  //   height: 440,
  //   borderRadius: 18,
  // },

  //* 1
  // text: {
  //   color: "#fff",
  // },
  // button: {
  //   fontSize: 20,
  //   textDecorationLine: "underline",
  //   color: "#fff",
  // },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});
