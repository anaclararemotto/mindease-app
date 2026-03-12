import { auth, db } from "@/src/services/firebaseConfig";
import { useTheme } from "@/src/shared/theme/ThemeContext";
import { Link, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { Button } from "../../components/Button/button";
import { Input } from "../../components/Input/input";
import { signupStyles } from "./signup.styles";

export const SignupView = () => {
  const { colors } = useTheme();
  const styles = signupStyles(colors);
  const router = useRouter();

  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !password || !birthDate) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        birthDate: birthDate,
        email: email,
        createdAt: new Date(),
      });

      Alert.alert("Sucesso!", "Sua conta foi criada e o perfil configurado.");
      router.replace("/(tabs)/dashboard");
    } catch (error: any) {
      let message = "Não foi possível realizar o cadastro.";
      if (error.code === "auth/email-already-in-use")
        message = "Este e-mail já está em uso.";
      if (error.code === "auth/invalid-email")
        message = "O e-mail digitado é inválido.";
      if (error.code === "auth/weak-password")
        message = "A senha é muito fraca.";

      Alert.alert("Erro no Cadastro", message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Link href={"/(auth)/login"}>
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
          <Input
            placeholder="Digite seu nome"
            type="text"
            value={name}
            onChangeText={setName}
          />
          <Input
            placeholder="Digite sua data de nascimento"
            type="date"
            value={birthDate}
            onChangeText={setBirthDate}
          />
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
          title={loading ? "Cadastrando..." : "Cadastrar"}
          onPress={handleSignup}
        />

        <Text style={styles.text}>
          Já possui uma conta?{" "}
          <Link href={"/(auth)/login"} style={styles.link}>
            Login
          </Link>
        </Text>
      </View>
    </View>
  );
};
