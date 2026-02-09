
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ThemeProvider } from "../shared/theme/ThemeContext";
import { LandingView } from "./screens/Landing/landing.view";


export default function Index() {
  return (
    <ThemeProvider>
       <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <LandingView/>
       </SafeAreaView>
    </SafeAreaProvider>
    </ThemeProvider>

  );
}
