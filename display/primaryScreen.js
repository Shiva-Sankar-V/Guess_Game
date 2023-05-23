import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";
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
    <View style={styles.input}>
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
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  input: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#3b021f",
    borderRadius: 10,
    elevation: 4,
  },
  numberInput: {
    height: 50,
    width: 45,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
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
