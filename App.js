import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import AppNav from "./navigation/appnav";

export default function App() {
  return (
  <NavigationContainer>
     <AppNav/>
  </NavigationContainer>
  );
}