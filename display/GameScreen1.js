import { Text, View, StyleSheet } from "react-native";

function GameScreen() {
  return (
    <View style={styles.textInputContainer}>
      <Text>Game Screen</Text>
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
