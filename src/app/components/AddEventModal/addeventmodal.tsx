import { Modal, View, Text, ScrollView } from "react-native";
import { useEffect, useState } from "react";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Input } from "../Input/input";
import { Button } from "../Button/button";

type Props = {
  visible: boolean;
  selectedDate: string;
  onClose: () => void;
  onSave: (event: any) => void;
};

export const AddEventModal = ({
  visible,
  selectedDate,
  onClose,
  onSave,
}: Props) => {
  const { colors } = useTheme();

  const [name, setName] = useState("");
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
    }
  }, [visible]);

  const handleSave = () => {
    if (!name || !selectedDate) return;

    onSave({
      id: Date.now().toString(),
      date: selectedDate, // formato YYYY-MM-DD
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
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.4)",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.background,
            borderRadius: 20,
            padding: 20,
            maxHeight: "85%",
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 16,
                color: colors.text,
              }}
            >
              Novo Evento
            </Text>

            <Text style={{ marginBottom: 12, color: colors.placeholder }}>
              Data: {selectedDate}
            </Text>

            <Input
              placeholder="Nome do evento"
              value={name}
              onChangeText={setName}
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

            <View style={{ marginTop: 20 }}>
              <Button title="Salvar" onPress={handleSave} />
            </View>

            <View style={{ marginTop: 10 }}>
              <Button title="Cancelar" onPress={onClose} />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
