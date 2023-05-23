import { StyleSheet, Text } from "react-native";
import React from "react";

function Title(props) {
  return <Text style={styles.title}> {props.children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ddb52f",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: 10,
  },
});
