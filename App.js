import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./display/primaryScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.mainScreen}>
      <ImageBackground
        source={require("./assets/primary_image/image.jpg")}
        resizeMode="cover"
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
      >
        <StartScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
