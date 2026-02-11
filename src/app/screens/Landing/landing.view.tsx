import LandingLight from "@/assets/images/landing-light.svg";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { MoveRight } from "lucide-react";
import { Image, Text, View } from "react-native";
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
      <Button showIcon icon={MoveRight} title="Começar" iconPosition="right" href={'/screens/Login'} />
    </View>
  );
};
