import { useEffect, useState } from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Button } from "../Button/button";
import { Input } from "../Input/input";

type Props = {
  visible: boolean;
  selectedDate?: string; // Tornamos opcional caso queira usar a data de hoje
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
    // Validação básica
    if (!name || !hour || !subject) {
      Alert.alert("Atenção", "Preencha o nome, hora e matéria.");
      return;
    }

    // Normaliza a prioridade para o padrão que usamos no ScheduleCard
    let priorityValue = "low";
    const p = priority.toLowerCase();
    if (p.includes("alt") || p === "high") priorityValue = "high";
    else if (p.includes("méd") || p === "medium") priorityValue = "medium";

    onSave({
      title: name,
      hour,
      description,
      type,
      subject,
      priority: priorityValue,
      date: selectedDate || new Date().toLocaleDateString("pt-BR"),
    });

    onClose();
  };

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.6)", // Escureci um pouco mais para dar foco
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
            borderWidth: 1,
            borderColor: colors.brandAlternative + "30", // Borda sutil
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 16,
                color: colors.colorPrimary,
                textAlign: "center",
              }}
            >
              Novo Evento
            </Text>

            {selectedDate && (
              <Text
                style={{
                  marginBottom: 12,
                  color: colors.textColor,
                  textAlign: "center",
                }}
              >
                Data: {selectedDate}
              </Text>
            )}

            <View style={{ gap: 10 }}>
              <Input
                placeholder="Nome do evento (ex: Estudar React)"
                value={name}
                onChangeText={setName}
                type="text"
              />

              <Input
                placeholder="Hora (ex: 14:00)"
                value={hour}
                onChangeText={setHour}
                type="text"
              />

              <Input
                placeholder="Descrição (opcional)"
                value={description}
                onChangeText={setDescription}
                type="text"
              />

              <Input
                placeholder="Tipo (revisão, aula, prática)"
                value={type}
                onChangeText={setType}
                type="text"
              />

              <Input
                placeholder="Matéria (ex: Programação)"
                value={subject}
                onChangeText={setSubject}
                type="text"
              />

              <Input
                placeholder="Prioridade (baixa, média, alta)"
                value={priority}
                onChangeText={setPriority}
                type="text"
              />
            </View>

            <View style={{ marginTop: 25, gap: 10 }}>
              <Button title="Salvar no Cronograma" onPress={handleSave} />
              <TouchableOpacity onPress={onClose} style={{ padding: 10 }}>
                <Text
                  style={{
                    color: colors.red,
                    textAlign: "center",
                    fontWeight: "600",
                  }}
                >
                  Cancelar
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
