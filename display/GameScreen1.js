import { Text, View, StyleSheet } from "react-native";
import Title from "../Components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title> Opponent's Guess</Title>
      {/* Guess //PlaceHolders */}
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
