import { useAuth } from "@/src/app/contexts/AuthContext";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import {
  AlarmClock,
  ChevronRight,
  Hourglass,
  LibraryBig,
  Newspaper,
  NotebookPen,
  WalletCards,
} from "lucide-react-native";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../../services/firebaseConfig";
import { ContentCard } from "../../components/ContentCard/contentcard";
import { ScheduleCard } from "../../components/Schedule/schedule";
import { contentStyles } from "./content.styles";

export const ContentView = () => {
  const { colors } = useTheme();
  const styles = contentStyles(colors);
  const { user } = useAuth();

  const [schedules, setSchedules] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
          <TouchableOpacity>
            <ChevronRight color={colors.brandAlternative} />
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
              <Text style={[styles.subtitle, { marginLeft: 10 }]}>
                Nenhuma tarefa agendada.
              </Text>
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
    </ScrollView>
  );
};
