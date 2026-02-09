import { Image, Text, View } from "react-native";
import LandingLight from "@/assets/images/landing-light.svg";
import { Button } from "../../components/Button/button";
import { useTheme } from "@/src/shared/theme/ThemeContext";
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
          resizeMode="contain"
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
      <Button title="Começar" />
    </View>
  );
};
