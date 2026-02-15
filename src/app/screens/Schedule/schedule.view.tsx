import { useTheme } from "@/src/shared/theme/ThemeContext";
import { ScrollView, View } from "react-native";
import { scheduleStyles } from "./schedule.styles";
import { ScheduleHeader } from "../../components/ScheduleHeader/scheduleheader";
import { AddEventModal } from "../../components/AddEventModal/addeventmodal";
import { CalendarCompact } from "../../components/CalendarCompact/calendarcompact";
import { CalendarMonth } from "../../components/CalendarMonth/calendarmonth";
import { useState } from "react";
import { WeekDaysRow } from "../../components/WeekDaysRow/weekdaysrow";
import { CalendarGrid } from "../../components/CalendarGrid/calendargrid";

export const ScheduleView = () => {
  const { colors } = useTheme();
  const styles = scheduleStyles(colors);

 const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState<any[]>([]);

const handleAddEvent = (newEvent: any) => {
  setEvents((prev) => [...prev, newEvent]);
};


  const handleSaveEvent = (eventData: any) => {
    setEvents((prev) => [...prev, eventData]);
    setModalVisible(false);
  };

  const [expandedDay, setExpandedDay] = useState<number | null>(null);

const handleDayPress = (day: number) => {
  setExpandedDay(prev => (prev === day ? null : day));
};


  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
       <ScheduleHeader />
      <WeekDaysRow />

      <CalendarGrid
        onDayPress={handleDayPress}
  events={events}
  expandedDay={expandedDay}
      />

      <AddEventModal
        visible={modalVisible}
  selectedDate={selectedDate}
  onClose={() => setModalVisible(false)}
  onSave={handleAddEvent}
      />
      </View>
    </ScrollView>
  );
};
