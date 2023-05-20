import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
function StartScreen() {
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  input: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
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
});
