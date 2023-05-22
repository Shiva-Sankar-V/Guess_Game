import { StyleSheet } from "react-native";
import StartScreen from "./display/primaryScreen";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.mainScreen}>
      <StartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
});
