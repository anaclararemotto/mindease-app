import { useState } from "react";
import { View } from "react-native";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { AddEventModal } from "../../components/AddEventModal/addeventmodal";
import { Button } from "../../components/Button/button";
import { CalendarComponent } from "../../components/CalendarComponent/calendarcomponent";
import { EventsList } from "../../components/EventsList/eventlist";
import { ScheduleHeader } from "../../components/ScheduleHeader/scheduleheader";
import { scheduleStyles } from "./schedule.styles";

export const ScheduleView = () => {
  const { colors } = useTheme();
  const styles = scheduleStyles(colors);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [events, setEvents] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const eventsOfDay = events.filter((e) => e.date === selectedDate);

  const handleSave = (newEvent: any) => {
    setEvents((prev) => [...prev, newEvent]);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ScheduleHeader />
      <CalendarComponent
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />

      <EventsList selectedDate={selectedDate} events={eventsOfDay} />

      <AddEventModal
        visible={modalVisible}
        selectedDate={selectedDate}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />

      {selectedDate && (
        <View style={{ padding: 16 }}>
          <Button title="Adicionar Evento" onPress={() => setModalVisible(true)} />
        </View>
      )}
    </View>
  );
};
