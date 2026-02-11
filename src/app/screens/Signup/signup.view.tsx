import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Link } from "expo-router";
import { ChevronLeft } from "lucide-react";
import { Text, View } from "react-native";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { signupStyles } from "./signup.styles";

export const SignupView = () => {
  const { colors } = useTheme();
  const styles = signupStyles(colors);

  return (
    <View style={styles.container}>
      <Link href={"/screens/Login"}>
        <ChevronLeft color={colors.colorPrimary} />
      </Link>
      <View style={styles.containerContent}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Criar uma conta</Text>
          <Text style={styles.subtitle}>
            Estudar hoje é conquistar o amanhã.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input placeholder="Digite seu nome" type="text"></Input>
          <Input
            placeholder="Digite sua data de nascimento"
            type="date"
          ></Input>
          <Input placeholder="Digite seu email" type="email"></Input>
          <Input placeholder="Digite sua senha" type="password"></Input>
        </View>

        <Button title="Cadastrar" />

        <Text style={styles.text}>
          Já possui uma conta?{" "}
          <Link href={"/screens/Login"} style={styles.link}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
};
