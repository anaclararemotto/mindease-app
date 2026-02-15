import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Goal, Wrench } from "lucide-react";
import { Download, History, LogOut } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { InfoCard } from "../../components/InfoCard/infocard";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { ProfileCard } from "../../components/ProfileCard/profilecard";
import { profileStyles } from "./profile.styles";

export const ProfileView = () => {
  const { colors } = useTheme();
  const styles = profileStyles(colors);

  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <ProfileCard nome="Joana Santos" email="joana.santos@email.com" />
        <View style={styles.inline}>
          <InfoCard type="xp" info="10" subtitle="Pontos de Experiência" />
          <InfoCard type="days" info="2" subtitle="Consecutivos" />
          <InfoCard type="hour" info="1" subtitle="Tempo Ativo" />
        </View>
        <OptionCard icon={Wrench} label="Personalizar estudo" />
        <OptionCard icon={Goal} label="Objetivos de estudo" />
        <OptionCard icon={History} label="Histórico" />
        <OptionCard icon={Download} label="Downloads" />
        <OptionCard icon={LogOut} label="Sair" />
      </View>
    </ScrollView>
  );
};
