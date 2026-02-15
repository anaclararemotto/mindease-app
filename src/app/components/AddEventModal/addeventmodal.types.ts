export type AddEventModalProps = {
  visible: boolean;
  selectedDate: number | null;
  onClose: () => void;
  onSave: (data: any) => void;
};