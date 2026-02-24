import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Text, TouchableOpacity, View } from "react-native";
import { scheduleCardStyles } from "./schedule.styles";
import { ScheduleProps } from "./schedule.types";

export const ScheduleCard = ({ priority }: ScheduleProps) => {
  const { colors } = useTheme();
  const styles = scheduleCardStyles(colors);

  const color =
    priority === "high"
      ? colors.green
      : priority === "medium"
        ? colors.yellow
        : colors.red;

  const priorityMap = {
    high: "Alta",
    medium: "Média",
    low: "Baixa",
  };

  const translatedPriority = priorityMap[priority];

  return (
    <TouchableOpacity>
        <View style={styles.containerCard}>
      <View style={styles.inline}>
        <Text style={styles.hour}>07:00</Text>
        <Text style={styles.title}>09/01/2026</Text>
      </View>
      <View style={styles.inline}>
        <View>
          <Text style={styles.title}>Tipo</Text>
          <Text style={styles.subtitle}>Revisão</Text>
        </View>
        <View>
          <Text style={styles.title}>Matéria</Text>
          <Text style={styles.subtitle}>Matemática</Text>
        </View>
      </View>
      <View>
        <Text style={styles.title}>Prioridade</Text>
        <Text style={[ styles.subtitle, { color }]}>{translatedPriority}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};
