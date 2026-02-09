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
  );
}
