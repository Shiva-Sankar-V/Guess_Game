import { StyleSheet, View } from "react-native";
import StartScreen from "./display/primaryScreen";
export default function App() {
  return (
    <View style={styles.mainScreen}>
      <StartScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    backgroundColor: "#ddb52f",
  },
});
