import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Text, View } from "react-native";
import { weekDaysRowStyles } from "./weekdaysrow.styles";

export const WeekDaysRow = () => {
  const days = ["D", "S", "T", "Q", "Q", "S", "S"];
  
const { colors } = useTheme();
  const styles = weekDaysRowStyles(colors);
  return (
    <View style={styles.container}>
      {days.map((day, index) => (
        <Text key={index} style={styles.day}>
          {day}
        </Text>
      ))}
    </View>
  );
};

