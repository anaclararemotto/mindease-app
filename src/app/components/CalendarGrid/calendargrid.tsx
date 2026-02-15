import { useTheme } from "@/src/shared/theme/ThemeContext";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { CalendarGridStyles } from "./calendargrid.styles";
import { CalendarGridProps } from "./calendargrid.types";

type Event = {
  date: number;
  name: string;
  hour: string;
  subject: string;
  priority: string;
};

export const CalendarGrid = ( {onDayPress,
  events,
  expandedDay}: CalendarGridProps) => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
const { colors } = useTheme();
  const styles = CalendarGridStyles(colors);
  
  return (
    <View style={styles.grid}>
      {days.map((day) => {
        const dayEvents = events.filter(e => e.date === day);
        const isExpanded = expandedDay === day;

        return (
          <View key={day} style={styles.dayWrapper}>
            <TouchableOpacity
              style={[
                styles.dayContainer,
                isExpanded && styles.expandedDay,
              ]}
              onPress={() => onDayPress(day)}
            >
              <Text style={styles.dayText}>{day}</Text>

              {dayEvents.length > 0 && !isExpanded && (
                <View style={styles.dot} />
              )}
            </TouchableOpacity>

            {isExpanded && dayEvents.length > 0 && (
              <View style={styles.eventContainer}>
                {dayEvents.map((event, index) => (
                  <View key={index} style={styles.eventCard}>
                    <Text style={styles.eventHour}>{event.hour}</Text>
                    <Text style={styles.eventTitle}>
                      {event.name}
                    </Text>
                    <Text style={styles.eventSubject}>
                      {event.subject}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {isExpanded && dayEvents.length === 0 && (
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>
                  Nenhum evento
                </Text>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

