
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LandingView } from "./screens/Landing/landing.view";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <ThemeProvider>
       <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
       </SafeAreaView>
    </SafeAreaProvider>
    </ThemeProvider>

  );
}
