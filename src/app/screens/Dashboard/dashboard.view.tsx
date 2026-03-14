import { useAuth } from "@/src/app/contexts/AuthContext";
import { db } from "@/src/services/firebaseConfig";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { doc, getDoc } from "firebase/firestore";
import { CalendarDays, Goal, LogOut } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { dashboardStyles } from "./dashboard.styles";

const DashboardLight = require("@/assets/images/dashboard-light.svg");

export const DashboardView = () => {
  const { colors } = useTheme();
  const styles = dashboardStyles(colors);
  const { user, logout } = useAuth();
  const [userName, setUserName] = useState("...");
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) return;

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
        setUserName("Usuário");
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerText}>
          <Text style={styles.title}>Olá {userName}!</Text>
          <Text style={styles.subtitle}>
            Comece devagar e siga no seu tempo.
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => logout()}
          style={styles.logoutButton}
          activeOpacity={0.7}
        >
          <LogOut color={colors.colorPrimary} size={24} />
        </TouchableOpacity>
      </View>

      <Image
        source={DashboardLight}
        style={styles.image}
        contentFit="contain"
      />

      <View style={styles.containerOptions}>
        <OptionCard
          label="Cronograma do dia"
          icon={CalendarDays}
          onPress={() => router.push("/(tabs)/content" as any)}
        />
        <OptionCard
          label="Desafio de hoje"
          icon={Goal}
          onPress={() => router.push("/challenge" as any)}
        />
      </View>
    </View>
  );
};
