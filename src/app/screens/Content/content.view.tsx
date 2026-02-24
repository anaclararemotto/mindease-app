import { useTheme } from "@/src/shared/theme/ThemeContext";
import { AlarmClock, ChevronRight, Hourglass, LibraryBig, Newspaper, NotebookPen, WalletCards } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ContentCard } from "../../components/ContentCard/contentcard";
import { ScheduleCard } from "../../components/Schedule/schedule";
import { contentStyles } from "./content.styles";

export const ContentView = () => {
  const { colors } = useTheme();
  const styles = contentStyles(colors);

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
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
        <TouchableOpacity><ChevronRight /></TouchableOpacity>
      </View>
      <View style={styles.carouselContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carouselContent}
        >
          <ScheduleCard priority="high" />
          <ScheduleCard priority="medium" />
          <ScheduleCard priority="low" />
        </ScrollView>
      </View>
      <ContentCard href={'/screens/Schedule'} icon={LibraryBig} title="Conteúdos" subtitle="Escolha o conteúdo e avance no estudo."/>
      <ContentCard href='/' icon={NotebookPen} title="Anotações" subtitle="Organize ideias, resumos e insights."/>
      <ContentCard href='/' icon={WalletCards} title="FlashCards" subtitle="Revisão rápida para fixar o que importa."/>
      <ContentCard href='/' icon={Hourglass} title="Timer / Modo Foco" subtitle="Hora de focar e estudar com intenção."/>
      <ContentCard href='/' icon={Newspaper} title="Newsletter" subtitle="Fique por dentro das atualidades."/>
    </View>
    </ScrollView>
  );
};
