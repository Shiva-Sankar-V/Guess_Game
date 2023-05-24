import { StyleSheet, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

const Button = (props) => {
  return (
    <View style={styles.buttons}>
      <View style={styles.button}>
        <PrimaryButton onPress={props.onPress}>{props.one}</PrimaryButton>
      </View>
      <View style={styles.button}>
        <PrimaryButton onPress={props.onPress2}>{props.two}</PrimaryButton>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
  },
});
