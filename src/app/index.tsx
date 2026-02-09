<<<<<<< feat/landing
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LandingView } from "./screens/Landing/landing.view";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <LandingView/>
      </SafeAreaView>
    </SafeAreaProvider>
=======
import { Text, View } from "react-native";
import { ThemeProvider } from "../shared/theme/ThemeContext";

export default function Index() {
  return (
    <ThemeProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </ThemeProvider>
>>>>>>> dev
  );
}
