import { Text, View, StyleSheet } from "react-native";
//* 1 import { Link } from "expo-router";
//* 2 import { Image } from "expo-image";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
        {/* //* 2 <Image source={PlaceholderImage} style={styles.image} /> */}
      </View>
      {/* //* 1 <Link href="/about" style={styles.button}>
        //* Go to About screen
      //* </Link> */}
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
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
