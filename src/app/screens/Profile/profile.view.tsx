import { useAuth } from "@/src/app/contexts/AuthContext";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { doc, getDoc } from "firebase/firestore";
import { Download, Goal, History, LogOut, Wrench } from "lucide-react-native";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { db } from "../../../services/firebaseConfig";
import { InfoCard } from "../../components/InfoCard/infocard";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { ProfileCard } from "../../components/ProfileCard/profilecard";
import { profileStyles } from "./profile.styles";

export const ProfileView = () => {
  const { colors } = useTheme();
  const styles = profileStyles(colors);
  const { user, logout } = useAuth();
  const [userData, setUserData] = useState({ name: "...", email: "..." });

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) return;

      try {
        const docRef = doc(db, "users", user.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData({
            name: docSnap.data().name,
            email: docSnap.data().email || user.email,
          });
        } else {
          setUserData({ name: "Usuário", email: user.email || "" });
        }
      } catch (error) {
        console.error("Erro ao buscar dados do perfil:", error);
        setUserData({ name: "Usuário", email: user.email || "" });
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ProfileCard nome={userData.name} email={userData.email} />

        <View style={styles.inline}>
          <InfoCard type="xp" info="10" subtitle="Pontos de Experiência" />
          <InfoCard type="days" info="2" subtitle="Consecutivos" />
          <InfoCard type="hour" info="1" subtitle="Tempo Ativo" />
        </View>

        <OptionCard
          icon={Wrench}
          label="Personalizar estudo"
          onPress={() => {}}
        />
        <OptionCard
          icon={Goal}
          label="Objetivos de estudo"
          onPress={() => {}}
        />
        <OptionCard icon={History} label="Histórico" onPress={() => {}} />
        <OptionCard icon={Download} label="Downloads" onPress={() => {}} />

        <OptionCard icon={LogOut} label="Sair" onPress={() => logout()} />
      </View>
    </ScrollView>
  );
};
