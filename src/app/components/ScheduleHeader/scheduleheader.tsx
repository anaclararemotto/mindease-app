import { ChevronLeft } from "lucide-react-native";
import { Text, View } from "react-native";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { scheduleHeaderStyles } from "./scheduleheader.styles";

export const ScheduleHeader = () => {
  const { colors } = useTheme();
  const styles = scheduleHeaderStyles(colors);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <ChevronLeft color={colors.colorPrimary} />
          <Text style={styles.title}>Cronograma</Text>
          <View />
        </View>
      </View>
    </View>
  );
};
