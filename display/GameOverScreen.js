import { StyleSheet, Image, View } from "react-native";
import Title from "../Components/Ui/Title";
function GameOverScreen() {
  return (
    <View>
      <Title>GAME OVER!</Title>
      <Image source={require("../assets/primary_image/success.jpg")} />
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({});
