import { useTheme } from "@/src/shared/theme/ThemeContext";
import { ScrollView, Text, View } from "react-native";
import { ScheduleCard } from "../Schedule/schedule";

type Props = {
  selectedDate: string;
  events: any[];
  onDeleteEvent?: (id: string) => void;
};

export const EventsList = ({ selectedDate, events, onDeleteEvent }: Props) => {
  const { colors } = useTheme();

  const formatDateToBR = (dateStr: string) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {selectedDate && (
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            marginBottom: 16,
            color: colors.colorPrimary,
          }}
        >
          Eventos em {selectedDate}
        </Text>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        {events.length === 0 ? (
          <Text
            style={{
              color: colors.textColor,
              opacity: 0.6,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Nenhum evento agendado para este dia.
          </Text>
        ) : (
          events.map((event) => (
            <View key={event.id} style={{ marginBottom: 12 }}>
              <ScheduleCard
                priority={event.priority}
                hour={event.hour}
                date={event.date}
                type={event.type}
                subject={event.subject}
                onDelete={() => onDeleteEvent && onDeleteEvent(event.id)}
              />
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
