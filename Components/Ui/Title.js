import { StyleSheet, Text } from "react-native";
import React from "react";
import colors from "../../Utilities/colors";

function Title(props) {
  return <Text style={styles.title}> {props.children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
  },
});
