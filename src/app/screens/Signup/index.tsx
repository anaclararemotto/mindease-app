import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { SignupView } from "./signup.view";

export default function LoginScreen() {
    return (
        <ThemeProvider>
            <SignupView/>
        </ThemeProvider>
    )
}