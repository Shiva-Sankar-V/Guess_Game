import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
function StartScreen() {
  return (
    <View style={styles.input}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: "#72063c",
    borderRadius: 15,
    elevation: 4,
  },
});
