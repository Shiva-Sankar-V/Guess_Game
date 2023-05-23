import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../Components/Ui/Title";
import { useState } from "react";
import NumberCointainer from "../Components/Game/NumberCointainer";
import PrimaryButton from "../Components/Ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(props) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    props.onpickedNum
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessedNo(direction) {
    if (
      (direction === "lower" && currentGuess < props.onpickedNum) ||
      (direction === "greater" && currentGuess > props.onpickedNum)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title> Opponent's Guess</Title>
      <NumberCointainer>{currentGuess}</NumberCointainer>
      <View>
        <Text>Higher or Lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessedNo.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessedNo.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 30,
  },
});
