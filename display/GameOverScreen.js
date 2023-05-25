import { StyleSheet, Image, View, Text, Dimensions } from "react-native";
import Title from "../Components/Ui/Title";
import colors from "../Utilities/colors";
import PrimaryButton from "../Components/Ui/PrimaryButton";
function GameOverScreen(props) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/primary_image/success.jpg")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed{" "}
        <Text style={styles.highlight}>{props.roundsNum}</Text> rounds to guess
        the number <Text style={styles.highlight}>{props.guessedNum}</Text> .
      </Text>
      <PrimaryButton onPress={props.startNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: deviceWidth < 380 ? 200 : 300,
    width: deviceWidth < 380 ? 200 : 300,
    borderRadius: deviceWidth < 380 ? 100 : 150,
    borderWidth: 3,
    borderColor: colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontFamily: "font-1",
    fontSize: 22,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "font-2",
    color: colors.primary500,
  },
});
