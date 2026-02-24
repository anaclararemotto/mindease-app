const LandingLight = require("@/assets/images/landing-light.svg");
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Image } from "expo-image";
import { MoveRight } from "lucide-react-native";
import { Text, View } from "react-native";
import { Button } from "../../components/Button/button";
import { landingStyles } from "./landing.styles";

export const LandingView = () => {
  const { colors } = useTheme();
  const styles = landingStyles(colors);

  return (
    <View style={styles.container}>
      <View style={styles.brandContainer}>
        <Image
          source={LandingLight} // Aqui o expo-image resolve o require automaticamente
          style={styles.image}
          contentFit="contain"
          transition={200} // Adiciona um leve efeito ao aparecer
        />

        <Text style={styles.brand}>MindEase</Text>
      </View>
      <View style={styles.containerContent}>
        <Text style={styles.slogan}>
          Organize Sua rotina, acompanhe seu progresso e descubra como estudar
          pode ser mais leve, eficiente e motivador.
        </Text>
        <Text style={styles.wellcome}>Bem vindo ao MindEase!</Text>
      </View>
      <Button
        showIcon
        icon={MoveRight}
        title="Começar"
        iconPosition="right"
        href={"/(auth)/login"}
      />
    </View>
  );
};
