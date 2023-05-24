import { StyleSheet, Text, View } from "react-native";
import colors from "../../Utilities/colors";

const GuessLogItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{props.roundNum}</Text>
      <Text style={styles.itemText}>Opponent's Guess{props.guess}</Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    borderColor: colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "font-1",
  },
});
