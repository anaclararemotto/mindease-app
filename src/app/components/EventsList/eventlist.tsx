import { Text, View, ScrollView } from "react-native";
import { useTheme } from "@/src/shared/theme/ThemeContext";

type Props = {
  selectedDate: string;
  events: any[];
};

export const EventsList = ({ selectedDate, events }: Props) => {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, padding: 16 }}>
      {selectedDate && (
        <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 12 }}>
          Eventos em {selectedDate}
        </Text>
      )}

      <ScrollView showsVerticalScrollIndicator={false}>
        {events.length === 0 ? (
          <Text style={{ color: colors.placeholder }}>
            Nenhum evento nesse dia.
          </Text>
        ) : (
          events.map((event, i) => (
            <View
              key={i}
              style={{
                padding: 12,
                marginBottom: 10,
                backgroundColor: colors.colorPrimary + "15",
                borderRadius: 8,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: "600" }}>
                {event.name}
              </Text>

              <Text>{event.hour}</Text>
              <Text>{event.subject}</Text>
              <Text>{event.description}</Text>
              <Text>{event.priority}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
};
