import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./display/primaryScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./display/GameScreen1";
export default function App() {
  const [userNum, setuserNum] = useState();

  function pickedNumHandler(pickedNum) {
    setuserNum(pickedNum);
  }

  let screen = <StartScreen onPickNum={pickedNumHandler} />;

  if (userNum) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.mainScreen}>
      <ImageBackground
        source={require("./assets/primary_image/image.jpg")}
        resizeMode="cover"
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
      >
        {screen}
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
