import { useAuth } from "@/src/app/contexts/AuthContext";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import {
  AlarmClock, // Troquei o ChevronRight pelo Plus para ficar mais intuitivo
  Hourglass,
  LibraryBig,
  Newspaper,
  NotebookPen,
  Plus,
  WalletCards,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../services/firebaseConfig";

import { AddEventModal } from "../../components/AddEventModal/addeventmodal";
import { ContentCard } from "../../components/ContentCard/contentcard";
import { ScheduleCard } from "../../components/Schedule/schedule";
import { contentStyles } from "./content.styles";

export const ContentView = () => {
  const { colors } = useTheme();
  const styles = contentStyles(colors);
  const { user } = useAuth();

  const [schedules, setSchedules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  // Função para salvar o novo evento no Firebase
  const handleSaveEvent = async (eventData: any) => {
    try {
      if (!user?.id) return;

      await addDoc(collection(db, "schedules"), {
        ...eventData,
        userId: user.id,
        createdAt: new Date(),
      });

      // O onSnapshot vai atualizar a lista automaticamente
    } catch (error) {
      console.error("Erro ao salvar evento:", error);
      Alert.alert("Erro", "Não foi possível salvar o evento.");
    }
  };

  useEffect(() => {
    if (!user?.id) return;

    const q = query(
      collection(db, "schedules"),
      where("userId", "==", user.id),
      orderBy("hour", "asc"),
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const items: any[] = [];
        querySnapshot.forEach((doc) => {
          items.push({ id: doc.id, ...doc.data() });
        });
        setSchedules(items);
        setLoading(false);
      },
      (error) => {
        console.error("Erro ao buscar cronograma:", error);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [user]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.inlineContainer}>
          <View style={styles.containerColumn}>
            <View style={styles.inline}>
              <AlarmClock color={colors.brandAlternative} />
              <Text style={styles.title}>Cronograma do dia</Text>
            </View>
            <Text style={styles.subtitle}>
              Veja o que está planejado para hoje.
            </Text>
          </View>

          {/* Botão que abre a Modal */}
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              backgroundColor: colors.brandAlternative + "20",
              padding: 8,
              borderRadius: 12,
            }}
          >
            <Plus color={colors.brandAlternative} size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.carouselContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          >
            {loading ? (
              <ActivityIndicator color={colors.brandAlternative} />
            ) : schedules.length > 0 ? (
              schedules.map((item) => (
                <ScheduleCard
                  key={item.id}
                  priority={item.priority}
                  hour={item.hour}
                  date={item.date}
                  type={item.type}
                  subject={item.subject}
                />
              ))
            ) : (
              <View style={{ paddingVertical: 20 }}>
                <Text style={[styles.subtitle, { marginLeft: 10 }]}>
                  Nenhuma tarefa agendada. Toque no + para adicionar.
                </Text>
              </View>
            )}
          </ScrollView>
        </View>

        <ContentCard
          href={"/screens/Schedule"}
          icon={LibraryBig}
          title="Conteúdos"
          subtitle="Escolha o conteúdo e avance no estudo."
        />
        <ContentCard
          href="/"
          icon={NotebookPen}
          title="Anotações"
          subtitle="Organize ideias, resumos e insights."
        />
        <ContentCard
          href="/"
          icon={WalletCards}
          title="FlashCards"
          subtitle="Revisão rápida para fixar o que importa."
        />
        <ContentCard
          href="/"
          icon={Hourglass}
          title="Timer / Modo Foco"
          subtitle="Hora de focar e estudar com intenção."
        />
        <ContentCard
          href="/"
          icon={Newspaper}
          title="Newsletter"
          subtitle="Fique por dentro das atualidades."
        />
      </View>

      {/* Componente da Modal */}
      <AddEventModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveEvent}
        selectedDate={new Date().toLocaleDateString("pt-BR")}
      />
    </ScrollView>
  );
};
