import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen1 from "./src/screens/OnBoardingScreen";

export default function App() {
  return (
    <NavigationContainer>
      <OnBoardingScreen1 />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
