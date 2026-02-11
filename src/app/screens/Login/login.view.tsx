import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Text, View } from "react-native";
import { loginStyles } from "./login.styles";
import { Button } from "../../components/Button/button";
import { Link } from "expo-router";
import { Input } from "../../components/Input/input";
import { ChevronLeft } from "lucide-react";

export const LoginView = () => {
  const { colors } = useTheme();
  const styles = loginStyles(colors);

  return (
    <View style={styles.container}>
      <ChevronLeft color={colors.colorPrimary}/>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Entre com sua conta</Text>
        <Text style={styles.subtitle}>Bem vindo de volta!</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input placeholder="Digite seu email" type="email"></Input>
        <Input placeholder="Digite sua senha" type="password"></Input>
      </View>

<View style={styles.linkContainer}>
  <Link href={'/'} style={styles.link}>Esqueci minha senha</Link>
      <Text style={styles.text}>Ainda não possui uma conta? <Link href={'/'} style={styles.link}>Cadastre-se</Link></Text>
      
</View>
      
    </View>
  );
};
