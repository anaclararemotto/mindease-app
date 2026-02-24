import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { DashboardView } from "../screens/Dashboard/dashboard.view";

export default function DashboardScreen() {
    return (
        <ThemeProvider>
            <DashboardView/>
        </ThemeProvider>
    )
}