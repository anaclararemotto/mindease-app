import { useAuth } from "@/src/app/contexts/AuthContext";
import { db } from "@/src/services/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, Platform, View } from "react-native";

import { useTheme } from "@/src/shared/theme/ThemeContext";
import { AddEventModal } from "../../components/AddEventModal/addeventmodal";
import { Button } from "../../components/Button/button";
import { CalendarComponent } from "../../components/CalendarComponent/calendarcomponent";
import { EventsList } from "../../components/EventsList/eventlist";
import { ScheduleHeader } from "../../components/ScheduleHeader/scheduleheader";
import { scheduleStyles } from "./schedule.styles";

export const ScheduleView = () => {
  const { colors } = useTheme();
  const styles = scheduleStyles(colors);
  const { user } = useAuth();

  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split("T")[0],
  );
  const [events, setEvents] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (!user?.id || !selectedDate) return;

    const q = query(
      collection(db, "schedules"),
      where("userId", "==", user.id),
      where("date", "==", selectedDate),
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const items: any[] = [];
        snapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });

        const sortedItems = items.sort((a, b) =>
          (a.hour || "").localeCompare(b.hour || ""),
        );

        setEvents(sortedItems);
      },
      (error) => {
        console.error("Erro no Firestore:", error);
      },
    );

    return () => unsubscribe();
  }, [user, selectedDate]);

  const handleSave = async (newEvent: any) => {
    try {
      if (!user?.id) return;
      await addDoc(collection(db, "schedules"), {
        ...newEvent,
        date: selectedDate,
        userId: user.id,
        createdAt: new Date(),
      });
      setModalVisible(false);
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const performDelete = async () => {
      try {
        await deleteDoc(doc(db, "schedules", id));
      } catch (error) {
        console.error("Erro ao deletar:", error);
      }
    };

    if (Platform.OS === "web") {
      if (window.confirm("Deseja excluir este evento?")) performDelete();
    } else {
      Alert.alert("Excluir", "Deseja excluir?", [
        { text: "Cancelar", style: "cancel" },
        { text: "Excluir", style: "destructive", onPress: performDelete },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <ScheduleHeader />
      <CalendarComponent
        selectedDate={selectedDate}
        onSelectDate={(date) => {
          setEvents([]);
          setSelectedDate(date);
        }}
      />

      <EventsList
        selectedDate={selectedDate}
        events={events}
        onDeleteEvent={handleDelete}
      />

      <AddEventModal
        visible={modalVisible}
        selectedDate={selectedDate}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
      {selectedDate && (
        <View style={{ padding: 16, width: "100%" }}>
          <Button
            title="Adicionar Evento"
            onPress={() => setModalVisible(true)}
          />
        </View>
      )}
    </View>
  );
};
