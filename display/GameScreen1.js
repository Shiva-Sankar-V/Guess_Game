import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.textInputContainer}>
      <Text>Opponent's Guess</Text>
      Guess //PlaceHolders
      <View>
        <Text>Higher or Lower?</Text>+ //PlaceHolders - //PlaceHolders
      </View>
      <View>LOG ROUNDS</View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  textInputContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
