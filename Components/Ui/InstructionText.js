import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../../Utilities/colors";

function InstructionText(props) {
  return (
    <Text style={[styles.instructionText, props.style]}>{props.children}</Text>
  );
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
  },
});
