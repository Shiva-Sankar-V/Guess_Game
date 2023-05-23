import { Text, View, StyleSheet } from "react-native";
import Title from "../Components/Ui/Title";
import { useState } from "react";
import NumberCointainer from "../Components/Game/NumberCointainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.inputedNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return (
    <View style={styles.screen}>
      <Title> Opponent's Guess</Title>
      <NumberCointainer>{currentGuess}</NumberCointainer>
      <View>
        <Text>Higher or Lower?</Text>
        {/* + //PlaceHolders - //PlaceHolders */}
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
