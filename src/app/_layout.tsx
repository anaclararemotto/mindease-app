import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { ThemeProvider } from "../shared/theme/ThemeContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function RootLayoutNav() {
  const { user, loading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;

    const segmentsList = segments as string[];
    const rootSegment = segmentsList[0] || "";

    const inAuthGroup = rootSegment === "(auth)";
    const inTabsGroup = rootSegment === "(tabs)";
    const isLandingPage =
      segmentsList.length === 0 ||
      rootSegment === "index" ||
      rootSegment === "";

    if (!user) {
      if (inTabsGroup) {
        console.log("Redirecionando: Usuário não logado tentando acessar Tabs");
        router.replace("/");
      }
    } else {
      if (isLandingPage || inAuthGroup) {
        console.log("Redirecionando: Usuário logado indo para Dashboard");
        router.replace("/(tabs)/dashboard");
      }
    }
  }, [user, segments, loading]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RootLayoutNav />
      </AuthProvider>
    </ThemeProvider>
  );
}
