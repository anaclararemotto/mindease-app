import { useAuth } from "@/src/app/contexts/AuthContext";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Image } from "expo-image";
import { doc, getDoc } from "firebase/firestore";
import { CalendarDays, Goal, LogOut } from "lucide-react-native"; // Adicionei LogOut
import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { db } from "../../../services/firebaseConfig";
import { OptionCard } from "../../components/OptionCard/optioncard";
import { dashboardStyles } from "./dashboard.styles";

// O require deve vir após os imports
const DashboardLight = require("@/assets/images/dashboard-light.svg");

export const DashboardView = () => {
  const { colors } = useTheme();
  const styles = dashboardStyles(colors);
  const { user, logout } = useAuth(); // Importamos o logout aqui
  const [userName, setUserName] = useState("...");

  useEffect(() => {
    const fetchUserData = async () => {
      if (!user?.id) return; // Segurança extra

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
      {/* Cabeçalho com botão de sair */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          paddingBottom: 20,
        }}
      >
        <View style={styles.containerText}>
          <Text style={styles.title}>Olá {userName}!</Text>
          <Text style={styles.subtitle}>
            Comece devagar e siga no seu tempo.
          </Text>
        </View>

        <TouchableOpacity onPress={() => logout()} style={{ padding: 10 }}>
          <LogOut color={colors.colorPrimary} size={24} />
        </TouchableOpacity>
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
