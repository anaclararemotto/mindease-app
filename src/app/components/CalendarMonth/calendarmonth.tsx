import { View, Text, StyleSheet } from "react-native";
import { calendarMonthStyles } from "./calendarmonth.styles";
import { useTheme } from "@/src/shared/theme/ThemeContext";

export const CalendarMonth = () => {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  const { colors } = useTheme();
  const styles = calendarMonthStyles(colors);
  return (
    <View style={styles.grid}>
      {days.map((day) => (
        <View key={day} style={styles.day}>
          <Text>{day}</Text>
        </View>
      ))}
    </View>
  );
};
