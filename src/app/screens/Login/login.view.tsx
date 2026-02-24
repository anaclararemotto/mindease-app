import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Link, useRouter } from "expo-router";
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../../services/firebaseConfig";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { loginStyles } from "./login.styles";

export const LoginView = () => {
  const { colors } = useTheme();
  const styles = loginStyles(colors);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha e-mail e senha.");
      return;
    }
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace("/(tabs)/dashboard");
    } catch (error: any) {
      Alert.alert("Erro", "E-mail ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  // Nova função para recuperação de senha
  const handleForgotPassword = async () => {
    if (!email) {
      Alert.alert(
        "Atenção",
        "Digite seu e-mail no campo acima para receber o link de recuperação.",
      );
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Sucesso",
        "Enviamos um link de redefinição para o seu e-mail.",
      );
    } catch (error: any) {
      let message = "Erro ao enviar e-mail de recuperação.";
      if (error.code === "auth/user-not-found")
        message = "Este e-mail não está cadastrado.";
      Alert.alert("Erro", message);
    }
  };

  return (
    <View style={styles.container}>
      <Link href={"/"}>
        <ChevronLeft color={colors.colorPrimary} />
      </Link>
      <View style={styles.containerContent}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Entre com sua conta</Text>
          <Text style={styles.subtitle}>Bem vindo de volta!</Text>
        </View>

        <View style={styles.inputContainer}>
          <Input
            placeholder="Digite seu email"
            type="email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Digite sua senha"
            type="password"
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Button
          title={loading ? "Entrando..." : "Entrar"}
          onPress={handleLogin}
        />

        <View style={styles.linkContainer}>
          {/* Alterado de Link para TouchableOpacity para executar a função */}
          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.link}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <Text style={styles.text}>
            Ainda não possui uma conta?{" "}
            <Link href={"/(auth)/signup"} style={styles.link}>
              Cadastre-se
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};
