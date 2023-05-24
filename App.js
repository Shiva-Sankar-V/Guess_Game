import { ImageBackground, StyleSheet } from "react-native";
import StartScreen from "./display/primaryScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { useFonts } from "expo-font";
import GameScreen from "./display/GameScreen1";
import colors from "./Utilities/colors";
import GameOverScreen from "./display/GameOverScreen";
import AppLoading from "expo-app-loading";

export default function App() {
  const [userNum, setuserNum] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontloaded] = useFonts({
    "font-1": require("./assets/fonts/OpenSans-Regular.ttf"),
    "font-2": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontloaded) {
    return <AppLoading />;
  }
  function pickedNumHandler(pickedNum) {
    setuserNum(pickedNum);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }
  function startNewGameHandler() {
    setuserNum(null);
    setGuessRounds(0);
  }

  let screen = <StartScreen onpickedNum={pickedNumHandler} />;

  if (userNum) {
    screen = <GameScreen onpickedNum={userNum} onGameOver={gameOverHandler} />;
  }
  if (gameIsOver && userNum) {
    screen = (
      <GameOverScreen
        guessedNum={userNum}
        roundsNum={guessRounds}
        startNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <LinearGradient
      colors={[colors.primary700, colors.accent500]}
      style={styles.mainScreen}
    >
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
