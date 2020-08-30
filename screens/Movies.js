import React from "react";
import { View, Text, Button } from "react-native";

export default ({ navigation }) => {
  console.log(navigation);
  return (
    <View>
      <Text> Movies </Text>
      <Button
        title="Movie"
        onPress={() => navigation.navigate("Go to Detail")}
      ></Button>
    </View>
  );
};
