import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Trash2 } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { scheduleCardStyles } from "./schedule.styles";
import { ScheduleProps } from "./schedule.types";

export const ScheduleCard = ({
  priority,
  hour,
  date,
  type,
  subject,
  onDelete,
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
    <View style={styles.containerCard}>
      <View style={styles.inline}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
          <Text style={styles.hour}>{hour}</Text>
          <TouchableOpacity
            onPress={(e) => {
              if (onDelete) {
                onDelete();
              }
            }}
            activeOpacity={0.6}
            style={{
              backgroundColor: colors.red + "15",
              padding: 6,
              borderRadius: 8,
              zIndex: 10,
            }}
          >
            <Trash2 size={18} color={colors.red} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>{date}</Text>
      </View>

      <View style={[styles.inline, { marginTop: 10 }]}>
        <View>
          <Text style={styles.title}>Tipo</Text>
          <Text style={styles.subtitle}>{type}</Text>
        </View>
        <View>
          <Text style={styles.title}>Matéria</Text>

          <Text style={styles.subtitle}>{subject}</Text>
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Text style={styles.title}>Prioridade</Text>
        <Text style={[styles.subtitle, { color, fontWeight: "bold" }]}>
          {translatedPriority}
        </Text>
      </View>
    </View>
  );
};
