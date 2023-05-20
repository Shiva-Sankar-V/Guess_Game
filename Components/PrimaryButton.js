import { View, Text } from "react-native";
//destructured the props.childern to children and getting the values directly
function PrimaryButton(props) {
  return (
    <View>
      <Text>{props.children}</Text>
    </View>
  );
}

export default PrimaryButton;
