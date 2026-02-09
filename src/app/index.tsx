import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LandingView } from "./screens/Landing/landing.view";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
        <LandingView/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
