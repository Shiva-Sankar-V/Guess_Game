import { View, Text, StyleSheet } from "react-native";
import colors from "../../Utilities/colors";

function NumberCointainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.guessedNoText}>{children}</Text>
    </View>
  );
}

export default NumberCointainer;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: 24,
    borderRadius: 8,
    margin: 24,
    alignItems: "center",
    justiyContent: "center",
  },

  guessedNoText: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.accent500,
  },
});
