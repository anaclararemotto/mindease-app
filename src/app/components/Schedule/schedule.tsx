import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Text, TouchableOpacity, View } from "react-native";
import { scheduleCardStyles } from "./schedule.styles";
import { ScheduleProps } from "./schedule.types";

export const ScheduleCard = ({
  priority,
  hour,
  date,
  type,
  subject,
}: ScheduleProps) => {
  const { colors } = useTheme();
  const styles = scheduleCardStyles(colors);

  const color =
    priority === "high"
      ? colors.red
      : priority === "medium"
        ? colors.yellow
        : colors.green;

  const priorityMap = {
    high: "Alta",
    medium: "Média",
    low: "Baixa",
  };

  const translatedPriority = priorityMap[priority];

  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.containerCard}>
        <View style={styles.inline}>
          <Text style={styles.hour}>{hour}</Text>
          <Text style={styles.title}>{date}</Text>
        </View>

        <View style={styles.inline}>
          <View>
            <Text style={styles.title}>Tipo</Text>
            <Text style={styles.subtitle}>{type}</Text>
          </View>
          <View>
            <Text style={styles.title}>Matéria</Text>
            <Text style={styles.subtitle}>{subject}</Text>
          </View>
        </View>

        <View>
          <Text style={styles.title}>Prioridade</Text>
          <Text style={[styles.subtitle, { color, fontWeight: "bold" }]}>
            {translatedPriority}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
