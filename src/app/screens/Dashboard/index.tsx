import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { DashboardView } from "./dashboard.view";

export default function LoginScreen() {
    return (
        <ThemeProvider>
            <DashboardView/>
        </ThemeProvider>
    )
}