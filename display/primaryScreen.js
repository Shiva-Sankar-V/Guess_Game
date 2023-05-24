import { TextInput, View, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import colors from "../Utilities/colors";
import Title from "../Components/Ui/Title";
import Card from "../Components/Ui/Card";
import InstructionText from "../Components/Ui/InstructionText";
import Button from "../Components/Ui/Button";

function StartScreen(props) {
  const [enteredno, setenteredno] = useState("");

  function inputNumber(enteredno) {
    setenteredno(enteredno);
  }
  function resetInput() {
    setenteredno("");
  }
  function confirmInputNumber() {
    const inputedNumber = parseInt(enteredno);

    if (isNaN(inputedNumber) || inputedNumber <= 0 || inputedNumber > 99) {
      //show alert...
      Alert.alert(
        "Invalid number!",
        "Input has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInput }]
      );
      return;
    }
    props.onpickedNum(inputedNumber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <InstructionText>Enter a number</InstructionText>

        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputNumber}
          value={enteredno}
        />
        <Button
          onPress={resetInput}
          onPress2={confirmInputNumber}
          one="reset"
          two="confirm"
        />
      </Card>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },

  numberInput: {
    height: 50,
    width: 45,
    fontSize: 32,
    borderBottomColor: colors.accent500,
    borderBottomWidth: 2,
    color: colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
