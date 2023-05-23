import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../Components/Ui/PrimaryButton";
import { useState } from "react";
import colors from "../Utilities/colors";
import Title from "../Components/Ui/Title";

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
      <View style={styles.input}>
        <Text style={styles.instructionText}>Enter a number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={inputNumber}
          value={enteredno}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
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

  input: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: colors.primary800,
    borderRadius: 10,
    elevation: 4,
  },
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
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
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
