import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { ProfileView } from "../screens/Profile/profile.view";

export default function DashboardScreen() {
    return (
        <ThemeProvider>
            <ProfileView/>
        </ThemeProvider>
    )
}