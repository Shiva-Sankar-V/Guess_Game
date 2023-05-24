import { View, StyleSheet, Alert } from "react-native";
import Title from "../Components/Ui/Title";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import NumberCointainer from "../Components/Game/NumberCointainer";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";
import Button from "../Components/Ui/Button";

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
  const initialGuess = generateRandomBetween(1, 100, props.onpickedNum);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(() => {
    if (currentGuess === props.onpickedNum) {
      props.onGameOver();
    }
  }, [currentGuess, props.onpickedNum, props.onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower?
        </InstructionText>
        <Button
          onPress={nextGuessedNo.bind(this, "lower")}
          onPress2={nextGuessedNo.bind(this, "greater")}
          one={<Ionicons name="md-remove" size={24} color="white" />}
          two={<Ionicons name="md-add" size={24} color="white" />}
        />
      </Card>
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
  instructionText: {
    marginBottom: 12,
  },
});
