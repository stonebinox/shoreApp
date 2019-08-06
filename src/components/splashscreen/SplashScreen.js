import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import { Title } from "./splashscreen-styles";

export const SplashScreen = () => {
  const { width, height } = Dimensions.get('window');
  return (
    <View style={{ paddingTop: 150 }}>
      <ImageBackground
        source={require('./logo2019.png')}
        style={{ width, height: 300 }}
      />
      <Title>Bath and Soapery</Title>
    </View>
  );
};
