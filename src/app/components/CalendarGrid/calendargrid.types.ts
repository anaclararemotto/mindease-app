export type CalendarGridProps = {
  onDayPress: (day: number) => void;
  events: Event[];
  expandedDay: number | null;
};