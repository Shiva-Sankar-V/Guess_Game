import { TextInput, View } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
function StartScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartScreen;
