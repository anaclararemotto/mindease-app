import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { scheduleHeaderStyles } from "./scheduleheader.styles";

export const ScheduleHeader = () => {
  const { colors } = useTheme();
  const styles = scheduleHeaderStyles(colors);
  const router = useRouter();

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            style={{ padding: 8, marginLeft: -8 }}
          >
            <ChevronLeft color={colors.colorPrimary} size={28} />
          </TouchableOpacity>

          <Text style={styles.title}>Cronograma</Text>

          <View style={{ width: 28 }} />
        </View>
      </View>
    </View>
  );
};
