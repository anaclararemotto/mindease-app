import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { LandingView } from "./screens/Landing/landing.view";

export default function LandingScreen() {
  return (
    <ThemeProvider>
      <LandingView />
    </ThemeProvider>
  );
}
