import {
  Modal,
  View,
  Text,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";

import { AddEventModalProps } from "./addeventmodal.types";
import { addEventModalStyles } from "./addeventmodal.styles";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Input } from "../Input/input";
import { Button } from "../Button/button";


export const AddEventModal = ({
  visible,
  selectedDate,
  onClose,
  onSave,
}: AddEventModalProps) => {
  const { colors } = useTheme();
  const styles = addEventModalStyles(colors);

  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [subject, setSubject] = useState("");
  const [priority, setPriority] = useState("");

  useEffect(() => {
    if (visible) {
      setName("");
      setHour("");
      setDescription("");
      setType("");
      setSubject("");
      setPriority("");

      if (selectedDate) {
        const currentYear = 2026;
        const currentMonth = 1; // Janeiro fixo por enquanto

        const formattedDate = `${String(selectedDate).padStart(2, "0")}/${String(currentMonth).padStart(2, "0")}/${currentYear}`;
        setDate(formattedDate);
      } else {
        setDate("");
      }
    }
  }, [visible, selectedDate]);

  const handleSave = () => {
    if (!date || date.length !== 10) return;

    const [day] = date.split("/").map(Number);

    onSave({
      date: day,
      fullDate: date,
      name,
      hour,
      description,
      type,
      subject,
      priority,
    });

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.title}>
              Novo Evento
            </Text>

            <Input
              placeholder="Nome do evento"
              value={name}
              onChangeText={setName}
            />

            <Input
              type="date"
              placeholder="Data (dd/mm/aaaa)"
              value={date}
              onChangeText={setDate}
            />

            <Input
              placeholder="Hora (ex: 14:00)"
              value={hour}
              onChangeText={setHour}
            />

            <Input
              placeholder="Descrição"
              value={description}
              onChangeText={setDescription}
            />

            <Input
              placeholder="Tipo (revisão, estudo)"
              value={type}
              onChangeText={setType}
            />

            <Input
              placeholder="Matéria"
              value={subject}
              onChangeText={setSubject}
            />

            <Input
              placeholder="Prioridade (baixa, média, alta)"
              value={priority}
              onChangeText={setPriority}
            />

            <Button
              title="Salvar"
              onPress={handleSave}
            />

            <View style={{ marginTop: 12 }}>
              <Button
                title="Cancelar"
                onPress={onClose}
                disabled={false}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
