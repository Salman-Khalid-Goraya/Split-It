import { NavigationContainer } from "@react-navigation/native";
import OnBoardingScreen1 from "./src/screens/OnBoardingScreen/OnBoardingScreen";
import AppFlow from "./src/navigation/AppFlow";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppFlow />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
