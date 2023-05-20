import { View, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

function PrimaryButton(props) {
  function pressed() {
    console.log("pressed");
  }
  return (
    <View style={styles.OuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressed}
        android_ripple={{ color: "#644202" }}
      >
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;
const styles = StyleSheet.create({
  OuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
