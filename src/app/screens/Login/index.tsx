import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { LoginView } from "./login.view";

export default function LoginScreen() {
    return (
        <ThemeProvider>
            <LoginView/>
        </ThemeProvider>
    )
}