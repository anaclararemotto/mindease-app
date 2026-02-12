import { useTheme } from "@/src/shared/theme/ThemeContext";
import { CalendarDays } from "lucide-react";
import { View } from "react-native";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { dashboardStyles } from "./dashboard.styles";

export const DashboardView = () => {
  const { colors } = useTheme();
  const styles = dashboardStyles(colors);

  return (
    <View style={styles.container}>
        <OptionCard label="Cronograma do dia" icon={CalendarDays}/>
    </View>
  );
};
