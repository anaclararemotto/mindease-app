import { Slot, Stack } from "expo-router";
import { ThemeProvider } from "../shared/theme/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </AuthProvider>
    </ThemeProvider>
  );
}
