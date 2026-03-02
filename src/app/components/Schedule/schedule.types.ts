export interface ScheduleProps {
  priority: "high" | "medium" | "low";
  hour: string;
  date: string;
  type: string;
  subject: string;
}
