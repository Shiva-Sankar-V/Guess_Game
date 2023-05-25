import { View, Text, StyleSheet, Dimensions } from "react-native";
import colors from "../../Utilities/colors";

function NumberCointainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.guessedNoText}>{children}</Text>
    </View>
  );
}

export default NumberCointainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: colors.accent500,
    padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: "center",
    justiyContent: "center",
  },

  guessedNoText: {
    fontSize: deviceWidth < 380 ? 28 : 36,
    fontFamily: "font-2",
    color: colors.accent500,
  },
});
