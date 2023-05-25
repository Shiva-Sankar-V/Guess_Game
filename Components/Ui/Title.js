import { StyleSheet, Text } from "react-native";

function Title(props) {
  return <Text style={styles.title}> {props.children} </Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "font-2",
    fontSize: 24,

    color: "white",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 10,
    maxWidth: "80%",
    width: 300,
  },
});
