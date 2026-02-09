import { Image, Text, View } from "react-native";
import LandingLight from '@/assets/images/landing-light.svg';
import { Button } from "../../components/Button/button";

export const LandingView = () => {

  return (
    <View>
      <Image source={LandingLight}></Image>
      <Text>MindEase</Text>
      <Text>Organize Sua rotina, acompanhe seu progresso e descubra como estudar pode ser mais leve, eficiente e motivador.</Text>
      <Text>Bem vindo ao MindEase!</Text>
      <Button title="Começar"/>
    </View>
  );
};