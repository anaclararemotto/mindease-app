import { View, Text, StyleSheet } from "react-native";
import { calendarCompactStyles } from "./calendarcompact.styles";
import { useTheme } from "@/src/shared/theme/ThemeContext";

export const CalendarCompact = () => {
  const week = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

  const { colors } = useTheme();
  const styles = calendarCompactStyles(colors);
  return (
    <View style={styles.container}>
      {week.map((day, index) => (
        <View key={index} style={styles.day}>
          <Text>{day}</Text>
          <Text style={styles.number}>{index + 10}</Text>
        </View>
      ))}
    </View>
  );
};
