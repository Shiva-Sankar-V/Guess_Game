import { StyleSheet, Text } from "react-native";
import colors from "../../Utilities/colors";

function InstructionText(props) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    fontFamily: "font-1",
    color: colors.accent500,
    fontSize: 24,
  },
});
