import React from "react";
import { View, ImageBackground, Dimensions } from "react-native";
import { Title } from "./splashscreen-styles";

export const SplashScreen = ({ navigation }) => {
  const { width } = Dimensions.get("window");

  setTimeout(() => {
    navigation.navigate('Home');
  }, 3000);

  return (
    <View style={{ paddingTop: 150, overflow: "hidden" }}>
      <ImageBackground
        source={require("./logo2019.png")}
        style={{ width, height: 300 }}
      />
      <Title>Bath and Soapery</Title>
    </View>
  );
};
