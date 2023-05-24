import { StyleSheet, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

const Button = (props) => {
  return (
    <View style={styles.buttons}>
      <View style={styles.button}>
        <PrimaryButton>{props.children}</PrimaryButton>
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
