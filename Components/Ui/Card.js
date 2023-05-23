import { StyleSheet, View } from "react-native";
import React from "react";
import colors from "../../Utilities/colors";

function Card(props) {
  return <View style={styles.input}>{props.children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  input: {
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: colors.primary800,
    borderRadius: 10,
    elevation: 4,
  },
});
