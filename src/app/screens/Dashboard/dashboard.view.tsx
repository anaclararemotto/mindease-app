import { useTheme } from "@/src/shared/theme/ThemeContext";
import { CalendarDays, Goal } from "lucide-react";
import { Image, Text, View } from "react-native";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { dashboardStyles } from "./dashboard.styles";
import DashboardLight from "@/assets/images/dashboard-light.svg";


export const DashboardView = () => {
  const { colors } = useTheme();
  const styles = dashboardStyles(colors);

  return (
    <View style={styles.container}>
      <View  style={styles.containerText}>
        <Text  style={styles.title}>Olá Joana!</Text>
        <Text  style={styles.subtitle}>Comece devagar e siga no seu tempo.</Text>
      </View>
      <Image source={DashboardLight} style={styles.image}
          resizeMode="contain"/>

      <View style={styles.containerOptions}>
        <OptionCard label="Cronograma do dia" icon={CalendarDays} />
        <OptionCard label="Desafio de hoje" icon={Goal} />
      </View>
    </View>
  );
};
