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
          source={LandingLight}
          style={styles.image}
          contentFit="contain"
          transition={200}
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
      <View style={styles.button}>
        <Button
          showIcon
          icon={MoveRight}
          title="Começar"
          iconPosition="right"
          href={"/(auth)/login"}
        />
      </View>
    </View>
  );
};
