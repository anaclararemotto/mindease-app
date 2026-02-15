import { ChevronDown, ChevronLeft, Plus } from "lucide-react-native";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { AddEventModal } from "../AddEventModal/addeventmodal";
import { scheduleHeaderStyles } from "./scheduleheader.styles";

export const ScheduleHeader = () => {
  const { colors } = useTheme();
  const styles = scheduleHeaderStyles(colors);

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <ChevronLeft size={22} />
          <Text style={styles.title}>Cronograma</Text>
          <View style={{ width: 22 }} />
        </View>

        <View style={styles.monthRow}>
          <View />

          <View style={styles.monthCenter}>
            <Text style={styles.monthText}>Janeiro, 2026</Text>
            <ChevronDown size={16} />
          </View>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Plus size={22} color={colors.primary} />
          </TouchableOpacity>
        </View>
      </View>

      <AddEventModal
        visible={modalVisible}
        selectedDate={null}
        onClose={() => setModalVisible(false)}
        onSave={(data) => {
          console.log("Novo evento:", data);
          setModalVisible(false);
        }}
      />
    </>
  );
};
