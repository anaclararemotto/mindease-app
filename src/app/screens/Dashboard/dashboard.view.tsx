const DashboardLight = require("@/assets/images/dashboard-light.svg");
import { useAuth } from "@/src/app/contexts/AuthContext";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Image } from "expo-image";
import { doc, getDoc } from "firebase/firestore";
import { CalendarDays, Goal } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { db } from "../../../services/firebaseConfig";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { dashboardStyles } from "./dashboard.styles";

export const DashboardView = () => {
  const { colors } = useTheme();
  const styles = dashboardStyles(colors);
  const { user } = useAuth();
  const [userName, setUserName] = useState("...");

  useEffect(() => {
    const fetchUserData = async () => {
      if (user?.id) {
        try {
          const docRef = doc(db, "users", user.id);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setUserName(docSnap.data().name);
          } else {
            setUserName("Usuário");
          }
        } catch (error) {
          console.error("Erro ao buscar nome:", error);
          setUserName("Bem-vindo");
        }
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.title}>Olá {userName}!</Text>
        <Text style={styles.subtitle}>Comece devagar e siga no seu tempo.</Text>
      </View>

      <Image
        source={DashboardLight}
        style={styles.image}
        contentFit="contain"
      />

      <View style={styles.containerOptions}>
        <OptionCard label="Cronograma do dia" icon={CalendarDays} />
        <OptionCard label="Desafio de hoje" icon={Goal} />
      </View>
    </View>
  );
};
