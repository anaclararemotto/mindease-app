import { Calendar } from "react-native-calendars";
import { useTheme } from "@/src/shared/theme/ThemeContext";

type Props = {
  selectedDate: string;
  onSelectDate: (date: string) => void;
};

export const CalendarComponent = ({ selectedDate, onSelectDate }: Props) => {
  const { colors } = useTheme();

  const marked = selectedDate
    ? {
        [selectedDate]: {
          selected: true,
          selectedColor: colors.colorPrimary,
        },
      }
    : {};

  return (
    <Calendar
      onDayPress={(day) => onSelectDate(day.dateString)}
      markedDates={marked}
      theme={{
        todayTextColor: colors.colorPrimary,
        selectedDayBackgroundColor: colors.colorPrimary,
        arrowColor: colors.colorPrimary,
      }}
    />
  );
};
