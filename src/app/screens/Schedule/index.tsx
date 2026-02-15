import { ThemeProvider } from "@/src/shared/theme/ThemeContext";
import { ScheduleView } from "./schedule.view";

export default function DashboardScreen() {
    return (
        <ThemeProvider>
            <ScheduleView/>
        </ThemeProvider>
    )
}