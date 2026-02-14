import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { ContentView } from "../screens/Content/content.view";

export default function DashboardScreen() {
    return (
        <ThemeProvider>
            <ContentView/>
        </ThemeProvider>
    )
}